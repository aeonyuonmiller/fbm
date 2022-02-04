import React from 'react';
import './MentorList.css';
import { MentorsContext } from '../../Context/Mentors';
import MentorAvatar from './MentorAvatar';

export const MentorList = () => {

    const { mentors } = React.useContext(MentorsContext)
    console.log(mentors);

    return <>
        <div className="MentorWrapper">
        <h5>Mentors</h5>
        <MentorAvatar text="Dangermami" />
        <MentorAvatar text="Luz1e" />
        <MentorAvatar text="DJ Fuckoff" />
        <MentorAvatar text="Name" />
        <MentorAvatar text="Celeste" />
        <MentorAvatar text="Whuuuud" />
        </div>
    </>;
};
