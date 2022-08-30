import { Typography, Link } from "@mui/material";

export const qaAn = [
  {
    index: "an1",
    question: "我的城市要去哪裡An？",
    answer:
      "Google 搜尋 “地名+Bürgeramt”，每個城市的預約規則及時間不同，請依各城市規定辦理。",
    link: <></>,
  },
  {
    index: "an2",
    question: "我x/xx用免簽入境，但是長期簽證x/xx才開始，那我要什麼時候An？",
    answer: "An跟簽證是兩回事，入境的時候就可以申請。",
    link: <></>,
  },
  {
    index: "an3",
    question: "我在德國大城市，根本搶不到兩個禮拜內的An預約時間怎麼辦？",
    answer: "",
    link: (
      <>
        <Typography>
          如果住在像慕尼黑或柏林等大城市，可以超過兩個禮拜An也不會怎麼樣，當然可以的話還是最好，沒事就上去看看名額，有時候反而時間近一點就會有名額出來，相關規定可參考此網站QA{" "}
          <Link
            href="https://reurl.cc/RXXd2e"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://reurl.cc/RXXd2e
          </Link>{" "}
          個人建議，如果確定來不及，可以先寫信給相關部門，確定他有答應你可以晚一點An，這樣到時候被刁難也有一個依據。
        </Typography>
      </>
    ),
  },

  {
    index: "an4",
    question: "德國要怎麼找房子？要注意什麼？",
    answer: "",
    link: (
      <Typography>
        可先參考{" "}
        <Link
          href="https://reurl.cc/W11VNy"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/W11VNy
        </Link>
      </Typography>
    ),
  },
];
