import { SectionTitle } from "./CommonComponents";

function History() {
  const achievements = [
    {
      year: 2015,
      title: "🕹️ タケノコを育てるゲーム",
      items: [
        <>
          🥈 子供の科学 KoKaプログラミングコンテスト
          自由創作部門2位・オーディエンス賞
        </>,
      ],
    },
    {
      year: 2018,
      title: "🐱 編み物支援ツール",
      items: [
        <>
          🏆 whyプログラミングアワード2018 最優秀賞
          <div className="ml-8">▸厚切りジェイソンにメダルを貰う</div>
          <div className="ml-8">▸編模様に繋がる</div>
        </>,
      ],
    },
    {
      year: 2019,
      title: "⚙️ FLL (FIRST LEGO League) INTO ORBIT",
      items: [<>🏅 East Japan大会 Robot Design Award & 全国大会出場</>],
    },
    {
      year: 2019,
      title: "🧶 編模様（あもーよ）イラスト手編み支援アプリ",
      items: [
        <>
          💪 2019年度未踏ジュニア採択 スーパークリエータ認定
          <div className="ml-8">▸寺本メンターにご指導いただきました</div>
        </>,
        <>👑 信州未来アプリコンテスト0(ZERO) 長野県知事賞</>,
        <>🏅 アプリ甲子園2020 Cygames賞</>,
        <>🥉 PCNこどもプロコン2019-2020 ココロエデュケーションラボ賞</>,
      ],
    },
    {
      year: 2020,
      title: "🐰 動物ぽんぽんの模様を作るアプリケーションの開発",
      items: [
        <>
          🏅 WISS 2020 萌芽発表賞
          <div className="ml-8">
            ▸情報科学の達人プログラムにより論文執筆、発表資料を東京大学
            鳴海先生にご指導いただきました
          </div>
        </>,
      ],
    },
    {
      year: 2022,
      title: "🤖 VirtualRobot",
      items: [
        <>🥉 ゲームクリエイター甲子園 2022 U-18部門 総合賞 佳作</>,
        <>🥉 Unity ユースクリエイターカップ 2022 チャレンジ賞</>,
      ],
    },
    {
      year: 2023,
      title:
        "🎨 ColorSeggester マンセル色立体とM&S色彩調和論を使用した色提案アプリ",
      items: [<>👑 Hack U 都立産技高専 2023 最優秀賞</>],
    },
    {
      year: 2023,
      title: "🗿 VRによる美術鑑賞拡張のケーススタディ(共著)",
      items: [
        <>
          📃 第28回バーチャルリアリティ学会大会にて論文発表
          <div className="ml-8">▸東京大学 倉本先生と共著</div>
          <div className="ml-8">▸彫刻作品のモデリングを担当</div>
        </>,
      ],
    },
    {
      year: 2024,
      title: "🦉 PomPomPattern ぽんぽん設計図ジェネレーター",
      items: [
        <>👑 U-22プログラミングコンテスト 経済産業大臣賞＜総合＞</>,
        <>🪢 JimoKidsフェスティバル2025 動物ぽんぽんを作ろうワークショップ</>,
      ],
    },
    {
      year: 2025,
      title: "🪜 Jetson Orin Nanoを使用した作業台と作業者の動作解析",
      items: [
        <>🏟️ GOP FAIR 2024展示</>,
        <>🏆 第30回 電子情報通信学会東京支部学生会研究発表会 ジュニア奨励賞</>,
      ],
    },
    {
      year: 2025,
      title:
        "🎓 東京都立産業技術高等専門学校ものづくり工学科電子情報工学コース卒業",
      items: [<>💻 黒木研究室所属</>],
    },
    {
      year: 2025,
      title: "🏗️ BlenderとScratchを使用する仮想ロボット開発メタバース環境",
      items: [
        <>🕹️ Scratch Day 2025 in Tokyo 展示</>,
        <>
          🕹️ Scratch Conference 2025 Expo Booth展示(オンライン)
          <div className="ml-8">
            ▸青山学院大学 宮田先生 石原先生にご協力いただきました
          </div>
          ,
        </>,
      ],
    },
  ];

  return (
    <>
      <div className="p-4 mb-4 ">
        <SectionTitle title="Activity History" />
      </div>

      {achievements.map((ach, index) => (
        <div key={index} className="mb-4">
          <div className="md:ml-20 lg:ml-32 xl:ml-40 2xl:ml-48">
            <h5 className=" text-lg md:text-xl font-bold mb-2 ">
              {ach.year}: {ach.title}
            </h5>

            <div className="border-l-4 border-mint pt-1 ">
              {ach.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="text-base md:text-lg text-ebony "
                >
                  <div className="ml-[-9px]">✦{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export { History };
