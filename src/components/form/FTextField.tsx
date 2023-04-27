import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FTextField({ name, ...other }: PropsForm) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
export default FTextField;
