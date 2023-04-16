import React from "react";

const UserProfile = (props) => {
    return(
        <div className='box'>
            <div className="image"><img src={props.avatar} alt='img not available' className="avatar"/></div>
            <div><span>Username: </span><span>{props.login}</span></div>
            <div><span>Profile URL: </span><a href={props.url}>{props.url}</a></div>           
        </div>

    );


}

export default UserProfile;