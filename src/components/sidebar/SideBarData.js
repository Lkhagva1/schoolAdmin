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
    title: "dashboard",
    toLink: "/dashboard",
    icon: FiGrid,
  },
  {
    title: "Students",
    toLink: "/students",
    icon: BiFace,
    drop: [
      {
        title: "All students",
        toLink: "/students",
        icon: BiFace,
      },
      {
        title: "Student add",
        toLink: "/students/add",
        icon: BiFace,
      },
    ],
  },
  {
    title: "Teachers",
    toLink: "/teachers",
    icon: FiUsers,
    drop: [
      {
        title: "All Teachers",
        toLink: "/teachers",
        icon: FiUsers,
      },
      {
        title: "Teacher Add",
        toLink: "/teachers/add",
        icon: FiUsers,
      },
    ],
  },
  {
    title: "club",
    toLink: "/club",
    icon: BiBuildings,
    drop: [
      {
        title: "all club",
        toLink: "/club",
        icon: BiBuildings,
      },
      {
        title: "club add",
        toLink: "/club/add",
        icon: BiBuildings,
      },
    ],
  },
  {
    title: "complain",
    toLink: "/complain",
    icon: FiLayers,
  },
  {
    title: "notification",
    toLink: "/notice",
    icon: BiBookReader,
    drop: [
      {
        title: "All notification",
        toLink: "/notice",
        icon: BiBookReader,
      },
      {
        title: "notification send",
        toLink: "/notice/add",
        icon: BiBookReader,
      },
    ],
  },
  {
    title: "Lesson to watch",
    toLink: "/subject",
    icon: FiSlack,
  },
  {
    title: "calendar",
    toLink: "/calendar",
    icon: BiCalendar,
  },

  {
    title: "event",
    toLink: "/event",
    icon: BiCalendarEvent,
  },
  {
    title: "library",
    toLink: "/library",
    icon: BiBookBookmark,
    drop: [
      {
        title: "library",
        toLink: "/library",
        icon: BiBookBookmark,
      },
    ],
  },
  {
    title: "chat",
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
