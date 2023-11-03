export const useRouter = () => {
  if (typeof window !== "undefined")
    return { pathname: window.location?.pathname || "/" };
  return { pathname: "/" };
};
