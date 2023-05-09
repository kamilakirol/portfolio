type Props = {
  text: string;
  className?: string | undefined;
};

const Button = ({ text, className }: Props) => {
  return <button className={`btn ${className}`}>{text}</button>;
};

export default Button;
