type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: any) => void;
  className?: string;
};

export const InputBox = ({
  type = "text",
  placeholder,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`form-input ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

type SelectProps = {
  onChange: (e: any) => void;
};

export const SelectBox = ({ onChange }: SelectProps) => {
  return (
    <select defaultValue="male" onChange={onChange} className="form-input">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

type CheckBoxProps = {
  onChange: (e: any) => void;
  className:String; 
};

export const CheckBox = ({ onChange }: CheckBoxProps) => {
  return (
    <input
      onChange={onChange}
      type="checkbox"
      className="border-primaryLight text-primaryLight focus:ring-primaryLight"
    />
  );
};

export const RoundedCheckBox=()=>{
      return(
        <input
        type="checkbox"
        className="border-primaryLight border-2 p-2 text-primaryLight focus:ring-primaryLight rounded-full"
    />
      )
}
