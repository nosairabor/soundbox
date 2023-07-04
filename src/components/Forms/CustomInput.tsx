import { useField } from 'formik';

interface CustomInputProps {
  label: string;
  name: string;
  placeholder?: string;
  inputClassName?:string,
  
}

const CustomInput:React.FC<CustomInputProps> = ({label, inputClassName, placeholder, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...field}
        {...props}
        className={inputClassName}
      />
      {meta.touched && meta.error && (
        <div className="text-red text-[11px]">{meta.error}</div>
      )}
    </div>
  );
}
 
export default CustomInput;