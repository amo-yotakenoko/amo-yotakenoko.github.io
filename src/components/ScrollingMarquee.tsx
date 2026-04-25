import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

function ScrollingMarquee({
  reverse,
  offset,
  timeoffset,
}: {
  reverse?: boolean;
  offset: number;
  timeoffset: number;
}) {
  const [imgPassList, setImgPassList] = useState<string[]>([]);
  const [viewImgPassList, setViewImgPassList] = useState<string[]>([]);
  const isFirstRun = useRef(true);
  const controls = useAnimationControls();

  const unit_x =
    window.innerWidth < 640
      ? 192 + 16
      : window.innerWidth < 768
        ? 256 + 16
        : 320 + 16;

  const inital_x = reverse ? -unit_x + offset * unit_x : 0 + offset * unit_x;
  const end_x = reverse ? 0 + offset * unit_x : -unit_x + offset * unit_x;

  // 画像リストの初期取得
  useEffect(() => {
    fetch("/marqueeImage.json")
      .then((res) => res.json())
      .then((data) => {
        setImgPassList(data);
        const initial = [];
        const available = [...data];
        while (initial.length < 10 && available.length > 0) {
          const randomIndex = Math.floor(Math.random() * available.length);
          initial.push(available.splice(randomIndex, 1)[0]);
        }
        setViewImgPassList(initial);
      });
  }, []);

  // 画像が入れ替わった瞬間に位置を初期位置にスナップさせる（表示崩れ防止）
  useLayoutEffect(() => {
    if (viewImgPassList.length > 0) {
      controls.set({ x: inital_x });
    }
  }, [viewImgPassList, inital_x, controls]);

  // アニメーションループ
  useEffect(() => {
    if (imgPassList.length === 0 || viewImgPassList.length === 0) return;

    const startAnimation = async () => {
      // 1. 移動アニメーション
      await controls.start({
        x: end_x,
        transition: {
          duration: 2,
          ease: "easeInOut",
          delay: isFirstRun.current ? timeoffset : 0,
        },
      });

      isFirstRun.current = false;

      // 2. 指定された2秒待機
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 3. 画像の入れ替え
      setViewImgPassList((prevList) => {
        const [, ...rest] = prevList;
        
        // 重複しない新しい画像を選択
        let nextPath;
        let attempts = 0;
        do {
          const randomIndex = Math.floor(Math.random() * imgPassList.length);
          nextPath = imgPassList[randomIndex];
          attempts++;
        } while (rest.includes(nextPath) && attempts < 10);

        return [...rest, nextPath];
      });
    };

    startAnimation();
  }, [viewImgPassList, imgPassList, end_x, timeoffset, controls]);

  const viewImgPassListRender = reverse
    ? [...viewImgPassList].reverse()
    : viewImgPassList;

  return (
    <div className="overflow-x-hidden w-full">
      <motion.div
        className="flex space-x-4 py-2"
        initial={{ x: inital_x }}
        animate={controls}
      >
        {viewImgPassListRender.map((imgPass) => (
          <div
            key={imgPass}
            className="aspect-video flex-shrink-0 overflow-hidden w-48 sm:w-64 md:w-80"
          >
            <img
              src={imgPass}
              className="h-full w-full object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollingMarquee;
