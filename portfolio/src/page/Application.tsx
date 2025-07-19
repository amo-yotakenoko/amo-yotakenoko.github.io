import React from "react";
import { Container, Row, Col, Button, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tweet from "../Tweet";
import YouTube from "../Youtube";

export const Sotuken = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="title">
            <h1>
            Jetson Orin Nanoを使用した
              <br />
              作業台と作業者の
              <br />
              動作解析
            </h1>
          </div>
          <p>
            小型コンピューター <strong>Jetson Orin Nano</strong> と
            リアルタイム物体検出ライブラリ
            <strong>Ultralytics YOLO</strong>, <strong>ArUco</strong>
            などを使用し,以下の内容を行いました.
          </p>
          <ul>
            <li>
              <strong>ARマーカーを使用したアノテーション作業の簡略化</strong>
            </li>
            <li>
              <strong>
                2台のウェブカメラによる人と脚立の3次元座標データの取得
              </strong>
            </li>
            <li>
              <strong>複数条件での重心の移動の計測と比較</strong>
            </li>
          </ul>
          <a
            href="https://x.com/takenok58914745/status/1900828830010667036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              第30回
              電子情報通信学会東京支部学生会研究発表会においてジュニア奨励賞を受賞しました!!
            </strong>
          </a>
        
        </Col>
       
          <Col lg={6} xs={12}>
           
            <Tweet url="https://twitter.com/takenok58914745/status/1900828830010667036" />
          </Col>

        <Col xs={12} className="mt-4">
          {/* PDF to HTML content */}
          <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}>
            <h2 style={{ textAlign: "center", borderBottom: "2px solid #000", paddingBottom: "10px" }}>
              Jetson Orin Nanoを用いた作業台の作業者の動作解析
            </h2>

            <Row className="mt-4">
              <Col md={6}>
                <h3>背景と目的</h3>
                <ul>
                  <li>可搬式作業台において作業者が足を踏み外す事故が発生</li>
                  <li>リスクを比較するため定量的なリスク評価が必要</li>
                  <li>製品ごとの検出モデル開発が困難</li>
                </ul>
                <p className="mt-3">小型コンピューター上での簡易的な動作解析</p>
                <p>アノテーション作業の簡略化</p>
              </Col>
              <Col md={6}>
                <h3>脚立と人の姿勢を3次元復元</h3>
                <ul>
                  <li>脚立からのカメラの位置推定</li>
                  <li>キーポイントへ向かうベクトル同士の最接近点を求め3次元に復元</li>
                </ul>
                <img src="/images/sotuken/input.png" alt="入力された画像" className="img-fluid" />
                <p style={{ textAlign: "center" }}>図5 入力された画像</p>
              </Col>
            </Row>

            <Row className="mt-4 align-items-center">
              <Col md={4}>
                <h4>Jetson Orin Nano</h4>
                <p>NVIDIA社の小型コンピュータ</p>
                <p>サイズ:100×79×21mm</p>
                <img src="/images/sotuken/jetoson.jpg" alt="Jetson Orin Nano" className="img-fluid" />
                <p style={{ textAlign: "center" }}>図1 Jetson Orin Nano</p>
              </Col>
              <Col md={8}>
                <h4>Ultralytics YOLOv11</h4>
                <ul>
                  <li>バウンディングボックスの位置</li>
                  <li>クラス確率</li>
                </ul>
                <p>を直接予測</p>
                <p>⇨CNN 等の手法と比べ高速化</p>
                <p>・奥行き情報は得られない</p>
                <img src="/images/sotuken/yolo.png" alt="YOLOでの人の認識" className="img-fluid" />
                <p style={{ textAlign: "center" }}>図2 YOLO11での人の認識</p>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={12}>
                <h3>ARマーカーを用いたデータセット作成</h3>
                <ul>
                  <li>脚立の手前にARマーカーを置き10分程度様々な位置から撮影</li>
                  <li>複数ARマーカーを使用し安定性向上</li>
                </ul>
              </Col>
              <Col md={6}>
                <img src="/images/sotuken/ar.jpg" alt="ARマーカーによる自動アノテーション" className="img-fluid" />
                <p style={{ textAlign: "center" }}>図3 ARマーカーによる自動アノテーション</p>
              </Col>
              <Col md={6}>
                <img src="/images/sotuken_image_5.png" alt="脚立のキーポイント検出" className="img-fluid" />
                <p style={{ textAlign: "center" }}>図4 脚立のキーポイント検出</p>
                <p>1フレーム当たり68.6msで推論可能</p>
              </Col>
            </Row>

            <Row className="mt-4">
                <h3>重心の移動の測定</h3>
                <p>体の各部位ごとの質量比より重心の移動を測定する</p>
                <img src="/images/sotuken_image_6.png" alt="重心の移動の測定" className="img-fluid" />
            </Row>

            <Row className="mt-4">
              <Col md={12}>
                <h3>結論</h3>
                <ul>
                  <li>ARマーカーを使用した固定物のアノテーション作業の簡略化</li>
                  <li>リアルタイム処理では2秒程の遅延と1秒間に11枚程の処理が可能</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>

        {/* もし動画も表示したいなら下のコメントを外して使ってください */}
        {/*
          <Col xs={12} className="d-flex justify-content-between mt-4">
            <div style={{ width: '48%', textAlign: 'center' }}>
              <video controls style={{ width: '100%', borderRadius: 10 }}>
                <source src="/images/sotuken/枠アリ.mp4" type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
              <div style={{ marginTop: 5, fontSize: 14, color: '#555' }}>枠アリ</div>
            </div>
            <div style={{ width: '48%', textAlign: 'center' }}>
              <video controls style={{ width: '100%', borderRadius: 10 }}>
                <source src="/images/sotuken/枠無し.mp4" type="video/mp4" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
              <div style={{ marginTop: 5, fontSize: 14, color: '#555' }}>枠無し</div>
            </div>
          </Col>
          */}
      </Row>
    </Container>
  );
};

