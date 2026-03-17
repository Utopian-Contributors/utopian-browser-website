import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} | Utopian Browser` : "Utopian Browser";
    return () => { document.title = prev; };
  }, [title]);
}
