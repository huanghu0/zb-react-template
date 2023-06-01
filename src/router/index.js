import { lazy,Suspense } from "react";
import { Navigate } from "react-router-dom";
import LayoutMenu from "../components/common/LayoutMenu";

const lazyLoad = (moduleName) => {
    const Module = lazy(() => import(`@/views/${moduleName}`));
    return <Suspense><Module /></Suspense>  ;
};

const routes = [{
  path:'/',
  element: <Navigate to="/dashboard/index" />
},{
  path:'/dashboard/index',
  element: lazyLoad('dashboard/index')
},{
  path:'indicator/index',
  element: lazyLoad('indicator/index')
},{
  path:'/biz/overview',
  element: lazyLoad('biz/overview')
},{
  path:'/aba',
  element: <LayoutMenu></LayoutMenu>,
  children:[
    {
      path:'event',
      element:lazyLoad('aba/event/index')
    },{
      path:'retain',
      element:lazyLoad('aba/retain/index')
    },{
      path:'funnel',
      element:lazyLoad('aba/funnel/index')
    }
  ]
},{
  path:'error',
  element: lazyLoad('error')
},
{
  path:'*',
  element: lazyLoad('404')
}]

export default routes