export const ThreeDBeadsAbout = () => {
  return (
    <div id="3DbeadsAbout">
      <Container>
        <Row>
          <Col lg={6} xs={12}>
            <div className="title">
              <h1>3Dbeads模様</h1>
            </div>
            <p>
              アイロンビーズは一般的に平面で作りますがうまく組み合うように図面を作ることで接着剤を使わず組み立てることができます。
              <br />
              3Dbeads模様(仮称)は平面を組み合わせ3Dモデルを作ると自動で組み立てられる様に調整し図面として出力するアプリです。
              <br />
              開発中!!
            </p>
          </Col>
          <Col lg={6} xs={12}>
            {/* <video
              className="embed-responsive-item video"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%" }}
            >
              <source src="/images/3Dbeads.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <Tweet url="https://twitter.com/takenok58914745/status/1609202791494606849" />
          </Col>
        </Row>

        {/* ボタンを使用する場合は以下をコメントアウト解除 */}
        {/* <Button variant="primary" className="moreButton" onClick={() => window.location.href = '3Dbeads.html'}>
          詳しく見る
        </Button> */}
      </Container>
    </div>
  );
};

export const VirtualRobot = () => {
  return (
    <Container className="py-5">
      {/* タイトル＋紹介文 */}
      <Row className="align-items-center">
        <Col lg={6} xs={12}>
          <h1 className="mb-3">VirtualRobot</h1>
          <p>
            「VirtualRobot」は自分でロボットを設計しプログラムを書くことでミッションを攻略するゲームです。
            ミッションをクリアするごとに使えるパーツが増えていき、それぞれ目的の違う12+2のミッションをクリアすることが目標で、制限のうちで攻略すると追加でスターが集められるやりこみ要素もあります。
          </p>
        </Col>
        <Col lg={6} xs={12} className="mt-3">
          <YouTube
            videoUrl="https://www.youtube.com/embed/5CGP4YijZ6k"
            autoplay={true}
          />
        </Col>
      </Row>

      {/* 表彰動画 */}
      {/* <Row className="mb-4 mt-4"> */}
      <Col xs={12}>
        <p className="mb-3">
          ゲームクリエイター甲子園 2022でU-18部門 総合賞
          佳作を頂き実況していただきました。
        </p>
      </Col>
      <Col lg={6} xs={12} className="mt-3 px-3">
        <YouTube videoUrl="https://www.youtube.com/embed/lR0mVyNdVUs?start=2050" />
      </Col>
      <Col lg={6} xs={12} className="mt-3">
        <YouTube videoUrl="https://www.youtube.com/embed/aD1M5IysgzQ" />
      </Col>
      <Col xs={12}>
        <p className="mt-3">
          <a
            href="https://gck-prod-uploads.s3.ap-northeast-1.amazonaws.com/pdfs/97a21aa7-e6eb-4303-b978-e3b07880f748.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            応募時の説明pdf
          </a>
        </p>
        <div className="day">2023/4/13</div>
      </Col>
      {/* </Row> */}

      {/* ブログ紹介 */}
      <Row className="mb-4">
        <Col xs={12}>
          <p>
            <a
              href="https://www.chickensblog.com/virtual-robot-2021/"
              target="_blank"
              rel="noopener noreferrer"
            >
              チキンズブログ様にワークショップイベントを行った様子を紹介していただきました。
            </a>
          </p>
          <div className="day">2022/4/7</div>
        </Col>
      </Row>

      {/* 詳しく見るボタン */}
      <Row className="mt-5">
        <Col xs={12} className="text-center">
          <Button
            variant="primary"
            className="moreButton"
            as={Link}
            to="/virtualrobot"
          >
            詳しく見る
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export const Pomoyo = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h1>PONPON模様</h1>
            <h3>ぽんぽん制作支援アプリ</h3>
            <p>
              PONPON模様はぽんぽんの巻き図を簡単に作ることのできるアプリです。
              <br />
              一般の本では既存の巻き図しか載っておらずオリジナルのぽんぽんを作ることは困難ですが、
              このアプリはオリジナルのぽんぽんを誰でも簡単に作ることができます。
            </p>
          </Col>

          <Col md={6}>
            <video
              className="w-100"
              autoPlay
              loop
              muted
              playsInline
              style={{ borderRadius: "12px" }}
            >
              <source
                src="/images/pomo_yo_description/pomo-yo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>

        <div className="mt-4 text-center">
          <Button variant="primary" className="moreButton">
            詳しく見る
          </Button>
        </div>
      </Container>
    </div>
  );
};

