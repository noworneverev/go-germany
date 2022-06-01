import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import {
  FieldValues,
  useController,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
