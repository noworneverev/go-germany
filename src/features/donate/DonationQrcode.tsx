import { Grid, Stack, Box, Typography } from "@mui/material";
import Jkopay from "../../static/jkopay_qrcode.png";
import Paypal from "../../static/paypal.png";
import React from "react";

export default function DonationQrcode() {
  return (
    <Grid container>
      <Grid item lg>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Box>
            <Typography variant="h6">🎁 Paypal me</Typography>
            <img src={Paypal} alt="paypal" width="60%" />
          </Box>
          <Box>
            <Typography variant="h6">🎁 街口支付 帳號：901578462</Typography>

            <Box sx={{ py: 1 }}>
              <img src={Jkopay} alt="jkopay" width="65%" />
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
