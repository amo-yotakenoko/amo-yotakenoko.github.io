import React from "react";
import * as Application from "./page/Application";
import * as Model from "./page/Model";
import * as Hardware from "./page/Hardware";
import { SectionTitle } from "./CommonComponents";
import AnimatedGrid from "./AnimatedGrid";

// Define props type for Contents component
interface ContentsProps {
  setModalContent: (content: React.ReactNode) => void;
}

const applications = [
  {
    id: "virtualRobot4",
    src: "/thumbnail/virtualRobot4.jpg",
    alt: "BlenderとScratchを使用する仮想ロボット開発メタバース",
    content: <Application.VirtualRobot4 />,

    explanation: (
      <>
        🕹️Scratch Day 2025 in Tokyoで青山大学宮田先生協力のもと展示を行いました
        <br />
        🕹️Scratch Conference 2025 Expo Booth展示(オンライン)
      </>
    ),
  },
  {
    id: "sotuken",
    src: "/thumbnail/sotuken.jpg",
    alt: "Jetson Orin Nanoを使用した作業台と作業者の動作解析",
    content: <Application.Sotuken />,
    explanation: (
      <>
        <div>🏟️ GOP FAIR 2024展示</div>
        <div>
          🏆 第30回 電子情報通信学会東京支部学生会研究発表会 ジュニア奨励賞
        </div>
      </>
    ),
  },
  {
    id: "pompom_pattern",
    src: "/thumbnail/pompom_pattern.jpg",
    alt: "pompom pattern",

    content: <Application.PompomPattern />,
    explanation: (
      <>
        <div className="font-bold">
          👑 U - 22プログラミングコンテスト 経済産業大臣賞＜総合＞
        </div>
        <div>
          🪢 JimoKidsフェスティバル2025 動物ぽんぽんを作ろうワークショップ
        </div>
      </>
    ),
  },
  {
    id: "3Dbeads",
    src: "/thumbnail/3Dbeads.jpg",
    alt: "3Dbeads模様",
    content: <Application.ThreeDBeadsAbout />,

    explanation: (
      <>
        <div>🎲アイロンビーズ用3DCAD</div>
      </>
    ),
  },
  {
    id: "colorSeggester",
    src: "/thumbnail/colorSeggester.jpg",
    alt: "colorSeggester",
    content: <Application.ColorSeggester />,
    explanation: (
      <>
        <div>👑 Hack U 都立産技高専 2023 最優秀賞</div>
      </>
    ),
  },
  {
    id: "virtualrobot",
    src: "/thumbnail/virtualrobot.jpeg",
    alt: "VirtualRobot",
    content: <Application.VirtualRobot />,
    explanation: (
      <>
        <div>🥉 ゲームクリエイター甲子園 2022 U-18部門 総合賞 佳作</div>
        <div>🥉 Unity ユースクリエイターカップ 2022 チャレンジ賞</div>
        <div>💪 コロナ渦でオンラインロボットワークショップを開催</div>
      </>
    ),
  },
  {
    id: "pomo-yo",
    src: "/thumbnail/pomo-yo.jpeg",
    alt: "POMPOM模様",
    content: <Application.Pomoyo />,
    explanation: (
      <>
        <div>🏅 WISS 2020 萌芽発表賞</div>
      </>
    ),
  },
  {
    id: "amo-yo",
    src: "/thumbnail/amo-yo.jpeg",
    alt: "編模様 イラスト手編み支援アプリ",
    content: <Application.Amoyo />,
    explanation: (
      <>
        <div className="font-bold">
          💪 2019年度未踏ジュニア採択 スーパークリエータ認定
        </div>
        <div>👑 信州未来アプリコンテスト0(ZERO) 長野県知事賞</div>
        <div>🏅 アプリ甲子園2020 Cygames賞</div>
        <div>🥉 PCNこどもプロコン2019-2020 ココロエデュケーションラボ賞</div>
      </>
    ),
  },
];

