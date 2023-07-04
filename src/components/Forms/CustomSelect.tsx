import { useField } from "formik";

interface Option{
  value: string;
  label: string;
}

interface CustomSelectProps {
    label: string;
    name: string;
    options:Option[];
    inputClassName?:string
  }

  const CustomSelect = ({label, name, inputClassName, options, }:CustomSelectProps) => {
    const [field, meta, helpers] = useField(name);

    return (
        <div>
          <label htmlFor={name}>{label}</label>
          <select
            id={name}
            name={name}
            value={field.value}
            onChange={e => helpers.setValue(e.target.value)}
            onBlur={field.onBlur}
            className={inputClassName}

          >
            {options.map(({value, label}) => (
              <option key={value} value={value}>
                {label}
              </option>
            
            ))}
          </select>
          {meta.touched && meta.error && (
            <div className="text-red text-[11px]">{meta.error}</div>
          )}
        </div>
    );
}
 
export default CustomSelect; 