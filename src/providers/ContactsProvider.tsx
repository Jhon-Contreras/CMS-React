import { useEffect, useReducer } from "react";
import { contactsReducer, initialState } from "../reducers/contactReducer";
import { toast } from "react-toastify";
import type { Contact } from "../schemas/Contact";
import { ContactsContext } from "../context/ContactContext";

const APIBASE = import.meta.env.VITE_API_URL;

type Props = {
  children: React.ReactNode;
};
export const ContactsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  const fetchContacts = async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const res = await fetch(`${APIBASE}/contacts`);
      if (!res.ok) throw new Error("Error cargando contactos");
      const data = await res.json();

      dispatch({ type: "SUCCESS", payload: data });
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        error: err.message || "Error desconocido",
      });
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact: Contact) => {
    dispatch({ type: "CLEAR_ERROR" }); //reset error state
    try {
      const newContact = {
        ...contact,
        id: Math.random().toString(),
      };
      const res = await fetch(`${APIBASE}/contacts`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (!res.ok) throw new Error("No se pudo guardar el contacto");
      toast.success("Contacto añadido");

      dispatch({ type: "ADD_CONTACT", payload: newContact });
    } catch (err: any) {
      dispatch({
        type: "FETCH_ERROR",
        error: err.message || "Error desconocido",
      });
      toast.error("❌ Error al añadir contacto");
    }
  };

  const deleteContact = async (id: string) => {
    dispatch({ type: "CLEAR_ERROR" });

    try {
      const res = await fetch(`${APIBASE}/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("No se pudo eliminar contacto");
      toast.info("🗑️ Contacto eliminado");

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (err: any) {
      toast.error("Error al eliminar contacto");
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        error: state.error,
        addContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
