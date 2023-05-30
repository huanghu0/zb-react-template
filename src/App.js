import { useCallback, useEffect, useState } from 'react';
import { useRoutes } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { getPermissionInfo } from './services/permission/index';
import { permissionAction } from './store/permission/permissionSlice';
import routes from '@/router/index';
import styles from '@/assets/scss/app.scss';


function App() {
  const dispatch = useDispatch()
  const [rout,setRout] = useState(routes)
  const element = useRoutes(rout)
  const fetchPermission =  useCallback( async () => {
    const res = await getPermissionInfo()
    const { menu,module,page,project } = res
    dispatch(permissionAction({
      menu,
      module,
      page,
      project
    }))
  },[])
  useEffect(()=>{
    fetchPermission()
  },[])
  return (
    <>
      { element }
    </>
  );
}

export default App;
