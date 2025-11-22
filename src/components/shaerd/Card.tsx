import type { FC, ReactElement, ReactNode } from "react";
import "remixicon/fonts/remixicon.css";
import "animate.css";

interface CardInterface {
  children?: ReactElement | ReactNode
  title?: ReactNode
  footer?: ReactElement
  divider?: boolean
  key?:string | number
  noPedding:boolean
}

const Card: FC<CardInterface> = ({
  key=0,
  children,
  title,
  footer,
  divider = false,
  noPedding=false
}) => {
  return (
    <div key={key} className={`shadow-lg rounded-xl border border-gray-100 ${noPedding ?" ":"px-5 py-4"}  space-y-2 bg-white`}>
      {title && <h1 className="text-xl font-semibold capitalize">{title}</h1>}
      {divider && <div className="border-b border-b-gray-100 -mx-5 my-4 " />}
      {children && <label className="text-gray-500">{children}</label>}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
