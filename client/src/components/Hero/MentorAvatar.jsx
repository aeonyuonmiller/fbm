import React from 'react';

const MentorAvatar = (props) => {
    return <div style={{
        background: "var(--primary)",
        display: "flex",
        height: 120,
        width: 120,
        fontSize: 14,
        fontWeight: 700,
        paddingBottom: "1.4em",
        color: "var(--secondary)",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-end"
        }}>{props.text}</div>;
};

export default MentorAvatar;
