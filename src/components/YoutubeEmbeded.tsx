import YouTube, { YouTubeProps } from "react-youtube";

interface YouTubeType {
  yvideoID: string;
}

export function YoutubeVideoIFrame(props: YouTubeType) {
  //   const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //     // event.target.playVideo();
  //   };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const style: YouTubeProps["style"] = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <YouTube
        videoId={props.yvideoID}
        opts={opts}
        style={style}
        // onReady={onPlayerReady}
      />
    </>
  );
}
