import { Typography, Link, Box } from "@mui/material";

export const qaWise = [
  {
    index: "wise1",
    question: "Wise是什麼？",
    answer: `他是中間金融服務，以解決台灣送錢到德國匯款的麻煩。
      例如我的用法： 
  輸入N26 IBAN 以刷卡1000歐到N26，
  再從N26轉帳到需要的地方（學校 保險 德國日常使用），
  或者如果你還沒申辦德國銀行，也可以將錢存入Wise，從Wise的歐元戶頭轉到你需要的地方（學校 保險），但是這樣子也會有一點點手續費，
  這樣可以免去要多次去臨櫃匯款很多次的麻煩跟不安，畢竟歐盟內轉帳還是比國際匯款便宜跟快上許多。`,
    link: <></>,
  },
  {
    index: "wise2",
    question: "Wise可以當成帳戶使用嗎？",
    answer: "不行，Wise只是方便匯款的工具。",
    link: <></>,
  },
  {
    index: "wise3",
    question: "有人有Wise的邀請碼嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          可以使用本站作者的{" "}
          <Link
            href="https://wise.com/invite/u/yanyingl14"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://wise.com/invite/u/yanyingl14
          </Link>
        </Typography>

        <Typography>
          或使用Q&A作者的{" "}
          <Link
            href="https://wise.com/invite/i/yu-chengs3"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://wise.com/invite/i/yu-chengs3
          </Link>
        </Typography>
      </>
    ),
  },
  {
    index: "wise4",
    question: "Wise可以申請Debit Card那可以當成一般帳戶來用嗎？",
    answer:
      "不建議，Wise不是銀行帳戶，沒有存款保障，網路上還有很多無預警被封帳的案例，建議還是使用正規的N26、Revolut等來使用。",
    link: <></>,
  },
];
