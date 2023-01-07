import { Typography, Divider, Paper, Stack } from "@mui/material";
import React from "react";
import { Log } from "../../app/models/log";

export default function LiveTail(logData: Log | undefined) {
  return (
    <>
      <Typography variant="h4" mt={3}>
        Live Tail
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Paper sx={{ px: 1.5, py: 1, maxHeight: 300, overflow: "auto" }}>
        {logData?.events
          .slice(0)
          .reverse()
          .map((e) => (
            <Stack direction="row" spacing={1} key={e.id}>
              <Typography display="inline">{e.display_received_at}</Typography>
              <Typography display="inline" sx={{ color: "#6a6bb2" }}>
                Termin
              </Typography>
              <Typography display="inline" sx={{ color: "#8dbbee" }}>
                {e.program}
              </Typography>
              <Typography display="inline">{e.message}</Typography>
            </Stack>
          ))}
        {/* <div ref={messagesEndRef} /> */}
      </Paper>
    </>
  );
}
