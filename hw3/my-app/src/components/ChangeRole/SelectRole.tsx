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

    // return (
    //     <div className="modal-content">
    //         <div className="modal-header">
    //             <h1 className="modal-title fs-5" id="staticBackdropLabel">Who are you?</h1>
    //         </div>
    //         <div className="modal-body" style={modalBodyStyle}>
    //             <button type="button" 
    //                 className={props.userRole == "ADMIN" ? "btn btn-primary" : "btn btn-secondary"}
    //                 onClick={selectRoleHandler} 
    //                 style={userChoise == "ADMIN" ? {backgroundColor: "green"} : {}} >ADMIN</button>
    //             <button type="button" 
    //                 className={props.userRole == "USER" ? "btn btn-primary" : "btn btn-secondary"}
    //                 onClick={selectRoleHandler}
    //                 style={userChoise == "USER" ? {backgroundColor: "green"} : {}} >USER</button>
    //         </div>
    //         <div className="modal-footer" style={modalBodyStyle}>
    //             <button type="button" className="btn btn-primary" onClick={approveRoleHandler}>Approve</button>
    //         </div>
    //     </div>
    // );

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