import { ChangeEventHandler } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  formRef: any;
  autocomplete: string;
  onchange: ChangeEventHandler;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="block w-full p-3 mt-2 bg-gray-100 bg-opacity-20 appearance-none focus:outline-none focus:shadow-inner placeholder-current"
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      ref={props.formRef}
      autoComplete={props.autocomplete}
      onChange={props.onchange}
    />
  );
}
