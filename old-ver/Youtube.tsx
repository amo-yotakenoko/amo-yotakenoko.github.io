import React from "react";
import { Ratio } from "react-bootstrap";

interface YouTubeProps {
  videoUrl: string;
  autoplay?: boolean;
}

const YouTube: React.FC<YouTubeProps> = ({ videoUrl, autoplay = false }) => {
  // 自動再生が有効なら、URLに `?autoplay=1` を追加（既にパラメータがある場合は `&` にする）
  const urlWithAutoplay = autoplay
    ? videoUrl.includes("?")
      ? `${videoUrl}&autoplay=1&mute=1`
      : `${videoUrl}?autoplay=1&mute=1`
    : videoUrl;

  return (
    <Ratio aspectRatio="16x9">
      <iframe
        src={urlWithAutoplay}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Ratio>
  );
};

export default YouTube;
