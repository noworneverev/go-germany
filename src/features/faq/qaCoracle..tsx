import { Typography, Link } from "@mui/material";

export const qaCoracle = [
  {
    index: "coracle1",
    question: "Coracle Prime是什麼？",
    answer: "",
    link: (
      <>
        <Typography>
          跟Expatrio一樣，提供辦理限制提領提戶(Blocked
          Account)、加入公共保險及旅遊保險投保服務。價格為目前最便宜的，免月費。
        </Typography>
        <Typography>一年手續費各家比較：</Typography>
        <ul>
          <li>Coracle Prime: 59歐/年</li>
          <li>Expatrio: 109歐/年</li>
          <li>Fintiba: 147歐/年</li>
        </ul>
        <Typography>
          詳細介紹可參考：
          <Link
            href="https://youtu.be/JucNbzm4fZ8"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://youtu.be/JucNbzm4fZ8
          </Link>
        </Typography>
      </>
    ),
  },
  {
    index: "coracle2",
    question: "非本人帳戶匯款會遇到問題嗎？",
    answer:
      "會會會，很重要說三次，朋友是父母匯款過去，確認匯款人身份花了很久時間溝通，還被放鴿子多次，被搞到快崩潰，最後花了約一周才拿到限制提領帳戶證明。(我是自己帳戶匯過去，約一天拿到證明)",
    link: <></>,
  },
  {
    index: "coracle3",
    question: "有推薦碼可以用嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          如果看了上面那題還想申請的，可以透過{" "}
          <Link
            href="https://www.coracle.de/?ref=yanyingliao"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://www.coracle.de/?ref=yanyingliao
          </Link>{" "}
          連結申請，推薦人與被推薦人都會拿到10歐。
        </Typography>
      </>
    ),
  },
  {
    index: "coracle4",
    question: "回傳給德協的保險文件是哪份？",
    answer: "Travel Certificate",
    link: <></>,
  },
  {
    index: "coracle5",
    question: "Travel Certificate 保險開始時間怎麼改？",
    answer: "寫信給客服改，個人經驗，客服一天內回覆並附上新時間的保險文件。",
    link: <></>,
  },
];
