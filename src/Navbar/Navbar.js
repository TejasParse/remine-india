
import "./Navbar.css"

let Navbar1 = (props) => {

  return (
    <div>
      <div className="row navbar-bg p-3 text-white">
        <div className="col-4 d-flex justify-content-evenly">
          <button className="navbar-buttons">Home</button>
          <button className="navbar-buttons">Adopt</button>
          <button className="navbar-buttons">Upload</button>
        </div>
        <div className="col-6"></div>
        <div className="col-2 d-flex justify-content-evenly">
          <button className="navbar-buttons">Login</button>
          <button className="navbar-buttons">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
