"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("scroll", onStoreChange, { passive: true });

  return () => window.removeEventListener("scroll", onStoreChange);
};

const getSnapshot = () => window.scrollY > 0;

const getServerSnapshot = () => false;

export const useScrolled = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
