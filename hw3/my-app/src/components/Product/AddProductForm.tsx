import { useState } from "react";
import { IProductListAction, buttonStyle, productFormStyle } from "../../interfaces";

interface IProps {
    dispatchProductList: (value: IProductListAction) => void
}

export default function AddProductForm(props: IProps) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    

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
    }

    return (
        <div style={productFormStyle}>
            <div>
                <h4>Id:</h4>
                <input type="text" name="id" onChange={idInputHandler} value={id} />
                <h4>Title:</h4>
                <input type="text" name="title" onChange={titleInputHandler} value={title} />
                <h4>Description:</h4>
                <input type="text" name="description" onChange={descriptionInputHandler} value={description} />
            </div>
            <div>
                <button type="button"  style={buttonStyle} onClick={addButtonHandler}>add</button>
            </div>
        </div>
    );
}