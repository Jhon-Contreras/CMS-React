import { BsTrash } from "react-icons/bs";
import type { Contact } from "../../schemas/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function Table({ contacts, onClick }: Props) {
  return (
    <div className="table-responsive">
      <table className="table table-success table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col">Tipo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No hay contactos añadidos
              </td>
            </tr>
          ) : (
            contacts.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.lastname}</td>
                <td>{c.email}</td>
                <td>{c.type}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => c.id && onClick(c.id)}
                  >
                    <BsTrash className="mb-1" /> Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
