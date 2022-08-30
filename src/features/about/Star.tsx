import { Typography } from "@mui/material";
import GitHubButton from "react-github-btn";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export default function Star() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
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
    </>
  );
}
