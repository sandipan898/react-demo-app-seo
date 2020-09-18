import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostDetail extends Component {
    state = {
        post: {body: '', title: ''}
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(post => this.setState({post}))
    }
    render() {
        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <article>{this.state.post.body}</article>
                <p><Link to="/">Back to article list</Link></p>
            </div>
        )
    }
}
