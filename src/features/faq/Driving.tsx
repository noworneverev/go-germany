import { Link, Typography } from "@mui/material";

export default function Driving() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        短期停留(從入境德國開始算起的12個月以內)
      </Typography>
      <ul>
        <li>
          <Typography>
            台灣核發之一般普通駕照(須具備德文翻譯)或國際駕照得於入境德國後六個月內使用。例外情形，可向當地之駕照權責單位書面申請延長使用期限，於總停留時間不超過一年的情況下，最長可延六個月。
          </Typography>
        </li>
        <li>
          <Typography>
            使用國際駕照者，須同時出示台灣一般普通駕照始為有效。
          </Typography>
        </li>
        <li>
          <Typography>國際護照費用250台幣。</Typography>
        </li>
        <li>
          延長使用期限:
          <ul>
            <li>
              如果不會待超過12個月的話 可以去申請例外延長（Ausnahmegenehmigung
              nach § 29 Abs. 1 Fahrerlaubnis-Verordnung)
            </li>
            <li>
              不過以杜賓根來說，辦這個文件要80歐，也需要到監理站(Führerscheinstelle)預約時段辦理。
            </li>
            <li>
              法源參考文件:
              <Link
                href="https://reurl.cc/XVG6Z7"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/XVG6Z7
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <Typography variant="h4" gutterBottom>
        長期停留
      </Typography>
      <ul>
        <li>駐德代表處文件驗證14歐 換照37.5歐(杜賓根)</li>
        <li>
          如果是要在德國停留超過一年的期間，就不能申請延長或是在6個月後繼續用臺灣駕照，必須轉換成德國駕照，臺灣駕照會被收回。
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        必須提供下列文件：
      </Typography>
      <ol>
        <li>申請書</li>
        <li>我國有效護照正本</li>
        <li>符合護照格式之近期相片一張 (格式請洽主管機關)</li>
        <li>我國有效小客車普通駕駛執照 (非國際駕照)正本及影本一份</li>
        <li>
          駕照德文翻譯本
          <br /> 下列機構和個人允許提供德語翻譯：
          <ul>
            <li>德國的汽車俱樂部</li>
            <li>法院指定的一般宣誓口譯和筆譯</li>
            <li>德國海運船舶的船長</li>
            <li>駕照簽發國具國際認可的汽車俱樂部</li>
            <li>駕照簽發國的官方機構(駐德辦事處)</li>
          </ul>
        </li>
        <li>德國居住登記證明 (Meldebescheinigung)</li>
        <li>德國居留簽證正本及影本一份</li>
        <li>我國駕照仍有效之聲明</li>
        <li>規費 (請洽主管機關)</li>
      </ol>

      <Typography>
        德國監理單位有權依據每一位申請者的狀況要求提供良民證，或在相關事證證明下，為證實確時沒有駕車時所需之常識以及技能，監理單位甚至會要求要參加駕照考試。
      </Typography>
      <br />
      <ul>
        <li>
          駐德國台北代表處網頁資訊
          <ul>
            <li>
              <Link
                href="https://reurl.cc/gMG7QL"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/gMG7QL
              </Link>
            </li>
          </ul>
        </li>
        <li>
          ADAC 翻譯資訊
          <ul>
            <li>
              <Link
                href="https://reurl.cc/eOzx6j"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/eOzx6j
              </Link>
            </li>
          </ul>
        </li>
        <li>
          德國交通部的資訊
          <ul>
            <li>
              <Link
                href="https://reurl.cc/ZbeO13"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/ZbeO13
              </Link>
            </li>
          </ul>
        </li>
        <li>
          德國交通部簡體中文資訊
          <ul>
            <li>
              <Link
                href="https://reurl.cc/nONzZl"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                https://reurl.cc/nONzZl
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
