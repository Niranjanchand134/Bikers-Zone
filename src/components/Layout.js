import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { theme } from "antd";


function getItem(label, key, icon, onClick = null, children = null) {
  return { key, icon, children, label, onClick };
}

const CustomLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem("is_login");
    if (isLogin !== "1") {
      navigate("/login");
    }
  }, [navigate]);

  // const items = [
  //   getItem("Users", "1", <UserOutlined />, () => navigate('/admin/users')),
  //   getItem("Dashboard", "2", <DesktopOutlined />, () => navigate('/admin/dashboard')),
  //   getItem("Settings", "sub1", <SettingOutlined />, () => navigate("/admin/settings")),
  //   getItem("Teams", "sub2", <TeamOutlined />, null, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
  //   getItem("Logout", "9", <LogoutOutlined />, handleLogoutClick),
  // ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
        <Header />
        <Main />
        <Footer />
    </>
    // <Layout style={{ minHeight: "100vh" }}>
    //   <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    //     <div className="demo-logo-vertical" />
    //     <Menu
    //       theme="dark"
    //       defaultSelectedKeys={["1"]}
    //       mode="inline"
    //       items={items}
    //       onClick={({ key }) => {
    //         const selectedItem = items.find((item) => item.key === key);
    //         if (selectedItem?.onClick) selectedItem.onClick();
    //       }}
    //     />
    //   </Sider>
    //   <Layout>
        
    //     <Content style={{ margin: "0 16px" }}>
    //       <Breadcrumb style={{ margin: "20px 0" }}>
    //         <Breadcrumb.Item>User</Breadcrumb.Item>
    //         <Breadcrumb.Item>Bill</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <div
    //         style={{
    //           padding: 24,
    //           minHeight: 700,
    //           background: colorBgContainer,
    //           borderRadius: borderRadiusLG,
    //         }}
    //       >
    //         <Outlet />
    //       </div>
    //     </Content>
        
    //   </Layout>
    // </Layout>
  );
};

export default CustomLayout;
