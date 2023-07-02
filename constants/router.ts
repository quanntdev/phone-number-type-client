import BasicLayout from "../components/Layout";
import NoLayout from "../components/Layout/NoLayout";

interface Router {
  pathName: string;
  role?: string[];
  layout: any;
  redirect?: string;
  title?: string
}

export const publishRouter: Array<Router> = [
  {
    pathName: "/signup",
    layout: NoLayout,
  },
  {
    pathName: "/login",
    layout: NoLayout,
  }
];

export const privateRouter: Array<Router> = [
];

export const routerAdminAuthouz: Array<Router> = [
]

export const routerNotLogin: Array<Router> = [
  {
    pathName: "/404",
    layout: NoLayout,
    title: 'notFound'
  }
];
