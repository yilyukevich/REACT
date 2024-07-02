import { useContext, useState } from "react";
import { ContextStatistic } from "../../App";
import { IContextStatistic } from "../../interfaces";

interface IProps {
    setFilter: (value: string) => void
}

export default function FilterProductForm(props: IProps) {
    const [filterInputValue, setFilterInputValue] = useState('');

    const contextStatistic = useContext<IContextStatistic>(ContextStatistic);

    const filterInputChangeHandler = (event: React.ChangeEvent)  => {
        let val = (event.target as HTMLInputElement).value;
        
        setFilterInputValue(val);
        props.setFilter(val);
    }

    const filterInputBlurHndler =() => {
        let newStatistic = { ...contextStatistic.statistic };
        newStatistic.filterCount++;
        contextStatistic.setStatistic(newStatistic);
    }

    return (
        <div className="productForm">
            <input type="text" name="filter" onChange={filterInputChangeHandler} onBlur={filterInputBlurHndler} value={filterInputValue} />
        </div>
    );
}