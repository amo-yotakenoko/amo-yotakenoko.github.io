import { useState } from "react";

import Tweet from "../Tweet";
import SectionTitle from "./CommonComponents";

function History() {
  const achievements = [
    {
      year: 2015,
      title: "🕹️ タケノコを育てるゲーム",
      items: [
        "🥈 子供の科学 KoKaプログラミングコンテスト 自由創作部門2位・オーディエンス賞",
      ],
    },
    {
      year: 2018,
      title: "🐱 編み物支援ツール",
      items: ["🏆 whyプログラミングアワード2018 最優秀賞"],
    },
    {
      year: 2019,
      title: "⚙️ FLL (FIRST LEGO League) INTO ORBIT",
      items: ["🏅 East Japan大会 Robot Design Award & 全国大会出場"],
    },
    {
      year: 2019,
      title: "🧶 編模様（あもーよ）イラスト手編み支援アプリ",
      items: [
        "💪 2019年度未踏ジュニア採択 スーパークリエータ認定",
        "👑 信州未来アプリコンテスト0(ZERO) 長野県知事賞",
        "🏅 アプリ甲子園2020 Cygames賞",
        "🥉 PCNこどもプロコン2019-2020 ココロエデュケーションラボ賞",
      ],
    },
    {
      year: 2020,
      title: "🐰 動物ぽんぽんの模様を作るアプリケーションの開発",
      items: ["🏅 WISS 2020 萌芽発表賞"],
    },
    {
      year: 2022,
      title: "🤖 VirtualRobot",
      items: [
        "🥉 ゲームクリエイター甲子園 2022 U-18部門 総合賞 佳作",
        "🥉 Unity ユースクリエイターカップ 2022 チャレンジ賞",
      ],
    },
    {
      year: 2023,
      title:
        "🎨 ColorSeggester マンセル色立体とM&S色彩調和論を使用した色提案アプリ",
      items: ["👑 Hack U 都立産技高専 2023 最優秀賞"],
    },
    {
      year: 2023,
      title: "🗿 VRによる美術鑑賞拡張のケーススタディ(共著)",
      items: [
        "📃 第28回バーチャルリアリティ学会大会にて論文発表（モデリング担当）",
      ],
    },
    {
      year: 2024,
      title: "🦉 PomPomPattern ぽんぽん設計図ジェネレーター",
      items: [
        "👑 U-22プログラミングコンテスト 経済産業大臣賞＜総合＞",
        "🪢 JimoKidsフェスティバル2025 動物ぽんぽんを作ろうワークショップ",
      ],
    },
    {
      year: 2025,
      title: "🪜 Jetson Orin Nanoを使用した作業台と作業者の動作解析",
      items: [
        "🏟️ GOP FAIR 2024展示",
        "🏆 第30回 電子情報通信学会東京支部学生会研究発表会 ジュニア奨励賞",
      ],
    },
    {
      year: 2025,
      title:
        "🎓 東京都立産業技術高等専門学校ものづくり工学科電子情報工学コース卒業",
      items: [],
    },
    {
      year: 2025,
      title: "🏗️ BlenderとScratchを使用する仮想ロボット開発メタバース環境",
      items: [
        "🕹️ Scratch Day 2025 in Tokyo 展示",
        "🕹️ Scratch Conference 2025 Expo Booth展示(オンライン)",
      ],
    },
  ];

  return (
    <>
      <SectionTitle title="Activity History" />

      {achievements.map((ach, index) => (
        <div key={index}>
          <div className="p-2 bg-success bg-opacity-25 rounded-top">
            <h5 className="mb-0">
              <strong>
                {ach.year}: {ach.title}
              </strong>
              {ach.items.map((item, itemIndex) => (
                <div key={itemIndex} className="pl-4">
                  ・{item}
                </div>
              ))}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}
export { History };
