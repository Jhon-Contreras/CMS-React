import { createContext, useContext } from "react";
import type { Contact } from "../schemas/Contact";

type ContactsContextType = {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  addContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
};

export const ContactsContext = createContext<ContactsContextType>(
  {} as ContactsContextType
);

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts debe usarse dentro de un ContactsProvider");
  }
  return context;
};
