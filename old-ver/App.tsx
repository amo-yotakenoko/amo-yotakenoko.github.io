import { useState } from "react";
import "../index.css";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Thumbnail from "./Thumbnail";
import * as Application from "./page/Application";
import * as Model from "./page/Model";
import * as Hardware from "./page/Hardware";
import { History } from "./page/History";

import ThumbnailSection from "./ThumbnailsSection";
function OldApp() {
  var miniThumbnailCol = {
    xs: 12,
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 4,
  };
  // var miniThumbnailCol = { xs: 12, md: 12, lg: 6 };
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
  const [selectedName, setSelectedName] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <History show={showHistory} onHide={() => setShowHistory(false)} />

      <Container className="my-5">
        <Row className="align-items-center">
          <Col lg={5}>
            <h1 className="name display-4">武田和樹</h1>
          </Col>
          <Col lg={7}>
            <p className="lead">
              東京都立産業技術高等専門学校 ものづくり工学科 電子情報工学コース卒
              <br />
              誰も作ってないアプリを作りたいです
            </p>
            <Button variant="primary" onClick={() => setShowHistory(true)}>
              活動履歴等
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <ThumbnailSection
          title="Application"
          items={applications}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
        />
        <ThumbnailSection
          title="3Dmodel"
          items={models}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          colSize={miniThumbnailCol}
        />
        <ThumbnailSection
          title="Hardware"
          items={hardwares}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          colSize={miniThumbnailCol}
        />
      </Container>
    </>
  );
}

export default OldApp;
