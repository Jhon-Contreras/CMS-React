import { type ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children: ReactNode;
  placeholder: string;
};

function Input({ name, children, placeholder }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label text-white">
        {children}
      </label>
      <input
        {...register(name)}
        type="text"
        className="form-control text-white border-0"
        id={name}
        placeholder={placeholder}
      />
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
}

export default Input;
