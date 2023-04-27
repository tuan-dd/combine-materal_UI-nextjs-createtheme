import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FCheckBox({ name, label, ...other }: PropsForm) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      label={label}
      {...other}
    />
  );
}

export default FCheckBox;
