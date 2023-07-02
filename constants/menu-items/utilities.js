// assets
import {
  IconLayoutDashboard,
} from "@tabler/icons";

// constant
const icons = {
  IconLayoutDashboard,
};

const utilities = {
  id: "utilities",
  title: "Main",
  type: "group",
  children: [
    {
      id: "",
      title: "Dashboard",
      type: "collapse",
      type: "item",
      url: "/",
      breadcrumbs: false,
      icon: icons.IconLayoutDashboard,
    },
  ]
};

export default utilities;
