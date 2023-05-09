import { icons } from "./iconConfig";

type Props = {
  name: keyof typeof icons;
  color?: string;
  height?: string;
  width?: string;
  viewBox?: string;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({
  name,
  width,
  height,
  color = "currentColor",
  viewBox = "0 0 16 16",
  ...rest
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
