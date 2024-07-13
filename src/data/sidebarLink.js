import { AiOutlineProduct } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { FaMoneyBillAlt, FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";

export const links = [
  {
    title: "Home",
    links: [
      {
        name: "home",
        icon: <IoHomeOutline />,
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        name: "products",
        icon: <AiOutlineProduct />,
      },
    ],
  },
  {
    title: "Customers",
    links: [
      {
        name: "customers",
        icon: <FaRegUser />,
      },
    ],
  },
  {
    title: "Shop",
    links: [
      {
        name: "shop",
        icon: <CiShop />,
      },
    ],
  },
  {
    title: "Income",
    links: [
      {
        name: "income",
        icon: <FaMoneyBillAlt />,
      },
    ],
  },
  {
    title: "Promote",
    links: [
      {
        name: "promote",
        icon: <LuBadgePercent />,
      },
    ],
  },
];
