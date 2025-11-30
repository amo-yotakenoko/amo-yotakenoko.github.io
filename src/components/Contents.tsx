import React from "react";
import * as Application from "./page/Application";
import * as Model from "./page/Model";
import * as Hardware from "./page/Hardware";
import SectionTitle from "./CommonComponents";
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
    alt: "卒研",
    content: <Application.Sotuken />,
  },
  {
    id: "pompom_pattern",
    src: "/thumbnail/pompom_pattern.jpg",
    alt: "ポンポンパターン",

    content: <Application.PompomPattern />,
  },
  {
    id: "3Dbeads",
    src: "/thumbnail/3Dbeads.jpg",
    alt: "3Dビーズ",
    content: <Application.ThreeDBeadsAbout />,
  },
  {
    id: "colorSeggester",
    src: "/thumbnail/colorSeggester.jpg",
    alt: "カラーセグメンター",
    content: <Application.ColorSeggester />,
  },
  {
    id: "virtualrobot",
    src: "/thumbnail/virtualrobot.jpeg",
    alt: "バーチャルロボット",
    content: <Application.VirtualRobot />,
  },
  {
    id: "pomo-yo",
    src: "/thumbnail/pomo-yo.jpeg",
    alt: "ポモよ",
    content: <Application.Pomoyo />,
  },
  {
    id: "amo-yo",
    src: "/thumbnail/amo-yo.jpeg",
    alt: "アモよ",
    content: <Application.Amoyo />,
  },
];

const models = [
  {
    id: "hirumasika",
    src: "/thumbnail/hirumasika.jpg",
    alt: "昼間鹿",
    content: <Model.HirumaShika />,
  },
  {
    id: "motercar",
    src: "/thumbnail/motercar.jpg",
    alt: "モーターカー",
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
    alt: "安田",
    content: <Model.Yasuda />,
  },
  {
    id: "yohane",
    src: "/thumbnail/yohane.jpg",
    alt: "ヨハネ",
    content: <Model.Yohane />,
  },
  {
    id: "horibiru",
    src: "/thumbnail/horibiru.jpg",
    alt: "ホリビル",
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
    alt: "256フェス2",
    content: <Model.Fes256Avatar2 />,
  },
  {
    id: "VRCavater",
    src: "/thumbnail/VRCavater.jpg",
    alt: "VRアバター",
    content: <Model.VRCavater />,
  },
  {
    id: "256trolly",
    src: "/thumbnail/256trolly.jpeg",
    alt: "256トロリー",
    content: <Model.Trolly256 />,
  },
  {
    id: "shinomorivr",
    src: "/thumbnail/shinomorivr.jpeg",
    alt: "篠森VR",
    content: <Model.ShinomoriVR />,
  },
  {
    id: "256fes",
    src: "/thumbnail/256fes.jpeg",
    alt: "256フェス",
    content: <Model.Fes256Avatar1 />,
  },
  {
    id: "asio15",
    src: "/thumbnail/asio15.jpeg",
    alt: "アシオ15",
    content: <Model.Asio15 />,
  },
  {
    id: "asiopapercraft",
    src: "/thumbnail/asiopapercraft.jpeg",
    alt: "アシオペーパークラフト",
    content: <Model.Asiopapercraft />,
  },
];

const hardwares = [
  { id: "PC", src: "/thumbnail/PC.jpg", alt: "PC", content: <Hardware.PC /> },
  {
    id: "tap",
    src: "/thumbnail/tap.jpg",
    alt: "タップ",
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
