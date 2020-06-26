import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const { title } = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }
        this.setState({ title: '' })
    }

    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label for="title">Post title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        );
    }
}