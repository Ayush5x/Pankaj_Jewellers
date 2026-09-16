import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'pankaj-wishlist';

export function WishlistProvider({ children }) {
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likedIds));
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [likedIds]);

  function isLiked(id) {
    return likedIds.includes(id);
  }

  function toggleLike(id) {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <WishlistContext.Provider value={{ likedIds, isLiked, toggleLike }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside WishlistProvider');
  return ctx;
}
