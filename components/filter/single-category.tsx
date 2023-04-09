import { CategoryEnum } from "@/libs/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  category: CategoryEnum;
  addCategory: (category: CategoryEnum) => void;
  removeCategory: (category: CategoryEnum) => void;
  categorySelected: CategoryEnum[]
}

export default function SingleCategory({
  category,
  addCategory,
  removeCategory,
  categorySelected
}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const router  = useRouter()


  const handleCategorySelect = (category: CategoryEnum) => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      addCategory(category);
    } else {
      removeCategory(category);
    }
  };


  useEffect(() => {
    if(categorySelected.includes(category)){
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [router.query, categorySelected])

  return (
    <li className="flex items-center">
      <input
        checked={isChecked}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name={category}
        id={category}
        onChange={() => handleCategorySelect(category)}
      />
      <label
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={category}
      >
        {category}
      </label>
    </li>
  );
}
