import classNames from "classnames";
import {
  FullscreenButton,
  TimeIndicator,
  useInteract,
  useVideo,
} from "netplayer";
import * as React from "react";
import ProgressSlider from "./ProgressSlider";
import SkipButton from "./SkipButton";

interface MobileControlsProps {
  controlsSlot?: React.ReactNode;
}

const MobileControls: React.FC<MobileControlsProps> = ({ controlsSlot }) => {
  const { isInteracting } = useInteract();
  const { videoState } = useVideo();

  return (
    <div
      className={classNames(
        "mobile-controls-container w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300",
        !videoState.seeking && !isInteracting && !videoState.buffering
          ? "opacity-0 invisible"
          : "opacity-100 visible"
      )}
    >
      <div className="px-4 flex w-full items-center justify-between">
         <TimeIndicator />

        <div className="w-6 h-6">
          <FullscreenButton  />
        </div>
      </div>
      <div className="px-4 w-full mt-2">
        <ProgressSlider />
      </div>
      <div className="flex justify-evenly items-center py-2">
        {/* show these componesnt when video is full screen mode and add py-6 */}
        {/* <SkipButton /> */}

       {/*  {controlsSlot} */}
      </div>{" "}
    </div>
  );
};

export default React.memo(MobileControls);
