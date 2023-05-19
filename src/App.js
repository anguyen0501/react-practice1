import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { ToastContainer } from 'react-toastify';
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <div className="my-3 add-new">
              <span><b>List Users:</b></span>
              <button 
              className='btn btn-info'
              onClick={() => setIsShowModal(true)}
              >Add New</button>
          </div>
          <TableUsers />
        </Container>
        <ModalAddNew 
          show={isShowModal}
          handleClose={() => setIsShowModal(false)}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
