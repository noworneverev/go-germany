import { Typography } from "@mui/material";

interface Props {
  title: string;
  tips: string[];
}

export default function Tips({ title, tips }: Props) {
  return (
    <>
      {tips && (
        <>
          <Typography variant="h6" gutterBottom mt={2}>
            {title}
          </Typography>
          <ol>
            {tips && tips.map((tip, index) => <li key={index}>{tip}</li>)}
          </ol>
        </>
      )}
    </>
  );
}
