import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Notifications from "views/Components/Notifications.js";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Perfil from "views/Widgets/Perfil";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendario",
    rtlName: "التقويم",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/perfil",
    name: "Usuarios",
    rtlName: "الحاجيات",
    icon: WidgetsIcon,
    component: Perfil,
    layout: "/admin"
  },
  {
    path: "/informe",
    name: "informe",
    rtlName: "التقويم",
    icon: DateRange,
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Graficas",
    rtlName: "الرسوم البيانية",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  }
];
export default dashRoutes;
