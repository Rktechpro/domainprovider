import "remixicon/fonts/remixicon.css";
import type { FC, ReactNode } from "react";

const ButtonModel = {
  theam: {
    primery:
      "bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded text-white font-semibold",
    success:
      "bg-green-400 hover:bg-green-500 px-6 py-2 rounded text-white font-semibold",
    danger:
      "bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white font-semibold",
    info: "bg-cyan-400 hover:bg-cyan-500 px-6 py-2 rounded text-white font-semibold ",
    warning:
      "bg-yellow-600 hover:bg-yellow-800 px-6 py-2 rounded text-white font-semibold ",
    dark: "bg-zinc-800 hover:bg-zinc-900 px-6 py-2 rounded text-white font-semibold ",
    Secondary:
      "bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded text-white font-semibold ",
  },
};
interface ButtonInterface {
  children?: ReactNode;
  type?:
    | "primery"
    | "success"
    | "danger"
    | "info"
    | "warning"
    | "dark"
    | "Secondary";
  onClick?: () => void;
  icon?: string;
  key?: string | number;
}
const Button: FC<ButtonInterface> = ({
  children = "Sumbit",
  type = "primery",
  onClick,
  icon,
  key = 0,
}) => {
  return (
    <button key={key} className={ButtonModel.theam[type]} onClick={onClick}>
      {icon && <i className={`ri-${icon} mr-1`}></i>}
      {children}
    </button>
  );
};

export default Button;
