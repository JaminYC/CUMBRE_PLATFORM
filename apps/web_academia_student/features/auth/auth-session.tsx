"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";
import {
  fetchCurrentStudentSession,
  logoutStudentSession
} from "@/services/client/student-api";
import { studentAppConfig } from "@/lib/env";

export interface StudentSession {
  userId: string;
  displayName: string;
  email?: string;
  primaryRole: string;
  roles: string[];
  scopes?: string[];
  expiresAt: string;
  refreshExpiresAt: string;
  defaultLearningPathId: string;
  lastVisitedPath?: string;
  lastTopicId?: string;
  lastLessonId?: string;
  activeLearningSessionId?: string;
  tutorSessionByLesson?: Record<string, string>;
  lastActiveAt?: string;
}

export interface AuthSessionContextValue {
  session: StudentSession | null;
  isHydrated: boolean;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  patchSession(patch: Partial<StudentSession>): void;
  rememberRoute(path: string): void;
}

type StudentPreferences = Pick<
  StudentSession,
  | "defaultLearningPathId"
  | "lastVisitedPath"
  | "lastTopicId"
  | "lastLessonId"
  | "activeLearningSessionId"
  | "tutorSessionByLesson"
  | "lastActiveAt"
>;

const storageKey = "bryce.webStudent.preferences";
const storageVersion = 2;

const AuthSessionContext = createContext<AuthSessionContextValue | null>(null);

function buildPersistedPayload(preferences: StudentPreferences) {
  return JSON.stringify({
    version: storageVersion,
    session: preferences
  });
}

function parseStoredPreferences(rawValue: string | null) {
  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(rawValue) as
      | {
          version?: number;
          session?: StudentPreferences;
        }
      | StudentPreferences;

    if (parsedValue && typeof parsedValue === "object" && "session" in parsedValue && parsedValue.session) {
      return parsedValue.session;
    }

    return parsedValue as StudentPreferences;
  } catch {
    return null;
  }
}

export function AuthSessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<StudentSession | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  function persistPreferences(nextSession: StudentSession | null) {
    if (!nextSession) {
      window.localStorage.removeItem(storageKey);
      return;
    }

    const preferences: StudentPreferences = {
      defaultLearningPathId: nextSession.defaultLearningPathId,
      lastVisitedPath: nextSession.lastVisitedPath,
      lastTopicId: nextSession.lastTopicId,
      lastLessonId: nextSession.lastLessonId,
      activeLearningSessionId: nextSession.activeLearningSessionId,
      tutorSessionByLesson: nextSession.tutorSessionByLesson,
      lastActiveAt: nextSession.lastActiveAt
    };

    window.localStorage.setItem(storageKey, buildPersistedPayload(preferences));
  }

  function applySessionFromServer(
    serverSession: Awaited<ReturnType<typeof fetchCurrentStudentSession>>["session"],
    preferences?: StudentPreferences | null
  ) {
    const nextSession: StudentSession = {
      userId: serverSession.userId,
      displayName: serverSession.displayName,
      email: serverSession.email,
      primaryRole: serverSession.primaryRole,
      roles: serverSession.roles,
      scopes: serverSession.scopes,
      expiresAt: serverSession.expiresAt,
      refreshExpiresAt: serverSession.refreshExpiresAt,
      defaultLearningPathId:
        serverSession.defaultLearningPathId ??
        preferences?.defaultLearningPathId ??
        studentAppConfig.defaultLearningPathId,
      lastVisitedPath: preferences?.lastVisitedPath ?? "/dashboard",
      lastTopicId: preferences?.lastTopicId,
      lastLessonId: preferences?.lastLessonId,
      activeLearningSessionId: preferences?.activeLearningSessionId,
      tutorSessionByLesson: preferences?.tutorSessionByLesson,
      lastActiveAt: new Date().toISOString()
    };

    setSession(nextSession);
    persistPreferences(nextSession);
  }

  useEffect(() => {
    const storedPreferences = parseStoredPreferences(
      window.localStorage.getItem(storageKey)
    );

    fetchCurrentStudentSession()
      .then((response) => {
        applySessionFromServer(response.session, storedPreferences);
      })
      .catch(() => {
        setSession(null);
        window.localStorage.removeItem(storageKey);
      })
      .finally(() => {
        setIsHydrated(true);
      });
  }, []);

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== storageKey || !session) {
        return;
      }

      const preferences = parseStoredPreferences(event.newValue);

      if (!preferences) {
        return;
      }

      setSession({
        ...session,
        ...preferences
      });
    }

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [session]);

  const value: AuthSessionContextValue = {
    session,
    isHydrated,
    async signIn() {
      const storedPreferences = parseStoredPreferences(
        window.localStorage.getItem(storageKey)
      );
      const response = await fetchCurrentStudentSession();
      applySessionFromServer(response.session, storedPreferences);
    },
    async signOut() {
      await logoutStudentSession();
      setSession(null);
      persistPreferences(null);
    },
    patchSession(patch) {
      if (!session) {
        return;
      }

      const nextSession = {
        ...session,
        ...patch,
        lastActiveAt: new Date().toISOString()
      };

      setSession(nextSession);
      persistPreferences(nextSession);
    },
    rememberRoute(path) {
      if (!session || !path || path === "/login") {
        return;
      }

      const nextSession = {
        ...session,
        lastVisitedPath: path,
        lastActiveAt: new Date().toISOString()
      };

      setSession(nextSession);
      persistPreferences(nextSession);
    }
  };

  return (
    <AuthSessionContext.Provider value={value}>
      {children}
    </AuthSessionContext.Provider>
  );
}

export function useAuthSession() {
  const context = useContext(AuthSessionContext);

  if (!context) {
    throw new Error("useAuthSession must be used within AuthSessionProvider.");
  }

  return context;
}
