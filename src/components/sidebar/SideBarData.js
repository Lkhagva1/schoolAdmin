import { FiGrid, FiUsers, FiLayers } from "react-icons/fi";
import {
  BiBuildings,
  BiBookReader,
  BiCalendar,
  BiHotel,
  BiWallet,
  BiChat,
  BiCalendarEvent,
  BiBookBookmark,
  BiFace,
} from "react-icons/bi";

export const navData = [
  {
    title: "Хянах самбар",
    toLink: "dashboard",
    icon: FiGrid,
  },
  {
    title: "Сурагч",
    toLink: "/students",
    icon: BiFace,
    subTitle: [
      {
        title: "Бүх сурагч",
        toLink: "/students",
        icon: BiFace,
      },
      {
        title: "Сурагч нэмэх",
        toLink: "/students/add",
        icon: BiFace,
      },
    ],
  },
  {
    title: "Багш",
    toLink: "/teachers",
    icon: FiUsers,
    subTitle: [
      {
        title: "Бүх багш",
        toLink: "/teachers",
        icon: FiUsers,
      },
      {
        title: "Багш нэмэх",
        toLink: "/teachers/add",
        icon: FiUsers,
      },
    ],
  },
  {
    title: "Хэлтэс",
    toLink: "/department",
    icon: BiBuildings,
    subTitle: [
      {
        title: "Бүх Хэлтэс",
        toLink: "/department/all",
        icon: BiBuildings,
      },
      {
        title: "Хэлтэс нэмэх",
        toLink: "/department/add",
        icon: BiBuildings,
      },
    ],
  },
  {
    title: "Тэнхим",
    toLink: "/facults",
    icon: FiLayers,
    subTitle: [
      {
        title: "Бүх тэнхим",
        toLink: "/facults/all",
        icon: FiLayers,
      },
      {
        title: "Тэнхим нэмэх",
        toLink: "/facults/add",
        icon: FiLayers,
      },
    ],
  },
  {
    title: "Курс",
    toLink: "/courses",
    icon: BiBookReader,
    subTitle: [
      {
        title: "Бүх Курс",
        toLink: "/courses/all",
        icon: BiBookReader,
      },
      {
        title: "Курс нэмэх",
        toLink: "/courses/add",
        icon: BiBookReader,
      },
    ],
  },
  {
    title: "Амралт",
    toLink: "/holiday",
    icon: BiHotel,
    subTitle: [
      {
        title: "Бүх Амралт",
        toLink: "/holiday/all",
        icon: BiHotel,
      },
      {
        title: "Амралт нэмэх",
        toLink: "/holiday/add",
        icon: BiHotel,
      },
    ],
  },
  {
    title: "Хуанли",
    toLink: "/calendar",
    icon: BiCalendar,
  },

  {
    title: "Үйл ажиллагаа",
    toLink: "/event",
    icon: BiCalendarEvent,
  },
  {
    title: "номын сан",
    toLink: "/library",
    icon: BiBookBookmark,
    subTitle: [
      {
        title: "Бүх номын сан",
        toLink: "/library/all",
        icon: BiBookBookmark,
      },
    ],
  },
  {
    title: "Чат",
    toLink: "/chat",
    icon: BiChat,
  },
  {
    title: "Цалин",
    toLink: "/fees",
    icon: BiWallet,
    subTitle: [
      {
        title: "Бүх багш цалин",
        toLink: "/fees/all",
        icon: BiWallet,
      },
    ],
  },
];
