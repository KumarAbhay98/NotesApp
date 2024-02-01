import React, { useState } from "react";

const Navbar = ({ filterItem, menuBranchList, menuSemesterList, selectedBranch, selectedSemester }) => {
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);

  const toggleBranchDropdown = () => {
    setShowBranchDropdown((prevState) => !prevState);
  };

  const toggleSemesterDropdown = () => {
    setShowSemesterDropdown((prevState) => !prevState);
  };

  const handleBranchItemClick = (branch) => {
    filterItem(branch, selectedSemester);
    setShowBranchDropdown(false);
  };

  const handleSemesterItemClick = (semester) => {
    filterItem(selectedBranch, semester);
    setShowSemesterDropdown(false);
  };

  return (
    <>
      <div id="section1" className="line"></div>
      <nav className="navbarr">
        <div className="navbar-content">
          <div className="explore-categories-btn" onClick={toggleBranchDropdown}>
            Click here: Branch <i className={`arrow ${showBranchDropdown ? "up" : "down"}`}></i>
          </div>
          <div className={`dropdown-menu ${showBranchDropdown ? "show" : ""}`}>
            {menuBranchList.map((curElem) => (
              <button
                key={curElem}
                className={`btn btn-group__item ${selectedBranch === curElem ? "active" : ""}`}
                onClick={() => handleBranchItemClick(curElem)}
              >
                {curElem}
              </button>
            ))}
          </div>
          <div className="explore-categories-btn" onClick={toggleSemesterDropdown}>
            Click here: Semester <i className={`arrow ${showSemesterDropdown ? "up" : "down"}`}></i>
          </div>
          <div className={`dropdown-menu ${showSemesterDropdown ? "show" : ""}`}>
            {menuSemesterList.map((curElem) => (
              <button
                key={curElem}
                className={`btn btn-group__item ${selectedSemester === curElem ? "active" : ""}`}
                onClick={() => handleSemesterItemClick(curElem)}
              >
                {curElem}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
