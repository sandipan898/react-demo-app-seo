import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostList extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => posts.slice(0, 10))
            .then(posts => this.setState({posts}))
    }

    render() {
        const posts = this.state.posts.map(
        post => <li>{post.title}</li>
        )

        return (
            <div>
                <h2>All Posts</h2>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}
