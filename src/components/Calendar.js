import React, { useState } from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

function TimeParse({ user, close }) {
  let dates = [];

  user.activity_periods.forEach((time) => {
    let row = {
      title: user.real_name,
      date: moment(time.start_time, "lll").format("YYYY-MM-DD"),
      color: "Blue",
    };
    dates.push(row);
  });

  const closeIcon = (
    <svg
      onClick={close}
      className="h-5 w-5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  const [events] = useState(dates);
  return (
    <>
      <div className="border-b border-gray-200 p-3 flex justify-between items-center">
        <div>
          <span className="font-medium">{user.real_name} </span>Details
          <div className="text-sm text-gray-500">Timings are in {user.tz}</div>
        </div>
        <div className="p-2 rounded-full hover:shadow-md  text-gray-700  cursor-pointer">
          {closeIcon}
        </div>
      </div>
      <div className="mx-auto m-4 w-2/3">
        <FullCalendar
          initialView="dayGridMonth"
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, listWeek",
          }}
          plugins={[dayGridPlugin, listPlugin]}
          events={events}
        />
      </div>
    </>
  );
}

export default TimeParse;
