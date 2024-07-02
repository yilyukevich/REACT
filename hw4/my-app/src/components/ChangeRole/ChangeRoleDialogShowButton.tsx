
interface IProps {
    setChangeRoleDialogShow: (value: boolean) => void
}

export default function ChangeRoleDialogShowButton(props: IProps)    {

    const onClickHandler = () => {
        props.setChangeRoleDialogShow(true);
    }

    return (
        <button type="button"  className="button" onClick={onClickHandler}>C</button>
    );
}