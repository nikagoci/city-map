import { CategoryEnum } from "./interfaces";

export default function detectColor(category: CategoryEnum): string {
    switch (category) {
      case CategoryEnum.Aquatica:
        return "blue";
      case CategoryEnum.Reserve:
        return "green";
      case CategoryEnum.Bridge:
        return "orange";
      case CategoryEnum.Garden:
        return "lime";
      case CategoryEnum.Monastery:
        return "red";
      case CategoryEnum.Museum:
        return "dark";
      default:
        return "red";
    }
  }