import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModalAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job);
        if (res && res.id) {
            handleClose();
            setName('');
            setJob('');
            toast.success('A new user is created!!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            handleUpdateTable({first_name: name, last_name: job, id: res.id});
        } else {
            toast.error('Something went wrong!!!');
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
                <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
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
                <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalAddNew;