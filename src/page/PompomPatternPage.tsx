import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import YouTube from "../Youtube";
import Tweet from "../Tweet";

export const PompomPatternPage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} className="title text-center">
          <Image src="/images/pompom_pattern/pompom_icon_wide.png" fluid />
        </Col>

        <Col xs={12} className="content">
          <p>
            一般的に毛糸を使ったパターン入りぽんぽん手芸はオリジナルの物を作ることは困難で、本を参考に作る場合が殆どですが、このアプリを使うことで簡単にオリジナルの設計図が作成でき、手芸の自由度を広げます。
          </p>
        </Col>

        {/* First video with description */}
        <Col md={6}>
          <div style={{ width: "100%", aspectRatio: "16/9" }}>
            <YouTube videoUrl="https://www.youtube.com/embed/DCQ3mESzDf8?si=5hMUAyw9zWVjDUck" />
          </div>
          <p className="text-center mt-2">紹介動画</p>
        </Col>

        {/* Second video with description */}
        <Col md={6}>
          <div style={{ width: "100%", aspectRatio: "16/9" }}>
            <YouTube videoUrl="https://www.youtube.com/embed/8UGOPJeS63Q?si=H5iUA8yoQNRWLgGc" />
          </div>
          <p className="text-center mt-2">カメラからデザイン、AI巻きカウンタの説明</p>
        </Col>

        <Col xs={12} className="content mt-4">
          <ul>
            <li>主にReact, Typescriptを使用して実装</li>
            <li>使用したライブラリ等
              <ul>
                <li>3D表示: Three.js</li>
                <li>カラーパレット: React Color</li>
                <li>デザインテンプレート: Bootstrap</li>
                <li>アイコン: Bootstrap Icons, イラストレーション・アイコン素材（デジタル庁）, Affinity Designerを用いて作成</li>
                <li>骨格推定:MediaPipe Hands</li>
                <li>ホスティング: GitHub Pages</li>
                <li>保存領域はLocalStorage (別途画像として外部にエクスポート可能)</li>
              </ul>
            </li>
            <li>PWAアプリとして開発しているため、ダウンロードせずに試しに使ってみる、気に入ったらインストールして外でもデータ通信せずに使うといった使い方が可能です。</li>
          </ul>
        </Col>

        <Col xs={12} className="content mt-4">
          <h2>ぽんぽんとは</h2>
          <p>
            ぽんぽんやぼんぼんとよばれる毛糸を使った手芸をご存じでしょうか?
            毛糸と百均等でも売っている専用の器具や厚紙などを使って作ることができます
          </p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/展開.gif" style={{ width: "80%" }} fluid />
            <div>ぽんぽんの構造のイメージ</div>
          </div>
          <p className="mt-3">
            このぽんぽんに巻く際、途中で毛糸の色を変えることでぽんぽんに模様を入れることができます。
            しかし所望のデザインを得るために,予めどのような順番でどの色を巻けばいいかという判断は非直観的であり、本アプリではGUI 上でぽんぽんの完成図を設計することで,それを作るための巻き図を出力します。
          </p>

          <h2>編集画面</h2>
          <p>編集画面では3Dのぽんぽんに色を塗っていきます。</p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/edit.jpg" style={{ width: "80%" }} fluid />
            <div>編集画面</div>
          </div>

          <h2>設計図画面</h2>
          <p>
            設計図画面どの色を何回何段巻くかが表示されます。巻いたところをタップすることで済のマークが表示されます。また左上に残りの合計巻き数、現在の進捗率が表示されます。
          </p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/設計図.png" style={{ width: "50%" }} fluid />
            <div>設計図</div>
          </div>

          <h2>共有</h2>
          <p>
            設計図画面の右上を押すことで設計図の情報の入った巻き図の画像をダウンロードすることができ、ホーム画面の「画像から読み込み」
            ボタンから読み込んで編集することが可能です。その為各種SNS等で画像として巻き図の画像を装飾の仕方と共に共有することができます
          </p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/共有.png" style={{ width: "80%" }} fluid />
            <div>設計図のエクスポート</div>
          </div>

          <h2>工夫した点</h2>
          <p>
            ぽんぽんの緯度にあたる角度を等間隔にした場合曲に近い毛糸の面積が小さくなってしまう為,表面積が均一になるように調整しました
          </p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/面積.png" style={{ width: "80%" }} fluid />
            <Image src="/images/pompom_pattern/面積2.png" style={{ width: "80%" }} fluid />
            <div>毛糸の等表面積化</div>
          </div>

          <h2>経緯</h2>
          <p>
            過去に Google Play、App Store で Unity で開発していたものを公開していましたが、Developer
            ライセンスが切れてしまい、長らく放置していたところ、何人かからこのアプリを使いたいという連絡をいただきました。それを受けて、プログラムをゼロから書き直し、UI なども再設計しました。
          </p>

          <h2>使っていただきました</h2>
          <p>画面は古いバージョンになります <a href="https://x.com/den_xap/status/1843099282930597949" target="_blank" rel="noopener noreferrer">掲載許可を頂きました</a></p>
          <Tweet url="https://twitter.com/den_xap/status/1663389246592548864" />
          <Tweet url="https://twitter.com/den_xap/status/1617379474773016578" />
          <Tweet url="https://twitter.com/den_xap/status/1605823096597860353" />

          <h2>最後に</h2>
          <p>本アプリによって毛糸ぽんぽんを使った手芸の自由度が広がれば良いなと思っています</p>
          <div style={{ textAlign: "center" }}>
            <Image src="/images/pompom_pattern/最後に.png" style={{ width: "80%" }} fluid />
            <div>完成したぽんぽんたち</div>
          </div>
        </Col>

        <Col xs={12} className="content mt-4 text-center">
          <Button
            variant="primary"
            className="tryButton"
            onClick={() =>
              (window.location.href =
                "https://amo-yotakenoko.github.io/pompom_pattern_web/")
            }
          >
            使ってみる
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
