import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import {
  contactSchema,
  contactTypeOptions,
  type Contact,
} from "../../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

import { AiOutlineClear } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { toast } from "react-toastify";
type Props = {
  onSubmit: (contact: Contact) => void;
};

const Form = ({ onSubmit }: Props) => {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <FormProvider {...methods}>
      <form className="pt-4 mt-2" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input name="name" placeholder="Ingresa nombre">
              Nombre
            </Input>
          </div>
          <div className="col-md-6">
            <Input name="lastname" placeholder="Ingresa apellido">
              Apellido
            </Input>
          </div>
        </div>
        <Input name="email" placeholder="Ingresa correo">
          Correo
        </Input>
        <Select
          name="type"
          label="Tipo"
          defaultMessage="-- Selecciona tipo --"
          options={contactTypeOptions}
        />
        <Button type="submit">
          <BsSend className="me-1 mb-1" size={15} />
          Enviar
        </Button>
        <Button
          onClick={() => {
            methods.reset();
            toast.info("Formulario limpiado");
          }}
          variant="secondary"
        >
          <AiOutlineClear className="me-1 mb-1" />
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
};
export default Form;
