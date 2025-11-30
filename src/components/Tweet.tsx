import { useEffect } from "react";

type TweetEmbedProps = {
  url: string;
};

const Tweet = ({ url }: TweetEmbedProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <a href={url}></a>
    </blockquote>
  );
};

export default Tweet;
