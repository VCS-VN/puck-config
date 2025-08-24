export const detectFramework = () => {
  if (typeof import.meta !== "undefined" && (import.meta as any).hot) {
    return "vite";
  }

  return "next";
};
