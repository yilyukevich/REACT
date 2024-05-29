import ChangeRoleDialogShowButton from "../ChangeRole/ChangeRoleDialogShowButton";
import { IProduct, IProductListAction } from "../../interfaces";
import AddProductForm from "../Product/AddProductForm";
import ProductList from "../Product/ProductList";
import Statistic from "../Statistic/Statistic";

interface IProps {
    setChangeRoleDialogShow: (value: boolean) => void,
    dispatchProductList: (value: IProductListAction) => void,
    productList: IProduct[]
}

export default function Admin(props: IProps) {  
    return (
        <div>
            <div className="centerPanelHeader">
                <div><h1>Admin</h1></div>
                <ChangeRoleDialogShowButton setChangeRoleDialogShow={props.setChangeRoleDialogShow} />
            </div>
            <div>
                <AddProductForm dispatchProductList={props.dispatchProductList} />
                <ProductList productList={props.productList} dispatchProductList={props.dispatchProductList}
                                 userRole="ADMIN" filter=""/>
            </div>
            <div>
                <Statistic />
            </div>
        </div>
    );
}