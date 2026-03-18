"use client";

import { useEffect, useState, type DependencyList } from "react";

export function useAsyncResource<T>(
  loader: () => Promise<T>,
  dependencies: DependencyList
) {
  const [reloadKey, setReloadKey] = useState(0);
  const [state, setState] = useState({
    data: null as T | null,
    error: null as string | null,
    isLoading: true,
    reload() {
      setReloadKey((currentValue) => currentValue + 1);
    }
  });

  useEffect(() => {
    let active = true;

    setState((currentState) => ({
      data: null,
      error: null,
      isLoading: true,
      reload: currentState.reload
    }));

    loader()
      .then((data) => {
        if (!active) {
          return;
        }

        setState((currentState) => ({
          data,
          error: null,
          isLoading: false,
          reload: currentState.reload
        }));
      })
      .catch((error: unknown) => {
        if (!active) {
          return;
        }

        setState((currentState) => ({
          data: null,
          error: error instanceof Error ? error.message : "No fue posible cargar este panel.",
          isLoading: false,
          reload: currentState.reload
        }));
      });

    return () => {
      active = false;
    };
  }, [reloadKey, ...dependencies]);

  return state;
}
