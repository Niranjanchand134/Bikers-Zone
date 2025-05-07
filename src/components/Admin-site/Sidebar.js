import {NavLink, useNavigate} from "react-router";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import {
    DesktopOutlined,
    LogoutOutlined,
    UserOutlined,
    ProductOutlined
  } from "@ant-design/icons";


const { Content, Sider } = Layout;
  
  function getItem(label, key, icon, onClick = null, children = null) {
    return { key, icon, children, label, onClick };
  }
const Sidebar = () => {
const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();

const handleLogoutClick = () => {
  localStorage.setItem("is_login", "0");
  navigate("/login");
};
  const items = [
    getItem("Dashboard", "1", <DesktopOutlined />, () => navigate('/admin/dashboard')),
    getItem("Users", "2", <UserOutlined />, () => navigate('/admin/userDetail')),
    getItem("Product Details", "sub1", <ProductOutlined />,  () => navigate("/admin/productdetail")),
    // getItem("Teams", "sub2", <TeamOutlined />, null, [
    //   getItem("ProductDetail", "sub3", <SettingOutlined />, () => navigate("/admin/settings")),
    //   getItem("Team 2", "8"),
    // ]),
    getItem("Logout", "9", <LogoutOutlined />, handleLogoutClick),
  ];
  return (
    <>
    
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div>
          <h1 className="text-light text-center fs-6 m-3">Admin <span className="text-primary">Panel</span></h1>
      </div><hr className="border-top border-white my-2" />
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={({ key }) => {
                    const selectedItem = items.find((item) => item.key === key);
                    if (selectedItem?.onClick) selectedItem.onClick();
                }}
              />
            </Sider>
            </>
  );
}

export default Sidebar;