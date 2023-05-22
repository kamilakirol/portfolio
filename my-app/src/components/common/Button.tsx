import { Link } from "react-scroll";

type Props = {
  text: string;
  className?: string | undefined;
  dataAos?: string;
  dataAosDelay?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, className, dataAos, dataAosDelay }: Props) => {
  return (
    <button
      className={`btn ${className}`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <Link to="/projects">{text}</Link>
    </button>
  );
};

export default Button;
