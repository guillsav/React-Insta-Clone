import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import Header from './Header';
import PostContainer from './PostContainer';

const PostPageDiv = styled.div`
  width: 100%;
`;

const Spinner = styled.div`
  margin-top: 200px;
  text-align: center;
`;

export default class PostPage extends React.Component {
  render() {
    return (
      <PostPageDiv>
        <Header
          onChange={this.props.onChange}
          onSubmit={this.onSearchFormSubmit}
          search={this.props.search}
        />
        {this.props.dummyData.length === 0 ? (
          <Spinner>
            <Loader type="Oval" color="#262626" height="60" width="60" />
          </Spinner>
        ) : (
          this.props.filteredData.map(data => {
            return (
              <PostContainer
                key={data.id}
                id={data.id}
                img={data.imageUrl}
                username={data.username}
                date={data.timestamp}
                likes={data.likes}
                comments={data.comments}
                thumbnail={data.thumbnailUrl}
                onChange={this.props.onChange}
                onSubmit={this.props.onSubmit}
                text={this.props.text}
              />
            );
          })
        )}
      </PostPageDiv>
    );
  }
}

Header.propTypes = {
  onChange: PropTypes.func
};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      thumbnailUrl: PropTypes.string,
      timestamp: PropTypes.string,
      username: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
};
