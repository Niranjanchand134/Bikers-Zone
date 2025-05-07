import { Space, Table, Card, Button, Modal, Form, Input, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
import { showSuccessToast } from '../Toastify.Util';

const AdminProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Store fetched data
  const [size] = useState('large');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Fetch all products
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:4000/ads')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.showErrorToast('Error fetching data:', error));
  };

  // Handle Add Product button
  const handleAddProduct = () => {
    navigate('/admin/addproduct');
  };

  // Handle Delete Product
  const showModal = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:4000/ads/${deleteId}`)
      .then(() => {
        fetchData();
        showSuccessToast('Product deleted successfully');
        setOpen(false);
      })
      .catch(error => console.showErrorToast("Error deleting product:", error));
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
      axios.patch(`http://localhost:4000/ads/${editingProduct.id}`, values)
        .then(() => {
          fetchData(); // Refresh table data
          setIsEditModalOpen(false);
          showSuccessToast('Product Edited Successfully');
        })
        .catch(error => console.showErrorToast("Error updating product:", error));
    });
  };

  const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Brand and Model',
      dataIndex: 'brandModel',
      key: 'brandModel',
    },
    {
      title: 'Make Year',
      dataIndex: 'makeYear',
      key: 'makeYear',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Kilometers',
      key: 'kilometers',
      dataIndex: 'kilometers',
    },
    {
      title: 'Condition',
      key: 'condition',
      dataIndex: 'condition',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Upload',
      key: 'upload',
      dataIndex: 'images',
      render: (text) => <img src={text} alt="img" width={50} />
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
      <Card type="inner" title={<h5>User Add Product Detail</h5>} extra={<Button type="primary" onClick={handleAddProduct} shape="round" icon={<PlusOutlined />} size={size}>
        Add Product
      </Button>}>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </Card>

      {/* Edit Product Modal */}
      <Modal title="Are you sure you want to delete this?" open={open} onOk={deleteProduct} onCancel={hideDeleteModal} okText="Delete" cancelText="Cancel" />
      <Modal
        title="Edit Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        onOk={handleEditSubmit}
      >
        <Form form={editForm} layout="vertical">
          <Form.Item label="Brand and Model" name="brandModel" rules={[{ required: true, message: 'Please enter Brand and Model' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Make Year" name="makeYear" rules={[{ required: true, message: 'Please enter Make Year' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please enter Price' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Kilometers" name="kilometers" rules={[{ required: true, message: 'Please enter Kilometers' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Condition" name="condition" rules={[{ required: true, message: 'Please enter Condition' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter Description' }]}>
            <Input />
          </Form.Item>
            <Form.Item name="images" label="Upload">
            <Input
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AdminProductDetail;
