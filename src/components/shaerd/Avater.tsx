import type { FC, ReactNode } from "react";

interface AvaterInterFace {
  title?: string;
  subtitle?: ReactNode;
  image?: string;
  titleColor?: string;
  subtitleColor?: string;
  size?: "lg" | "md";
  key?: string | number;
  onClick?: () => void;
}
const Avater: FC<AvaterInterFace> = ({
  onClick,
  key = 0,
  size = "lg",
  title,
  subtitle = "SubTitle",
  image,
  titleColor = "#00000",
  subtitleColor = "#F7D0F3",
}) => {
  return (
    <div key={key} className="flex gap-3 items-center">
      {image && (
        <img
          onClick={onClick}
          src={image}
          className={`${
            size === "lg" ? "h-12 w-12" : "w-9 h-9"
          } object-cover border rounded-full`}
        />
      )}
      {title && subtitle && (
        <div className="flex flex-col">
          <h1
            className={`${
              size === "lg" ? "text-lg/6 " : " text-sm"
            } font-medium capitalize `}
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <div
            className=" object-cover text-sm"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </div>
        </div>
      )}
    </div>
  );
};

export default Avater;
