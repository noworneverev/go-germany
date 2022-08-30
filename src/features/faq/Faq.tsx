import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  qa,
  qaAccount,
  qaAcknowledgements,
  qaAn,
  qaCoracle,
  qaExpatrio,
  qaPlane,
  qaRoutine,
  qaVisa,
  qaWise,
} from "./qa";
import TableOfContent from "../../app/components/TableOfContent";
import QaAccordions from "./QaAccordions";
import LoadingComponent from "../../app/layout/LoadingComponent";

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
      <CssBaseline />

      <Container>
        <Grid container mb={1}>
          <Grid item lg md sm xs>
            <Box>
              <Button onClick={handleAllChange}>
                {allExpanded ? "全部縮合" : "全部展開"}
              </Button>
            </Box>
          </Grid>
          <Grid item justifyContent="flex-end">
            <Typography variant="caption">
              <i>
                Last updated on <b>Aug 29, 2022</b> by <b>Yan-Ying Liao</b>
              </i>
            </Typography>
          </Grid>
        </Grid>

        {/* <Box justifyContent="flex-end" mb={1}>
          <Button onClick={handleAllChange}>
            {allExpanded ? "全部縮合" : "全部展開"}
          </Button>
        </Box>
        <Box justifyContent="flex-end" mb={1}>
          <Typography>
            Last updated on Aug 8, 2022 by Sébastien Lorber
          </Typography>
        </Box> */}

        <Grid container spacing={2}>
          <Grid item lg={11} md={11}>
            <QaAccordions expanded={expanded} setExpanded={setExpanded} />
          </Grid>
          <Grid item lg={1} md={1}>
            <TableOfContent qa={qa} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

{
  /* <Container>      
      <Grid container mb={1}>
        <Grid item lg md sm xs>
          <TableOfContent qa={qa} />         
        </Grid>
        <Grid item justifyContent="flex-end">
          <Box>
            <Button onClick={handleAllChange}>
              {allExpanded ? '全部縮合' : '全部展開'}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <div>
        {qa.map((item, index) => (
          <React.Fragment key={index}>
            <div id={item.id} style={{ scrollMarginTop: '5em' }}></div>
            <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            <AppQaAccordion
              data={item.data}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            {item.tips && (
              <Typography variant="h6" gutterBottom mt={2}>
                {item.tipsTitle}
              </Typography>
            )}

            <ol>
            {item.tips &&
              item.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ol>

            {index !== qa.length - 1 && (
              <Divider variant="middle" sx={{ my: 4 }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </Container> */
}
