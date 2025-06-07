import React from "react";
import { Container, Row, Col, Button, Ratio } from "react-bootstrap";
import Tweet from "../Tweet";
import YouTube from "../Youtube";

export const PC = () => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };
  const thtdStyle = {
    border: "1px solid black",
    padding: "1px",
    textAlign: "left",
  };

  return (
    <div id="PCAbout">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="title">
              <h1>自作PC</h1>
              <h4>クリスマスセールの時に揃えました</h4>
            </div>

            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thtdStyle}>物</th>
                  <th style={thtdStyle}>値段/円</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thtdStyle}>AMD Ryzen 7 5700X</td>
                  <td style={thtdStyle}>25000</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>B550 AORUS ELITE V2</td>
                  <td style={thtdStyle}>15980</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    CT2K16G4DFRA32A [DDR4 SDRAM/ 32GB(16GB x 2枚組)セット/
                    DDR4-3200 CL22]
                  </td>
                  <td style={thtdStyle}>9980</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>CPUクーラー K6-BK</td>
                  <td style={thtdStyle}>2979</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    NVIDIA GEFORCE RTX 3060 搭載 12GB グラフィックボード
                    GG-RTX3060-E12GB/TP
                  </td>
                  <td style={thtdStyle}>36980</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    LEGEND 700 ALEG-700-512GCS [M.2 NVMe 内蔵SSD / 512GB / PCIe
                    Gen3x4 / バルク]
                  </td>
                  <td style={thtdStyle}>3980</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    玄人志向 80Plus Bronze 650W ATX電源ユニット KRPW-BR650W/85+
                  </td>
                  <td style={thtdStyle}>7919</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    TP-Link ブルートゥース＋WiFi USBアダプター Bluetooth 4.2
                    WiFi子機 AC600 433 + 200Mbps
                  </td>
                  <td style={thtdStyle}>1680</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>UtechSmart 多ボタンゲーミングマウス</td>
                  <td style={thtdStyle}>5699</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>MAONO USB コンデンサーマイク DGM20S</td>
                  <td style={thtdStyle}>5659</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>
                    ハードオフにあったANTEC Nine Hundred Two?
                  </td>
                  <td style={thtdStyle}>550</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>ドンキで売ってたウェブカメラ</td>
                  <td style={thtdStyle}>1500</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>ハードオフで売ってたキーボード</td>
                  <td style={thtdStyle}>1100</td>
                </tr>
                <tr>
                  <td style={thtdStyle}>計</td>
                  <td style={thtdStyle}>119006</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Tap = () => {
  return (
    <div id="tapAbout">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="title">
              <h1>遠隔操作電源タップマシン</h1>
              <h4>要するにSwitchBot</h4>
            </div>
            DiscordBotから母がやってる家庭菜園の水耕栽培ポンプとライトのオンオフができるようにしました。
            <br />
          </div>

          <div className="col-12">
            <img
              src="images/hardware/tap.gif"
              alt="遠隔操作電源タップマシン"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div className="col-lg-6 col-12">
            使ったもの
            <ul>
              <li>HackUの賞品で頂いたRaspberry Pi Zero W</li>
              <li>家にあった電源タップ</li>
              <li>家にあったサーボモーター</li>
              <li>家にあったLEGO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
