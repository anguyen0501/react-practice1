import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalConfirm from './ModelConfirm';
import _ from 'lodash';

const TableUsers = (props) => {

    const [listUsers, setListUsers] = useState([]);
    // eslint-disable-next-line
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    const [isShowModal, setIsShowModal] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});

    const [isShowModelDelete, setIsShowModelDelete] = useState(false);
    const [dataUserDelete, setDataUserDelete] = useState({});

    const handleClose= () => { 
        setIsShowModalEdit(false);
        setIsShowModal(false);
        setIsShowModelDelete(false);
    }

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }

    const handleEditUser = (user) => {
        setDataUserEdit(user);
        setIsShowModalEdit(true);
    }

    const handlEditUserFromModal = (user) => {
        let cloneListUser = _.cloneDeep(listUsers);
        let index = listUsers.findIndex(item => item.id === user.id);
        cloneListUser[index].first_name = user.first_name;
        cloneListUser[index].last_name = user.last_name;
        setListUsers(cloneListUser);
        console.log(listUsers, cloneListUser);
    }

    const handleDeleteUser = (user) => {
        setDataUserDelete(user);
        setIsShowModelDelete(true);
    }

    useEffect(() => {
        //call api
        //dry
        getUsers(1);
    }, []);
    const getUsers = async (page) => {
        let res = await fetchAllUsers(page);
        if (res && res.data) {
            setTotalUsers(res.total);
            setListUsers(res.data);
            setTotalPages(res.total_pages);
        }
    }
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);
    }
    return (
        <>
            <div className="my-3 add-new">
                <span><b>List Users:</b></span>
                <button
                    className='btn btn-info'
                    onClick={() => setIsShowModal(true)}
                >Add New</button>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>
                                        <button 
                                            className='btn btn-warning mx-3' 
                                            onClick={() => handleEditUser(item)} 
                                        >Edit</button>
                                        <button 
                                            className='btn btn-danger mx-3'
                                            onClick={() => handleDeleteUser(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
            <ModalAddNew
                show={isShowModal}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
            <ModalEditUser 
                show={isShowModalEdit}
                handleClose={handleClose}
                dataUserEdit={dataUserEdit}
                handlEditUserFromModal={handlEditUserFromModal}
            />
            <ModalConfirm 
                show={isShowModelDelete}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
            />
        </>
    );
};

export default TableUsers;
