import { useState } from "react";
import { TRole, buttonStyle } from "../../interfaces";

interface IProps {
    setChangeRoleDialogShow: (value: boolean) => void,
    userRole: TRole,
    setUserRole: (value: TRole) => void
}

export default function SelectRole(props: IProps) {
    const [userChoise, setUserChoise] = useState<TRole>(undefined);

    let userRole: TRole = props.userRole;

    const modalBodyStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    };

    const selectRoleHandler = (event: React.MouseEvent) => {
        userRole = (event.target as HTMLButtonElement).innerHTML as TRole;
        setUserChoise(userRole);
    }

    const approveRoleHandler = () => {
        props.setUserRole(userChoise);
        props.setChangeRoleDialogShow(false);
    }

    return (
        <>
            <div>
                <h1>Who are you?</h1>
            </div>
            <div style={modalBodyStyle}>
                <button type="button" style={
                    userChoise == "ADMIN" ? { ...buttonStyle, backgroundColor: "#008060" }
                        : props.userRole == "ADMIN" ? { ...buttonStyle, backgroundColor: "#007c89" } : buttonStyle
                }
                    onClick={selectRoleHandler} >ADMIN</button>
                <button type="button"
                    style={
                        userChoise == "USER" ? { ...buttonStyle, backgroundColor: "#008060" }
                            : props.userRole == "USER" ? { ...buttonStyle, backgroundColor: "#007c89" } : buttonStyle
                    }
                    onClick={selectRoleHandler} >USER</button>
            </div>
            <div style={modalBodyStyle}>
                <button type="button" style={buttonStyle} onClick={approveRoleHandler}>Approve</button>
            </div>
        </>
    );
}