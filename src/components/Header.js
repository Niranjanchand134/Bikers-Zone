import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Space, Menu } from "antd";
import { UserOutlined, LogoutOutlined, FormOutlined } from "@ant-design/icons";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("is_login") === "1"; // Check login status
  const username = localStorage.getItem("username"); // Get username from localStorage

  const handleLogoutClick = () => {
    // localStorage.removeItem("is_login");
    localStorage.removeItem("username");
    navigate("/login");
    window.location.reload(); // Refresh to update header
  };

  const handleSellBikeClick = () => {
    navigate("/sellbike");
  };

  const menu = (
    <Menu
      items={[
        {
            label: "Manage my ad",
            key: "manage my ads",
            icon: <FormOutlined />,
            onClick: () => navigate('/manageAd'),
          },
          {
            label: "Profile",
            key: "profile",
            icon: <UserOutlined />,
            onClick: () => navigate('/profilePage'),
          },
        {
          label: "Logout",
          key: "logout",
          icon: <LogoutOutlined />,
        },
      ]}
      onClick={({ key }) => {
        if (key === "logout") {
          handleLogoutClick();
        }
      }}
    />
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Bikers Zone</NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div className="buttons d-flex align-items-center text-center gap-3">
            {isLogin ? (
              <Dropdown overlay={menu} trigger={["hover"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                  <UserOutlined />{username}
                  </Space>
                </a>
              </Dropdown>
            ) : (
              <NavLink to="/login" className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus mr-1"></i> Login/SignUp
              </NavLink>
            )}
            <button onClick={handleSellBikeClick} className="btn btn-outline-dark m-2">
              <i className="fa fa-motorcycle mr-1"></i> Sell My Bike
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
