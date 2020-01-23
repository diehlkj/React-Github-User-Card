import React from 'react';
import UserCard from "./UserCard";
function CardList({ user, followers }){
  console.log(user);
    return (
        <div className="card-list">
            <UserCard 
                href=         {user.html_url}
                image=        {user.avatar_url}
                header=       {user.name}
                username=     {user.login}
                location=     {user.location}
                description=  {user.bio}
                following=    {user.following}
                followers=    {user.followers}
            />
            {followers.map((follower, index) => {
                //console.log(element);
                return (
                  <UserCard 
                    key=          {index}
                    href=         {follower.html_url}
                    image=        {follower.avatar_url}
                    header=       {follower.name}
                    username=     {follower.login}
                    location=     {follower.location}
                    description=  {follower.bio}
                    following=    {follower.following}
                    followers=    {follower.followers}
                  />
                )
              })}
        </div>
    ) 
}
export default CardList