import React from 'react';
import '../index.css';

class Cards extends React.Component {

  render() {
    return (
      <div className="card">
        <img src={this.props.data.avatar_url} alt="" /> {/* User Image */}
        <div> {/* Card Info */}
            <h3 className="name">{`${this.props.data.name}`}</h3> {/* Name */}
            <p className="username">{`${this.props.data.login}`}</p> {/* Username */}
            <p className="location">{`Location: ${this.props.data.location}`}</p> {/* Location */}
            <a className="profileLink" href={this.props.data.html_url}>Link to GitHub</a> {/* Profile (Make this an A tag link) */}
            <p className="followers">{`Followers: ${this.props.data.followers}`}</p> {/* Followers */}
            <p className="following">{`Following: ${this.props.data.following}`}</p> {/* Following */}
            <p className="bio">{`${this.props.data.bio}`}</p> {/* Bio */}
        </div>
      </div>
    );
  }
}

export default Cards;
