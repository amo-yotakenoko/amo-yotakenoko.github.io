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
  },
  {
    id: "sotuken",
    src: "/thumbnail/sotuken.jpg",
    alt: "Jetson Orin Nanoを使用した作業台と作業者の動作解析",
    content: <Application.Sotuken />,
  },
  {
    id: "pompom_pattern",
    src: "/thumbnail/pompom_pattern.jpg",
    alt: "pompom pattern",

    content: <Application.PompomPattern />,
  },
  {
    id: "3Dbeads",
    src: "/thumbnail/3Dbeads.jpg",
    alt: "3Dbeads模様",
    content: <Application.ThreeDBeadsAbout />,
  },
  {
    id: "colorSeggester",
    src: "/thumbnail/colorSeggester.jpg",
    alt: "colorSeggester",
    content: <Application.ColorSeggester />,
  },
  {
    id: "virtualrobot",
    src: "/thumbnail/virtualrobot.jpeg",
    alt: "VirtualRobot",
    content: <Application.VirtualRobot />,
  },
  {
    id: "pomo-yo",
    src: "/thumbnail/pomo-yo.jpeg",
    alt: "POMPOM模様",
    content: <Application.Pomoyo />,
  },
  {
    id: "amo-yo",
    src: "/thumbnail/amo-yo.jpeg",
    alt: "編模様 イラスト手編み支援アプリ",
    content: <Application.Amoyo />,
  },
];

const models = [
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

      <SectionTitle title="Hardwares" />
      <AnimatedGrid
        items={hardwares}
        colsClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        setModalContent={setModalContent}
      />
    </>
  );
};

export default Contents;
