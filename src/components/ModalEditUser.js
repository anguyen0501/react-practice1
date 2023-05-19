import { Modal, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { putUpdateUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModelEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handlEditUserFromModal } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job);
        if (res && res.updatedAt) {
            handlEditUserFromModal({
                first_name: name,
                last_name: job,
                id: dataUserEdit.id
            })
            handleClose();
            toast.success('This user is edited!!!', {
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
    useEffect(() => {
        if(show) {
            setName(dataUserEdit.first_name);
            setJob(dataUserEdit.last_name);
        }
    }, [dataUserEdit, show]);
    return (<>
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-edit-new'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="name" 
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Job</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="job" 
                            value={job} 
                            onChange={(event) => setJob(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModelEditUser;