import { useCallback, useEffect, useState } from 'react';
import { useRoutes } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { getPermissionInfo } from '@/services/permission/index';
import { permissionAction } from '@/store/permission/permissionSlice';
import { userInfoAction } from '@/store/login/loginSlice';
import Header from '@/components/header/header';
import routes from '@/router/index';
import '@/assets/scss/app.scss';


function App() {
  const dispatch = useDispatch()
  const [rout,setRout] = useState(routes)
  const element = useRoutes(rout)
  const fetchPermission =  useCallback( async () => {
    const res = await getPermissionInfo()
    const { menu,module,page,project,userInfo } = res
    dispatch(permissionAction({
      menu,
      module,
      page,
      project
    }))
    dispatch(userInfoAction({
      userInfo,
    }))

  },[])
  useEffect(()=>{
    fetchPermission()
  },[])
  return (
    <>
      <Header></Header>
      <div className="main">
        { element }        
      </div>
    </>
  );
}

export default App;
