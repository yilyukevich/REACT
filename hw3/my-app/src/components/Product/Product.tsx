import { IProduct, IProductListAction, TRole, buttonStyle } from "../../interfaces";

interface IProps {
    product: IProduct,
    userRole: TRole,
    dispatchProductList: (value: IProductListAction) => void
}

export default function Product(props: IProps) {

    const productStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '20px',
        border: '1px solid rgba(0, 0, 0, 0.175)',
        borderRadius: '0.5rem'
    }

    const deleteHandler = () => {
        props.dispatchProductList({
            type: "REMOVE",
            payload: props.product
        })
    }

    return (
        <div style={productStyle}>
            <div>
                <h3>{props.product.title}</h3>
                <h4>{props.product.description}</h4>
            </div>
            {
                props.userRole === 'ADMIN' && 
                <div>
                    <input type="button" style={buttonStyle} onClick={deleteHandler} value="delete" />
                </div>
            }

        </div>
    );
}