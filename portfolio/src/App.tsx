import { useState } from "react";

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Thumbnail from "./Thumbnail";
function App() {
  var miniThumbnailCol = { xs: 12, md: 4, lg: 4 };
  return (
    <>
      <Container>
        <Row className="gx-0">
          <Col lg={6} xs={12}>
            <span className="name">武田和樹</span>
          </Col>
          <Col lg={6} xs={12} className="introduction">
            <ul>
              {/* <li>産技高専電子情報コース5年</li>  */}
              <li>手芸の支援アプリ等を趣味で開発しています。</li>
            </ul>
          </Col>
        </Row>
        <Row className=" g-0">
          <Col xs={12} className="title">
            <h1>Application</h1>
          </Col>
          <Thumbnail id="sotuken" src="/thumbnail/sotuken.jpg" alt="卒研" />

          <Thumbnail
            id="pompom_pattern"
            src="/thumbnail/pompom_pattern.jpg"
            alt="ポンポンパターン"
          />

          <Thumbnail id="3Dbeads" src="/thumbnail/3Dbeads.jpg" alt="3Dビーズ" />

          <Thumbnail
            id="colorSeggester"
            src="/thumbnail/colorSeggester.jpg"
            alt="カラーセグメンター"
          />

          <Thumbnail
            id="virtualrobot"
            src="/thumbnail/virtualrobot.jpeg"
            alt="バーチャルロボット"
          />

          <Thumbnail id="pomo-yo" src="/thumbnail/pomo-yo.jpeg" alt="ポモよ" />

          <Thumbnail id="amo-yo" src="/thumbnail/amo-yo.jpeg" alt="アモよ" />
        </Row>

        <Row className=" g-0">
          <Col xs={12} className="title">
            <h1>3Dmodel</h1>
          </Col>
          <Thumbnail
            id="hirumasika"
            src="/thumbnail/hirumasika.jpg"
            colSize={miniThumbnailCol}
            alt="昼間鹿"
          />
          <Thumbnail
            id="motercar"
            src="/thumbnail/motercar.jpg"
            colSize={miniThumbnailCol}
            alt="モーターカー"
          />
          <Thumbnail
            id="myounitikan"
            src="/thumbnail/myounitikan.jpg"
            colSize={miniThumbnailCol}
            alt="妙位置間"
          />
          <Thumbnail
            id="yasuda"
            src="/thumbnail/yasuda.jpg"
            colSize={miniThumbnailCol}
            alt="安田"
          />
          <Thumbnail
            id="yohane"
            src="/thumbnail/yohane.jpg"
            colSize={miniThumbnailCol}
            alt="ヨハネ"
          />
          <Thumbnail
            id="horibiru"
            src="/thumbnail/horibiru.jpg"
            colSize={miniThumbnailCol}
            alt="ホリビル"
          />
          <Thumbnail
            id="edoya"
            src="/thumbnail/edoya.jpeg"
            colSize={miniThumbnailCol}
            alt="江戸屋"
          />
          <Thumbnail
            id="256fes2"
            src="/thumbnail/256fes2.jpeg"
            colSize={miniThumbnailCol}
            alt="256フェス2"
          />
          <Thumbnail
            id="VRCavater"
            src="/thumbnail/VRCavater.jpg"
            colSize={miniThumbnailCol}
            alt="VRアバター"
          />
          <Thumbnail
            id="256trolly"
            src="/thumbnail/256trolly.jpeg"
            colSize={miniThumbnailCol}
            alt="256トロリー"
          />
          <Thumbnail
            id="shinomorivr"
            src="/thumbnail/shinomorivr.jpeg"
            colSize={miniThumbnailCol}
            alt="篠森VR"
          />
          <Thumbnail
            id="256fes"
            src="/thumbnail/256fes.jpeg"
            colSize={miniThumbnailCol}
            alt="256フェス"
          />
          <Thumbnail
            id="asio15"
            src="/thumbnail/asio15.jpeg"
            colSize={miniThumbnailCol}
            alt="アシオ15"
          />
          <Thumbnail
            id="asiopapercraft"
            src="/thumbnail/asiopapercraft.jpeg"
            colSize={miniThumbnailCol}
            alt="アシオペーパークラフト"
          />
        </Row>

        <Row className=" g-0">
          <Col xs={12} className="title">
            <h1> Hardware</h1>
          </Col>
          <Thumbnail
            id="PC"
            src="/thumbnail/PC.jpg"
            colSize={miniThumbnailCol}
            alt="PC"
          />
          <Thumbnail
            id="tap"
            src="/thumbnail/tap.jpg"
            colSize={miniThumbnailCol}
            alt="タップ"
          />
        </Row>
      </Container>
    </>
  );
}

export default App;
