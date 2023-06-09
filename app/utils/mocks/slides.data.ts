export interface ISlide {
  id: string;
  title: string;
  imageUrl: string;
}

export const slidesData: ISlide[] = [
  {
    id: "1",
    title: "НОВИНКИ SAF SAFU",
    imageUrl: require("../../static/banner-1.png"),
  },
  {
    id: "2",
    title: "ПЕРСОНАЛИЗИРОВАННЫЕ УКРАШЕНИЯ",
    imageUrl: require("../../static/banner-2.png"),
  },
  {
    id: "3",
    title: "FEEL THE RAINBOW – TASTE THE RAINBOW",
    imageUrl: require("../../static/banner-3.png"),
  },
  {
    id: "4",
    title: "ВОЛШЕБНЫЕ БРАСЛЕТЫ ЖЕЛАНИЙ",
    imageUrl: require("../../static/banner-4.png"),
  },
];
