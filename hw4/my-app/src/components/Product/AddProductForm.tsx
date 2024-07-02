import { useContext, useState } from "react";
import { IContextStatistic, IProductListAction } from "../../interfaces";
import { ContextStatistic } from "../../App";

interface IProps {
    dispatchProductList: (value: IProductListAction) => void
}

export default function AddProductForm(props: IProps) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const contextStatistic = useContext<IContextStatistic>(ContextStatistic);

    const idInputHandler = (event:  React.ChangeEvent) => {
        setId((event.target as HTMLInputElement).value);
    }

    const titleInputHandler = (event: React.ChangeEvent) => {
        setTitle((event.target as HTMLInputElement).value);
    }

    const descriptionInputHandler = (event: React.ChangeEvent) => {
        setDescription((event.target as HTMLInputElement).value)
    }

    const addButtonHandler = () => {
        props.dispatchProductList({
            type: "ADD", 
            payload: {id: +id, title: title, description: description}
        })
        let newStatistic = {...contextStatistic.statistic};
        newStatistic.addCount++;
        contextStatistic.setStatistic(newStatistic);
    }

    return (
        <div className="productForm">
            <div>
                <h4>Id:</h4>
                <input type="text" name="id" onChange={idInputHandler} value={id} />
                <h4>Title:</h4>
                <input type="text" name="title" onChange={titleInputHandler} value={title} />
                <h4>Description:</h4>
                <input type="text" name="description" onChange={descriptionInputHandler} value={description} />
            </div>
            <div>
                <button type="button" className="button" onClick={addButtonHandler}>add</button>
            </div>
        </div>
    );
}