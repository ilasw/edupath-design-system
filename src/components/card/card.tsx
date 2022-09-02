import {ComponentProps, FC, PropsWithChildren} from "react";
import {Heading, HeadingProps} from "../../atoms/heading/heading";
import Button, {ButtonProps} from "../../atoms/button/button";

type CardProps = ComponentProps<'div'> & PropsWithChildren<{
  heading: HeadingProps,
  cta: ButtonProps
}>;

export const Card: FC<CardProps> = props => {
  const {
    children,
    className = '',
    ...attributes
  } = props;

  return <div className={`Card p-4 border border-neutral-300 rounded-xl ${className}`}
              {...attributes}>
    { props?.heading ? (<Heading {...props.heading} />) : null }
    { children ? <div className="content my-4">{children}</div> : null }
    { props?.cta ? (<div className={'text-right'}><Button {...props.cta} /></div>) : null }
  </div>
}