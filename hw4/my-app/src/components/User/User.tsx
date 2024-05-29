import ChangeRoleDialogShowButton from "../ChangeRole/ChangeRoleDialogShowButton";
import { IProduct, IProductListAction } from "../../interfaces";
import ProductList from "../Product/ProductList";
import FilterProductForm from "../Product/FilterProductForm";
import { useState } from "react";
import Statistic from "../Statistic/Statistic";

interface IProps {
    setChangeRoleDialogShow: (value: boolean) => void,
    dispatchProductList: (value: IProductListAction) => void,
    productList: IProduct[]
}

export default function User(props: IProps) {

    const [filter, setFilter] = useState('');

    return (
        <div>
            <div className="centerPanelHeader">
                <div><h1>User</h1></div>
                <ChangeRoleDialogShowButton setChangeRoleDialogShow={props.setChangeRoleDialogShow} />
            </div>
            <div>
                <FilterProductForm setFilter={setFilter} />
                <ProductList productList={props.productList} dispatchProductList={props.dispatchProductList} 
                                userRole="USER" filter={filter}/>
            </div>
            <div>
                <Statistic />
            </div>
        </div>
    );
}