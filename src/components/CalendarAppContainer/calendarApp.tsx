import React, { useState } from "react";
import BigCalender from "../BigCalender";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Dropdown from "../DropDownComponent";

function CalendarApp() {
  const localizer = momentLocalizer(moment);
 const [selectedValue, setSelectedValue] = useState<string>('WEEK')
  const options = [
    { title: "Week", value: "WEEK" },
    { title: "Month", value: "MONTH" },
    { title: "Day", value: "DAY" },
    { title: "Agenda", value: "AGENDA" },
  ];

  const handleSelect = (selectedOption: string) => {
    setSelectedValue(selectedOption)
    
  };

  return (
    <>
    <div
    style={{
      height: "100vh"
    }}>
    <div
        style={{
          background: "#EB5685",
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "0.5vw 0vw",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "2vw" }}>Calendar</div>
        <div style={{ marginRight: "2vw" }}>
          <Dropdown options={options} onSelect={handleSelect} />
        </div>
      </div>
      <BigCalender localizer={localizer} selectedValue={selectedValue}/>
    </div>
      
    </>
  );
}

export default CalendarApp;
