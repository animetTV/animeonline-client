import PlayerOverlay from "@/components/features/anime/Player/Overlay";
import Loading from "@/components/shared/Loading";
import { useThemePlayer } from "@/contexts/ThemePlayerContext";
import { download, getFileNameFromUrl } from "@/utils";
import classNames from "classnames";
import { useInteract } from "netplayer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDownload, AiOutlineInfoCircle } from "react-icons/ai";


const Overlay = () => {
  const { isLoading, theme } = useThemePlayer();
  const { isInteracting } = useInteract();

  return (
    <PlayerOverlay className="relative">
      <div className="absolute top-0 w-full bg-gradient-to-b h-16 from-black/60 via-black/40 to-transparent"></div>

    
      {theme?.anilistId && (
        <Link
          href={{
            pathname: "/themes",
            query: { slug: theme.slug, type: 'OP', id: theme?.anilistId },
          }}
        >
          <a
            target="_blank"
            className={classNames(
              "absolute transition-all duration-200 cursor-pointer top-4 right-16 hover:text-gray-200",
              isInteracting ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <AiOutlineInfoCircle className={classNames("w-8 h-8")} />
          </a>
        </Link>
      )}

      {theme?.sources?.length && (
        <AiOutlineDownload
          className={classNames(
            "w-8 h-8 absolute transition-all duration-200 cursor-pointer top-4 right-4 hover:text-gray-200",
            isInteracting ? "opacity-100 visible" : "opacity-0 invisible"
          )}
          onClick={(e) => {
            e.stopPropagation();

            download(
              theme.sources[0].file,
              getFileNameFromUrl(theme.sources[0].file)
            );
          }}
        />
      )}

      {/* <div 
        className={classNames("w-8 h-8 absolute transition-all duration-200 cursor-pointer top-4 right-40 hover:text-gray-200", 
          isInteracting ? "opacity-100 visible" : "opacity-0 invisible")}>
        <RefreshButton />
      </div> */}
      
     {/*  <div className={classNames(isMobile ?  "w-full absolute bottom-20 px-5 z-50" : "w-full absolute bottom-20 px-40 z-50")}>
        <ProgressSlider />
      </div> */}

      {isLoading && <Loading />}
    </PlayerOverlay>
  );
};

export default Overlay;
