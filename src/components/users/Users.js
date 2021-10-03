import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                "login": "mojombo",
                "id": 1,
                "node_id": "MDQ6VXNlcjE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4"
              },
              {
                "login": "defunkt",
                "id": 2,
                "node_id": "MDQ6VXNlcjI=",
                "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4"
              },
              {
                "login": "pjhyett",
                "id": 3,
                "node_id": "MDQ6VXNlcjM=",
                "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4"
              },
              {
                "login": "wycats",
                "id": 4,
                "node_id": "MDQ6VXNlcjQ=",
                "avatar_url": "https://avatars.githubusercontent.com/u/4?v=4"
              },
              {
                "login": "ezmobius",
                "id": 5,
                "node_id": "MDQ6VXNlcjU=",
                "avatar_url": "https://avatars.githubusercontent.com/u/5?v=4"
              }
        ]
    }
    render() {
        return (
            <div style={ userStyle }>
                { this.state.users.map(user => (
                    <UserItem key={ user.key } user={ user } />
                    )
                ) }
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
