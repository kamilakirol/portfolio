type Props = {
  text: string;
  className?: string | undefined;
  link?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonProjects = ({ text, className, link, type }: Props) => {
  return (
    <button className={`buttonProjects ${className}`} type={type}>
      <a href={link} className="buttonProjects_link">
        {text}
      </a>
    </button>
  );
};

export default ButtonProjects;
