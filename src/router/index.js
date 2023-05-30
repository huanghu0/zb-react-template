import { lazy } from "react";
import { Navigate } from "react-router-dom";

const lazyLoad = (moduleName) => {
    const Module = lazy(() => import(`@/views/${moduleName}`));
    return <Module />;
};

const routes = [{
    path:'/',
    element: <Navigate to="home" />
},{
    path:'/home',
    element: lazyLoad('home')
},{
    path:'*',
    element: lazyLoad('404')
}]

export default routes