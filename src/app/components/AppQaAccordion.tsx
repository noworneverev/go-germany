import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Button,
} from "@mui/material";
import { Link } from "@mui/material";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { useState } from "react";

interface Props {
  data: {
    index: string;
    question: string;
    answer: string;
    link: JSX.Element;
  }[];
  expanded: string[];
  setExpanded: (value: React.SetStateAction<string[]>) => void;
}

export default function AppQaAccordion({ data, expanded, setExpanded }: Props) {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      // console.log(expanded);
      // setExpanded(isExpanded ? panel : false);
      if (isExpanded) {
        setExpanded([...expanded, panel]);
      } else {
        setExpanded(expanded.filter((e) => e !== panel));
      }
    };

  return (
    <>
      {data.map(({ question, answer, index, link }) => (
        <Accordion
          key={index}
          // expanded={expanded === index || allExpanded}
          expanded={expanded.includes(index)}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {index.includes("acknowledgement") ? (
              <VolunteerActivismIcon />
            ) : (
              <HelpCenterIcon />
            )}
            <Typography sx={{ ml: 1 }}>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {answer ? (
              <Typography sx={{ whiteSpace: "pre-line" }}>{answer}</Typography>
            ) : (
              <>{link}</>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
