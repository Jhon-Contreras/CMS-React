import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

const Select = ({ options, defaultMessage, label, name }: Props) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
        aria-label="Default select example"
      >
        <option className="optionListItem">{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o} className="optionListItem">
            {o}
          </option>
        ))}
      </select>
      {error?.message && <div className="text-danger">{error?.message}</div>}
    </div>
  );
};

export default Select;
