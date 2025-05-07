import { useNavigate } from "react-router";
import UserHeader from "./UserHeader";
import UserRow from "./UserRow";
import { useEffect, useState} from "react";
import { Button, Flex, Table, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;



const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Users = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleAddUser = () => {
    navigate('/admin/user/create');
  };
  useEffect(() => {
    setData(
      [
        { id: 1, name: 'John Doe', age: 25, email: 'john@a.com', key: 1 },
        { id: 2, name: 'Jane Doe', age: 24, email: 'jane@gmail.com', key: 2},
        { id: 3, name: 'John Smith', age: 30, email: 'smith@gamil.com', key: 3},
        { id: 4, name: 'Jane Smith', age: 28, email: 'xyz@gmail.com', key: 4},
        { id: 5, name: 'John Brown', age: 35, email: 'brown@yahoo.com', key: 5},
      ]
    );
  }, []);


  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  //this is part of add user
  const [user, setUser] = useState(
      {
        name: "",
        age: 0,
        email: "",
        role: ""
      }
    );
    const [error, setError] = useState({
      name: "",
      age: "",
      email: "",
      role: ""
    });
  
    const handleNameChange = (e) => {
      setUser({...user, name: e.target.value});
      setError({...error, name: ""});
    }
    const handleAgeChange = (e) => {
      setUser({...user, age: e.target.value});
      setError({...error, age: ""});
    } 
    const handleEmailChange = (e) => {
      setUser({...user, email: e.target.value});
      setError({...error, name: ""});
    }
  
    const handleSubmit = () => {
      const validationError ={
        name: "",
        age: "",
        email: "",
        role: ""
      };
  
      let isValid = true;
  
      if (user.name === "") {
        validationError.name = "Name is required";
        isValid = false;
      }
      if (user.age === 0) {
        validationError.age = "Age is required";
        isValid = false;
      }
      if (user.email === "") {
        validationError.email = "Email is required";
        isValid = false;
      }
      if (user.role === "") {
        validationError.role = "Role is required";
        isValid = false;
      }
  
      setError(validationError);
      if (!isValid) {
        return;
      }
      console.log(user);
    }

  return (
    <>
    <Button type="primary" shape="round" onClick={showDrawer} icon={<PlusOutlined />}>
      Add User
      </Button><br/><br/>

    <Drawer
        title="Create a new user"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <form layout="vertical">
          
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" value={user.name} onChange={handleNameChange}/>
                <div>{error.name}</div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user age',
                  },
                ]}
              >
                <Input type="number" placeholder="Please enter user age" value={user.age} onChange={handleAgeChange}/>
                <div>{error.age}</div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user email',
                  },
                ]}
              >
                <Input placeholder="Please enter user email" value={user.email} onChange={handleEmailChange}/>
                <div>{error.email}</div>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="role"
                label="Role"
                rules={[
                  {
                    required: true,
                    message: 'Please select an role',
                  },
                ]}
              >
                <select onChange={(e) => {
                  setUser({...user, role: e.target.value});
                }}>
                  <option value="">--Select Role---</option>
                  <option value="admin" selected={user.role === "admin"}>Admin</option>
                  <option value="user" selected={user.role === "user"}>User</option>
                </select>
                <div>{error.role}</div>
              </Form.Item>
            </Col>
       <div/>
      </form>
      </Drawer>
    



    <div className="v-col users">
      

      <h1>{props.title}</h1><br/>

      <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </Flex>
    </div>
    </>
  );
}


export default Users;