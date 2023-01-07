import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid, Link, Stack } from "@mui/material";
import Jkopay from "../../static/jkopay_qrcode.png";
import Paypal from "../../static/paypal.png";
import { useTranslation } from "react-i18next";
import Star from "./Star";
import LoadingComponent from "../../app/layout/LoadingComponent";
import DonationQrcode from "../donate/DonationQrcode";
import InvitationLinks from "../donate/InvitationLinks";

export default function About() {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <LoadingComponent disableShrink message={t("loading")} />;

  return (
    <Container>
      <Stack spacing={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {t("aboutme")}
            </Typography>
            <Typography variant="body1">{t("bio")}</Typography>
          </CardContent>
          <CardActions>
            <Link
              component={Button}
              underline="none"
              target="_blank"
              rel="noopener"
              href="https://noworneverev.github.io/"
            >
              {t("learnmore")}
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Star />
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {t("donate")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("donate_message")}
            </Typography>

            <DonationQrcode />
            <Typography variant="h5" gutterBottom>
              {t("invitation")}
            </Typography>
            <InvitationLinks />
            <Typography>{t("thank_you_message")}</Typography>
          </CardContent>

          <CardActions>
            <Link
              component={Button}
              underline="none"
              target="_blank"
              rel="noopener"
              href="https://paypal.me/yanyingliao"
            >
              Paypal me
            </Link>
            <Link
              component={Button}
              underline="none"
              target="_blank"
              rel="noopener"
              href="https://ko-fi.com/yanying"
            >
              Buy me a coffee
            </Link>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
