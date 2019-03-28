import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentsDiv = styled.div`
  min-width: 80%;
  margin: 0 20px;
  color: #262626;
  font-size: 1rem;
  font-weight: 400;
  margin-top: -10px;
  border-bottom: 1px solid #bfbfbf46;
`;

const CommentSection = props => {
  return (
    <div>
      <CommentsDiv>
        {props.comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              username={comment.username}
              text={comment.text}
              timeStamp={comment.timeStamp}
            />
          );
        })}
      </CommentsDiv>
      <CommentInput
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        id={props.id}
        text={props.text}
      />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
