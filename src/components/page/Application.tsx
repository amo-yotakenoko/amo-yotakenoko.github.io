import React from "react";
import { Container, Row, Col, Button, Ratio, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import Tweet from "../Tweet";
import YouTube from "../Youtube";

export const Sotuken = () => {
  return (
    <Container className="py-5">
      {/* Title Section */}
      <Row className="pb-5 align-items-center">
        <Col lg={12} xs={12}>
          <div className="title">
            <h1>
              Jetson Orin Nanoを使用した
              <br />
              作業台と作業者の動作解析
            </h1>
          </div>
        </Col>
        <Col lg={6} xs={12}>
          <p className="mt-3">
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
              🏆第30回
              電子情報通信学会東京支部学生会研究発表会においてジュニア奨励賞を受賞しました!!
            </strong>
          </a>
        </Col>
        <Col lg={6} xs={12} className="mt-4 mt-lg-0">
          <Tweet url="https://twitter.com/takenok58914745/status/1900828830010667036" />
        </Col>
      </Row>

      {/* Section: 背景と目的 */}
      <Row className="py-4 align-items-center border-top">
        <Col xs={12}>
          <h3>背景と目的</h3>
          <ul>
            <li>可搬式作業台において作業者が足を踏み外す事故が発生</li>
            <li>リスクを比較するため定量的なリスク評価が必要</li>
            <li>製品ごとの検出モデル開発が困難</li>
          </ul>
          <p className="mt-3">小型コンピューター上での簡易的な動作解析</p>
          <p>アノテーション作業の簡略化</p>
        </Col>
      </Row>

      {/* Section: 使用技術 */}
      <Row className="py-4 align-items-center border-top">
        <Col xs={12} className="mb-4">
          <h2>使用技術</h2>
        </Col>
        <Col lg={6}>
          <Row className="align-items-center">
            <Col md={{ span: 6, order: 1 }}>
              <h4>Jetson Orin Nano</h4>
              <p>NVIDIA社の小型コンピュータ</p>
              <p>サイズ:100×79×21mm</p>
            </Col>
            <Col md={{ span: 6, order: 2 }}>
              <img
                src="/images/sotuken/jetoson.jpg"
                alt="Jetson Orin Nano"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row className="align-items-center">
            <Col md={{ span: 6, order: 1 }}>
              <h4>Ultralytics YOLOv11</h4>
              <ul>
                <li>バウンディングボックスの位置</li>
                <li>クラス確率</li>
              </ul>
              <p>を直接予測</p>
              <p>⇨CNN 等の手法と比べ高速化</p>
              <p>・奥行き情報は得られない</p>
            </Col>
            <Col md={{ span: 6, order: 2 }}>
              <img
                src="/images/sotuken/yolo.png"
                alt="YOLOでの人の認識"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Section: ARマーカー */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h3>ARマーカーを用いたデータセット作成</h3>
          <ul>
            <li>脚立の手前にARマーカーを置き10分程度様々な位置から撮影</li>
            <li>複数ARマーカーを使用し安定性向上</li>
          </ul>
        </Col>
        <Col md={6}>
          <img
            src="/images/sotuken/ar.jpg"
            alt="ARマーカーによる自動アノテーション"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", margin: "0 auto", display: "block" }}
          />
        </Col>
      </Row>

      {/* Section: 3次元復元 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <img
            src="/images/sotuken/input.png"
            alt="入力された画像"
            className="img-fluid rounded mb-3"
          />
        </Col>
        <Col md={6}>
          <h3>脚立と人の姿勢を3次元復元</h3>
          <ul>
            <li>脚立からのカメラの位置推定</li>
            <li>キーポイントへ向かうベクトル同士の最接近点を求め3次元に復元</li>
          </ul>
          <p>1フレーム当たり68.6msで推論可能</p>
        </Col>
      </Row>

      {/* Section: 重心の移動 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={12}>
          <h3>重心の移動の測定</h3>
          <p>体の各部位ごとの質量比より重心の移動を測定する</p>
          <p>
            枠を持った昇降動作において枠を持たず荷物を持った状態よりも重心の移動が大きいことが確認できた。
          </p>
        </Col>

        <Col md={6} className="mb-3">
          <div className="text-center">
            <img
              src="/images/sotuken/normal.webp"
              alt="(a)枠を持った時の動作"
              className="img-fluid rounded"
              loading="lazy"
            />
            <div className="mt-2">(a)枠を持った時の動作</div>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="text-center">
            <img
              src="/images/sotuken/denger.webp"
              alt="(b)枠を掴まず荷物を持った際の動作"
              className="img-fluid rounded"
              loading="lazy"
            />
            <div className="mt-2">(b)枠を掴まず荷物を持った際の動作</div>
          </div>
        </Col>
      </Row>

      {/* Section: 結論 */}
      <Row className="py-4 border-top">
        <Col md={12}>
          <h3>結論</h3>
          <ul>
            <li>ARマーカーを使用した固定物のアノテーション作業の簡略化</li>
            <li>リアルタイム処理では2秒程の遅延と1秒間に11枚程の処理が可能</li>
          </ul>
        </Col>
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
      <Row className="mb-4 mt-4">
        <Col xs={12}>
          <p className="mb-3">
            🏆ゲームクリエイター甲子園 2022でU-18部門 総合賞
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
      </Row>

      {/* ブログ紹介 */}
      <Row>
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

      <Row className="mt-5">
        <Col xs={12} className="text-center d-flex gap-2">
          <Button
            variant="primary"
            className="w-100"
            onClick={() =>
              (window.location.href =
                "https://github.com/amo-yotakenoko/VIrtualRobot3_windows/archive/refs/heads/main.zip")
            }
          >
            ダウンロード
          </Button>
          {/* <Button
            variant="primary"
            className="w-100"
            as={Link}
            to="/pompom_pattern"
          >
            詳しく見る
          </Button> */}
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

            <strong>
              🏆
              <a
                href="https://www.wiss.org/WISS2020/award.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                WISS 2020:
                第28回インタラクティブシステムとソフトウェアに関するワークショップ
              </a>
              において「動物ぽんぽんの模様を作るアプリケーションの開発」として発表し萌芽発表賞を頂きました!
            </strong>
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

        {/* <div className="mt-4 text-center">
          <Button variant="primary" className="moreButton">
            詳しく見る
          </Button>
        </div> */}
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
              💪
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
              🎨
              <a
                href="https://vivita.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIVITA
              </a>{" "}
              でワークショップを行いました。
            </li>
            <li>🏆アプリ甲子園2020でCygames賞を頂きました</li>
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

        {/* <Col xs={12} className="mt-3">
          <Button
            variant="primary"
            className="moreButton"
            as={Link}
            to="/amo-yo"
          >
            詳しく見る
          </Button>
        </Col> */}
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
              🏆
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
        <Row className="align-items-center">
          {/* ボタン（左側） */}
          <Col xs={12} md="auto">
            <Button
              variant="primary"
              onClick={() =>
                (window.location.href =
                  "https://amo-yotakenoko.github.io/color-suggester/")
              }
            >
              使ってみる(スマートフォン推奨)
              <br />
              1か月のハッカソンであることを踏まえバグ等はあえて修正していません。
            </Button>
          </Col>

          {/* QRコード（右側） ※スマホでは非表示 */}
          <Col className="d-none d-md-block">
            <Image
              src="images/colorsuggester_qr.jpg"
              alt="QRコード"
              width={120}
              fluid
              rounded
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export const PompomPattern = () => {
  return (
    <Container className="py-5">
      {/* Title Section */}
      <Row className="pb-5 align-items-center">
        <Col lg={12} xs={12}>
          <div className="title">
            <img
              src="images/pompom_title.jpg"
              alt="ぽんぽん設計図ジェネレーター"
              className="img-fluid"
              style={{ mixBlendMode: "multiply" }}
            />
            <h4 className="mt-3">ぽんぽん設計図ジェネレーター</h4>
          </div>
          <p className="mt-3">
            一般的に毛糸を使ったパターン入りぽんぽん手芸はオリジナルの物を作ることは困難で、本を参考に作る場合が殆どですが、このアプリを使うことで簡単にオリジナルの設計図が作成でき、手芸の自由度を広げます。
          </p>
          <p>
            <a
              href="https://web.archive.org/web/20241120012206/https://news.yahoo.co.jp/articles/781e7971f3d9f99ad7edadd72c19bd7017bce83b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                🏆U-22プログラミングコンテストで経済産業大臣賞＜総合＞を頂きました(賞金50万円)
              </strong>
            </a>
          </p>
        </Col>
        <Col lg={6} xs={12} className="mt-4 mt-lg-0">
          <YouTube videoUrl="https://www.youtube.com/embed/BEMMV-svT_A?si=L8hwIvC2ShO7T-S6" />
        </Col>
        <Col lg={6} xs={12}>
          <YouTube videoUrl="https://www.youtube.com/embed/DCQ3mESzDf8?si=SjCW0j3fPwjd09S4" />
        </Col>
      </Row>

      {/* Section: ワークショップ */}
      <Row className="py-4 align-items-center border-top">
        <Col xs={12}>
          <h2>ワークショップを行いました!</h2>
          <p>
            JimoKidsフェスティバル2025にてオリジナルのぽんぽんをアプリを使って作ってもらうワークショップを行いました。
          </p>
        </Col>
        <Col lg={6} xs={12}>
          <img
            src="/images/pompom_pattern/workshop1.jpg"
            alt="ワークショップの様子"
            className="img-fluid rounded"
          />
        </Col>
        <Col lg={6} xs={12}>
          <img
            src="/images/pompom_pattern/workshop2.jpg"
            alt="ワークショップの様子"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      {/* Section: ぽんぽんとは */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>ぽんぽんとは</h2>
          <p>
            ぽんぽんやぼんぼんとよばれる毛糸を使った手芸をご存じでしょうか?
            毛糸と百均等でも売っている専用の器具や厚紙などを使って作ることができます
          </p>
          <p className="mt-3">
            このぽんぽんに巻く際、途中で毛糸の色を変えることでぽんぽんに模様を入れることができます。
            しかし所望のデザインを得るために,予めどのような順番でどの色を巻けばいいかという判断は非直観的であり、本アプリではGUI
            上でぽんぽんの完成図を設計することで,それを作るための巻き図を出力します。
          </p>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/pompom_pattern/展開.gif"
              className="img-fluid rounded"
            />
            <div>ぽんぽんの構造のイメージ</div>
          </div>
        </Col>
      </Row>

      {/* Section: 編集画面 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>編集画面</h2>
          <p>編集画面では3Dのぽんぽんに色を塗っていきます。</p>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/pompom_pattern/edit.jpg"
              className="img-fluid rounded"
            />
            <div>編集画面</div>
          </div>
        </Col>
      </Row>

      {/* Section: 設計図画面 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>設計図画面</h2>
          <p>
            設計図画面どの色を何回何段巻くかが表示されます。巻いたところをタップすることで済のマークが表示されます。また左上に残りの合計巻き数、現在の進捗率が表示されます。
          </p>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/pompom_pattern/設計図.png"
              className="img-fluid rounded"
              style={{ maxWidth: "50%" }}
            />
            <div>設計図</div>
          </div>
        </Col>
      </Row>

      {/* Section: 共有 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>共有</h2>
          <p>
            設計図画面の右上を押すことで設計図の情報の入った巻き図の画像をダウンロードすることができ、ホーム画面の「画像から読み込み」
            ボタンから読み込んで編集することが可能です。その為各種SNS等で画像として巻き図の画像を装飾の仕方と共に共有することができます
          </p>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/pompom_pattern/共有.png"
              className="img-fluid rounded"
            />
            <div>設計図のエクスポート</div>
          </div>
        </Col>
      </Row>

      {/* Section: 工夫した点 */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>工夫した点</h2>
          <p>
            ぽんぽんの緯度にあたる角度を等間隔にした場合曲に近い毛糸の面積が小さくなってしまう為,表面積が均一になるように調整しました
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="/images/pompom_pattern/面積.png"
            className="img-fluid rounded"
          />
          <Image
            src="/images/pompom_pattern/面積2.png"
            className="img-fluid rounded mt-3"
          />
          <div className="text-center">毛糸の等表面積化</div>
        </Col>
      </Row>

      {/* Section: 経緯 */}
      <Row className="py-4 align-items-center border-top">
        <Col xs={12}>
          <h2>経緯</h2>
          <p>
            過去に Google Play、App Store で Unity
            で開発していたものを公開していましたが、Developer
            ライセンスが切れてしまい、長らく放置していたところ、何人かからこのアプリを使いたいという連絡をいただきました。それを受けて、プログラムをゼロから書き直し、UI
            なども再設計しました。
          </p>
        </Col>
      </Row>

      {/* Section: 使っていただきました */}
      <Row className="py-4 align-items-center border-top">
        <Col xs={12}>
          <h2>使っていただきました</h2>
          <p>
            画面は古いバージョンになります{" "}
            <a
              href="https://x.com/den_xap/status/1843099282930597949"
              target="_blank"
              rel="noopener noreferrer"
            >
              掲載許可を頂きました
            </a>
          </p>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Tweet url="https://twitter.com/den_xap/status/1663389246592548864" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Tweet url="https://twitter.com/den_xap/status/1617379474773016578" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Tweet url="https://twitter.com/den_xap/status/1605823096597860353" />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Section: 最後に */}
      <Row className="py-4 align-items-center border-top">
        <Col md={6}>
          <h2>最後に</h2>
          <p>
            本アプリによって毛糸ぽんぽんを使った手芸の自由度が広がれば良いなと思っています
          </p>
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/pompom_pattern/最後に.png"
              className="img-fluid rounded"
            />
            <div>完成したぽんぽんたち</div>
          </div>
        </Col>
      </Row>

      <Row className="py-4 align-items-center border-top">
        <Col xs={12} className="mt-3 d-flex gap-2">
          {/* <Button variant="primary" as={Link} to="/pompom_pattern">
              詳しく見る
            </Button> */}
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
  );
};

export const VirtualRobot4 = () => {
  return (
    <Container className="py-5">
      {/* Title Section */}
      <Row className="pb-5 align-items-center">
        <Col lg={12} xs={12}>
          <div className="title">
            <h1>BlenderとScratchを使用する仮想ロボット開発メタバース</h1>
          </div>
        </Col>
        <Col lg={12} xs={12}>
          <img
            src="/images/virtualrobot/composition.jpg"
            alt="構成図"
            style={{
              mixBlendMode: "multiply",
              width: "100%",
            }}
          />
        </Col>
      </Row>
      <Row className="py-4 align-items-center border-top">
        <h2> Scratch Day 2025 in Tokyoで展示を行いました</h2>

        <Col xs={12} sm={6} md={4}>
          <Tweet url="https://twitter.com/den_xap/status/1926152931323081150" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Tweet url="https://twitter.com/den_xap/status/1926161076489494846" />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Tweet url="https://twitter.com/den_xap/status/1932461844209471861" />
        </Col>
      </Row>
    </Container>
  );
};
