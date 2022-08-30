import {
  Alert,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LinePreview from "../../static/termin.png";
import LineGroup from "../../static/line.jpg";

export default function Termin() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t("termin")} | Go Germany`;
  }, [t]);

  return (
    <Container>
      <Typography variant="h4">LINE Bot</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography gutterBottom>
        德國簽證自動通知群組，有新名額釋出會自動發送訊息通知，通知機器人每年5~9月24小時運行，通知6~8月及9/1~9/7是否有預約名額。
      </Typography>
      <img src={LinePreview} width="287" />

      <Typography variant="h4" mt={3}>
        {t("line")}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography>
        <Link
          href="https://reurl.cc/MNZlrk"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/MNZlrk
        </Link>{" "}
        密碼termin
      </Typography>
      <img src={LineGroup} width="230" />
      <Typography variant="h4" mt={3}>
        Github
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography>
        <Link
          href="https://github.com/noworneverev/visa-termin-alert"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://github.com/noworneverev/visa-termin-alert
        </Link>
      </Typography>
    </Container>
  );
}
