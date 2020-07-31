import React, { useState, useEffect } from "react";
import { members } from "../Users.json";
import UserTimings from "./UserTimings";
import UserCalendar from "./Calendar";
import Modal from "react-modal";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "grey",
  },
  content: {
    padding: 0,
  },
};

function Index() {
  const [showModal, setshowModal] = useState(false);
  const [activeUser, setActiveUser] = useState("");
  const [userCalendarData, setUserCalendarData] = useState("");

  useEffect(() => {
    if (showModal === false) {
      setActiveUser("");
      setUserCalendarData("");
    }
  }, [showModal]);

  function enableModal(user) {
    setshowModal(true);
    setActiveUser(user);
  }

  function showCalendar(user) {
    setshowModal(true);
    setUserCalendarData(user);
  }

  const ClockIcon = (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const CalendarIcon = (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div>
      <div className="bg-white shadow rounded-md">
        <ul>
          {members.map((user) => {
            return (
              <li
                key={user.id}
                className="hover:bg-gray-100 border-t border-gray-200 "
              >
                <div className="px-4 py-2 text-left">
                  <div className="flex justify-between items-center">
                    <div
                      className="cursor-pointer"
                      onClick={() => enableModal(user)}
                    >
                      <span className="text-sm">{user.real_name}</span>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        {ClockIcon}
                        <span>{user.tz}</span>
                      </div>
                    </div>
                    <div
                      className="text-gray-500 cursor-pointer"
                      onClick={() => showCalendar(user)}
                    >
                      {CalendarIcon}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setshowModal(false)}
        style={customStyles}
      >
        {activeUser ? (
          <UserTimings details={activeUser} close={() => setshowModal(false)} />
        ) : (
          <UserCalendar
            user={userCalendarData}
            close={() => setshowModal(false)}
          />
        )}
      </Modal>
    </div>
  );
}

export default Index;
