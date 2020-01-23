import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function UserCard(props) {
    return (
        <Card href={props.href}>
            <Image src={props.image} wrapped ui={false} />

            <Card.Content>
                <Card.Header>{props.header}</Card.Header>

                <Card.Meta>@{props.username}</Card.Meta>
                <Card.Meta>{props.location}</Card.Meta>

                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Icon name='user' />
                Following: {props.following} |
                
                | <Icon name='users' />
                Followers: {props.followers}
            </Card.Content>

            {/* <Card.Content extra>
                <Icon name='users' />
                {props.followers} Followers
            </Card.Content> */}
        </Card>
    )
}
export default UserCard