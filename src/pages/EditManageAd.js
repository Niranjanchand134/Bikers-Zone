import Footer from "../components/Footer";
import Header from "../components/Header";
import { Form, Input, Button, message, Cascader } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PlusOutlined, UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { showSuccessToast } from "./Toastify.Util";


const EditManageAd = () => {
  const [editForm] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState(null);
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log("Current ID:", id); // Debugging

    if (id) {
      fetchData();
    }
  }, [id]); // Run when `id` changes

  useEffect(() => {
    if (editingProduct) {
      console.log("Setting form values:", editingProduct); // Debugging
      editForm.setFieldsValue(editingProduct);
    }
  }, [editingProduct, editForm]); // Run when `editingProduct` updates

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/ads/${id}`)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        setEditingProduct(response.data);
      })
      .catch((error) => console.showErrorToast("Error fetching data:", error));
  };

  const handleEditSubmit = () => {
    editForm.validateFields().then((values) => {
      axios
        .patch(`http://localhost:4000/ads/${id}`, values)
        .then(() => {
          showSuccessToast('Ad updated successfully');
          fetchData(); // Refresh data after update
        })
        .catch((error) => console.showErrorToast("Error updating ad:", error));
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="font-semibold text-center">Edit Ad</h2>
        <Form form={editForm} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="brandModel"
            label="Brand and Model"
            rules={[{ required: true, message: "Please select your brand and model!" }]}
          >
            <Cascader
              options={[
                {
                  value: "Bajaj",
                  label: "Bajaj",
                  children: [{ value: "Bajaj Avenger 150 Street", label: "Bajaj Avenger 150 Street" },
                    { value: "Bajaj Discover 125", label: "Bajaj Discover 125" },
                    { value: "Bajaj Dominar 250", label: "Bajaj Dominar 250" },
                    { value: "Bajaj Dominar 400", label: "Bajaj Dominar 400" },
                    { value: "Bajaj Avenger 150 Street", label: "Bajaj Avenger 150 Street" },
                    { value: "Bajaj Avenger 150 Street", label: "Bajaj Avenger 150 Street" },
                  ],
                },
                {
                  value: "Honda",
                  label: "Honda",
                  children: [{ value: "Honda CB350 RS", label: "Honda CB350 RS" },
                             { value: "Honda CRF 250L", label: "Honda CRF 250L" },
                             { value: "Honda CBR 250R", label: "Honda CBR 250R" },
                             { value: "Honda CBR 600RR", label: "Honda CBR 600RR" },
                             { value: "Honda DIO", label: "Honda DIO" },
                  ],
                },
                {
                  value: "Crossfire",
                  label: "Crossfire",
                  children: [{ value: "Crossfire GR7 250", label: "Crossfire GR7 250" },
                             { value: "Crossfire HJ 250", label: "Crossfire HJ 250" },
                             { value: "Crossfire RM 250", label: "Crossfire RM 250" },
                             { value: "Crossfire Tracker 250", label: "Crossfire Tracker 250" },
                             { value: "Crossfire XZ 250", label: "Crossfire XZ 250" },
                  ],
                },
                {
                  value: "Yamaha",
                  label: "Yamaha",
                  children: [{ value: "Yamaha mt-15", label: "Yamaha mt-15" },
                             { value: "Yamaha FZ-150", label: "Yamaha FZ-150" },
                             { value: "Yamaha TMax 560", label: "Yamaha TMax 560" },
                             { value: "Yamaha YBR", label: "Yamaha YBR" },
                             { value: "Yamaha XTZ 150", label: "Yamaha XTZ 150" },
                  ],
                },
                {
                  value: "KTM",
                  label: "KTM",
                  children: [{ value: "KTM Duke 250", label: "KTM Duke 250" },
                             { value: "KTM Duke 390", label: "KTM Duke 390" },
                             { value: "KTM Duke 790", label: "KTM Duke 790" },
                             { value: "KTM RC 200", label: "KTM RC 200" },
                             { value: "KTM RC 390", label: "KTM RC 390" },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Make Year"
            name="makeYear"
            rules={[{ required: true, message: "Please enter Make Year" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="location" label="Location" rules={[{ required: true }]}>
            <Input placeholder="Enter your address" prefix={<EnvironmentOutlined />} />
          </Form.Item>

          <Form.Item name="contact" label="Contact" rules={[{ required: true }]}>
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter Price" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Kilometers"
            name="kilometers"
            rules={[{ required: true, message: "Please enter Kilometers" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Condition"
            name="condition"
            rules={[{ required: true, message: "Please enter Condition" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter Description" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="images" label="Upload">
            <Input
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form>
      </div><br/>
      <Footer />
    </>
  );
};

export default EditManageAd;
