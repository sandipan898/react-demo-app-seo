import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

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
                <Helmet>
                    <title>{this.state.post.title}</title>
                    <meta name="description"
                    content={this.state.post.body.slice(0, 100)} />
                </Helmet>
            </div>
        )
    }
}
