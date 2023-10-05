import { GENRES } from "@/constants/en";
import useMedia from "@/hooks/useMedia";
import { MediaType, MediaSort } from "@/types/anilist";
import { getSeason, randomElement } from "@/utils";
import React, { useMemo, useState } from "react";
import ListSwiperSkeleton from "../skeletons/ListSwiperSkeleton";
import CardSwiper from "./CardSwiper";
import Section from "./Section";
import { useTranslation } from "next-i18next";

function RandomGenreSection({ isMobile }) {
  const currentSeason = useMemo(getSeason, []);
  const { t } = useTranslation();
  
  const [randomSelectedGenre, setRandomSelectedGenre] = useState(
    randomElement(GENRES).label
  );

  const {
    data: trendingRandomGenreYear,
    isLoading: trendingRandomGenreYearLoading,
  } = useMedia({
    type: MediaType.Anime,
    genre: randomSelectedGenre,
    seasonYear: currentSeason.year,
    sort: [MediaSort.Favourites_desc],
    perPage: isMobile ? 10 : 20,
  });

  return (
    <>
      {trendingRandomGenreYearLoading ? (
        <ListSwiperSkeleton />
      ) : (
        <Section title={`${t("top", { ns: "common" })} ${randomSelectedGenre}`}>
          <CardSwiper data={trendingRandomGenreYear} />
        </Section>
      )}
    </>
  );
}

export default RandomGenreSection;
