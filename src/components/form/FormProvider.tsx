import { FormProvider as RHFormProvider, FormProviderProps } from 'react-hook-form';

interface Props extends FormProviderProps<any, any> {
  onSubmit: (data: any) => void;
}

export default function FormProvider({ children, onSubmit, ...methods }: Props) {
  // const { children, onSubmit, ...methods } = props;

  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit}> {children}</form>
    </RHFormProvider>
  );
}
