import React, { useState, useRef } from 'react';
import FilterCheckbox from './FilterCheckbox';
import Chevron from './utils/Chevron';
import './sass/FilterGroup.scss';


const FilterGroup = ({ items, title, filter_key, selectedFilters, setFilters }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon rotate");

  const filterGroupContent = useRef(null);

  //creating collapse functionality for filter groups
  const toggleCollapse = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${filterGroupContent.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <>
      <div style={{position: "relative"}}>
        <h5 onClick={toggleCollapse} style={{lineHeight: "20px", textAlign: "left", paddingLeft: "10px", textIndent: "-10px"}} className="text-secondary btn btn-link font-weight-bold m-0">
          <Chevron className={setRotate} height={10} width={10} fill={"#2B1E76"} onClick={toggleCollapse} />
          {title}
        </h5>
      </div>
      {/* map out all filter options for the current category */}
      <ul className={`${setActive} filterGroupList list-unstyled pl-3`} ref={filterGroupContent} style={{ maxHeight: `${setHeight}` }}>
        {items.map((item, i) =>
          <FilterCheckbox
            key={title + "-checkbox-" + i + "-" + JSON.stringify(item)}
            item={item}
            filter_key={filter_key}
            title={title}
            selectedFilters={selectedFilters}
            setFilters={setFilters}
          />
        )}
      </ul>
    </>
  );
}

export default FilterGroup;
