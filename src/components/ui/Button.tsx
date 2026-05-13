import { cn } from "../../data/styles";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  onClick?: () => void;
  href?: never;
  download?: never;
  target?: never;
  rel?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "a";
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105";

  const variants = {
    primary:
      "bg-honolulu-blue hover:bg-marian-blue dark:bg-pacific-cyan dark:hover:bg-honolulu-blue text-white hover:shadow-lg",
    secondary:
      "bg-transparent border-2 border-honolulu-blue dark:border-pacific-cyan text-honolulu-blue dark:text-vivid-sky hover:bg-honolulu-blue/10 dark:hover:bg-pacific-cyan/10",
    ghost:
      "bg-vivid-sky/50 dark:bg-federal-blue/50 text-marian-blue dark:text-light-cyan border border-pacific-cyan/30 dark:border-vivid-sky/30 hover:shadow-lg",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (props.as === "a") {
    const { as: _, ...linkProps } = props;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { as: _, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
