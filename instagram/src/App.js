import React, {Component} from 'react';
import moment from 'moment';
import styled from 'styled-components';

import dummyData from './dummy-data';
import withAuthenticate from './authentification/withAuthenticate';
import PostPage from './components/PostPage';
import LoginPage from './components/login/Login';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

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
            const commentsToJSON = JSON.stringify(newComment);
            localStorage.setItem('newComment', commentsToJSON);
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
      <AppWrapper>
        <ComponentFromWithAuthenticate
          state={this.state}
          onChange={this.onInputChange}
          onSubmit={this.handleAddComment}
        />
      </AppWrapper>
    );
  }
}
