import React, {Component} from 'react';
import './App.css';
import moment from 'moment';

import dummyData from './dummy-data';
import withAuthenticate from './authentification/withAuthenticate';
import PostPage from './components/PostPage';
import LoginPage from './components/login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: '',
      text: '',
      filteredData: [],
      username: '',
      password: '',
      user: 'guillaume',
      pass: '123'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData,
        filteredData: Array.from(dummyData)
      });
      const comments = this.state.filteredData.map(data => data.comments);
      const commentsToJSON = JSON.stringify(comments);
      if (comments) {
        localStorage.setItem('comments', commentsToJSON);
      }
    }, 2500);
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === 'search') {
      this.setState({
        filteredData: this.state.dummyData.filter(data => {
          return data.username.includes(e.target.value);
        })
      });
    }
  };
  handleAddComment = (e, id) => {
    e.preventDefault();

    const newComment = {
      id: Date.now().toString(),
      text: this.state.text,
      username: 'Guillaume',
      timeStamp: moment()
        .startOf('hour')
        .fromNow()
    };
    setTimeout(() => {
      this.setState({
        filteredData: this.state.filteredData.map(data => {
          if (data.id === id) {
            return {...data, comments: [...data.comments, newComment]};
          }
          return data;
        }),
        text: ''
      });
    }, 600);
  };

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate
          state={this.state}
          onChange={this.onInputChange}
          onSubmit={this.handleAddComment}
        />
      </div>
    );
  }
}
