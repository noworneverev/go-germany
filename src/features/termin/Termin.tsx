import { Container, Divider, Link, Typography } from "@mui/material";
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
      <Typography gutterBottom>{t("linebot_description")}</Typography>
      <img src={LinePreview} width="287" alt="preview of notification" />

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
      </Typography>
      <Typography>{t("password")}：termin</Typography>

      <img src={LineGroup} width="230" alt="Line group invitation link" />
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
