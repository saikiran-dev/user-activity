import React from "react";
import "./App.css";
import Index from "./components/Index";

function App() {
  /**
   * Show all the users
   * On click show respective user time ranges
   * option to view all with an option to view all the periods of activity for different days using a calendar.
   *
   */
  return (
    <div className="App">
      <div className="p-4 bg-gray-800 text-white text-2xl font-bold text-center">
        Current Users
      </div>
      <div className="w-1/2 mx-auto my-4">
        <Index />
      </div>
    </div>
  );
}

export default App;
