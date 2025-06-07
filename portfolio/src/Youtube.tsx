import React from "react";

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
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        width="560"
        height="315"
        className="embed-responsive-item"
        src={urlWithAutoplay}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default YouTube;
