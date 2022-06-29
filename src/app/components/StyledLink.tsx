import {
  Box,
  Fade,
  Link,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface Props {
  href: string;
  text: string;
}

const LinkTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color:
      theme.palette.mode === 'light'
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
}));

export default function StyledLink({ href, text }: Props) {
  return (
    <Box>
      <LinkTooltip
        title={<LaunchIcon fontSize="small" sx={{ ml: -2 }} />}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 0 }}
        placement="right"
      >
        <Link target="_blank" href={href} underline="hover" color="inherit">
          {text}
        </Link>
      </LinkTooltip>
    </Box>
  );
}
