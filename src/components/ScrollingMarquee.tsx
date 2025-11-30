import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { u } from "framer-motion/client";
function ScrollingMarquee({
  reverse,
  offset,
}: {
  reverse?: boolean;
  offset: number;
}) {
  const [imgPassList, setImgPassList] = useState([]);
  const [viewImgPassList, setViewImgPassList] = useState([]);

  const unit_x = 320 + 16; // 画像の幅 (w-80) + margin (space-x-4)

  const inital_x = reverse ? -unit_x + offset * unit_x : 0 + offset * unit_x;
  const end_x = reverse ? 0 + offset * unit_x : -unit_x + offset * unit_x;

  useEffect(() => {
    fetch("/marqueeImage.json")
      .then((res) => res.json())
      .then(setImgPassList);
  }, []);

  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      // 1. アニメーションを開始し、完了を待つ (await)
      await controls.start({
        x: end_x, // 終了地点
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 500));

      setViewImgPassList((prevList) => {
        // a. 先頭要素を削除 (安全な方法)
        const [first, ...rest] = prevList;

        // b. ランダムな新しい要素のパスを選択 (重複チェックは省略)
        while (rest.length < 10) {
          const randomIndex = Math.floor(Math.random() * imgPassList.length);
          const newPath = imgPassList[randomIndex];
          if (rest.includes(newPath)) {
            continue; // 重複していたら再度ランダム選択
          }
          rest.push(newPath); // c. 新しい要素を末尾に追加
        }

        controls.set({ x: inital_x });
        return rest; // 新しい配列を返す
      });
    };

    startAnimation();
  }, [imgPassList, viewImgPassList]);

  const viewImgPassListRender = reverse
    ? [...viewImgPassList].reverse() // reverse=true ならコピーを作成して逆順にする
    : viewImgPassList; // false ならそのまま使用する

  return (
    <>
      {/* <div>ScroolMarquee</div> */}

      <div className="overflow-x-hidden w-screen">
        <motion.div
          className="flex space-x-4 p-2"
          initial={{ x: inital_x }}
          animate={controls}
        >
          {viewImgPassListRender.map((imgPass) => (
            <div
              key={imgPass}
              // 🔽 flex-shrink-0: 幅 (w-80) が親要素の幅が狭くなっても縮まないように固定
              className="aspect-video flex-shrink-0 w-80 overflow-hidden"
            >
              {/* {imgPass} */}
              <img
                src={imgPass}
                className="h-full w-full object-cover"
                alt={imgPass}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
export default ScrollingMarquee;
