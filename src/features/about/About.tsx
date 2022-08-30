import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Container, Grid, Link, Stack } from "@mui/material";
import Jkopay from "../../static/jkopay_qrcode.png";
import Paypal from "../../static/paypal.png";
import { useTranslation } from "react-i18next";
import GitHubButton from "react-github-btn";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const { t } = useTranslation();
  const theme = useTheme();
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
              Star Go Germany / VISA Termin Alert
            </Typography>
            <Typography variant="body1">{t("star")}</Typography>
            <ul>
              <li>
                Go Germany
                <ul>
                  <li>
                    go-germany：
                    {theme.palette.mode === "dark" ? (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany"
                        data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: light_high_contrast;"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany on GitHub"
                      >
                        Star
                      </GitHubButton>
                    ) : (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany on GitHub"
                      >
                        Star
                      </GitHubButton>
                    )}
                  </li>
                  <li>
                    go-germany-api：
                    {theme.palette.mode === "dark" ? (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany-sync"
                        data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: light_high_contrast;"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany-sync on GitHub"
                      >
                        Star
                      </GitHubButton>
                    ) : (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany-api"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany-api on GitHub"
                      >
                        Star
                      </GitHubButton>
                    )}
                  </li>
                  <li>
                    go-germany-sync：
                    {theme.palette.mode === "dark" ? (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany-sync"
                        data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: light_high_contrast;"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany-sync on GitHub"
                      >
                        Star
                      </GitHubButton>
                    ) : (
                      <GitHubButton
                        href="https://github.com/noworneverev/go-germany-sync"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/go-germany-sync on GitHub"
                      >
                        Star
                      </GitHubButton>
                    )}
                  </li>
                </ul>
              </li>
              <li>
                VISA Termin Alert
                <ul>
                  <li>
                    visa-termin-alert：
                    {theme.palette.mode === "dark" ? (
                      <GitHubButton
                        href="https://github.com/noworneverev/visa-termin-alert"
                        data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: light_high_contrast;"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/visa-termin-alert on GitHub"
                      >
                        Star
                      </GitHubButton>
                    ) : (
                      <GitHubButton
                        href="https://github.com/noworneverev/visa-termin-alert"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star noworneverev/visa-termin-alert on GitHub"
                      >
                        Star
                      </GitHubButton>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </CardContent>
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

      <Typography></Typography>
    </Container>
  );
}
