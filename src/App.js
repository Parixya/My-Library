import { Link, Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div className="App mx-5 ">
      <h3 className="mt-3">  <i className="fa fa-book"></i>کتابخانه کوچک من</h3>
      {/*About - Books*/}
      <nav className="navbar justify-content-center" style={{ borderBottom: "solid 2px gray", paddingBottom: "1rem" }}>
        <Link to="/books" className="nav-link nav-item text-dark fw-bold">کتاب ها</Link>{"  "}<Link className="nav-link nav-item text-dark  fw-bold" to="/about">درباره ما</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
