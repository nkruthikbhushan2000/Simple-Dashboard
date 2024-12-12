import React, { useEffect, useState } from "react";
import { MdExpandMore, MdChevronRight } from "react-icons/md";
import "./RecursiveFolder.css";
import * as Icons from "react-icons/pi";
import { NavLink } from "react-router-dom";

const RecursiveFolder = ({ folderObject }) => {
  const { Folders } = folderObject;
  const [expansion, setExpansion] = useState({});

  const handleExpansion = (e,id) => {
    // console.log(e.target.querySelectorAll('a'));
    e.stopPropagation();
    console.log("parent clciked");
    if (expansion[id]) {
      setExpansion({ ...expansion, [id]: !expansion[id] });
    } else {
      setExpansion({ ...expansion, [id]: true });
    }
    // e.stopPropagation();
  };

  return (
    <div className="recursive-folder">
      <ul>
        {Folders.map((folder) => {
          const { [folder.icon]: Icon } = Icons;
          if (folder.Type === "file") {
            return (
              <li key={folder.id} 
              // className={`li-file ${activeTab === folder.link ? "active-menu-item":""}`}
              className="li-file"
              >
                <NavLink
                  to={folder.link ?? "no-link"}
                  exact
                  onClick={(e) => e.stopPropagation()}
                  className={({ isActive }) =>
                     isActive ? "active-menu-item" : ""
                  }
                >
                  <span>
                  {folder.icon ? <Icon className="li-icons" /> : null}
                  {folder.Name}
                  </span>
                </NavLink>
              </li>
            );
          } else {
            return (
              <li key={folder.id} className="li-folder" onClick={(e) => handleExpansion(e,folder.id)}>
                {expansion[folder.id] ? (
                  <MdExpandMore
                    className="li-expand-icons"
                    //onClick={() => handleExpansion(folder.id)}
                  />
                ) : (
                  <MdChevronRight
                    className="li-expand-icons"
                    //onClick={() => handleExpansion(folder.id)}
                  />
                )}
                {folder.icon ? <Icon className="li-icons" /> : null}
                {folder.Name}
                {/* Let recursive component be executed on expansion only */}
                {expansion[folder.id] ? (
                  <RecursiveFolder folderObject={folder} />
                ) : null}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default RecursiveFolder;

/**
 * challenges faced - 
 * Handling the bubbling up of the events
 */
