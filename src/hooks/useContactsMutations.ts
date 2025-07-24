import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Contact } from "../schemas/Contact";
import { toast } from "react-toastify";

const APIBASE = import.meta.env.VITE_API_URL;
export const useContactsMutations = () => {
  const queryClient = useQueryClient();

  const addContact = useMutation({
    mutationFn: async (contact: Contact) => {
      const newContact = { ...contact, id: Math.random().toString() };
      const res = await fetch(`${APIBASE}/contacts`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      if (!res.ok) throw new Error("No se pudo guardar el contacto");
      return newContact;
    },
    onSuccess: (newContact) => {
      // Actualiza la cache de la query "contacts"
      queryClient.setQueryData<Contact[]>(["contacts"], (old = []) => [
        ...old,
        newContact,
      ]);
      toast.success("✅ Contacto añadido");
    },
    onError: () => {
      toast.error("❌ Error al añadir contacto");
    },
  });

  const deleteContact = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${APIBASE}/contacts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("No se pudo eliminar contacto");
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Contact[]>(["contacts"], (old = []) =>
        old.filter((c) => c.id !== id)
      );
      toast.info("🗑️ Contacto eliminado");
    },
    onError: () => {
      toast.error("❌ Error al eliminar contacto");
    },
  });

  return { addContact, deleteContact };
};
