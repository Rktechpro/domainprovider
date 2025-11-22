import type { FC } from "react";

interface InputInterface {
  name?: string;
  placeholder?: string;
  type: string;
  key?:string | number
}
const Input: FC<InputInterface> = ({ name, placeholder, type = "text",key=0 }) => {
  return (
    <input
    key={key}
      type={type}
      className="border border-gray-300 px-3 py-2 rounded w-full"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
