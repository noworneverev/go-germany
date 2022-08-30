import { Typography, Link, Box } from "@mui/material";
import LineGroup from "../../static/line.jpg";

export const qaVisa = [
  {
    index: "visa1",
    question: "簽證申請表格的XX不知道要怎麼寫怎麼辦？",
    answer: "不確定的部分可以到現場辦簽證時詢問再填寫。",
    link: <></>,
  },
  {
    index: "visa2-1",
    question: "要怎麼知道德協目前開放到哪一天的名額？",
    answer: "",
    link: (
      <Typography>
        可用這個網址{" "}
        <Link
          href="https://reurl.cc/KQAne9"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/KQAne9
        </Link>{" "}
        輸入驗證碼後，就算被預約滿了，也還是可以看的到目前已經開放的日期。
      </Typography>
    ),
  },
  {
    index: "visa2",
    question: "承上題，那我要預約X月的預約是不是沒希望了?",
    answer:
      "不一定，德協都不會一次全開所有名額，所以每天都有可能還有零星名額釋出。",
    link: <></>,
  },
  {
    index: "visa3",
    question: "驗證碼整個變黑或變白，看不到文字怎麼辦？",
    answer: "",
    link: (
      <>
        <Typography>
          代表你短時間刷網頁太多次，可清除預約網頁的cookie來解決。
        </Typography>
        <Box sx={{ ml: -2, mt: -1 }}>
          <ol>
            <li>預約網頁F12或右鍵“檢查”</li>
            <li>點擊應用程式(Application)</li>
            <li>左方列表找Cookies</li>
            <li>右鍵“清除”</li>
          </ol>
        </Box>
      </>
    ),
  },
  {
    index: "visa4",
    question: "我X/XX號開學，約到X/XX的簽證，來得及嗎？",
    answer: "",
    link: (
      <>
        <Typography>
          以交換簽證來說，建議至少留一個月多一點，其他簽證可參考德協的公告時間，通常沒有缺件或其他問題的話蠻準的。
        </Typography>
        <Typography>QA作者經驗分享：</Typography>
        <ul>
          <li>城市為Hessen邦的Darmstadt</li>
          <li>學生簽證</li>
          <li>6/20辦理簽證</li>
          <li>7/18收到要求回傳資料的信件，當天回傳</li>
          <li>7/22收到護照及簽證</li>
        </ul>

        <Typography>本站作者經驗分享：</Typography>
        <ul>
          <li>Aachen</li>
          <li>長期學生簽證</li>
          <li>7/13辦理簽證</li>
          <li>8/9收到要求回傳資料的信件，當天回傳</li>
          <li>8/13收到護照及簽證</li>
        </ul>

        <Typography>
          ⚠️
          德協公告的等待時間為參考用，不同城市的處理時間也不同，請不要過度急躁一直催
        </Typography>
      </>
    ),
  },
  {
    index: "visa5",
    question: "德協釋出名額是什麼時候？",
    answer:
      "每天早上6:15固定釋出被取消的名額，新開的名額則不固定，六日只會有6:15的釋出。",
    link: <></>,
  },
  {
    index: "visa5-1",
    question: "要怎麼知道德協釋出名額了沒？",
    answer: "",
    link: (
      <>
        <Typography>
          可加入自動通知群組，有新名額釋出會自動發送訊息通知
          <br />
          <Link
            href="https://reurl.cc/MNZlrk"
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            https://reurl.cc/MNZlrk
          </Link>{" "}
          密碼termin
        </Typography>
        <img src={LineGroup} width="230" />
      </>
    ),
  },
  {
    index: "visa6",
    question: "搶預約時填完資料太慢都被搶走了，怎麼辦?",
    answer: "",
    link: (
      <>
        <Typography>有兩種自動帶入資料的方法</Typography>
        <ol type="I">
          <li>
            Chrome內建的自動填入，詳細步驟如下：
            <ol>
              <li>Chrome的設定</li>
              <li>自動填入</li>
              <li>地址和其他資訊</li>
              <li>新增</li>
              <li>
                在名稱打入姓氏與名稱，如Da-Ming
                Wang，並填電話及電子信箱即可搶簽證的時候，按下「姓」會自動把所有資料帶入
              </li>
              <li>輸入驗證碼，done</li>
            </ol>
          </li>
          <li>
            <Typography>
              使用Chrome的擴充功能
              <Link
                rel="noopener"
                underline="hover"
                target="_blank"
                href="https://chrome.google.com/webstore/detail/autofill/nlmmgnhgdeffjkdckmikfpnddkbbfkkk?hl=zh-TW"
              >
                autofill
              </Link>
              (建議👍)，使用說明網址:{" "}
              <Link
                href="https://b23.tv/JWKPCK6"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://b23.tv/JWKPCK6
              </Link>
            </Typography>
          </li>
        </ol>
      </>
    ),
  },
  {
    index: "visa7",
    question:
      "我已經預約到時間了，但覺得太晚or早，可以跟別人交換嗎？或是可以直接再預約新時段嗎？",
    answer: "不行，時段不能交換，必須要取消過48小時後才能再重新預約。",
    link: <></>,
  },
  {
    index: "visa8",
    question: "德協簽證費用多少錢？",
    answer: "75歐，依照當天匯率換算成台幣，目前(2022/8/16)為台幣2280元",
    link: <></>,
  },
  {
    index: "visa9",
    question: "簽證費用可以用歐元繳嗎？",
    answer: `不行，只能用台幣現金或是信用卡刷歐元繳費，建議多帶些零錢，避免德協無法找零。
      備註:海外刷卡都是預設開啟的，所以正常的卡都能刷，會自動以當下匯率換算台幣扣款，但會有額外手續費。`,
    link: <></>,
  },
  {
    index: "visa9-1",
    question: "給德協的文件可以是黑白的嗎？",
    answer: "可以，印的清楚就好。",
    link: <></>,
  },
  {
    index: "visa9-2",
    question: "簽證申請表上的簽名要簽中文還是英文？",
    answer:
      "看你護照上的簽名頁是簽什麼，簽一樣的就可以，護照簽名頁一定要簽，不然會被要求補簽重印。",
    link: <></>,
  },
  {
    index: "visa10",
    question: "預約簽證時，姓氏名字打反、大小寫錯誤、目的選錯怎麼辦？",
    answer: "沒關係，只要當天攜帶相關證明說明即可。",
    link: <></>,
  },
  {
    index: "visa11",
    question: "辦簽證時，需要正裝嗎？要講德文英文？",
    answer: "日常服裝、講中文就可以了，比較像在銀行辦文件而不是面試。",
    link: <></>,
  },
  {
    index: "visa12",
    question: "請問簽證要交的照片是不是同護照照片樣式？",
    answer: "是的，但不要用同一張，除非你的護照也是剛辦好。",
    link: <></>,
  },
  {
    index: "visa13",
    question: "還沒決定念哪間學校，可以用先拿到的zu來申請學生簽證嗎？",
    answer:
      "若還沒決定念哪間，請申請「申請學校簽證」，一旦拿zu申請「學生簽證」就只能念那間學校 or 需要重辦簽證。",
    link: <></>,
  },
  {
    index: "visa14",
    question: "簽證的限制提領帳戶金額是多少？",
    answer:
      "「申請學校簽證」：947歐/月、「學生簽證」：934歐/月。(2022年8月學生簽證由861歐/月調漲至934歐/月)",
    link: <></>,
  },
  // {
  //   index: "visa15",
  //   question: "有聽說限制帳戶要漲到934歐/月，我需要準備多少？",
  //   answer: "目前還是861歐/月，有改德協會公告",
  //   link: <></>,
  // },
  {
    index: "visa16",
    question: "請問我用免簽進德國，轉學生簽證需要什麼手續嗎？",
    answer: "不需要，直接等時間到就會自動生效。",
    link: <></>,
  },
  {
    index: "visa16-1",
    question: "承上題，那我用免簽入境德國需要辦什麼手續嗎？",
    answer:
      "不需要，記得帶好保險、宿舍、入學許可等資料給海關看就好 （他有問再出示 沒有就不用了",
    link: <></>,
  },

  {
    index: "visa17",
    question:
      "如果我的長期簽證只到x/xx，但我想要多留幾天旅遊，會自動轉旅遊簽嗎？",
    answer:
      "不會，目前的規定必須要出申根區再回來才能轉旅遊簽，但要注意英國這幾年海關特別會抓這種洗簽證的做法，有被遣返回國的風險，如果可以最好在德國當地辦理延簽。\n\n⚠️ 很多人傳舊資料說只要長期簽證結束後會自動轉旅遊簽，不需要離開申根，這個問題討論很多次了，結論是不管寄信問哪一個單位都會得到不確定的答案或互推皮球，更何況是你當下遇到的海關，所以建議還是乖乖辦延期，以免影響日後入境申根區的權利。",
    link: <></>,
  },
  {
    index: "visa18",
    question: "台灣簽證時間預約不到，我可以先免簽入境德國，在德國辦理簽證嗎？",
    answer: "不行，長期簽證的辦理地方需要在過去180天所居住的國家辦理。",
    link: <></>,
  },
  {
    index: "visa19",
    question: "要回傳給德協的保險是哪一份？",
    answer: "",
    link: (
      <>
        <Box sx={{ ml: -2, mt: -1 }}>
          <ul>
            <li>
              Expatrio: Incoming Insurance Certificate incl.
              dates，TK那份則是要給學校的
            </li>
            <li>Coracle Prime: Travel Certificate</li>
          </ul>
        </Box>
      </>
    ),
  },

  {
    index: "visa19-1",
    question: "回傳的入境日期是學校開學日還是希望的效期開始日？",
    answer: `建議告知學期日期，及自己真正預計的入境離境日，德協會斟酌給效期，以個人經驗為例：有告知學校學期日期是10/1-3/31，但我實際入境時間為9/1-3/14，希望能開9/1-3/31的效期，最後收到的效期為9/17-3/14，不過群組也有人類似的時間，但收到的效期是9/1-3/31 所以還是要以德協實際核發的效期為主。
        
        本站作者經驗： 要去讀碩士，僅回傳9/24入境，最後給的效期為9/24-3/23。`,
    link: <></>,
  },

  {
    index: "visa19-2",
    question: "回傳資料需要給機票嗎？",
    answer: `不用，只需要給預計的入境及離境日期。
        
        本站作者經驗：碩士學程德協沒有要求提供離境日期，回傳入境日期即可。`,
    link: <></>,
  },

  {
    index: "visa20",
    question: "請問需要列印德協的簽證預約信嗎？",
    answer:
      "不用，目前沒聽過有人被要求出示，只要跟101警衛說要到33樓德協辦簽證，通常會直接給進。",
    link: <></>,
  },
  {
    index: "visa21",
    question: "請問限制帳戶的06文件是兩張都要給嗎？",
    answer: "是的，德文英文的頁面都要給，不然會被要求去711補印。",
    link: <></>,
  },
  {
    index: "visa22",
    question: "如果我的入學許可上沒有日期怎麼辦？",
    answer:
      "入學證明上面如果沒有幾號開學，需要另外印 Semester calendar 給德協。",
    link: <></>,
  },

  {
    index: "visa23",
    question: "簽證申請送出後，後續流程是什麼？",
    answer: "",
    link: (
      <Typography>
        請參考{" "}
        <Link
          href="https://reurl.cc/0XOe6b"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/0XOe6b
        </Link>
      </Typography>
    ),
  },
  {
    index: "visa24",
    question: "簽證其他問題？",
    answer: "",
    link: (
      <Typography>
        請先參考德協官網QA後再發問，網址：{" "}
        <Link
          href="https://reurl.cc/qN19Rq"
          underline="hover"
          target="_blank"
          rel="noopener"
        >
          https://reurl.cc/qN19Rq
        </Link>
      </Typography>
    ),
  },
  {
    index: "visa25",
    question: "簽證資料還有什麼要注意的嗎?",
    answer: "",
    link: (
      <Box sx={{ ml: -2, mt: -1 }}>
        <ol>
          <li>交資料請將兩份分開(ABC ABC)這樣的方式，並依官網的順序整理</li>
          <li>申請表上的日期要寫簽證當天，地點寫Taipei</li>
          <li>大頭照請不要黏貼在申請表上，也不要使用迴紋針，避免痕跡</li>
          <li>
            因為到德協辦公室時需要將手機及隨身物品放置在置物櫃，建議在出發前先將會用到的資料放在一個資料夾，到時候才不會手忙腳亂，也記得把簽證費或信用卡拿出來
          </li>
        </ol>
      </Box>
    ),
  },
  {
    index: "visa26",
    question: "請問護照可以自取嗎？要怎麼跟德協說？",
    answer:
      "”在回傳保險時” 一併跟德協說要自取護照，建議將機票資訊也說明清楚，等護照準備好後，德協會再打電話跟你約時間自取。",
    link: <></>,
  },
];

export const tipsVisa = [
  "辦簽證填寫貨運單時，記得把單號先抄下來，這樣之後回傳資料後就可以開始追蹤護照位置。",
  "回傳資料後，會先收到一封自動發送的確認信，有問題的話德協在當天或隔天就會再回信告知問題，如果到隔天都沒有收到其他回信的話，那就可以放心等快遞了，平均大約4-7天會送達。",
];
