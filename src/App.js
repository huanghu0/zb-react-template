import { useCallback, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getPermissionInfo } from './services/permission/index';
import { permissionAction } from './store/permission/permissionSlice'
import styles from '@/assets/scss/app.scss';


function App() {
  const dispatch = useDispatch()
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
      哈哈哈哈
    </>
  );
}

export default App;
