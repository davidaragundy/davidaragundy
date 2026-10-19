"use client";

import { useSyncExternalStore } from "react";

export type PostView = "grid" | "timeline";

const STORAGE_KEY = "blog-view";

const listeners = new Set<() => void>();

const subscribe = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
};

const getSnapshot = (): PostView => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "timeline"
      ? "timeline"
      : "grid";
  } catch {
    return "grid";
  }
};

const getServerSnapshot = (): PostView => "grid";

export const usePostView = () => {
  const view = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setView = (next: PostView) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // A private window can refuse storage; the choice just will not persist.
    }

    for (const listener of listeners) listener();
  };

  return [view, setView] as const;
};
