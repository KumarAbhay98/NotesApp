import React, { useState } from "react";
import "./style.css";
import Menu from "./MovieApi";
import MenuCard from "./Menucard";
import Navbar from "./MovieNavbar";
import Footer from "./Footer";
import Imgslider from "./Carousel";
import ScrollToTop from "./GoUpBtn";
import Navbar2 from "./MainNavbar";

const uniqueBranchList = [...new Set(Menu.map((curElem) => curElem.branch)), "All"];
const uniqueSemesterList = [...new Set(Menu.map((curElem) => curElem.semester.toString())), "All"];

const Boxoffice = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");

  const filterItem = (branch, semester) => {
    setSelectedBranch(branch);
    setSelectedSemester(semester);

    if (branch === "All" && semester === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      const branchCondition = branch === "All" || curElem.branch === branch;
      const semesterCondition = semester === "All" || curElem.semester.toString() === semester;
      return branchCondition && semesterCondition;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      {/* Navbar at the top of the Movie section */}
      <Navbar2 />

      <div className="sliderr">Featured Movies</div>
      <div className="Sliderbg">
        {/* Carousel */}
        <Imgslider />
      </div>
      {/* Navbar for Filter */}
      <Navbar
        filterItem={filterItem}
        menuBranchList={uniqueBranchList}
        menuSemesterList={uniqueSemesterList}
        selectedBranch={selectedBranch}
        selectedSemester={selectedSemester}
      />
      <MenuCard menuData={menuData} />
      {/* Scroll to Top */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Boxoffice;
