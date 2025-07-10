import { useState, useEffect } from "react";
import Form from "../components/Form/Index";
import Table from "../components/Table/Index";
import type { Contact } from "../schemas/Contact";
import { toast } from "react-toastify";

const APIBASE = import.meta.env.VITE_API_URL;

const CMS = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${APIBASE}/contacts`);
      if (!res.ok) throw new Error("Error cargando contactos");
      const data = await res.json();

      setContacts(data);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact: Contact) => {
    setError(null);
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

      fetchContacts();
    } catch (err: any) {
      setError(err.message || "Error desconocido");
      toast.error("❌ Error al añadir contacto");
    }
  };
  /** Borrar contacto */

  const deleteContact = async (id: string) => {
    setError(null);

    try {
      const res = await fetch(`${APIBASE}/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("No se pudo eliminar contacto");
      toast.info("🗑️ Contacto eliminado");

      fetchContacts(); //refresca la lista
    } catch (err: any) {
      toast.error("Error al eliminar contacto");
    }
  };
  /*
  const deleteContact = (id: string) =>
    setContacts(contacts.filter((c) => c.id != id));*/
  return (
    <div className="container-fluid bg-container-fluid-custom pt-5">
      <div className="container bg-container-custom">
        <h1 className="text-center text-white fw-light fs-3">
          Contact manager system
        </h1>
        {loading && <p className="text-white"> Cargando contactos...</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="row">
          <Form onSubmit={addContact}></Form>
        </div>
        <div className="row mt-5">
          <Table contacts={contacts} onClick={deleteContact}></Table>
        </div>
      </div>
    </div>
  );
};

export default CMS;
