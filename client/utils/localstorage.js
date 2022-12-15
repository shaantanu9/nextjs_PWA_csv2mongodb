// get LocalStorage

export const getLocalStorage = (key = "") => {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem(key);
    return value ? value : null;
  }
};

// Set LocalStorage

export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    window.localStorage
      ? window.localStorage.setItem
      : window.localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove LocalStorage

export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};
