import { Typography, Link, Box } from "@mui/material";

export const qaAccount = [
  {
    index: "account1",
    question: "聽說XX的卡很容易被盜刷，怎麼辦？",
    answer:
      "通常App上都有關閉虛擬卡的功能，也就是必須要刷實體卡才能刷得過，建議平常都將這個功能關閉，等自己要用到時再打開，實體卡也可以套一個防rfid的卡套，避免被盜錄。",
    link: <></>,
  },
  {
    index: "account2",
    question: "要怎麼從台灣匯錢到德國的帳戶中？",
    answer:
      "可以直接到銀行臨櫃匯款，也可以使用WISE以刷卡或轉帳的方式將款項匯至德國帳戶。",
    link: <></>,
  },
  {
    index: "account3",
    question:
      "有什麼推薦的台灣卡可以在歐洲刷的嗎？(這邊推薦的是學生或信用卡小白適合辦的卡)",
    answer: "",
    link: (
      <Typography>
        個人推薦永豐的大戶卡及多幣別簽帳卡，海外刷卡有1.5%回饋(等於跟海外刷卡手續費相抵）但是海外提款每個月有三次免手續費，最重要的是消費歐元時可以直接從歐元帳戶扣款，若歐元帳戶沒錢才會從台幣帳戶扣款，有需要可以用Q&A作者的推薦碼FEVAI52。
        <br />
        詳細資訊：{" "}
        <Link
          href="https://reurl.cc/OA2Lb3"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/OA2Lb3
        </Link>
      </Typography>
    ),
  },
  {
    index: "account4",
    question: "我可以在台灣先開好帳戶嗎？",
    answer: "",
    link: (
      <>
        <Typography variant="h4" gutterBottom>
          N26
        </Typography>
        <Typography>
          第一種選項是申請N26，但開戶需要驗證護照，所以必須要在辦簽證前或拿回護照後再申請，地址先填德國宿舍，到達當地後再申請實體卡片。
        </Typography>
        <ul>
          <li>
            入金手續費
            <ol>
              <li>
                Top up：每個月限制450歐，海外刷卡1.5%，第二次開始N26也會收1.5%。
              </li>
              <li>
                Wise：海外刷卡1.5%+非歐元卡3x歐手續+Wise手續費(英鎊0.3%歐元0.4%)+N26端手續費(50歐以下免收
                以上是12.5+0.1%)
              </li>
            </ol>
          </li>
          <li>
            提款手續費
            <ul>
              <li>
                提款每個月免費三筆免手續，超過的話一筆只收兩歐，但用CASH26都是免費，
                到非歐元區提外幣是1.7%。
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <Typography variant="h4" gutterBottom>
          Revolut
        </Typography>
        <Typography>
          第二個選擇是Revolut，驗證方式需要護照加上簽證(都是拍照，不用視訊)，可以用台灣號碼，住址有變動的話可以在app裡更改，入金的方式有：
        </Typography>
        <ul>
          <li>信用卡</li>
          <li>
            Google Pay/Apple Pay(不能用台灣的卡)(官網說明:{" "}
            <Link
              href="https://bit.ly/3CDe38y"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://bit.ly/3CDe38y
            </Link>
            )
          </li>
          <li>
            銀行轉帳(臨櫃填寫資料可以參考{" "}
            <Link
              href="https://bit.ly/3AsEuLv"
              underline="hover"
              target="_blank"
              rel="noopener"
            >
              https://bit.ly/3AsEuLv
            </Link>{" "}
            )
          </li>
        </ul>
        <ul>
          <li>入金手續費：只有海外刷卡1.5%手續費，Revolut不收。</li>
          <li>
            提款手續費：每月五筆或200歐提款免手續費，但超過的話每筆都要收到2%。
            要注意一下
          </li>
        </ul>
        <br />
        <Typography>
          詳細比較可參考{" "}
          <Link
            href="https://reurl.cc/oQRGLQ"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://reurl.cc/oQRGLQ
          </Link>
        </Typography>
        <Typography>
          ❗ 建議：入金進Revolut，再轉到N26領出，非歐元區直接刷Revolut。
        </Typography>
      </>
    ),
  },
  {
    index: "account4-1",
    question: "有N26的推薦碼嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          可以用Q&A作者的yuchengs8792或使用他的網址註冊{" "}
          <Link
            href="https://n26.com/r/yuchengs8792"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://n26.com/r/yuchengs8792
          </Link>{" "}
          ，
          有幫忙用Q&A作者的推薦碼，開卡後完成€15以上的消費之後，將英文名字及您N26的QR
          code寄到他的信箱bt877126@gmail.com，確認後可分得一半的回饋金。
        </Typography>
      </>
    ),
  },
  {
    index: "account4-2",
    question: "有Revolut的推薦碼嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          可以用Q&A作者的{" "}
          <Link
            href="https://revolut.com/referral/yuchon71rc!SEP1-22-VR-DE"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://revolut.com/referral/yuchon71rc!SEP1-22-VR-DE
          </Link>{" "}
          任務：開卡後申請實體卡並消費€5三筆且需要以轉帳或刷卡完成儲值一次，需要在9/13以前完成，回饋金額是以抽獎的方式，最少€10最多有€200。完成任務後一樣透過信箱聯絡他，他會將一半的回饋金匯給你。
        </Typography>
        <br />
        <Typography>
          或使用本站作者的{" "}
          <Link
            href="https://revolut.com/referral/yanyinahaj!SEP1-22-VR-DE"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://revolut.com/referral/yanyinahaj!SEP1-22-VR-DE
          </Link>{" "}
          不用寄信給我，我不會把錢分你 🍺
        </Typography>
      </>
    ),
  },
  {
    index: "account5",
    question: "開通N26需要視訊驗證，他會問什麼問題？",
    answer: "",
    link: (
      <>
        <Typography>個人經驗分享，被問的問題如下：</Typography>
        <Box sx={{ ml: -2, mt: -1 }}>
          <ol>
            <li>
              跟你說這段對話會被錄音等等，然後問有沒有人指使你要你開這個帳戶
            </li>
            <li>會請你拿掉眼鏡(如果有的話 )會先幫你拍一張照</li>
            <li>請你在臉前揮動手掌 (應該是要確保沒有變臉程式之類的</li>
            <li>這時候鏡頭會被他切到後鏡頭</li>
            <li>請你打開護照翻到資料頁並維持住給他看</li>
            <li>會打開你的閃光燈，請你揮動護照，讓他看防偽的標籤</li>
            <li>拇指遮住部分資料，揮動護照 (應該也是防程式修圖</li>
            <li>在護照第一頁(封面後那一頁)第三頁(簽名頁)重複5、6步驟</li>
            <li>蓋住護照，問你的生日及出生地</li>
            <li>念你的護照號碼 (這裡就可以打開念了</li>
          </ol>
        </Box>
        <Typography>
          順序或作法可能因人而異，請依實際聽到的指令操作。
        </Typography>
      </>
    ),
  },
];
