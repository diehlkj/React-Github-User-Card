import React from 'react';
import '../index.css';

const Cards = props => {

    // console.log('Cards.js > Cards: ', props.data);
    return (
        <div className="card">
            <img src={props.data.avatar_url} alt="" /> {/* User Image */}
            <div> {/* Card Info */}
                <h3 className="name">{`${props.data.name}`}</h3> {/* Name */}
                <p className="username">{`${props.data.login}`}</p> {/* Username */}
                <p className="location">{`Location: ${props.data.location}`}</p> {/* Location */}
                <a className="profileLink" href={props.data.html_url}>Link to GitHub</a> {/* Profile (Make this an A tag link) */}
                <p className="followers">{`Followers: ${props.data.followers}`}</p> {/* Followers */}
                <p className="following">{`Following: ${props.data.following}`}</p> {/* Following */}
                <p className="bio">{`${props.data.bio}`}</p> {/* Bio */}
            </div>
        </div>
    );
}

export default Cards;
