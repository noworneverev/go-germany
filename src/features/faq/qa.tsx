import { qaPlane } from "./qaPlane";
import { qaAccount } from "./qaAccount";
import { qaAcknowledgements } from "./qaAcknowledgements";
import { qaAn } from "./qaAn";
import { qaCoracle } from "./qaCoracle.";
import { qaDriving } from "./qaDriving";
import { qaExpatrio } from "./qaExpatrio";
import { qaInsurance } from "./qaInsurance";
import { qaRoutine, tipsRoutine, tipsRoutine2 } from "./qaRoutine";
import { qaVisa, tipsVisa } from "./qaVisa";
import { qaWise } from "./qaWise";

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
