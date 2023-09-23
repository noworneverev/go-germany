import { Box, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function InvitationLinks() {
  const { t } = useTranslation();
  return (
    <Box>
      <ul>
        <li>
          sim.de:{" "}
          <Link
            href="https://www.sim.de?kw=QTo4DATGs8wCpRSLdrzV0g%3D%3D"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://www.sim.de?kw=QTo4DATGs8wCpRSLdrzV0g%3D%3D
          </Link>
          <ul>
            <li>開卡完成會有20歐獎金，可平分此獎勵</li>
          </ul>
        </li>
        <li>
          Revolut: {t("revolut_description")}{" "}
          <Link
            target="_blank"
            href={"mailto:n9102125@gmail.com"}
            // underline="none"
            // color="inherit"
          >
            n9102125@gmail.com
          </Link>
          {/* <Link
            href="https://revolut.com/referral/yanyinahaj!MAR1-23-AR"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://revolut.com/referral/yanyinahaj!MAR1-23-AR
          </Link> */}
          <ul>
            {/* <li>{t("revolut_task1")}</li>
            <li>{t("revolut_task2")}</li>
            <li>{t("revolut_task3")}</li> */}
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
