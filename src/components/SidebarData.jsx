import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Master",
    path: "/services",
    icon: <HiIcons.HiUserGroup />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Peserta",
        path: "/services/services1",
        icon: <HiIcons.HiUser />,
        cName: "sub-nav",
      },
      {
        title: "Penguji",
        path: "/services/services2",
        icon: <HiIcons.HiUsers />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Fit and Proper",
    path: "/fitproper",
    icon: <RiIcons.RiComputerLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Pendaftaran Fit & Proper",
        path: "/services/services1",
        icon: <AiIcons.AiOutlineForm />,
        cName: "sub-nav",
      },
      {
        title: "Pendaftaran Wawancara",
        path: "/services/services2",
        icon: <AiIcons.AiOutlineForm />,
        cName: "sub-nav",
      },
      {
        title: "Penilaian Fit and Proper",
        path: "/services/services2",
        icon: <MdIcons.MdCreditScore />,
        cName: "sub-nav",
      },
      {
        title: "Penilaian Wawancara",
        path: "/services/services2",
        icon: <MdIcons.MdCreditScore />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Report",
    path: "/events",
    icon: <HiIcons.HiDocumentDuplicate />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Pencarian Fit Proper",
    path: "/support",
    icon: <AiIcons.AiOutlineSearch />,
  },
];
