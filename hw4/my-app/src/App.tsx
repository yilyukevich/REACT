import { createContext, useReducer, useState } from 'react'
import ChangeRoleDialog from './components/ChangeRole/ChangeRoleDialog';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import { IContextStatistic, IStatistic, TRole, reducerProductList } from './interfaces';

export const ContextStatistic = createContext<IContextStatistic>({
  statistic: {addCount: 0, removeCount: 0, filterCount: 0},
  setStatistic: () => {}
});


function App() {
  const [changeRoleDialogShow, setChangeRoleDialogShow] = useState(true);
  const [userRole, setUserRole] = useState<TRole>(undefined);

  const [productList, dispatchProductList] = useReducer(reducerProductList, []);

  const [statistic, setStatistic] = useState<IStatistic>({addCount: 0, removeCount: 0, filterCount: 0})

  const divStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
      <ChangeRoleDialog changeRoleDialogShow={changeRoleDialogShow} setChangeRoleDialogShow={setChangeRoleDialogShow}
        userRole={userRole} setUserRole={setUserRole} />
      <ContextStatistic.Provider value={{statistic, setStatistic}}>
        <div style={divStyle}>
          {
            userRole === 'ADMIN' && <Admin setChangeRoleDialogShow={setChangeRoleDialogShow} dispatchProductList={dispatchProductList}
              productList={productList} />
          }
          {
            userRole === 'USER' && <User setChangeRoleDialogShow={setChangeRoleDialogShow} dispatchProductList={dispatchProductList}
              productList={productList} />
          }
        </div>
      </ContextStatistic.Provider>
    </>
  )
}

export default App
