export function setStorage(name, data) {
  if (typeof data === "string") {
    localStorage.setItem(name, data);
  } else {
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(name, stringifyData);
  }
}

export const getStorage = (name) => {
  if (typeof window === "undefined") {
    return;
  }
  const item = localStorage.getItem(name);
  return JSON.parse(item);
};

export const removeStorage = (name) => {
  localStorage.removeItem(name);
};

export const removeAllFromStorage = () => {
  localStorage.clear();
};
