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
      "bg-royal hover:bg-navy dark:bg-purple dark:hover:bg-royal text-white hover:shadow-lg",
    secondary:
      "bg-transparent border-2 border-royal dark:border-purple text-royal dark:text-lavender hover:bg-royal/10 dark:hover:bg-purple/10",
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
