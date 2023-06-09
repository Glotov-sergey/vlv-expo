import { ProfileStackParams } from "../../../navigation/navigation.interface";

interface IProfileData {
  text: string;
  href: keyof ProfileStackParams;
}

export const profileData: IProfileData[] = [
  {
    text: "Магазины",
    href: "profileShops",
  },
  {
    text: "Рекомендация по уходу",
    href: "profileRecomendations",
  },
  {
    text: "Доставка",
    href: "profileDelivery",
  },
  {
    text: "Возврат",
    href: "profileReturn",
  },
  {
    text: "О нас",
    href: "profileAbout",
  },
];
