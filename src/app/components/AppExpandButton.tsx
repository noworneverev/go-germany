import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

interface Props {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function AppExpandButton({ expanded, setExpanded }: Props) {
  const { t } = useTranslation();
  return (
    <>
      {setExpanded && (
        <Button
          startIcon={
            expanded ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )
          }
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? t('collapse') : t('expand')}
        </Button>
      )}
    </>
  );
}
