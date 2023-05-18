import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const ModalAddNew = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveUser = () => {

    }
    return (<>
        <Button className='add-new' variant="success" onClick={handleShow}>
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
                            <Form.Control type="text" placeholder="Your Name" value={name} onChange={(event) => setName(event.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicJob">
                            <Form.Label>Your Job</Form.Label>
                            <Form.Control type="text" placeholder="Your Job" value={job}  onChange={(event) => setJob(event.target.value)}/>
                        </Form.Group>
                    </Form>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> handleSaveUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalAddNew;