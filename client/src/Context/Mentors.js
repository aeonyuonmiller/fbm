import React, { useState, useEffect } from "react";
import axios from "axios";

const MentorsContext = React.createContext();

// replace everything "mentors" with data getting fetched

function MentorsContextProvider({ children }) {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors(); // function will be called when DOM is mounted
  }, []);

  async function fetchMentors() {
    try {
      const content = await axios.get("http://localhost:5000/api/mentors/all"); // fetch API from backend
      setMentors(content.data); // update the state of component via the useState() hook
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MentorsContext.Provider value={{ mentors }}>
      {children}
    </MentorsContext.Provider>
  );
}

export { MentorsContextProvider, MentorsContext };
