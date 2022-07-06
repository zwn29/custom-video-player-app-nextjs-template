import React, { Fragment, useEffect, useRef, useState } from 'react';
import useVideoPlayer from '../hooks/useVideoPlayer';
import {
  PauseIcon,
  PlayIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  ArrowsExpandIcon,
  TrendingDownIcon,
} from '@heroicons/react/outline';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { AnimatePresence, motion } from 'framer-motion';

function VideoC({ url }) {
  useEffect(() => {
    async function fetchData() {
      await togglePlay();
    }
    fetchData();
  }, []);
  const [fullScreenHandle, setFullScreenHandle] = useState(false);

  const videoElement = useRef(null);
  const handle = useFullScreenHandle();
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  const handler = () => {
    if (!fullScreenHandle) {
      handle.enter();
      setFullScreenHandle((fullScreenHandle) => !fullScreenHandle);
    } else {
      handle.exit();
      setFullScreenHandle((fullScreenHandle) => !fullScreenHandle);
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode == 27) handler();
  };

  return (
    <FullScreen handle={handle}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="flex justify-center items-center h-screen bg-black/95"
        >
          <div
            id="fs-toggle"
            className="w-full relative flex justify-center overflow-hidden   max-h-screen group "
          >
            <video
              className="w-full appearance-none"
              src={url}
              ref={videoElement}
              onTimeUpdate={handleOnTimeUpdate}
              type="video/mp4"
              autoPlay={true}
            />
            <div className="select-none flex items-center absolute p-1 md:p-3 w-full flex-wrap justify-evenly bottom-3 md:bottom-7 max-w-md backdrop-blur-sm bg-white/10 shadow-md rounded-lg  transform translate-y-60 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all ease-in-out">
              <div className="cursor-pointer">
                <div onClick={togglePlay}>
                  {!playerState.isPlaying ? (
                    <h1>
                      <PlayIcon className="text-white text-lg h-8 mb-1" />
                    </h1>
                  ) : (
                    <h1>
                      <PauseIcon className="text-white text-lg h-8 mb-1" />
                    </h1>
                  )}
                </div>
              </div>
              <input
                className=" cursor-pointer appearance-none  h-0.5 bg-gray-50 rounded outline-none slider-thumb  w-50"
                type="range"
                min="0"
                max="100"
                value={playerState.progress}
                onChange={(e) => handleVideoProgress(e)}
              />
              {/* <input
          type="range"
          class="appearance-none w-full h-0.5 bg-grey rounded outline-none slider-thumb"
        /> */}
              <select
                className="  bg-transparent  appearance-none outline-none border-none text-white text-center text-base "
                value={playerState.speed}
                onChange={(e) => handleVideoSpeed(e)}
              >
                <option value="0.50">0.50x</option>
                <option value="1">1x</option>
                <option value="1.25">1.25x</option>
                <option value="2">2x</option>
              </select>

              {/* <button className="cursor-pointer" onClick={toggleMute}>
          {!playerState.isMuted ? (
            <i className="bx bxs-volume-full text-white text-xl"></i>
          ) : (
            <i className="bx bxs-volume-mute text-white text-xl"></i>
          )}
        </button> */}

              <div
                className="cursor-pointer border-none outline-none bg-transparent"
                onClick={(e) => {
                  toggleMute(e);
                }}
              >
                {!playerState.isMuted ? (
                  <VolumeUpIcon className="text-white text-lg h-8" />
                ) : (
                  <VolumeOffIcon className="text-white text-lg h-8" />
                )}
              </div>
              <div
                className="cursor-pointer"
                onClick={handler}
                onChange={handler}
                onKeyPress={(e) => handleKeyPress(e)}
              >
                {!fullScreenHandle ? (
                  <ArrowsExpandIcon className="text-white text-lg h-8" />
                ) : (
                  <TrendingDownIcon className="text-white text-lg h-8" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </FullScreen>
  );
}

export default VideoC;
