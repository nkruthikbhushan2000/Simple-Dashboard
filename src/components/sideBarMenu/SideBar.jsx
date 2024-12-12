import React, { useState } from "react";
import RecursiveFolder from "../recursiveFolder/RecursiveFolder";
import MenuStructure from "../../utils/menu.json";
import "./SideBar.css";

export const sections = ["Dashboards", "Pages"];
export const FavouritesRecently = [
  {
    Favorites: [
      { id: 1, name: "Overview" },
      { id: 2, name: "Projects" },
    ],
  },
  {
    Recently: [
      { id: 1, name: "Example1" },
      { id: 2, name: "Example2" },
    ],
  },
];

const SideBar = () => {
  const [tabSelected, setTabSelected] = useState("Favorites");

  const toggleFav = (tabName) => {
    console.log(tabName);
    setTabSelected(tabName);
  };

  return (
    <div className="sidebar-container">
      <section className="sidebar-section profile-section">
        <img
          className="profile-image"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="profile-name">Kruthik Bhushan</div>
      </section>
      <section className="sidebar-section sidebar-fav-rec">
        <div className="sidebar-tabs-name">
          {FavouritesRecently.map((ele) => (
            <span
              className={`tab-name ${
                tabSelected === Object.keys(ele)[0] ? "active-tab" : ""
              }`}
              onClick={() => toggleFav(Object.keys(ele)[0])}
            >
              {Object.keys(ele)[0] ?? "no-tab"}
            </span>
          ))}
        </div>
        <div className="sidebar-tabs">
          <ul>
            {FavouritesRecently.map((ele) => {
              if (tabSelected === Object.keys(ele)[0]) {
                return ele[tabSelected].map((item) => (
                  <li key={item.id}>{item.name}</li>
                ));
              }
            })}
          </ul>
        </div>
      </section>
      <section className="sidebar-section">
        <div className="sidebar-heading">Dashboards</div>
        <RecursiveFolder folderObject={MenuStructure["Dashboards"]} />
      </section>
      <section className="sidebar-section">
        <div className="sidebar-heading">Pages</div>
        <RecursiveFolder folderObject={MenuStructure["Pages"]} />
      </section>
    </div>
  );
};

export default SideBar;
