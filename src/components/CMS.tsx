import Form from "../components/Form/Index";
import Table from "../components/Table/Index";
import useContacts from "../hooks/useContacts";

const CMS = () => {
  const { contacts, loading, error, addContact, deleteContact } = useContacts();
  return (
    <div className="container-fluid bg-container-fluid-custom pt-5">
      <div className="container bg-container-custom">
        <h1 className="text-center text-white fw-light fs-3 display-6 text-uppercase">
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
