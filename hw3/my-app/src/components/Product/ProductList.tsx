import { IProduct, IProductListAction, TRole } from "../../interfaces";
import Product from "./Product";

interface IProps {
    userRole: TRole,
    productList: IProduct[],
    dispatchProductList: (value: IProductListAction) => void,
    filter: string
}

export default function ProductList(props: IProps) {

    return (
        <div>
            {
                props.productList
                .filter((product) => product.title.includes(props.filter))
                .map((product) => 
                    <Product key={product.id} product={product} userRole={props.userRole} dispatchProductList={props.dispatchProductList}/>
                )
            }
        </div>
    );
}