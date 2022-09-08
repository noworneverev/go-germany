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

            <Grid container>
              <Grid item lg>
                <Stack direction={{ xs: "column", sm: "row" }}>
                  <Box>
                    <Typography variant="h6">🎁 Paypal me</Typography>
                    <img src={Paypal} alt="paypal" width="60%" />
                  </Box>
                  <Box>
                    <Typography variant="h6">
                      🎁 街口支付 帳號：901578462
                    </Typography>

                    <Box sx={{ py: 1 }}>
                      <img src={Jkopay} alt="jkopay" width="65%" />
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Typography variant="h5" gutterBottom>
              {t("invitation")}
            </Typography>
            <Box>
              <ul>
                <li>
                  Coracle Prime:{" "}
                  <Link
                    href="https://www.coracle.de/?ref=yanyingliao"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    https://www.coracle.de/?ref=yanyingliao
                  </Link>
                </li>
                <li>
                  Revolut:{" "}
                  <Link
                    href="https://revolut.com/referral/yanyinahaj!SEP1-22-VR-DE"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    https://reurl.cc/O4R4m7
                  </Link>
                </li>

                <li>
                  Wise:{" "}
                  <Link
                    href="https://wise.com/invite/u/yanyingl14"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    https://reurl.cc/ZblbNl
                  </Link>
                </li>
              </ul>
            </Box>

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