const models = [
  {
    id: "hirumasika",
    src: "/thumbnail/kameoka.jpg",
    alt: "旧亀岡家住宅",
    content: <Model.Kameoka />,
  },
  {
    id: "hirumasika",
    src: "/thumbnail/hirumasika.jpg",
    alt: "比留間歯科医院",
    content: <Model.HirumaShika />,
  },
  {
    id: "motercar",
    src: "/thumbnail/motercar.jpg",
    alt: "酒井製作所製 モーターカー",
    content: <Model.MotercarAbout />,
  },
  {
    id: "myounitikan",
    src: "/thumbnail/myounitikan.jpg",
    alt: "明日館",
    content: <Model.Myounitikan />,
  },
  {
    id: "yasuda",
    src: "/thumbnail/yasuda.jpg",
    alt: "昭和初期の交番",
    content: <Model.Yasuda />,
  },
  {
    id: "yohane",
    src: "/thumbnail/yohane.jpg",
    alt: "聖ヨハネ教会堂(明治村)",
    content: <Model.Yohane />,
  },
  {
    id: "horibiru",
    src: "/thumbnail/horibiru.jpg",
    alt: "堀ビル",
    content: <Model.Horibiru />,
  },
  {
    id: "edoya",
    src: "/thumbnail/edoya.jpeg",
    alt: "江戸屋",
    content: <Model.Edoya />,
  },
  {
    id: "256fes2",
    src: "/thumbnail/256fes2.jpeg",
    alt: "256fesアバター",
    content: <Model.Fes256Avatar2 />,
  },
  {
    id: "VRCavater",
    src: "/thumbnail/VRCavater.jpg",
    alt: "VRChat用アバター",
    content: <Model.VRCavater />,
  },
  {
    id: "256trolly",
    src: "/thumbnail/256trolly.jpeg",
    alt: "256fes用大分鉱業上部軌道8t電気機関車とグランビー鉱車",
    content: <Model.Trolly256 />,
  },
  {
    id: "shinomorivr",
    src: "/thumbnail/shinomorivr.jpeg",
    alt: "VRによる美術鑑賞拡張のケーススタディ",
    content: <Model.ShinomoriVR />,
    explanation: (
      <>
        <div>
          📃 第28回バーチャルリアリティ学会大会にて論文発表（東京大学大学院
          情報学環・学際情報学府 特任研究員 倉本大資先生 共著）
        </div>
        <div>　- モデリング担当</div>
      </>
    ),
  },
  {
    id: "256fes",
    src: "/thumbnail/256fes.jpeg",
    alt: "256fesアバター",
    content: <Model.Fes256Avatar1 />,
  },
  {
    id: "asio15",
    src: "/thumbnail/asio15.jpeg",
    alt: "足尾銅山No47電気機関車",
    content: <Model.Asio15 />,
  },
  {
    id: "asiopapercraft",
    src: "/thumbnail/asiopapercraft.jpeg",
    alt: "足尾A型のNゲージ用ペーパークラフト",
    content: <Model.Asiopapercraft />,
  },
];

const hardwares = [
  {
    id: "PC",
    src: "/thumbnail/PC.jpg",
    alt: "自作PC",
    content: <Hardware.PC />,
  },
  {
    id: "tap",
    src: "/thumbnail/tap.jpg",
    alt: "遠隔操作電源タップマシン",
    content: <Hardware.Tap />,
  },
  {
    id: "lightTracker",
    src: "/thumbnail/lightTracker.jpg",
    alt: "光学式モーキャプ自作(失敗)",
    content: <Hardware.LightTracker />,
  },
];

const Contents: React.FC<ContentsProps> = ({ setModalContent }) => {
  return (
    <>
      <SectionTitle title="Application" />
      <AnimatedGrid
        items={applications}
        colsClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
        setModalContent={setModalContent}
      />

      <SectionTitle title="3D Model" />
      <AnimatedGrid
        items={models}
        colsClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        setModalContent={setModalContent}
      />

      <SectionTitle title="Hardware" />
      <AnimatedGrid
        items={hardwares}
        colsClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        setModalContent={setModalContent}
      />
    </>
  );
};

export default Contents;
