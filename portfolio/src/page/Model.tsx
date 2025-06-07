import React from "react";
import { Container, Row, Col, Button, Ratio } from "react-bootstrap";
import Tweet from "../Tweet";
import YouTube from "../Youtube";

export const Asiopapercraft = () => (
  <Container>
    <div className="title">
      <h1>足尾A型のNゲージ用ペーパークラフト</h1>
    </div>
    <div className="row">
      <div className="col-md-5">
        Export-Paper-Model-from-Blenderアドオンで作った足尾銅山の電気機関車のペーパークラフトです。
        <br />
        Nゲージのチビ客車用動力ユニットサイズにしてあります。
        <br />
        不器用なのでプラレールぐらいの大きさじゃないと難しいですね
        <br />
      </div>
      <div className="col-md-7">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/asiomotoneta2.jpeg"
              style={{ maxWidth: "100%" }}
            />
            <p>1.元ネタ</p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/asiomodel.jpeg"
              style={{ maxWidth: "100%" }}
            />
            <p>2.モデリング</p>
          </div>
          <div className="col-lg-6 col-12">
            <img src="images/blender/paper.jpeg" style={{ maxWidth: "100%" }} />
            <p>3.印刷(予備含め3台分)</p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/papermodel.jpeg"
              style={{ maxWidth: "100%" }}
            />
            <p>4.組み立て</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export const Trolly256 = () => (
  <Container>
    <div className="title">
      <h1>大分鉱業上部軌道8t電気機関車とグランビー鉱車</h1>
    </div>
    <div className="row">
      <div className="col-md-5">
        <ul>
          <li>背景含め256ポリゴン</li>
          <li>テクスチャ:256*256px</li>
          <li>石灰石は物理演算で落ちます</li>
        </ul>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/HL8coJ9CY_c?si=wtQfW8pjq6yJ2yrZ&amp;start=46"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="col-md-7">
        <video controls autoPlay muted className="video">
          <source src="images/blender/256trolly.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </Container>
);

export const Fes256Avatar1 = () => (
  <Container>
    <div className="row">
      <div className="col-md-5">
        <div className="title">
          <h1>256fesアバター</h1>
        </div>
        <ul>
          <li>256ポリゴン</li>
          <li>テクスチャ:256*256px</li>
        </ul>
        で作ったアバターです
        <img
          src="images/blender/256fesvrc.jpeg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="col-md-7">
        <video className="embed-responsive-item video" autoPlay loop muted>
          <source src="images/blender/256fes2023.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </Container>
);

export const Fes256Avatar2 = () => (
  <Container>
    <div className="row">
      <div className="col-md-5">
        <div className="title">
          <h1>256fesアバター</h1>
        </div>
        <ul>
          <li>256ポリゴン</li>
          <li>テクスチャ:256*256px</li>
        </ul>
        で作ったアバターです
      </div>
      <div className="col-md-7">
        <video className="embed-responsive-item video" autoPlay loop muted>
          <source src="images/blender/256fes2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </Container>
);

export const SkyMosaic = () => (
  <Container>
    <div className="row">
      <div className="col-lg-6 col-12">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <h1>足尾銅山No47電気機関車</h1>
            </div>
            <p>
              足尾銅山の機関車が格好良かったのでblenderで作りました。リジッドボディとモーターで車輪を回転させて進んでいるので線路をうまく作らないと脱線します。
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/asiowire.jpeg"
              className="img-fluid thumbnail"
            />
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/asiomotoneta.jpeg"
              className="img-fluid thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/asiomovie.gif"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  </Container>
);

export const ComipoTest = () => (
  <Container>
    <div className="title">
      <h1>VRによる美術鑑賞拡張のケーススタディ</h1>
      <h3>-篠田守男彫刻のVRプレビューの制作-</h3>
    </div>
    <div className="row">
      <div className="col-lg-6 col-12">
        彫刻家篠田守男氏のTC8905X NIIHARI
        ProjectⅠとW8323をblenderで再現しました。
        <br />
        第28回バーチャルリアリティ学会大会で東京大学 大学院情報学環
        特任研究員の倉本 大資先生と共著の論文においてモデリングを担当しました。
        <br />
        <a
          href="https://conference.vrsj.org/ac2023/program/doc/3B2-08.pdf"
          target="_blank"
        >
          VRによる美術鑑賞拡張のケーススタディ
          -篠田守男彫刻のVRプレビューの制作-
        </a>
      </div>
      <div className="col-lg-6 col-12">
        <iframe
          width="560"
          height="500"
          className="video"
          src="https://www.youtube.com/embed/TmeBUlVBFxs?si=cYjudATfteLlRcpb&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </Container>
);

export const HirumaShika = () => (
  <Container>
    <div className="row">
      <div className="col-md-12">
        <div className="title">
          <h1>比留間歯科医院</h1>
          <h4>上野にある歯医者</h4>
        </div>
      </div>
      <div className="col-md-12">
        <img
          src="images/thumbnail/hirumasika.jpg"
          style={{ maxWidth: "100%" }}
          alt="比留間歯科医院"
        />
      </div>
    </div>
  </Container>
);

export const MotercarAbout = () => (
  <Container>
    <div className="row">
      <div className="col-md-12">
        <div className="title">
          <h1>酒井製作所製 モーターカー</h1>
          <h4>赤沢森林鉄道記念館 No.5</h4>
          <h4>木祖村郷土館 No.20</h4>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <img
          src="images/thumbnail/motercar.jpg"
          style={{ maxWidth: "100%" }}
          alt="酒井製作所製 モーターカー"
        />
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/moter_rear.png"
          style={{ maxWidth: "100%" }}
          alt="モーターカー後部"
        />
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/motercarTexture.jpg"
          style={{ maxWidth: "100%" }}
          alt="モーターカー テクスチャ"
        />
        <p>No.20は本物の写真をテクスチャとして貼り付けています。</p>
      </div>

      <div className="col-lg-6 col-12">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JEWLjZh5p48?si=MVACEuEo97Lg1YnQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ flexGrow: 1 }}
        />
      </div>
    </div>
  </Container>
);

