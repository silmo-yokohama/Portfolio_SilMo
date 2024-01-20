import DashboardIcon from "@/SVG/DashboardIcon";

export const AdminGlobalMenus = [
  {
    menuTitle: "MENU",
    menus: [
      {
        slug: "admin.dashboard",
        icon: <DashboardIcon color="#FFF" size={18} />,
        text: "ダッシュボード",
      },
      {
        slug: "admin.works.index",
        icon: <DashboardIcon color="#FFF" size={18} />,
        text: "実績",
      },
    ],
  },
];
