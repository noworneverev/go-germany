import { Typography, Link, Box } from "@mui/material";
import SimCard from "./SimCard";

export const qaRoutine = [
  {
    index: "routine1",
    question: "群組裡有沒有要去XXX的同學？",
    answer: "",
    link: (
      <>
        <Typography>
          有創群的通常都會將連結放在社群「當我們同在德國🇩🇪」筆記本，沒看到的可以再到社群中詢問。
        </Typography>
        <ul>
          <li>
            Dresden:{" "}
            <Link
              href="https://reurl.cc/QbaR60"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/QbaR60
            </Link>
          </li>
          <li>
            Göttingen:{" "}
            <Link
              href="https://reurl.cc/rRY9b1"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/rRY9b1
            </Link>
          </li>
          <li>
            Aachen:{" "}
            <Link
              href="https://reurl.cc/GENjqD"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/GENjqD
            </Link>
          </li>
          <li>
            Stuttgart:{" "}
            <Link
              href="https://reurl.cc/9pnvA8"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/9pnvA8
            </Link>
          </li>
          <li>
            Heidelberg:{" "}
            <Link
              href="https://reurl.cc/NRxQmm"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/NRxQmm
            </Link>
          </li>
          <li>
            Düsseldorf:{" "}
            <Link
              href="https://reurl.cc/xQ3aME"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/xQ3aME
            </Link>
          </li>
          <li>
            RUB:{" "}
            <Link
              href="https://reurl.cc/0XWv0k"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/0XWv0k
            </Link>
          </li>
          <li>
            Leipzig:{" "}
            <Link
              href="https://reurl.cc/4pNreV"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/4pNreV
            </Link>
          </li>
          <li>
            Wüzburg:{" "}
            <Link
              href="https://reurl.cc/nOYN3n"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/nOYN3n
            </Link>
          </li>
          <li>
            Frankfurt:{" "}
            <Link
              href="https://reurl.cc/YX3Ea4"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://reurl.cc/YX3Ea4
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    index: "routine2",
    question: "需要帶xxx東西去德國嗎？",
    answer: "",
    link: (
      <Typography>
        可參考{" "}
        <Link
          href="https://reurl.cc/8orLnj"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/8orLnj
        </Link>
      </Typography>
    ),
  },
  {
    index: "routine3",
    question: "長期簽證買東西可以退稅嗎？",
    answer:
      "持有學生簽證的人是不能退稅的。有的人可能會僥倖退成功但其實按照法規是不行的。",
    link: <></>,
  },
  {
    index: "routine4",
    question: "台灣的國際駕照可以在德國使用嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          國際駕照在德國只能開半年，所以在半年內一定要換到德國駕照，要不然超過半年後會變無照駕駛～
        </Typography>
        <Typography>請參考：</Typography>
        <Box sx={{ mt: -1 }}>
          <ul>
            <li>
              {" "}
              <Link
                href="https://reurl.cc/NRpnAx"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/NRpnAx
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="https://reurl.cc/xQOo94"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/xQOo94
              </Link>
            </li>
          </ul>
        </Box>
      </>
    ),
  },

  {
    index: "routine5",
    question: "有推薦使用的SIM卡嗎？",
    answer: "",
    link: <SimCard />,
  },
  {
    index: "routine6",
    question: "德國用的轉接頭是哪一種規格？",
    answer:
      "請注意歐洲圓頭有分大小，德國用的是4.8mm的大頭，有些國家使用4.0mm的小頭，大頭不能插到小頭插座，小頭可以插到大頭插座，但會很鬆，建議還是使用正確的規格來用。",
    link: <></>,
  },
  {
    index: "routine7",
    question: "可以帶台灣的延長線去使用嗎？",
    answer:
      "不建議，德國電壓為200V，台灣的延長線大多是以110V去設計，使用220V電源可能會使保護機制失效，開關上的燈也很容易燒掉，建議到當地再買，或是使用只有轉接功能的轉接座，或是買中國的延長線(中國額定電壓即220V)，淘寶或京東搜尋插排/插線板。",
    link: <></>,
  },
  {
    index: "routine8",
    question: "如果我在德國感染 COVID-19 我該怎麼做？",
    answer: "",
    link: (
      <Typography>
        請參考{" "}
        <Link
          href="https://reurl.cc/Zb968l"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/Zb968l
        </Link>
      </Typography>
    ),
  },
];

export const tipsRoutine = [
  "在德國不能使用網路觀看盜版電影、動漫、漫畫等，若是被網路警察抓到你的IP，將會面臨罰款。",
  "到德國前記得到各家銀行確認手中的卡片有開啟海外提款並設定4位數的PIN碼，以防萬一。",
  "德國找房不易，通常房東很挑房客，需要面試，如果在網路上直接說要租給你、太便宜的反而要注意，很多詐騙是租airbnb來假裝房東出租給你。",
];

export const tipsRoutine2 = [
  "重要的東西就放在防盜腰包或頸掛包 像是護照或大部分的現金",
  "後背包的拉鍊可以加掛一個密碼鎖或鉤子。",
  "重要文件可以掃描後放在雲端。",
  "不要把台灣的壞習慣帶到歐洲，例如背包佔位、手機皮夾插在後口袋，一定會被偷。",
  "坐地鐵不要站門邊",
  "手機可以綁掛繩，避免在使用中被搶走，也可以用一些不透明的手機殼來遮住品牌。",
];
