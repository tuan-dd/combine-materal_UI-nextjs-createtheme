import { useFormContext, Controller } from 'react-hook-form';
import { Switch, FormControlLabel } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FSwitch({ name, ...other }: PropsForm) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FSwitch;
