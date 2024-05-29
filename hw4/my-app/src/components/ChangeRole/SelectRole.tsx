import { useState } from "react";
import { TRole } from "../../interfaces";

interface IProps {
    setChangeRoleDialogShow: (value: boolean) => void,
    userRole: TRole,
    setUserRole: (value: TRole) => void
}

export default function SelectRole(props: IProps) {
    const [userChoise, setUserChoise] = useState<TRole>(undefined);

    let userRole: TRole = props.userRole;

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
            <div className="modalBody">
                <button type="button" className="button"
                    style={
                        userChoise == "ADMIN" ? {backgroundColor: "#008060" }
                            : props.userRole == "ADMIN" ? { backgroundColor: "#007c89" } : {}
                    }
                    onClick={selectRoleHandler} >ADMIN</button>
                <button type="button" className="button"
                    style={
                        userChoise == "USER" ? { backgroundColor: "#008060" }
                            : props.userRole == "USER" ? { backgroundColor: "#007c89" } : {}
                    }
                    onClick={selectRoleHandler} >USER</button>
            </div>
            <div className="modalBody">
                <button type="button" className="button" onClick={approveRoleHandler}>Approve</button>
            </div>
        </>
    );
}