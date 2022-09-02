import {ComponentProps, FC, PropsWithChildren} from "react";

type HeadingAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = ComponentProps<'h1'> & PropsWithChildren<{
  as?: HeadingAs
}>;

export const Heading: FC<HeadingProps> = (props) => {
  const {children, as = 'h2', className = '', ...attributes} = props;
  const Element = as;

  const variantClasses: Record<HeadingAs, string> = {
    h1: 'text-6xl',
    h2: 'text-5xl',
    h3: 'text-4xl',
    h4: 'text-3xl',
    h5: 'text-2xl',
    h6: 'text-xl',
  }

  return <Element className={`${variantClasses[as]} ${className}`}
                  {...attributes}>{children}</Element>;
}