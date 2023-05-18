import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import ModalAddNew from "./components/ModalAddNew";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span><b>List Users:</b></span>
          <ModalAddNew />
        </div>
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
