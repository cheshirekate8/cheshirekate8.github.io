interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-lg font-medium transition-all hover:scale-105";

  const variants = {
    primary:
      "bg-honolulu-blue hover:bg-marian-blue dark:bg-pacific-cyan dark:hover:bg-honolulu-blue text-white hover:shadow-lg",
    secondary:
      "bg-transparent border-2 border-honolulu-blue dark:border-pacific-cyan text-honolulu-blue dark:text-vivid-sky hover:bg-honolulu-blue/10 dark:hover:bg-pacific-cyan/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
