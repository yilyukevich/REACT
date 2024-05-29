export type TRole = "ADMIN" | "USER" | undefined;

export interface IProduct {
    id: number,
    title: string,
    description: string,
}

export type ProductActionTypes = 'ADD' | 'REMOVE';

export interface IProductListAction {
    type: ProductActionTypes,
    payload: IProduct
}

export function reducerProductList(state: IProduct[], action: IProductListAction) {
    switch (action.type) {
        case 'ADD':
            if (state.filter((value) => value.id === action.payload.id).length === 0) {
                return [...state, action.payload];
            }   else    {
                return state;
            }                
        case 'REMOVE':
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
}

export const centerPanelStyle: React.CSSProperties = {
    width: '600px',
    border: '1px solid rgba(0, 0, 0, 0.175)',
    borderRadius: '0.5rem'
};

export const centerPanelHeaderStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
}

export const productFormStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    padding: '20px',
    border: '1px solid rgba(0, 0, 0, 0.175)',
    borderRadius: '0.5rem'
}

export const modalStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 1,
    paddingTop: "100px",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto"
}

export const modalContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "400px",
    borderRadius: '0.5rem'
}

export const buttonStyle: React.CSSProperties = {
    display: "inline-block",
    outline: 0,
    cursor: "pointer",
    textAlign: "center",
    border: "1px solid #babfc3",
    padding: "7px 16px",
    minHeight: "36px",
    minWidth: "36px",
    color: "#202223",
    background: "#ffffff",
    borderRadius: "4px",
    fontWeight: "500",
    fontSize: "14px",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 0px 0px"
}

