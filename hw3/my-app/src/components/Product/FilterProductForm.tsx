import { useState } from "react";
import { productFormStyle } from "../../interfaces";

interface IProps {
    setFilter: (value: string) => void
}

export default function FilterProductForm(props: IProps) {

    const [filterInputValue, setFilterInputValue] = useState('');

    const filterInputHandler = (event: React.ChangeEvent)  => {
        let val = (event.target as HTMLInputElement).value;
        
        setFilterInputValue(val);
        props.setFilter(val);
    }

    return (
        <div style={productFormStyle}>
            <input type="text" name="filter" onChange={filterInputHandler} value={filterInputValue} />
        </div>
    );
}