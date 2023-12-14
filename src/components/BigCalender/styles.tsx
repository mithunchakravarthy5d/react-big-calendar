import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  
  dashboardRightPanelStyle: (props: any) => ({
   

    "& .rbc-time-gutter .rbc-timeslot-group:nth-child(n + 1):nth-child(-n + 12)":
      {
        borderBottom: "none",
      },

    "& .rbc-event": {
      width: "100%",
    },

    "& .rbc-day-slot .rbc-events-container": {
      marginRight: 0,
    },

    "& .rbc-allday-cell": {
      display: "none",
    },

    "& .rbc-time-content": {
      borderTop: 0,
    },

    "& .rbc-time-content::-webkit-scrollbar": {
      width: "0.2em",
    },
    /* .rbc-time-content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.00);
    webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00);
  } */
    "& .rbc-time-content::-webkit-scrollbar-thumb": {
      backgroundColor: "#828282",
      outline: "1px solid#828282",
      borderRadius: "0.1em",
    },

    /* &::-webkit-scrollbar */

    "& .rbc-row.rbc-time-header-cell": {
      minHeight: "50px",
    },

    "& .rbc-time-header-content": {
      border: "0 !important",
      backgroundColor: "#F5F2FF",
      borderRadius: "1vw",
    },

    "& .rbc-time-header.rbc-overflowing": {
      border: 0,
    },

    "& .rbc-header + .rbc-header": {
      borderLeft: 0,
    },

    "& .rbc-time-view": {
      border: 0,
    },

    "& .rbc-header": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "0 !important",
      whiteSpace: "pre",
    },

    '& .rbc-header.rbc-today span[role="columnheader"]::before': {
      content: '" "',
      position: "absolute",
      left: "0px",
      right: "0px",
      top: "1%",
      bottom: "50%",
      borderRadius: "0.6vw",
      /* width: 1vw; */
      /* height: 1vw; */
      backgroundColor: "#957AFF",
      zIndex: "-1",
    },

    '& .rbc-header.rbc-today span[role="columnheader"]': {
      /* color: #fff; */
      fontSize: "1.1vw",
      fontWeight: 800,
    },

    '& span[role="columnheader"]': {
      display: "block",
      position: "relative",
      lineHeight: "1.7vw",
      whiteSpace: "pre-wrap",
      maxWidth: "2vw",
      zIndex: 1,
    },

    "& .rbc-event, .rbc-day-slot .rbc-background-event": {
      border: "none",
      boxSizing: "border-box",
      boxShadow: "none",
      margin: 0,
      padding: "0.1vw 0.4vw 0.1vw 0.4vw",
      backgroundColor: "unset !important",
      borderRadius: "5px",
      color: "#fff",
      cursor: "pointer",
      width: "100%",
      textAlign: "left",
    },

    "& .rbc-timeslot-group": {
      borderBottom: "0.5px solid #ddd",
      minHeight: "90px",
    },

    "& .rbc-time-content > * + * > *": {
      borderLeft: "0.5px solid #ddd",
    },

    "& .rbc-day-slot .rbc-event, .rbc-day-slot .rbc-background-event": {
      border: "none",
    },

    "& .event-container:after": {
      content: '" "',
      position: "absolute",
      left: "0.4vw",
      top: "18%",
      height: "65%",
      borderLeft: "5px solid #957AFF",
      borderRadius: "0.5vw",
    },

    "& .rbc-current-time-indicator": {
      position: "absolute",
      zIndex: 5,
      // left: "-100%",
      // width: "700%",
      left: props?.selectedValue === "DAY" ? "0%" : `${props?.nDayOfWeek * -100}% !important`, // "-150% !important",
       width: props?.selectedValue === "DAY" ? "100%" : "700%", // "100% !important",
      height: "2px",
      backgroundColor: "#EB5685",
      pointerEvents: "none",
    },

    "& .rbc-current-time-indicator:after": {
      content: '" "',
      position: "absolute",
      background: "#EB5685",
      left: "0vw",
      top: "-170%",
      width: "0.8%",
      height: "430%",
      borderRadius: "50%",
    },

    "& .rbc-event-label": {
      fontSize: "100%",
      color: "#EB5685",
    },

    '& .rbc-event[title*="Point in Time Event"]': {
      // left: "-250% !important",
      left: props?.selectedValue === "DAY" ? "0%" : `${-(50 + (Number(props?.nDayOfWeek) * 100))}% !important`, // "-150% !important",
      width: "100% !important",
    },

    // '& .rbc-event[title*="Point in Time Event"]': {
    //   left: props?.selectedValue === "DAY" ? "0%" : `${props?.nDayOfWeek * -100}% !important`, // "-150% !important",
    //   width: props?.selectedValue === "DAY" ? "100%" : `${(8 - props?.nDayOfWeek) * 100}%`, // "100% !important",
    // },

    "& .rbc-toolbar": {
      display: "flex",
      /* flex-direction: row-reverse; */
      justifyContent: "flex-start",
      paddingTop: "1vw",
    },

    "& .rbc-toolbar .rbc-toolbar-label": {
      flexGrow: 0,
      padding: "0 10px",
      textAlign: "center",

      /* min-width: 18vw;
      flex-grow: 0;
      padding: 0 10px;
      text-align: start; */
    },

    "& .rbc-toolbar > span:nth-of-type(3)": {
      display: "none",
    },

    "& .rbc-toolbar > span:nth-of-type(1)": {
      paddingLeft: "1vw",
    },

    "& .rbc-toolbar > span:nth-of-type(1) > button:nth-child(1)": {
      display: "none",
    },

    "& .rbc-toolbar > span:nth-of-type(1) > button:nth-child(2), .rbc-toolbar > span:nth-of-type(1) > button:nth-child(3)":
      {
        border: "none",
      },

    "& .rbc-toolbar button": {
      padding: "0.6rem",
    },
  }),
});
export default useStyles;
