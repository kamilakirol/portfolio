import { Link } from "react-scroll";

type Props = {
  text: string;
  className?: string | undefined;
  dataAos?: string;
  dataAosDelay?: string;
};

const ButtonProjects = ({ text, className, dataAos, dataAosDelay }: Props) => {
  return (
    <button
      className={`buttonProjects ${className}`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <Link to="/projects">{text}</Link>
    </button>
  );
};

export default ButtonProjects;
