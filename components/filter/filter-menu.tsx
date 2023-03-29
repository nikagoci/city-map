import { CategoryEnum } from "@/libs/interfaces";
import SingleCategory from "./single-category";

const categories: CategoryEnum[] = [
  CategoryEnum.Monastery,
  CategoryEnum.Bridge,
  CategoryEnum.Museum,
  CategoryEnum.Garden,
  CategoryEnum.Historical,
];

export default function FilterMenu() {
  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Category Filter</h1>
      <ul className="basis-[15%] space-y-4">
        {categories.map((category) => (
          <SingleCategory key={category} category={category} />
        ))}
      </ul>
    </div>
  );
}
