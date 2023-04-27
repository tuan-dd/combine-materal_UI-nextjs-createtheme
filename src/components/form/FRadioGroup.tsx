import { useFormContext, Controller } from 'react-hook-form';
import { Radio, RadioGroup, FormHelperText, FormControlLabel } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FRadioGroup({ name, options, getOptionLabel, ...other }: PropsForm) {
  const { control } = useFormContext();
  type Option = (typeof options)[0];
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <RadioGroup {...field} row {...other}>
            {options.map((option: Option, i) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={getOptionLabel?.length ? getOptionLabel[i] : option}
              />
            ))}
          </RadioGroup>
          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

export default FRadioGroup;
