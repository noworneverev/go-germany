import { Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function InvitationLinks() {
  const { t } = useTranslation();
  return (
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
          <ul>
            <li>{t("coracle")}</li>
          </ul>
        </li>
        <li>
          N26:{" "}
          <Link
            href="https://n26.com/r/yanyingl8869"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://n26.com/r/yanyingl8869
          </Link>
          <ul>
            <li>{t("n26")}</li>
          </ul>
        </li>
        <li>
          Revolut:{" "}
          <Link
            href="https://revolut.com/referral/yanyinahaj!MAR1-23-AR"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://revolut.com/referral/yanyinahaj!MAR1-23-AR
          </Link>
          <ul>
            {t("revolut_description")}
            <li>{t("revolut_task1")}</li>
            <li>{t("revolut_task2")}</li>
            <li>{t("revolut_task3")}</li>
          </ul>
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
  );
}
