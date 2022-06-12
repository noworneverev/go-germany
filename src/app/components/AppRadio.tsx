import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

interface Props extends UseControllerProps {
  label: string;
  disabled?: boolean;
}

export default function AppRadio(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: '' });
  return (
    <FormControl disabled={props.disabled}>
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup row {...field}>
        <FormControlLabel value="true" control={<Radio />} label="True" />
        <FormControlLabel value="false" control={<Radio />} label="False" />
      </RadioGroup>
    </FormControl>
  );
}
