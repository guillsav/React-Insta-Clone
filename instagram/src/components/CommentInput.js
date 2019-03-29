import React from 'react';
import styled from 'styled-components';

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddCommentForm = styled.form`
  width: 80%;
`;

const Input = styled.input`
  height: 55px;
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 1rem;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #bfbfbf;
    font-weight: 600;
  }
`;

const BtnMore = styled.button`
  border: 0;
  background: transparent;
  font-size: 0.8rem;
  padding-right: 20px;
  outline: none;
  cursor: pointer;
  color: #262626;
`;

const CommentInput = props => {
  return (
    <PostFooter>
      <AddCommentForm
        onSubmit={e => props.onSubmit(e, props.id)}
        className="add-a-comment"
      >
        <Input
          required
          type="text"
          placeholder="Add a comment..."
          value={props.text}
          name="text"
          onChange={props.onChange}
        />
      </AddCommentForm>
      <BtnMore className="more">•••</BtnMore>
    </PostFooter>
  );
};

export default CommentInput;
