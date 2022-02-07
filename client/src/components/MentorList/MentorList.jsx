import React from 'react';
import './MentorList.css';
import { MentorsContext } from '../../Context/mentorsContext';
import MentorAvatar from './MentorAvatar';

 const MentorList = () => {

    const { mentors } = React.useContext(MentorsContext)
    console.log(mentors);

    return <>
        <div className="MentorWrapper">
            <h5>Mentors</h5>
            {mentors.map(mentor => 
                <MentorAvatar text={mentor.mentor} />
            )}
        </div>
    </>;
};
export default MentorList