import { useContext } from "react";
import { ContextStatistic } from "../../App";
import { IContextStatistic, IProduct, IProductListAction, TRole } from "../../interfaces";

interface IProps {
    product: IProduct,
    userRole: TRole,
    dispatchProductList: (value: IProductListAction) => void
}

export default function Product(props: IProps) {
    const contextStatistic = useContext<IContextStatistic>(ContextStatistic);

    const deleteHandler = () => {
        props.dispatchProductList({
            type: "REMOVE",
            payload: props.product
        })

        let newStatistic = { ...contextStatistic.statistic };
        newStatistic.removeCount++;
        contextStatistic.setStatistic(newStatistic);
    }

    return (
        <div className="product">
            <div>
                <h3>{props.product.title}</h3>
                <h4>{props.product.description}</h4>
            </div>
            {
                props.userRole === 'ADMIN' &&
                <div>
                    <input type="button" className="buttton" onClick={deleteHandler} value="delete" />
                </div>
            }

        </div>
    );
}