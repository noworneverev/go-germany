import { Typography, Link, Box } from "@mui/material";

export const qaExpatrio = [
  {
    index: "expatrio0",
    question: "Expatrio是什麼？怎麼申請？",
    answer: "",
    link: (
      <Typography>
        請參考{" "}
        <Link
          href="https://reurl.cc/qN857R"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/qN857R
        </Link>
      </Typography>
    ),
  },
  {
    index: "expatrio1",
    question: "護照一直被退件，為什麼？",
    answer: "要用手機翻拍，不能有嚴重反光擋到資料，四個角都要看的見。",
    link: <></>,
  },
  {
    index: "expatrio2",
    question: "沒有推薦碼，要填誰的？",
    answer: "可以填Q&A作者的 yuchengs3",
    link: <></>,
  },
  {
    index: "expatrio3",
    question: "Package中有送一年的國際學生證，要怎麼拿到?",
    answer: "到達德國開通TK後，會以郵寄的方式送達。",
    link: <></>,
  },
  {
    index: "expatrio4",
    question: "到銀行匯款到Expatrio 匯款單怎麼填寫？",
    answer: "",
    link: (
      <Typography>
        可參考{" "}
        <Link
          href="https://reurl.cc/ErkG8A"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/ErkG8A
        </Link>{" "}
        很多銀行都可以先下載表格，電腦打好帶過去就可以了。
      </Typography>
    ),
  },
  {
    index: "expatrio5",
    question:
      "為什麼expatrio的私保遞簽顯只有185天？沒辦法覆蓋我在德國的全部時間？",
    answer:
      "遞簽險只是負責你到達德國~開學前這段時間的保險，在開學之後就會自動轉成TK，這在保險單上有寫，因此只要將私保回傳給德協即可，而且這段時間若未超過92天的話，私保費用是免費的。",
    link: <></>,
  },
  {
    index: "expatrio6",
    question: "請問用Expatrio用台灣的銀行匯款後，大概多久可以收到06文件呢？",
    answer: "",
    link: (
      <>
        <Typography>
          群友經驗分享
          (這邊是歐元付款，台幣付款手續費較高，但通常隔天或當天可入帳）
        </Typography>
        <Box sx={{ ml: -2, mt: -1 }}>
          <ul>
            <li>當天晚上收到：台銀</li>
            <li>隔天下午收到：台新、國泰、合庫、中信</li>
            <li>兩天後收到：永豐</li>
            <li>三天後收到：玉山</li>
          </ul>
        </Box>
      </>
    ),
  },
  {
    index: "expatrio7",
    question: "在台灣臨櫃匯款到德國，遇到德文字母無法輸入時該怎麼辦？",
    answer: "ä=ae，ö=oe，ü=ue，ß=ss",
    link: <></>,
  },
  {
    index: "expatrio8",
    question:
      "我已經透過Expatrio 辦理10／1開始的保險（Dr.Walter），但我想提早幾天入境該怎麼辦？",
    answer:
      "登入 Expatrio 後，點開又上角的選單，打開“personal data”，滑到入學資訊的部份，把“arrival date”改成想要的入境日期，按儲存，之後去“documents”下載新的保險證明即可。",
    link: <></>,
  },
  {
    index: "expatrio9",
    question: "到德國後要怎麼開通限制帳戶？需要什麼文件？",
    answer: "",
    link: (
      <Typography>
        請參考{" "}
        <Link
          href="https://reurl.cc/QbXbnb"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/QbXbnb
        </Link>
      </Typography>
    ),
  },
  {
    index: "expatrio10",
    question: "宿舍合約需要綁定一個帳戶來繳房租，可以直接用限制帳戶嗎？",
    answer:
      "不行，限制帳戶不能直接被使用，必須要先綁定在一個德國帳戶上，再將此帳戶綁定給你的宿舍合約，如果人還在台灣，可以先使用N26，這個文件學校通常也都可以通融補交，可以問看看。",
    link: <></>,
  },
];
