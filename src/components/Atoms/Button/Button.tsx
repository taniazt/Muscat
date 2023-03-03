import './Button.scss';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'primary' | 'secondary';

export const Button = ({
  text,
  type = 'button',
  onClick,
  variant,
  ...rest
}: {
  text: string;
  type?: ButtonType;
  onClick?: () => unknown;
  variant: ButtonVariant;
}) => {
  return (
    <button
      className={`button button-${variant}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};
