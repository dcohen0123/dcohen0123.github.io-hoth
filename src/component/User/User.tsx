import { Modal } from "antd"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavItemSelected } from "../../redux/Nav/NavActions";

const UserMenu = () => {
    const dispatch = useDispatch()
    const handleOk = () => dispatch({type: NavItemSelected, payload: null})
    const handleCancel = () => dispatch({type: NavItemSelected, payload: null})
    return <Modal title="User" visible={true} onOk={handleOk} onCancel={handleCancel}>
        <div>User Panel</div>
    </Modal>
}

export default UserMenu;