export const Myounitikan = () => (
  <Container>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="title">
          <h1>明日館</h1>
          <h4>正面のみです</h4>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <img
          src="images/thumbnail/myounitikan.jpg"
          id="edoya"
          style={{ maxWidth: "100%" }}
          alt="明日館の正面写真"
        />
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/myounitikan1.jpg"
          style={{ maxWidth: "100%" }}
          alt="明日館モデリング写真"
        />
        <p>
          としまっこフェスのお手伝いとして参加させていただきました。
          <br />
          実物見ながらモデリング出来るなんて最高
        </p>
      </div>
    </div>
  </Container>
);

export const Yasuda = () => (
  <Container>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="title">
          <h1>昭和初期の交番</h1>
          <h4>交番の後診療所となって博物館になった後放置されています</h4>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <img
          src="images/thumbnail/yasuda.jpg"
          style={{ maxWidth: "100%" }}
          alt="昭和初期の交番"
        />
        <p>瓦にメッシュを割きすぎているので改善点です</p>
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/yasudawire.jpg"
          style={{ maxWidth: "100%" }}
          alt="交番のワイヤーフレーム"
        />
        <p>瓦にメッシュを割きすぎているので改善点です</p>
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/yasudatexture.jpg"
          style={{ maxWidth: "100%" }}
          alt="交番のテクスチャ"
        />
        <p>テクスチャを使ってペンキを剝がしたりしてます</p>
      </div>
    </div>
  </Container>
);

export const Yohane = () => (
  <Container>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="title">
          <h1>聖ヨハネ教会堂(明治村)</h1>
          <h4>製作時間:約17.5時間</h4>
        </div>
      </div>

      <div className="col-12 d-none d-lg-block">
        <img
          src="images/thumbnail/yohane.jpg"
          style={{ maxWidth: "100%" }}
          alt="聖ヨハネ教会堂のサムネイル"
        />
      </div>

      <div className="col-lg-6 col-12">
        <img
          src="images/blender/yohane.gif"
          style={{ maxWidth: "100%" }}
          alt="聖ヨハネ教会堂のGIF"
        />
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/grass.gif"
          style={{ maxWidth: "100%" }}
          alt="草のGIF"
        />
      </div>
    </div>
  </Container>
);

