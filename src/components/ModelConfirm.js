import { Modal, Button } from 'react-bootstrap';
import { deleteUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModalConfirm = (props) => {

    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props;
    const handleDeleteUser = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if (res && +res.status === 204) {
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
            toast.success('This user is deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } else { 
            toast.error('This user is not deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (<>
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
                    <h4>Are you sure to delete this user?</h4> <br />
                    Do you want to continue? <br />
                    <b>Email: {dataUserDelete.email}</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleDeleteUser()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalConfirm;