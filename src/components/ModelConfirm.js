import { Modal, Button } from 'react-bootstrap';

const ModalConfirm = (props) => {

    const { show, handleClose, dataUserDelete } = props;
    const handleDeleteUser = () => {
        console.log(dataUserDelete);
        handleClose();
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