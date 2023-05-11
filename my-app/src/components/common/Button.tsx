import { Link } from "react-scroll";

type Props = {
  text: string;
  className?: string | undefined;
};

const Button = ({ text, className }: Props) => {
  return (
    <button className={`btn ${className}`}>
      <Link to="/projects">{text}</Link>
    </button>
  );
};

export default Button;
