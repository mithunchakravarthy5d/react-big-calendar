import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Calendar, Views, DateLocalizer } from "react-big-calendar";
import events from "../../resources/events";
import dayjs from 'dayjs'
import { leftVector, rightVector } from "../../assets/calenderIcons";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./styles.css";
import useStyles from "./styles";
import theme from "../../themes/theme";

interface TimeslotsProps {
  localizer: DateLocalizer;
  selectedValue: string;
}

const BigCalender = (props: TimeslotsProps) => {
  const { localizer, selectedValue } = props;

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);


  // useEffect(() => {
  //   switch (selectedTheme) {
  //     case "light":
  //       setAppTheme(theme?.lightTheme);
  //       break;
  //     case "dark":
  //       setAppTheme(theme?.darkTheme);
  //       break;
  //     default:
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //   }
  // }, [selectedTheme]);

  const nDayOfWeek = dayjs().day();
  const {
    dashboardRightPanelStyle
    
  } = useStyles({ selectedValue, nDayOfWeek});

  

  useEffect(() => {
    const secondButton: any = document.querySelector(
      ".rbc-toolbar > span:nth-of-type(1) > button:nth-child(2)"
    );
    const thirdButton: any = document.querySelector(
      ".rbc-toolbar > span:nth-of-type(1) > button:nth-child(3)"
    );

    // Create an image element
    const imgElementLeftArrow = document.createElement("img");
    imgElementLeftArrow.src = leftVector; // Set the path to your image

    const imgElementRightArrow = document.createElement("img");
    imgElementRightArrow.src = rightVector;

    // Clear existing content of the button
    secondButton.innerHTML = "";

    thirdButton.innerHTML = "";

    if (secondButton && thirdButton) {
      // Append the image element to the button
      secondButton.appendChild(imgElementLeftArrow);
      thirdButton.appendChild(imgElementRightArrow);

      // secondButton.textContent = '<';
      // thirdButton.textContent = '>';
    }
  }, []);


  function findWeekendsForYear(year: number) {
    const weekends = [];
    const weekendEvents: any[] = [];

    // Loop through each month of the year
    for (let month = 0; month < 12; month++) {
      // Set the date to the first day of the month
      const currentDate = new Date(year, month, 1);

      // Loop through each day of the month
      while (currentDate.getMonth() === month) {
        // Check if the current date is a Saturday or Sunday
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
          weekends.push(new Date(currentDate)); // Store a copy of the date
        }

        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    weekends?.map((item: any, index: number) => {
      // Given date
      const givenDate = new Date(item);

      // Create a new Date object with the given date
      const endDate = new Date(givenDate);

      // Add 23 hours and 59 minutes to the new date
      endDate.setHours(endDate.getHours() + 23);
      endDate.setMinutes(endDate.getMinutes() + 59);

      console.log("end date", endDate);
      weekendEvents?.push({
        isWeekEnd: true,
        id: index + "w",
        title: "Week off",
        start: item,
        end: endDate,
      });
    });

    return weekendEvents;
  }

  const yearToCheck = 2023; // Change this to the desired year
  const weekendsForYear = findWeekendsForYear(yearToCheck);

  const defaultDate = useMemo(() => new Date(), []);

  const startEndTimeFormatted = (
    start: any,
    end: any,
    isFromFormats?: boolean
  ) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    // Convert to a string in the format "1:00 AM"
    const formattedTime = startDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const formattedTime2 = endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    if (isFromFormats) {
      return `${formattedTime}`;
    }
    return `${formattedTime} - ${formattedTime2}`;
  };

  const formats = useMemo(
    () => ({
      eventTimeRangeFormat: (item: any) => {
        const filteringDates = new Date(item.start);

        // if (filteringDates.getDay() === 0 || filteringDates.getDay() === 6) {
        //   return "";
        // }
        //  return startEndTimeFormatted(item.start, item.end)

        if (item.start === item.end) {
          return startEndTimeFormatted(item.start, item.end, true);
        }
        return "";
      },
    }),
    []
  );

  // const formats = useMemo(() => ({

  //     eventTimeRangeFormat: ({start, end}:any, culture: string, localizer: DateLocalizer ) =>{
  //       console.log("test", culture)
  //       return localizer.format(start, { date: 'short' }, culture) + ' — ' +
  //       localizer.format(end, { date: 'short' }, culture)
  //     }

  // }), [])

  const MonthEvent = ({ event }: any) => {
    console.log("event", event);
    if (event?.isWeekEnd) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: "#F7F7F7",
            color: "#000000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              transform: `rotate(-90deg)`,
              color: "#1D1D1D",
              fontWeight: 700,
              fontSize: "1.5vw",
              opacity: "40%"
            }}
          >
            {event?.title}
          </div>
        </div>
      );
    }
    if (
      event?.title !== "Today" &&
      event?.title !== "Point in Time Event" &&
      event?.title !== "RECESS"
    ) {
      const timeRage = startEndTimeFormatted(event?.start, event?.end);
      return (
        <div
          // className="event-container"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background:
              event?.title === "Webinar session"
                ? "#FFF4BD"
                : event?.title === "Mathematics test"
                ? "#FFD6E4"
                : "#EAE5FF",
            color: "#000000",
            justifyContent: "center",
            paddingLeft: "0.8vw",
            rowGap: "0.5vw",
            fontSize: "1vw",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              content: "''",
              position: "absolute",
              left: "0.4vw",
              top: "18%",
              height: "65%",
              borderLeft:
                event?.title === "Webinar session"
                  ? "5px solid #FCDF4F"
                  : event?.title === "Mathematics test"
                  ? "5px solid #EB5685"
                  : "5px solid #957AFF",
              borderRadius: "0.5vw",
            }}
          ></div>
          <div>{event?.title}</div>
          <div style={{ fontWeight: 300 }}>{timeRage}</div>
        </div>
      );
    }
    if (event?.title === "RECESS") {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "0.8vw",
            rowGap: "0.5vw",
            fontSize: "1vw",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#957AFF",
              transform: `rotate(-6.36deg)`,
              border: "1px solid #957AFF",
              borderRadius: "0.6vw",
              padding: "0.5vw 0.7vw",
            }}
          >
            {event?.title}
          </div>
        </div>
      );
    }
    return null;
  };

  
  return (
    <>
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          height: "100%",
          background: "#EBE4E2",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "90%",
            background: "#FFFFFF",
            marginTop: "4%",
          }}
        >
          <Calendar
            formats={formats}
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            view={
              selectedValue === "WEEK"
                ? Views.WEEK
                : selectedValue === "MONTH"
                ? Views.MONTH
                : selectedValue === "DAY"
                ? Views.DAY
                : Views.AGENDA
            }
            events={[...events, ...weekendsForYear]}
            localizer={localizer}
            step={60}
            timeslots={1}
            components={{
              week: { event: MonthEvent },
            }}
            className={dashboardRightPanelStyle}
          />
        </div>
      </div>
    </>
  );
};

export default BigCalender;
