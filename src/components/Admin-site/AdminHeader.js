import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
    return(
        <>
        <div className="container-fluid bg-white text-dark py-2">
            <div className="row align-items-center">
                 {/* Search Bar */}
                 <div className="col-md-9"> {/* Increased column width */}
                    <div className="input-group w-100"> {/* Ensure full width */}
                        <span className="input-group-text bg-white">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input type="text" className="form-control flex-grow-1" placeholder="Search..." />
                    </div>
                </div>

                {/* Header Actions */}
                <div className="col-md-3 d-flex justify-content-end align-items-center">
                {/* Notifications */}
                <div className="position-relative me-3">
                    <FontAwesomeIcon icon={faBell} className="fs-5" />
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">3</span>
                </div>
                <div className="position-relative me-3">
                    <FontAwesomeIcon icon={faEnvelope} className="fs-5" />
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">5</span>
                </div>

                {/* User Profile */}
                <div className="d-flex align-items-center">
                    <div className="bg-white text-dark fw-bold rounded-circle d-flex justify-content-center align-items-center border border-dark" style={{ width: "40px", height: "40px" }}>
                        NC
                        </div>
                        <div className="ms-2">
                        <div className="fw-bold">Niranjan Chand</div>
                        <div className="small">Administrator</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default AdminHeader;