import React from 'react';
import { MentorsContext } from '../../Context/Mentors';

export const MentorList = () => {

    const { mentors } = React.useContext(MentorsContext)
    console.log(mentors);

  return <div>hehehe</div>;
};
