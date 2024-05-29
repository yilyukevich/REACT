import { useReducer, useState } from 'react'
import ChangeRoleDialog from './components/ChangeRole/ChangeRoleDialog';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import { TRole, reducerProductList } from './interfaces';



function App() {
  const [changeRoleDialogShow, setChangeRoleDialogShow] = useState(true);
  const [userRole, setUserRole] = useState<TRole>(undefined);


  const [productList, dispatchProductList] = useReducer(reducerProductList, []);

  const divStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
    <ChangeRoleDialog changeRoleDialogShow={changeRoleDialogShow} setChangeRoleDialogShow={setChangeRoleDialogShow} 
                                            userRole={userRole} setUserRole={setUserRole} />
    <div style={divStyle}>
      {
        userRole === 'ADMIN' && <Admin setChangeRoleDialogShow={setChangeRoleDialogShow} dispatchProductList={dispatchProductList} 
                                            productList={productList}/>
      }
      {
        userRole === 'USER' && <User setChangeRoleDialogShow={setChangeRoleDialogShow} dispatchProductList={dispatchProductList} 
                                            productList={productList}/>
      }
    </div>
    </>
  )
}

export default App
