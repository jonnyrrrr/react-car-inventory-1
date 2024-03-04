
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Conact from '../pages/Conact'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [    
    {
      path: "/",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "DashBoard",
        protected: false
    
      },
      {
        path: "/contact",
        component: Conact,
        name: "Contact Us",
        protected: false
    
      },
  ];

export default routes