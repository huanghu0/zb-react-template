import React,{ memo,useCallback,useEffect,useState } from 'react';
import { useSelector } from "react-redux";
import { QuestionCircleFilled,CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import { Tooltip,Dropdown,Space  } from 'antd';

const Header = memo(({he,children}) => {
  console.log(he,children,'props,children')
  const [modeList,setModeList] = useState([]);
  const [moduleId,setModuleId] = useState('')
  const { module } = useSelector((state) => state.permission)
  useEffect(()=>{
    setModeList(() => module)
  },[module])
  const handleClickModule =  useCallback((menu)=>{
    setModuleId(menu.oid)
  },[])
  const outItems = [{
    key:'1',
    label:(
      <span>退出</span>
    )
  }]
  return (<>
    <div className="header">
      <div className='logo'>
        <img src={require('@/assets/img/logo.png')} />
        <h1>大数据分析平台</h1>
      </div>
      <nav className="nav">
       {
        modeList.map((menu) => {
          return (
            <span className={`menu-item ${menu.oid === moduleId ? 'active-menu':''}`} key={menu.oid}  onClick={() => handleClickModule(menu)}>
              { menu.moduleName }
            </span>
          )
        })
       }
      </nav>
      <Tooltip placement="bottom" title='用户手册'>
        <div className="help">
          <a href="https://oa-pan.eastmoney.com/ddwiki/space/doc?spaceId=6749&fileUuid=4bf36e33-adb6-4a9a-aaea-b97717b3c4a3" target="_blank">
            <span className='fa'>
              <QuestionCircleFilled style={{fontSize: '20px',color: '#ccc'}}></QuestionCircleFilled>
            </span>
          </a>
        </div>
      </Tooltip>
      <div className="user">
        <img src={require('@/assets/img/head.png')} />
        <Dropdown
          menu={{
            items:outItems,
          }}
          trigger={['click']}
          placement="bottom"
        >
          <div className="user-dropdown">
            <span>王凡</span>
            <CaretUpFilled></CaretUpFilled>          
          </div>
        </Dropdown>
      </div>
    </div>
  </>)
}) 

export default Header