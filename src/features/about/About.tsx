import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Container, Grid, Link, Stack } from "@mui/material";
import Jkopay from "../../static/jkopay.png";
import Paypal from "../../static/paypal.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <Container>
      <Stack spacing={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
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
            <Typography variant="h5" component="div" gutterBottom>
              {t("donate")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t("donate_message")}
            </Typography>
            <Grid container>
              <Grid item lg>
                <Stack direction="row">
                  <Box>
                    <Typography variant="h6">🎁 Paypal me</Typography>
                    <img src={Paypal} alt="paypal" width="75%" />
                  </Box>
                  <Box>
                    <Typography variant="h6">
                      🎁 街口支付 帳號：901578462
                    </Typography>
                    <img src={Jkopay} alt="jkopay" width="25%" />
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Link
              component={Button}
              underline="none"
              target="_blank"
              rel="noopener"
              href="https://paypal.me/yanyingliao?country.x=TW&locale.x=en_US"
            >
              Paypal me
            </Link>
            <Link
              component={Button}
              underline="none"
              target="_blank"
              rel="noopener"
              href="https://www.buymeacoffee.com/noworneverev"
            >
              Buy me a coffee
            </Link>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
