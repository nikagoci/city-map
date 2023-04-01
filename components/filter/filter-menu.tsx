import { CategoryEnum } from "@/libs/interfaces";
import { Dispatch, SetStateAction } from "react";
import InfoButton from "../information/info-button";
import SingleCategory from "./single-category";

const categories: CategoryEnum[] = [
  CategoryEnum.Monastery,
  CategoryEnum.Bridge,
  CategoryEnum.Museum,
  CategoryEnum.Garden,
  CategoryEnum.Reserve,
  CategoryEnum.Aquatica,
];

interface Props {
  setCategorySelected: Dispatch<SetStateAction<[] | CategoryEnum[]>>;
}

export default function FilterMenu({ setCategorySelected }: Props) {
  const addCategory = (category: CategoryEnum) => {
    setCategorySelected((prev) => [...prev, category]);
  };

  const removeCategory = (category: CategoryEnum) => {
    setCategorySelected((prev) => prev.filter((el) => el !== category));
  };

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Category Filter</h1>
      <ul className="basis-[15%] space-y-4">
        {categories.map((category) => (
          <SingleCategory
            key={category}
            category={category}
            addCategory={addCategory}
            removeCategory={removeCategory}
          />
        ))}
      </ul>
      <div className='mt-20'>
        <InfoButton />
      </div>
    </div>
  );
}
