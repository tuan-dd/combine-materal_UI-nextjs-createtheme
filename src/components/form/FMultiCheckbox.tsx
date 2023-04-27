/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { PropsForm } from '@/utils/interfaceUtil';

function FMultiCheckbox({ name, label, options, ...other }: PropsForm) {
  const { control } = useFormContext();
  type Option = (typeof options)[number];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        // field.value is option[] filter value no checked , if choose add again to field.value
        const onSelected = (selectedOption: Option) =>
          field.value.includes(selectedOption)
            ? field.value.filter((value: Option) => value !== selectedOption)
            : [...field.value, selectedOption];

        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={field.value.includes(option)}
                    onChange={() => onSelected(option)}
                  />
                }
                label={option}
                {...other}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}

export default FMultiCheckbox;
