import { FaWpforms } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const LinksConstant = [
  { text: "Add job", path: ".", icon: FaWpforms },
  { text: "All jobs", path: "/dashboard/jobs-page", icon: MdQueryStats },
  { text: "Stats", path: "stats", icon: IoBarChartSharp },
  { text: "Profile", path: "profile", icon: ImProfile },
  { text: "Admin", path: "admin", icon: MdAdminPanelSettings },
];

export default LinksConstant;
