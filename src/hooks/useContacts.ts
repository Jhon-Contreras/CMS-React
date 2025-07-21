import { useContext } from "react";
import { ContactsContext } from "../context/ContactContext";

const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context)
    throw new Error("useContacts debe usarse dentro de un ContactsProvider");
  return context;
};

export default useContacts;
