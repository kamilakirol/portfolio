type Props = {
  text: string;
  className?: string | undefined;
  dataAos?: string;
  dataAosDelay?: string;
  link: string;
};

const ButtonProjects = ({
  text,
  className,
  dataAos,
  dataAosDelay,
  link,
}: Props) => {
  return (
    <button
      className={`buttonProjects ${className}`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <a href={link} className="buttonProjects_link">
        {text}
      </a>
    </button>
  );
};

export default ButtonProjects;
