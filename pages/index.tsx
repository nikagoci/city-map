import { useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";

import MusicPlayer from "@/components/audio/music-player";
import Mapbox from "@/components/mapbox/mapbox";
import FilterMenu from "@/components/filter/filter-menu";
import { CategoryEnum, LocationInterface } from "@/libs/interfaces";
import { getLandmarks } from "@/libs/prisma/landmarks";
import prisma from "@/libs/prisma";
import { categoryEnum } from "@prisma/client";

interface Props {
  landmarks: LocationInterface[]
}

export default function Home({landmarks}: Props) {
  const [locationClicked, setLocationClicked] = useState("");
  const [categorySelected, setCategorySelected] = useState<CategoryEnum[]>([]);


  console.log(landmarks)
  return (
    <header>
      <div className="flex w-full px-12 mt-12 gap-x-4">
        <div className="basis-[85%]">
          <Mapbox
            setLocationClicked={setLocationClicked}
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            landmarks={landmarks}
          />
          <MusicPlayer locationClicked={locationClicked} />
        </div>
        <FilterMenu setCategorySelected={setCategorySelected} />
      </div>
    </header>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    let category = context.query.category as categoryEnum
    let categoryArray: categoryEnum | categoryEnum[];

    if(category?.includes('.')){
      categoryArray = category.split('.') as CategoryEnum[]
    } else {
      categoryArray = category
    }
    
    const landmarks = await prisma.landmark.findMany({
      where: { category: { in: categoryArray } }
    })


    return {
      props: {
        landmarks
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }

  
};
