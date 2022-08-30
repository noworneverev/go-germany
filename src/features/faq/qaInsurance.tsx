import { Typography, Link } from "@mui/material";

export const qaInsurance = [
  {
    index: "insurance1",
    question: "我已經到德國了 要怎麼開通我的TK保險？",
    answer: "",
    link: (
      <Typography>
        請參考{" "}
        <Link
          href="https://reurl.cc/MNO7zX"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/MNO7zX
        </Link>
      </Typography>
    ),
  },
  {
    index: "insurance2",
    question: "如果我有買私保+公保的package，開學後我需要將私保停掉嗎？",
    answer: "公保開通後，會自動將私保停掉，不需要任何手續。",
    link: <></>,
  },
  {
    index: "insurance3",
    question: "學期結束後，還想要多玩幾天，保險怎麼辦？",
    answer: "TK沒有退保的話就會一直續保，所以記得回國前要去退保就好。",
    link: <></>,
  },
  {
    index: "insurance4",
    question: "準備要回台灣了，要怎麼停掉TK保險？",
    answer: "",
    link: (
      <Typography>
        請在回國的最後一個月內，拿到退籍證明及學校的註銷證明後，填寫此表單{" "}
        <Link
          href="https://www.tk-86.com/files/Kuendigungsvordruck-englisch.pdf"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://www.tk-86.com/files/Kuendigungsvordruck-englisch.pdf
        </Link>{" "}
        將填好的人表單寄給TK客服，等待客服指示，即可完成退保，保險會涵蓋到在德國的最後一天並依比例計算保費。
      </Typography>
    ),
  },
];
