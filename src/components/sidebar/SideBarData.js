import { FiGrid, FiUsers, FiLayers, FiSlack } from "react-icons/fi";
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
    toLink: "/dashboard",
    icon: FiGrid,
  },
  {
    title: "Сурагч",
    toLink: "/students",
    icon: BiFace,
    drop: [
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
    drop: [
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
    title: "Клуб",
    toLink: "/club",
    icon: BiBuildings,
    drop: [
      {
        title: "Бүх Клуб",
        toLink: "/club",
        icon: BiBuildings,
      },
      {
        title: "клуб нэмэх",
        toLink: "/club/add",
        icon: BiBuildings,
      },
    ],
  },
  {
    title: "Гомдол",
    toLink: "/complain",
    icon: FiLayers,
  },
  {
    title: "Мэдэгдэл илгээх",
    toLink: "/notice",
    icon: BiBookReader,
    drop: [
      {
        title: "Бүх мэдэгдэл",
        toLink: "/notice",
        icon: BiBookReader,
      },
      {
        title: "мэдэгдэл илгээх",
        toLink: "/notice/add",
        icon: BiBookReader,
      },
    ],
  },
  {
    title: "Үзэх хичээл",
    toLink: "/subject",
    icon: FiSlack,
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
    drop: [
      {
        title: "Бүх номын сан",
        toLink: "/library",
        icon: BiBookBookmark,
      },
    ],
  },
  {
    title: "Чат",
    toLink: "/chat",
    icon: BiChat,
  },
  // {
  //   title: "Чат",
  //   toLink: "/chats",
  //   icon: BiChat,
  // },
  {
    title: "login",
    toLink: "/login",
    icon: BiBookBookmark,
  },
  {
    title: "login",
    toLink: "/chat/login",
    icon: BiBookBookmark,
  },
];
