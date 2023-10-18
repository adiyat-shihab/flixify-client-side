import videobg from "../assets/video.mp4";
import "./shadow.css";
export const Collection = () => {
  return (
    <>
      <div className={"boxShadow  "}>
        <div className={"shadow-inner relative"}>
          <video
            autoPlay
            muted
            loop
            className={"min-h-full min-w-full z-0  "}
            src={videobg}
          ></video>
        </div>
      </div>
    </>
  );
};