export const Horibiru = () => (
  <Container>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="title">
          <h1>堀ビル</h1>
          <h4>東京建築祭で見学</h4>
        </div>
        製作時間:約6.5時間
      </div>
      <div className="col-12 d-none d-lg-block">
        <img
          src="images/thumbnail/horibiru.jpg"
          style={{ maxWidth: "100%" }}
          alt="堀ビルのサムネイル"
        />
      </div>
      <div className="col-lg-6 col-12">
        <img
          src="images/blender/horibiru.png"
          style={{ maxWidth: "100%" }}
          alt="堀ビルの画像"
        />
      </div>
      <div className="col-lg-6 col-12">
        <iframe
          src="https://www.youtube.com/embed/SuLT6YLtjeo?si=yyRdWxr5gp33nvAz"
          title="YouTube video player"
          frameBorder="0"
          width="100%"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      タイムラプスをとりました
    </div>
  </Container>
);

export const Edoya = () => (
  <Container>
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="title">
          <h1>江戸屋</h1>
          <h4>東京建築祭で見学</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <img
            src="images/thumbnail/edoya.jpeg"
            id="edoya"
            style={{ maxWidth: "100%" }}
            alt="江戸屋サムネイル"
          />
        </div>

        <div className="col-7">
          <img
            src="images/blender/edoyawire.png"
            style={{ maxWidth: "100%" }}
            alt="江戸屋ワイヤーフレーム"
          />
        </div>

        <div className="col-5">
          <img
            src="images/blender/edoya_curtain.png"
            style={{ maxWidth: "100%" }}
            alt="江戸屋カーテン画像"
          />
          <video
            controls
            autoPlay
            muted
            className="video"
            style={{ maxWidth: "100%" }}
          >
            <source src="images/blender/edoya_curtain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          カーテンはクロスシミュレーションで作ってます
        </div>
      </div>
    </div>
  </Container>
);

export const Asio15 = () => (
  <div className="row">
    <div className="col-lg-6 col-12">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h1>足尾銅山No47電気機関車</h1>
          </div>
          <p>
            足尾銅山の機関車が格好良かったのでblenderで作りました。リジッドボディとモーターで車輪を回転させて進んでいるので線路をうまく作らないと脱線します。
          </p>
        </div>
        <div className="col-lg-6 col-12">
          <img
            src="images/blender/asiowire.jpeg"
            className="img-fluid thumbnail"
            alt="足尾銅山 No47 電気機関車 ワイヤーフレーム"
          />
        </div>
        <div className="col-lg-6 col-12">
          <img
            src="images/blender/asiomotoneta.jpeg"
            className="img-fluid thumbnail"
            alt="足尾銅山 No47 電気機関車 モーターネタ"
          />
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-12">
      <img
        src="images/blender/asiomovie.gif"
        style={{ maxWidth: "100%", height: "auto" }}
        alt="足尾銅山 No47 電気機関車 動画"
      />
    </div>
  </div>
);

export const ShinomoriVR = () => (
  <div id="shinomorivrAbout">
    <div className="title">
      <h1>
        VRによる美術鑑賞拡張のケーススタディ <br />
        <h3>-篠田守男彫刻のVRプレビューの制作-</h3>
      </h1>
    </div>
    <div className="row">
      <div className="col-lg-6 col-12">
        彫刻家篠田守男氏のTC8905X NIIHARI
        ProjectⅠとW8323をblenderで再現しました。
        <br />
        第28回バーチャルリアリティ学会大会で東京大学 大学院情報学環
        特任研究員の倉本 大資先生と共著の論文においてモデリングを担当しました。
        <br />
        <a
          href="https://conference.vrsj.org/ac2023/program/doc/3B2-08.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          VRによる美術鑑賞拡張のケーススタディ
          <br />
          -篠田守男彫刻のVRプレビューの制作-
        </a>
      </div>
      <div className="col-lg-6 col-12">
        <iframe
          width="560"
          height="500"
          className="video"
          src="https://www.youtube.com/embed/TmeBUlVBFxs?si=cYjudATfteLlRcpb&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export const VRCavater = () => (
  <div id="VRCavaterAbout">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="title">
            <h1>VRC用アバター</h1>
            <h4>作り中</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src="images/blender/hairnode.jpg"
              style={{ maxWidth: "100%" }}
              alt="髪の毛のシェーダーノード"
            />
            <p>髪の毛はシェーダーノードで書いてます</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
