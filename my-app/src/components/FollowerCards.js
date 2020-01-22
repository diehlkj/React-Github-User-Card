import React from 'react';
import '../index.css';

class FollowerCards extends React.Component {
    
  render() {
      return(
        <div className="FollowerContainer">
            {this.props.data.forEach((follower) => {
                    return (
                        <div className="card">
                            <img src={follower.avatar_url} alt="" /> {/* User Image */}
                            <div> {/* Card Info */}
                                <h3 className="name">{`${follower.name}`}</h3> {/* Name */}
                                <p className="username">{`${follower.login}`}</p> {/* Username */}
                                <p className="location">{`Location: ${follower.location}`}</p> {/* Location */}
                                <a className="profileLink" href={follower.html_url}>Link to GitHub</a> {/* Profile (Make this an A tag link) */}
                                <p className="followers">{`Followers: ${follower.followers}`}</p> {/* Followers */}
                                <p className="following">{`Following: ${follower.following}`}</p> {/* Following */}
                                <p className="bio">{`${follower.bio}`}</p> {/* Bio */}
                            </div>
                        </div>
                    );
                })}
        </div>
      );
  }
}

export default FollowerCards;
