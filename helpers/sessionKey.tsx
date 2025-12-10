export const getKey = (key: any) => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  } else {
    return false;
  }
};
export const accessToken = () => {
  return getKey("token");
};
export const refreshToken = () => {
  return getKey("refreshToken");
};

export const getSessionKey = (key: string) => {
  if (typeof window === "undefined") {
    return false;
  }
  if (sessionStorage.getItem(key)) {
    return sessionStorage.getItem(key);
  } else {
    return false;
  }
};

export const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const removeSessionKey = (key: string) => {
  sessionStorage.removeItem(key);
};
