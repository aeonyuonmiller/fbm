import React, { useState, useEffect } from "react";
import axios from "axios";

const MentorsContext = React.createContext();

function MentorsContextProvider({ children }) {
  const [mentors, setMentors] = useState([]);

  async function fetchMentors() {
    try {
      const content = await axios.get("http://localhost:5000/api/mentors/all"); // fetch API from backend
      setMentors(content.data); // update the state of component via the useState() hook
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMentors(); // function will be called when DOM is mounted
  }, []);

  return (
    <MentorsContext.Provider value={{ mentors }}>
      {children}
    </MentorsContext.Provider>
  );
}

export { MentorsContextProvider, MentorsContext };
