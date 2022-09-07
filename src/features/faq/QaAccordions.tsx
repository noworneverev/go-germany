import { Typography, Divider } from "@mui/material";
import React from "react";
import AppQaAccordion from "../../app/components/AppQaAccordion";
import { qa } from "./qa";
import Tips from "./Tips";

interface Props {
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function QaAccordions({ expanded, setExpanded }: Props) {
  // const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <>
      {qa.map((item, index) => (
        <React.Fragment key={index}>
          <div id={item.id} style={{ scrollMarginTop: "5em" }}></div>
          <Typography variant="h4" gutterBottom>
            {item.title}
          </Typography>
          {item.data && (
            <AppQaAccordion
              data={item.data}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          )}
          <Tips title={item.tipsTitle} tips={item.tips} />
          <Tips title={item.tipsTitle2} tips={item.tips2} />

          {index !== qa.length - 1 && (
            <Divider variant="middle" sx={{ my: 4 }} />
          )}
        </React.Fragment>
      ))}
    </>
  );
}
