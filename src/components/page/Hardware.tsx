import { Container, Row, Col } from "react-bootstrap";
import YouTube from "../Youtube";

export const PC = () => {
  const items: [string, number][] = [
    ["AMD Ryzen 7 5700X", 25000],
    ["B550 AORUS ELITE V2", 15980],
    ["CT2K16G4DFRA32A DDR4-3200 32GB", 9980],
    ["CPUクーラー K6-BK", 2979],
    ["NVIDIA RTX 3060 12GB", 36980],
    ["LEGEND 700 NVMe SSD 512GB", 3980],
    ["玄人志向 650W KRPW-BR650W/85+", 7919],
    ["TP-Link WiFi + Bluetooth USB", 1680],
    ["UtechSmart ゲーミングマウス", 5699],
    ["MAONO USB マイク DGM20S", 5659],
    ["ANTEC Nine Hundred Two（中古）", 550],
    ["ドンキのウェブカメラ", 1500],
    ["ハードオフのキーボード", 1100],
  ];

  const total = items.reduce((sum: number, item) => sum + item[1], 0);

  return (
    <div id="PCAbout" className="w-full py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">自作PC</h1>
          <h4 className="text-lg text-gray-600">
            クリスマスセールの時に揃えました
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-400 border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-400 p-2 text-left">物</th>
                <th className="border border-gray-400 p-2 text-left">
                  値段/円
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map(([name, price], i) => (
                <tr key={i}>
                  <td className="border border-gray-400 p-2">{name}</td>
                  <td className="border border-gray-400 p-2">{price}</td>
                </tr>
              ))}

              <tr className="bg-gray-50 font-bold">
                <td className="border border-gray-400 p-2">計</td>
                <td className="border border-gray-400 p-2">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export const Tap = () => {
  return (
    <Container id="tapAbout">
      <Row>
        <Col lg={12} xs={12}>
          <div className="title">
            <h1>遠隔操作電源タップマシン</h1>
            <h4>要するにSwitchBot</h4>
          </div>
          DiscordBotから母がやってる家庭菜園の水耕栽培ポンプとライトのオンオフができるようにしました。
          <br />
        </Col>

        <Col lg={6} xs={6}>
          使ったもの
          <ul>
            <li>HackUの賞品で頂いたRaspberry Pi Zero W</li>
            <li>家にあった電源タップ</li>
            <li>家にあったサーボモーター</li>
            <li>家にあったLEGO</li>
          </ul>
        </Col>
        <Col lg={6} xs={6}>
          <img
            src="images/hardware/tap.gif"
            alt="遠隔操作電源タップマシン"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
export const LightTracker = () => {
  return (
    <Container id="tapAbout">
      <Row>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <div className="title">
              <h1>モーションキャプチャ</h1>
              <h4>卒論の続き</h4>
            </div>
            アドレサブルLEDを3台のウェブカメラで撮影し、位置を推定する。
            <br />
            一般的にモーショントラッカーでは発光デバイスとカメラのタイミング同期のための無線通信が必要
            　→LEDごとに異なる発光パターンを割り当てることで、最大26個のLEDを識別できる。
          </Col>
          <Col lg={6} xs={12} className="mt-3">
            <YouTube
              videoUrl="https://www.youtube.com/embed/uEnLTTnOIug"
              autoplay={false}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
