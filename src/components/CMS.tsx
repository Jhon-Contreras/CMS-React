import Form from "../components/Form/Index";
import Table from "../components/Table/Index";
import { useContacts } from "../hooks/useContacts";
import { useContactsMutations } from "../hooks/useContactsMutations";

const CMS = () => {
  const { data: contacts = [], isLoading, error } = useContacts();
  const { addContact, deleteContact } = useContactsMutations();
  return (
    <div className="container-fluid bg-container-fluid-custom pt-5">
      <div className="container bg-container-custom">
        <h1 className="text-center text-white fw-light fs-3 display-6 text-uppercase">
          Contact manager system
        </h1>
        {isLoading && <p className="text-white"> Cargando contactos...</p>}
        {error && <p className="text-danger">Error al cargar contactos</p>}
        <div className="row">
          <Form onSubmit={(contact) => addContact.mutate(contact)}></Form>
        </div>
        <div className="row mt-5">
          <Table
            contacts={contacts}
            onClick={(id) => deleteContact.mutate(id)}
          ></Table>
        </div>
      </div>
    </div>
  );
};
export default CMS;
