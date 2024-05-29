import SelectRole from "./SelectRole";
import { TRole } from "../../interfaces";

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
                <div className="modal">
                    <div className="modalContent">
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