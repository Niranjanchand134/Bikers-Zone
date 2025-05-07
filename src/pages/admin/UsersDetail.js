import { Space, Table, Modal, Card, Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
import { showSuccessToast, showErrorToast } from '../Toastify.Util';

const UsersDetail = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState([]); // Add state to store fetched data
  const [size] = useState('large');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    navigate('/admin/addproduct');
  };

  // Fetch all users
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:4000/userprofile')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  // Handle Delete User
  const showModal = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const deleteUser = async () => {
    await axios.delete(`http://localhost:4000/userprofile/${deleteId}`)
      .then(() => {
        fetchData();
        setOpen(false);
        showSuccessToast('User deleted successfully');
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  const hideDeleteModal = () => {
    setOpen(false);
  };

  // Handle Edit Click
  const handleEdit = (record) => {
    setEditingProduct(record);
    editForm.setFieldsValue(record); // Populate form with current data
    setIsEditModalOpen(true);
  };

  // Handle Save Changes in Edit
  const handleEditSubmit = () => {
    editForm.validateFields().then((values) => {
      axios.patch(`http://localhost:4000/userprofile/${editingProduct.id}`, values)
        .then(() => {
          fetchData(); // Refresh table data
          setIsEditModalOpen(false);
          showSuccessToast('User edited successfully'); // Display success toast after successful edit
        })
        .catch(error => {
          console.error("Error updating user:", error);
          showErrorToast('Failed to update user'); // Optional: show error toast if update fails
        });
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'UserName',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'MobileNumber',
      key: 'mobileNumber',
      dataIndex: 'mobileNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEdit(record)} type="link" />
          <DeleteOutlined onClick={() => showModal(record.id)} type="link" danger />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Modal
        title="Are you sure you want to delete this?"
        open={open}
        onOk={deleteUser}
        onCancel={hideDeleteModal}
        okText="Delete"
        cancelText="Cancel"
      />
      
      <Modal
        title="Edit User"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleEditSubmit}
        okText="Save Changes"
        cancelText="Cancel"
        destroyOnClose
        width={600}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item name="username" label="UserName" rules={[{ required: true, message: 'Please enter username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter address!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mobileNumber" label="Mobile Number" rules={[{ required: true, message: 'Please enter mobile number!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Card type="inner" title={<h5>Users</h5>}>
        <Table columns={columns} dataSource={data} />
      </Card>
    </>
  );
}

export default UsersDetail;
