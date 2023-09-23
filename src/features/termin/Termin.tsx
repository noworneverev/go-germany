import { Container, Divider, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LinePreview from "../../static/termin.png";
import axios from "axios";
import { Log } from "../../app/models/log";
import DonationQrcode from "../donate/DonationQrcode";
import InvitationLinks from "../donate/InvitationLinks";
import LiveTail from "./LiveTail";

export default function Termin() {
  const { t } = useTranslation();
  const [logData, setLogData] = useState<Log>();

  useEffect(() => {
    document.title = `${t("termin")} | Go Germany`;
  }, [t]);

  const getLogData = async () => {
    if (process.env.REACT_APP_PAPERTRAIL_TOKEN) {
      const { data } = await axios.get<Log>(
        "https://papertrailapp.com/api/v1/events/search.json?system_id=13171385851",
        {
          headers: {
            "X-Papertrail-Token": process.env.REACT_APP_PAPERTRAIL_TOKEN,
          },
          withCredentials: false,
        }
      );
      setLogData(data);
    }
  };

  useEffect(() => {
    getLogData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => getLogData(), 30000);
    return () => clearInterval(intervalId);
  }, [logData]);

  return (
    <Container>
      <Typography variant="h4">LINE Bot</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography gutterBottom>{t("linebot_description")}</Typography>
      <img src={LinePreview} width="287" alt="preview of notification" />
      <Typography variant="h4" mt={3}>
        訂閱表單
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography>
        <Link
          href="https://forms.gle/G2ruWssyLsx53Cc78"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://forms.gle/G2ruWssyLsx53Cc78
        </Link>
      </Typography>
      {/* <Typography>
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
      <img src={LineGroup} width="230" alt="Line group invitation link" /> */}
      <Typography variant="h4" mt={3}>
        Live Tail
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {logData ? (
        <LiveTail logData={logData} isAdmin={false} pwd="101" />
      ) : (
        <></>
      )}
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
      <Typography variant="h4" mt={3}>
        Support
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <DonationQrcode />
      <Typography variant="h5" gutterBottom>
        {t("invitation")}
      </Typography>
      <InvitationLinks />

      <Typography variant="h4" mt={3}>
        Live Tail Admin Only
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {logData ? (
        <LiveTail logData={logData} isAdmin={true} pwd="202" />
      ) : (
        <></>
      )}
    </Container>
  );
}
