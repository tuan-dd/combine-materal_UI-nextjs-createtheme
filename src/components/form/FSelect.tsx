import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FSelect({ name, children, ...other }: PropsForm) {
  const { control } = useFormContext();

  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        select
        fullWidth
        SelectProps={{ native: true }}
        error={!!error}
        helperText={error?.message}
        {...other}
      >
        {children}
      </TextField>
    )}
  />;
}

export default FSelect;
