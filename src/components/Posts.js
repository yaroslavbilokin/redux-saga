import React from 'react';
import Post from './Post';

export default ({ posts }) => {
    if (!posts.length) {
        return <p>no posts yet :(</p>
    }
    return posts.map(post => <Post post={post} key={post} />)
}