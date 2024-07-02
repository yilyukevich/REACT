import SelectRole from "./SelectRole";
import { TRole, modalContentStyle, modalStyle } from "../../interfaces";

interface IProps {
    changeRoleDialogShow: boolean,
    setChangeRoleDialogShow: (value: boolean) => void
    userRole: TRole,
    setUserRole: (value: TRole) => void
}

export default function ChangeRoleDialog(props: IProps) {
    return (
        <>
            {
                props.changeRoleDialogShow 
                &&
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        <SelectRole
                            setChangeRoleDialogShow={props.setChangeRoleDialogShow}
                            userRole={props.userRole}
                            setUserRole={props.setUserRole} />
                    </div>
                </div>
            }
        </>
    );
}