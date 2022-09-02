import {ComponentProps, FC, PropsWithChildren} from "react";

type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = ComponentProps<'button'> & PropsWithChildren<{
  variant?: ButtonVariant;
}>

export const Button: FC<ButtonProps> = (props) => {
  const { variant, className = '', children, ...attributes } = props;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-900 text-white',
    secondary: 'bg-neutral-900 text-white',
    danger: 'bg-red-900 text-white',
  };

  return <button className={`inline-block font-lg py-2 px-4 rounded-xl border-0 shadow-none ${variantClasses[variant ?? 'primary']} ${className}`}
                 {...attributes}>{children ?? 'Button'}</button>;
}

export default Button;