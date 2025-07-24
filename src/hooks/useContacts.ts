import { useQuery } from "@tanstack/react-query";
import type { Contact } from "../schemas/Contact";

const APIBASE = import.meta.env.VITE_API_URL;

export function useContacts() {
  return useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await fetch(`${APIBASE}/contacts`);
      if (!res.ok) throw new Error("Error cargando contactos");
      return res.json();
    },

    staleTime: 5 * 60 * 1000, // 5 min
  });
}
