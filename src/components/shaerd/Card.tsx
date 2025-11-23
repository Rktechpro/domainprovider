import type { FC, ReactElement, ReactNode } from "react";
import "remixicon/fonts/remixicon.css";

interface CardInterface {
  children?: ReactElement | ReactNode;
  title?: ReactNode;
  footer?: ReactElement;
  divider?: boolean;
  key?: string | number;
  noPedding?: boolean;
  image?: string;
}

const Card: FC<CardInterface> = ({
  key = 0,
  children,
  title,
  footer,
  image,
  divider = false,
  noPedding = false,
}) => {
  return (
    <div
      key={key}
      className={`border border-slate-200 bg-white overflow-hidden${
        noPedding ? " " : "px-5"
      }  space-y-2 bg-white`}
    >
      {image && <img src={image} alt="image" className="w-full object-cover" />}
      {title && <h1 className="text-xl font-semibold capitalize">{title}</h1>}
      {divider && <div className="border-b border-b-gray-100 -mx-5 my-4 " />}
      {children && <label className="text-gray-500">{children}</label>}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
