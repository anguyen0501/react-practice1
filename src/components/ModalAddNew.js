import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const {name, setName} = useState('');
    const {job, setJob} = useState('');

    const handleSaveUser = () => {
        console.log('save user');
    }
    return (<>
        <Modal show={show} onHide={handleClose}>
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