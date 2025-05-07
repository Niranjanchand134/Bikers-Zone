import { Outlet, useNavigate } from "react-router";
import { Layout, theme } from "antd";
import Sidebar from "../../components/Admin-site/Sidebar";
import AdminHeader from "../../components/Admin-site/AdminHeader";
  
  
  
  
const AdminHome = () => {
    const navigate = useNavigate();
    const { Content } = Layout;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
    return(
        <>
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar/>
            
            <Layout>
                
                <Content style={{ margin: "0 16px" }}>
                <AdminHeader/>
                
                <div
                    style={{
                    padding: 24,
                    minHeight: 700,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                    
                </div>
                </Content>
                
            </Layout>
            </Layout>
            
        </>
    );
}

export default AdminHome;