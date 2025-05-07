import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="mb-3">
          <a href="./about" className="text-light mx-2 text-decoration-none">About Us</a>
          <a href="./contact" className="text-light mx-2 text-decoration-none">Contact Us</a>
          <a href="#terms" className="text-light mx-2 text-decoration-none">Terms & Conditions</a>
          <a href="#privacy" className="text-light mx-2 text-decoration-none">Privacy & Policy</a>
        </div>
        <div className="d-flex gap-2">
          <a href="#youtube" className="text-light mx-2 d-flex align-items-center justify-content-center rounded-circle bg-white text-decoration-none" style={{ width: "40px", height: "40px" }}>
            <i className="fab fa-youtube fa-lg text-dark"></i>
          </a>
          <a href="#instagram" className="text-light mx-2 d-flex align-items-center justify-content-center rounded-circle bg-white text-decoration-none" style={{ width: "40px", height: "40px" }}>
            <i className="fab fa-instagram fa-lg text-dark"></i>
          </a>
          <a href="#facebook" className="text-light mx-2 d-flex align-items-center justify-content-center rounded-circle bg-white text-decoration-none" style={{ width: "40px", height: "40px" }}>
            <i className="fab fa-facebook-f fa-lg text-dark"></i>
          </a>
          <a href="#tiktok" className="text-light mx-2 d-flex align-items-center justify-content-center rounded-circle bg-white text-decoration-none" style={{ width: "40px", height: "40px" }}>
            <i className="fab fa-tiktok fa-lg text-dark"></i>
          </a>
        </div>
      </div>
        <hr className="border-light" />
        <p className="mb-3 mb-md-0">Made by ❤️ {" "} 
          <a  href="https://www.linkedin.com/in/niranjan-chand/" className="text-decoration-underline text-white fs-5" target="_blank" rel="noreferrer">Niranjan Chand Thakuri </a> ❤️
        </p>
        <a className="text-white fs-4" href="https://github.com/Niranjanchand134" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>

      </>
  );
}

export default Footer;