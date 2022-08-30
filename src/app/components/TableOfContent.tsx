import { Box, Button, Stack } from "@mui/material";

interface Props {
  qa: {
    id: string;
    title: string;
    data: {
      index: string;
      question: string;
      answer: string;
      link: JSX.Element;
    }[];
    tipsTitle: string;
    tips: string[];
  }[];
}

export default function TableOfContent({ qa }: Props) {
  const handleClick = (anchorId: string) => {
    const anchor = document.querySelector(`#${anchorId}`);
    if (anchor) {
      anchor.scrollIntoView({
        // behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box sx={{ position: "fixed" }}>
      <Stack>
        {qa.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleClick(item.id)}
            sx={{
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
              minWidth: "max-content",
            }}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
