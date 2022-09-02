import {ComponentProps, FC, PropsWithChildren} from "react";
import {useForm, FormProvider, FieldValues, SubmitHandler} from "react-hook-form";
import Button from "../../atoms/button/button";

type FormProps = ComponentProps<'form'> & PropsWithChildren<{
  submitted: SubmitHandler<FieldValues>;
}>;

export const Form: FC<FormProps> = props => {
  const {children, submitted, ...attributes} = props;
  const methods = useForm();

  return (
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(submitted)}
              {...attributes}>
          <div className="fields">{children}</div>
          <div className={'my-4'}><Button type={'submit'}>Invia form</Button></div>
        </form>
      </FormProvider>
  );
}