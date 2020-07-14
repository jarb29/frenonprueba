import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Notifications from "views/Notifications/Notifications.js";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Perfil from "views/Widgets/Perfil";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendario",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/perfil",
    name: "Usuarios",
    icon: WidgetsIcon,
    component: Perfil,
    layout: "/admin"
  },
  {
    path: "/Informe",
    name: "informe",
    icon: DateRange,
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Graficas",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  }
];
export default dashRoutes;
