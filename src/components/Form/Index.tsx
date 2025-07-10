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

type Props = {
  onSubmit: (contact: Contact) => void;
};

const Form = ({ onSubmit }: Props) => {
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name" placeholder="Ingresa nombre">
          Nombre
        </Input>
        <Input name="lastname" placeholder="Ingresa apellido">
          Apellido
        </Input>
        <Input name="email" placeholder="Ingresa correo">
          Correo
        </Input>
        <Select
          name="type"
          label="Tipo"
          defaultMessage="-- Selecciona tipo --"
          options={contactTypeOptions}
        />
        <Button type="submit">Enviar</Button>
        <Button onClick={() => methods.reset()} variant="secondary">
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
};
export default Form;
