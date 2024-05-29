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
            } else {
                return state;
            }
        case 'REMOVE':
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
}

export interface IStatistic {
    addCount: number,
    removeCount: number,
    filterCount: number
}

export interface IContextStatistic {
    statistic: IStatistic;
    setStatistic: (value: IStatistic) => void
}