export const Amoyo = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <div className="title">
            <h1>
              <ruby>
                編模様<rp>（</rp>
                <rt>あもーよ</rt>
                <rp>）</rp>
                <br />
              </ruby>
            </h1>
            <h3>イラスト手編み支援アプリ</h3>
          </div>
          <p>
            <ruby>
              編模様<rp>（</rp>
              <rt>あもーよ</rt>
              <rp>）</rp>
            </ruby>
            はイラスト手編みを支援するアプリです。オリジナルの編み図を作り、色が変わるまでの数が表示されることで編み間違いを減らすことができます。自分だけの作品を、時間を忘れて編み続けてしまうほど楽しく簡単に作れるようになります。
          </p>
          <ul>
            <li>
              <a
                href="https://jr.mitou.org/projects/2019#amoyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                2019年度未踏ジュニア
              </a>{" "}
              で開発しました。
            </li>
            <li>
              <a
                href="https://vivita.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIVITA
              </a>{" "}
              でワークショップを行いました。
            </li>
            <li>アプリ甲子園2020でCygames賞を頂きました</li>
          </ul>
        </Col>

        <Col lg={6} xs={12}>
          <img
            src="images/siba.jpg"
            alt="編模様イメージ"
            style={{ maxWidth: "100%" }}
          />
        </Col>

        <Col lg={6} xs={12} className="mt-3">
          <YouTube videoUrl="https://www.youtube.com/embed/irYt3B7l8yg?si=vcrWUxv9iwcVQNr2" />
        </Col>
        <Col lg={6} xs={12} className="mt-3">
          <YouTube videoUrl="https://www.youtube.com/embed/jlTirMhZtMI?si=JfINkhomV8M_WaoG" />
        </Col>

        <Col lg={6} xs={12} className="mt-3">
          <YouTube videoUrl="https://www.youtube.com/embed/6nUVJZCijBw?si=-_75-e2PaOVEOkHS" />
        </Col>

        <Col xs={12} className="mt-3">
          <Button
            variant="primary"
            className="moreButton"
            as={Link}
            to="/amo-yo"
          >
            詳しく見る
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export const ColorSeggester = () => {
  return (
    <Container>
      <Row className="g-0">
        <Col lg={6} xs={12}>
          <div className="title">
            <h1>ColorSeggester</h1>
          </div>
          {/* <h4>マンセル色立体とM&S色彩調和論を使った色提案ウェブアプリ</h4> */}

          <p>
            カメラから取得した色をマンセル色立体上にプロットしムーンとスペンサーによる色彩調和論により美度を計算し調和する色を提案します。服選びで迷った時など使えます。
          </p>

          <ul>
            <li>
              <a
                href="https://hacku.yahoo.co.jp/cit2023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hack U 都立産技高専 2023
              </a>{" "}
              で開発し最優秀賞を頂きました
            </li>
          </ul>
        </Col>

        <Col lg={6} xs={12} className="mt-3 p-3">
          <YouTube videoUrl="https://www.youtube.com/embed/6QKCmR5b67k?si=VEkS_l5lrylOqPio&start=880" />
        </Col>
      </Row>
    </Container>
  );
};

export const PompomPattern = () => {
  return (
    <div id="pompom_patternAbout">
      <Container>
        <Row>
          <Col lg={12} xs={12}>
            <div className="title">
              <img
                src="images/pompom_title.jpg"
                alt="ぽんぽん設計図ジェネレーター"
                style={{ mixBlendMode: "multiply", width: "100%" }}
              />
              <h4>ぽんぽん設計図ジェネレーター</h4>
            </div>
            <p>
              一般的に毛糸を使ったパターン入りぽんぽん手芸はオリジナルの物を作ることは困難で、本を参考に作る場合が殆どですが、このアプリを使うことで簡単にオリジナルの設計図が作成でき、手芸の自由度を広げます。
            </p>
            <p>
              <a
                href="https://web.archive.org/web/20241120012206/https://news.yahoo.co.jp/articles/781e7971f3d9f99ad7edadd72c19bd7017bce83b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>
                  U-22プログラミングコンテストで経済産業大臣賞＜総合＞を頂きました(賞金50万円)
                </strong>
              </a>
            </p>
          </Col>

          <Col lg={6} xs={12}>
            <YouTube videoUrl="https://www.youtube.com/embed/BEMMV-svT_A?si=L8hwIvC2ShO7T-S6" />
          </Col>

          <Col lg={6} xs={12}>
            <YouTube videoUrl="https://www.youtube.com/embed/DCQ3mESzDf8?si=SjCW0j3fPwjd09S4" />
          </Col>

          <Col xs={12} className="mt-3 d-flex gap-2">
            <Button
              variant="primary"
              as={Link}
              to="/pompom_pattern"
            >
              詳しく見る
            </Button>
            <Button
              variant="primary"
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
    </div>
  );
};
