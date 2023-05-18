import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';
const ModalAddNew = () => {
    const [show, setShow, handleUpdateUser] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = async () => {
        let res = await postCreateUser(name, job);
        if (res && res.id) {
            handleClose();
            setName('');
            setJob('');
            // success
            toast.success('A User is created succeed!!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            handleUpdateUser({first_name: name, last_name: job, id: res.id});
        } else {
            toast.error('An Error...')
        };
    }
    return (<>
        <Button className='add-new' variant="primary" onClick={handleShow}>
            Add New User
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" value={name} onChange={(event) => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicJob">
                            <Form.Label>Your Job</Form.Label>
                            <Form.Control type="text" placeholder="Your Job" value={job} onChange={(event) => setJob(event.target.value)} />
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