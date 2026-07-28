"use client";

import { useEffect, useState, type DependencyList } from "react";

interface AsyncResourceState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  reload(): void;
}

export function useAsyncResource<T>(
  loader: () => Promise<T>,
  dependencies: DependencyList
): AsyncResourceState<T> {
  const [reloadKey, setReloadKey] = useState(0);
  const [state, setState] = useState<AsyncResourceState<T>>({
    data: null,
    error: null,
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

        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setState((currentState) => ({
          data: null,
          error:
            error instanceof Error
              ? error.message
              : "No fue posible cargar la información solicitada.",
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
