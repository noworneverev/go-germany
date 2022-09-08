import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TableOfContent from "../../app/components/TableOfContent";
import QaAccordions from "./QaAccordions";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { qa } from "./qa";
import { qaPlane } from "./qaPlane";
import { qaAccount } from "./qaAccount";
import { qaAcknowledgements } from "./qaAcknowledgements";
import { qaAn } from "./qaAn";
import { qaCoracle } from "./qaCoracle.";
import { qaExpatrio } from "./qaExpatrio";
import { qaRoutine } from "./qaRoutine";
import { qaVisa } from "./qaVisa";
import { qaWise } from "./qaWise";

const all = qaPlane.concat(
  qaAccount,
  qaVisa,
  qaExpatrio,
  qaCoracle,
  qaRoutine,
  qaWise,
  qaAn,
  qaAcknowledgements
);

export default function Faq() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t("faq")} | Go Germany`;
  }, [t]);

  // const [expanded, setExpanded] = useState(false);
  // const toggleAcordion = () => {
  //   setExpanded((prev) => !prev);
  // };

  const handleClick = (anchorId: string) => {
    const anchor = document.querySelector(`#${anchorId}`);
    if (anchor) {
      anchor.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });
    }
  };

  const [loading, setLoading] = useState(true);
  const [allExpanded, setAllExpanded] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string[]>([]);
  const handleAllChange = () => {
    if (!allExpanded) {
      const res = [];
      for (let { index } of all) {
        res.push(index);
      }
      setExpanded(res);
    } else {
      setExpanded([]);
    }
    setAllExpanded(!allExpanded);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <LoadingComponent disableShrink message={t("loading")} />;

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <Container disableGutters fixed>
        <Grid container mb={1}>
          <Grid item lg md sm xs>
            <Box>
              <Button onClick={handleAllChange}>
                {allExpanded ? "全部縮合" : "全部展開"}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Stack
          mb={2}
          sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}
        >
          {qa.map((item) => (
            <Button
              key={item.id}
              size="small"
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
        <Grid container spacing={2}>
          <Grid item lg={11} md={11} sm xs>
            <QaAccordions expanded={expanded} setExpanded={setExpanded} />
          </Grid>
          <Grid
            item
            lg
            md
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            <TableOfContent qa={qa} />
          </Grid>
        </Grid>
        <Typography variant="caption">
          <i>
            Last updated on <b>Sep 7, 2022</b> by <b>Yan-Ying Liao</b>
          </i>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
