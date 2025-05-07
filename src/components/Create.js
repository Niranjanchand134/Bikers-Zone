import { Cascader, Form, Select, Input, DatePicker, message } from "antd";
import { PlusOutlined, UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showSuccessToast } from "../pages/Toastify.Util";

const { Option } = Select;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) return e;
  return e?.fileList;
};

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

const Create = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Redirect if not logged in
  useEffect(() => {
    const isLogin = localStorage.getItem("is_login");
    if (isLogin !== "1") {
      navigate("/login");
      message.error("You have to login to post an ad.");
    }
  }, [navigate]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formData = {
        name: values.name,
        brandModel: values["Brand and Model"].join(" "), // Cascader returns array
        makeYear: values["Make Year"].format("YYYY"),
        price: values["Price"],
        location: values["location"],
        contact: values["contact"],
        email: values["email"],
        kilometers: values["Kilometers"],
        condition: values["Condition"],
        description: values["Description"],
        images: [imageUrl], // Store image URL
      };

      // Send data to API
      await axios.post("http://localhost:4000/ads", formData);
      showSuccessToast('Ad created successfully!');
      form.resetFields();
      setImageUrl("");
    } catch (error) {
      message.error("Failed to create ad.");
    }
    setLoading(false);
  };

  return (
    <Form {...formItemLayout} form={form} onFinish={onFinish}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[600px] w-full bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-2">Create Ad</h2>
          <p className="text-gray-600 text-sm text-center mb-5">
            Please complete the form below to post a bike Ad.
          </p>

          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="Brand and Model"
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

          <Form.Item name="Make Year" label="Make Year" rules={[{ required: true }]}>
            <DatePicker picker="year" />
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

          <Form.Item name="Price" label="Price" rules={[{ required: true, message: "Please enter the price!" }]}>
            <Input type="number" min="0" />
          </Form.Item>

          <Form.Item name="Kilometers" label="Kilometers" rules={[{ required: true, message: "Please enter the kilometers!" }]}>
            <Input type="number" min="0" />
          </Form.Item>

          <Form.Item name="Condition" label="Condition" rules={[{ required: true }]}>
            <Select placeholder="Select a condition" allowClear>
              <Option value="new">Brand New</Option>
              <Option value="like-new">Like New</Option>
              <Option value="used">Used</Option>
            </Select>
          </Form.Item>

          <Form.Item name="Description" label="Description" rules={[{ required: true }]}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item name="Images" label="Upload">
            <Input
              className="form-control mb-2"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <button className="btn btn-outline-dark m-2" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default Create;
