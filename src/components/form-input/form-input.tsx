import {ComponentProps, FC} from "react";
import {useFormContext} from "react-hook-form";

export type FormInputProps = ComponentProps<'input'> & {
  name: string,
};

export const FormInput: FC<FormInputProps> = props => {
  const {className = '', name, ...attributes} = props;
  const { register } = useFormContext();

  return <div className={`block my-1 ${className}`}>
    <input type="text"
           className={'border inline-block px-4 py-2 text-sm'}
           {...register(name)}
           {...attributes} />
  </div>
}