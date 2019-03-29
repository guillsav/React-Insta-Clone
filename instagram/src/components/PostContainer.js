import React from 'react';
import styled from 'styled-components';

import CommentSection from './CommentSection';
import heart from '../assets/heart.png';
import heart_on from '../assets/heart_on.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';

import PropTypes from 'prop-types';

const PostContainerWrapper = styled.div`
  width: 1010px;
  margin: 40px auto;
`;

const Post = styled.div`
  width: 642px;
  border: 1px solid #eee;
  border-radius: 3px;
  background: #fff;
  margin: auto;
`;

const PostHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

const ThumbnailPost = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

const PostH6 = styled.h6`
  font-size: 0.9rem;
  color: #262626;
  margin: 0;
  font-weight: 600;
  margin-top: -2px;
`;

const UIControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 130px;
  padding: 10px 10px;
  margin-bottom: -18px;
`;

const UIControlButton = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

const UiConBtnImg = styled.img`
${props => (props.alt === 'likes' ? 'width: 24px;' : null)}
${props => (props.alt === 'comments' ? 'width: 22px;' : null)}
${props => (props.alt === 'send' ? {width: '19px', margin: '5px'} : null)}

`;

const NumberOfLikes = styled.p`
  color: #262626;
  font-weight: 600;
  font-size: 1rem;
  background: transparent;
  border: 0;
  font-stretch: 100%;
  margin: 20px 0px 0px 20px;
  font-variant-numeric: tabular-nums;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };
  }

  onButtonClick = () => {
    if (this.props.likes < this.state.likes) {
      return this.setState({
        likes: this.state.likes - 1
      });
    }
    return this.setState({
      likes: this.state.likes + 1
    });
  };
  render() {
    return (
      <PostContainerWrapper>
        <Post>
          <PostHeader>
            <div>
              <ThumbnailPost src={this.props.thumbnail} alt="thumbnail" />
            </div>
            <PostH6>{this.props.username}</PostH6>
          </PostHeader>
          <div>
            <img src={this.props.img} alt="" />
          </div>
          <UIControls>
            <UIControlButton
              onClick={() => setTimeout(() => this.onButtonClick(), 300)}
            >
              <UiConBtnImg
                src={`${
                  this.props.likes === this.state.likes ? heart : heart_on
                }`}
                alt="likes"
              />
            </UIControlButton>
            <UIControlButton>
              <UiConBtnImg src={comment} alt="comments" />
            </UIControlButton>
            <UIControlButton>
              <UiConBtnImg src={send} alt="send" />
            </UIControlButton>
          </UIControls>
          <NumberOfLikes>{this.state.likes} likes</NumberOfLikes>
          <CommentSection
            comments={this.props.comments}
            date={this.props.date}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            id={this.props.id}
            text={this.props.text}
          />
        </Post>
      </PostContainerWrapper>
    );
  }
}

PostContainer.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.string,
  newComment: PropTypes.string,
  onChange: PropTypes.func
};

export default PostContainer;
