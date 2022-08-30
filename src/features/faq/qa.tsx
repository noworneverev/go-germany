import { Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import Acknowledgements from "./Acknowledgements";
import Driving from "./Driving";

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
];

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
    answer:
      "在台灣可以先申請N26，但開戶需要驗證護照，所以必須要在辦簽證前或拿回護照後再申請，地址先填德國宿舍，到達當地後再申請實體卡片。",
    link: <></>,
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
    answer: "「申請學校簽證」：947歐/月、「學生簽證」：861歐/月。(2022年)",
    link: <></>,
  },
  {
    index: "visa15",
    question: "有聽說限制帳戶要漲到934歐/月，我需要準備多少？",
    answer: "目前還是861歐/月，有改德協會公告",
    link: <></>,
  },
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
      
      本站作者經驗： 僅回傳9/24入境，最後給的效期為9/24-3/23。`,
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

export const qaRoutine = [
  {
    index: "routine1",
    question: "群組裡有沒有要去XXX的同學？",
    answer:
      "有創群的通常都會將連結放在社群「當我們同在德國🇩🇪」筆記本，沒看到的可以再到社群中詢問。",
    link: <></>,
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
    link: (
      <>
        <Typography>
          請依個人需要的流量、想去旅遊的國家來比較，特別注意的是英國、瑞士等，找網路近期的評價來選擇。
        </Typography>
        <ul>
          <li>
            台灣可買
            <ul>
              <li>
                Orange：
                <Link
                  href="https://reurl.cc/60Evd6"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/60Evd6
                </Link>
                <ul>
                  <li>個人推薦，可線上註冊變預付卡，目前也有活動</li>
                </ul>
              </li>
              <li>
                DJB：
                <Link
                  href="https://reurl.cc/V1jzYN"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/V1jzYN
                </Link>
              </li>
            </ul>
          </li>
          <li>
            德國可買
            <ul>
              <li>
                O2：
                <Link
                  href="https://reurl.cc/3YjX6L"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/3YjX6L
                </Link>
                <ul>
                  <li>
                    有限時方案 ~9/5 15歐15GB的預付卡 到05.09.之前都可以辦!
                  </li>
                </ul>
              </li>
              <li>
                ALDI TALK：
                <Link
                  href="https://reurl.cc/60Ever"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/60Ever
                </Link>
                <ul>
                  <li>ALDI超市就能買</li>
                </ul>
              </li>
              <li>
                Simon：
                <Link
                  href="https://reurl.cc/NRpQ3q"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/NRpQ3q
                </Link>
                <ul>
                  <li>Vodafone線路，8GB攜碼€8.99</li>
                </ul>
              </li>
              <li>
                fraenk：
                <Link
                  href="https://reurl.cc/7pe0Z1"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/7pe0Z1
                </Link>
                <ul>
                  <li>€10有5GB，有推薦碼的話好像變6GB</li>
                </ul>
              </li>
              <li>
                freenet-funk：
                <Link
                  href="https://reurl.cc/7ped91"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/7ped91
                </Link>
                <ul>
                  <li>有吃到飽</li>
                </ul>
              </li>
              <li>
                Lidl connect：
                <Link
                  href="https://reurl.cc/1mm4YW"
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                >
                  https://reurl.cc/1mm4YW
                </Link>
                <ul>
                  <li>
                    vodafone 空卡9.99€現在有特價～8/28 上官網買只要4.99€免運費
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <Typography>🔴 Tips：</Typography>
        <ul>
          <li>
            有些手機可支援E-SIM，可以將台灣的門號改為e-sim
            並開啟國際漫遊(非數據漫遊)，即可插歐洲sim卡還能收台灣簡訊及電話。
          </li>
          <li>有聽說telekom的網路好像台灣部分銀行app連不上，需要VPN。</li>
          <li>
            建議還是上網爬一下使用心得，不一定吃哪一家的電信訊號就很好，也要注意一下細部的規定及可使用的國家。
          </li>
        </ul>
      </>
    ),
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
];

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

export const qaDriving = [
  {
    index: "driving1",
    question: "德國駕照",
    answer: "",
    link: <Driving />,
  },
];

export const qaAcknowledgements = [
  {
    index: "acknowledgement1",
    question: "貢獻名單",
    answer: "",
    link: <Acknowledgements />,
  },
];

export const qa = [
  {
    id: "plane",
    title: "✈️ 飛機篇",
    data: qaPlane,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "account",
    title: "🏦 帳戶篇",
    data: qaAccount,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "visa",
    title: "🛂 簽證篇",
    data: qaVisa,
    tipsTitle: "🔴 簽證Tips：",
    tips: tipsVisa,
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "expatrio",
    title: "🧾 Expatrio篇",
    data: qaExpatrio,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "coracle",
    title: "🧾 Coracle Prime篇",
    data: qaCoracle,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "routine",
    title: "🚴‍♂️ 日常篇",
    data: qaRoutine,
    tipsTitle: "🔴 德國生活Tips：",
    tips: tipsRoutine,
    tipsTitle2: "👮‍♂️ 防盜Tips",
    tips2: tipsRoutine2,
  },
  {
    id: "wise",
    title: "💰 WISE篇",
    data: qaWise,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "an",
    title: "🏢 An(Anmeldung)篇",
    data: qaAn,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "insurance",
    title: "🏥 保險篇",
    data: qaInsurance,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "driving",
    title: "🚗 駕照篇",
    data: qaDriving,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
  {
    id: "acknowledgements",
    title: "❤️ 感謝名單",
    data: qaAcknowledgements,
    tipsTitle: "",
    tips: [],
    tipsTitle2: "",
    tips2: [],
  },
];

// https://www.coracle.de/?ref=yanyingliao
