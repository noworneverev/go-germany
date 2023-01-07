import {
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LinePreview from "../../static/termin.png";
import LineGroup from "../../static/line.jpg";
import axios from "axios";
import { Log } from "../../app/models/log";
import DonationQrcode from "../donate/DonationQrcode";
import InvitationLinks from "../donate/InvitationLinks";

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
      <Typography variant="h4" mt={3}>
        Live Tail
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Paper
        sx={{
          px: 1.5,
          py: 1,
          maxHeight: 300,
          minHeight: 300,
          overflow: "auto",
        }}
      >
        {logData ? (
          logData?.events
            .slice(0)
            .reverse()
            .map((e) => (
              <Stack direction="row" spacing={1} key={e.id}>
                <Typography display="inline">
                  {e.display_received_at}
                </Typography>
                <Typography display="inline" sx={{ color: "#6a6bb2" }}>
                  Termin
                </Typography>
                <Typography display="inline" sx={{ color: "#8dbbee" }}>
                  {e.program}
                </Typography>
                <Typography display="inline">{e.message}</Typography>
              </Stack>
            ))
        ) : (
          <Typography>Loading...</Typography>
        )}
        {/* <div ref={messagesEndRef} /> */}
      </Paper>
      <Typography variant="h4" mt={3}>
        Support
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        {t("donate_message2")}
      </Typography>
      <DonationQrcode />
      <Typography variant="h5" gutterBottom>
        {t("invitation")}
      </Typography>
      <InvitationLinks />
    </Container>
  );
}
