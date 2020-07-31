import React from "react";
import moment from "moment";

function UserTimings({ details, close }) {
  const thStyles =
    "px-6 py-3 border-b border-gray-500 text-left text-xs font-medium text-gray-500 uppercase";
  const tdStyles = "px-6 py-4 text-sm font-medium text-gray-900 ";

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
  return (
    <>
      <div className="border-b border-gray-200 p-3 flex justify-between items-center text-gray-700 cursor-pointer">
        <span>User Details</span>
        <div className="p-2 rounded-full hover:shadow-md">{closeIcon}</div>
      </div>
      <div className="mx-4 my-6">
        <label htmlFor="timings">
          Active Timings of
          <span className="font-medium pl-2">{details.real_name}</span>
        </label>

        <table className="min-w-full mt-4">
          <thead className="border-b border-gray-200 bg-gray-200">
            <tr>
              <th className={thStyles}>Time Zone</th>
              <th className={thStyles}>Start Time</th>
              <th className={thStyles}>End Time</th>
            </tr>
          </thead>
          <tbody>
            {details.activity_periods.map((timing, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-gray-400 bg-gray-200"
                >
                  <td className={tdStyles}>{details.tz}</td>
                  <td className={tdStyles}>
                    {moment(timing.start_time, "lll").format(
                      "DD-MM-YYYY, h:mm A"
                    )}
                  </td>
                  <td className={tdStyles}>
                    {moment(timing.end_time, "lll").format(
                      "DD-MM-YYYY, h:mm A"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserTimings;
