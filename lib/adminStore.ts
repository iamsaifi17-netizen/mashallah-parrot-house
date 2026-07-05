"use client";

import { useEffect, useState } from "react";
import { Parrot, parrots as seedParrots, reviews as seedReviews } from "./data";

// A lightweight, dependency-free "admin" persistence layer using the browser's
// localStorage. This lets the owner add/edit/delete birds and reviews from the
// /admin page and see changes reflected immediately — no server required for
// a first launch. It is PER-BROWSER, not shared across devices or visitors.
// See README.md -> "Making the admin dashboard live for everyone" for how to
// upgrade this to a real shared database later.

const PARROTS_KEY = "mph_parrots_v1";
const REVIEWS_KEY = "mph_reviews_v1";

export type Review = (typeof seedReviews)[number];

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function useParrotStore() {
  const [items, setItems] = useState<Parrot[]>(seedParrots);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(readStorage(PARROTS_KEY, seedParrots));
    setLoaded(true);
  }, []);

  function persist(next: Parrot[]) {
    setItems(next);
    writeStorage(PARROTS_KEY, next);
  }

  function addParrot(p: Parrot) {
    persist([p, ...items]);
  }
  function updateParrot(slug: string, patch: Partial<Parrot>) {
    persist(items.map((p) => (p.slug === slug ? { ...p, ...patch } : p)));
  }
  function deleteParrot(slug: string) {
    persist(items.filter((p) => p.slug !== slug));
  }
  function resetToDefaults() {
    persist(seedParrots);
  }

  return { items, loaded, addParrot, updateParrot, deleteParrot, resetToDefaults };
}

export function useReviewStore() {
  const [items, setItems] = useState<Review[]>(seedReviews);

  useEffect(() => {
    setItems(readStorage(REVIEWS_KEY, seedReviews));
  }, []);

  function persist(next: Review[]) {
    setItems(next);
    writeStorage(REVIEWS_KEY, next);
  }

  function addReview(r: Review) {
    persist([r, ...items]);
  }
  function deleteReview(index: number) {
    persist(items.filter((_, i) => i !== index));
  }

  return { items, addReview, deleteReview };
}
