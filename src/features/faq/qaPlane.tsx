import { Typography, Link } from "@mui/material";

export const qaPlane = [
  {
    index: "plane1",
    question: "我還沒拿到國際學生證，要怎麼買學生機票？",
    answer: "現在學生機票不需要國際學生證，可以用台灣的在學證明等申請。",
    link: <></>,
  },
  {
    index: "plane2",
    question: "XX航空的學生機票怎麼買？",
    answer: "",
    link: (
      <Typography>
        可參考{" "}
        <Link
          href="https://reurl.cc/LmvQVL"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/LmvQVL
        </Link>
      </Typography>
    ),
  },
  {
    index: "plane3",
    question: "液體的托運規定是什麼？",
    answer:
      "噴霧、膠狀、乳液小於100ml才能帶上飛機。所有液體容器須裝於不超過1公升且20*20的密封袋，每人限攜帶一袋上機。含噴霧、膠狀、液體且體積大於100ml的容器，一律放置行李箱托運。托運噴霧罐，單罐不得超過500ml，每人總計不得超過2公升。",
    link: <></>,
  },
  {
    index: "plane4",
    question: "承上題，75%酒精可以托運嗎？",
    answer:
      "托運可以喔，但不建議分裝，最好用原本的瓶子留標籤，不然怕安檢人員不知道裡面是什麼，跟中藥托運一樣",
    link: <></>,
  },
  {
    index: "plane5",
    question: "XXX可以帶上飛機嗎？有肉燥的泡麵可以帶嗎？",
    answer: "",
    link: (
      <Typography>
        請先參考{" "}
        <Link
          href="https://reurl.cc/NRrqdx"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/NRrqdx
        </Link>
      </Typography>
    ),
  },
  {
    index: "plane6",
    question:
      "在網路上有看到攜帶超過一定價值以上的電子用品需要附上購買時的收據，會真的需要嗎？如果沒有的話怎麼辦？",
    answer: "只要能證明是自用的都不用，只有全新未拆封的，那種被查到才要附。",
    link: <></>,
  },
];
