import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: '#f5f5f9',
    backgroundColor:
      theme.palette.mode === 'light' ? '#f5f5f9' : theme.palette.primary,
    // color: 'rgba(0, 0, 0, 0.87)',
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.87)'
        : theme.palette.text.primary,
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    border:
      theme.palette.mode === 'light'
        ? '1px solid #dadde9'
        : '1px solid #0000007F',
  },
}));
