import React from 'react';
import styled from 'styled-components';

const User = styled.span`
  font-weight: 600;
`;

const Timeline = styled.p`
  font-size: 0.8rem;
  color: rgb(157, 157, 157);
  font-weight: 600;
`;

const Comment = props => {
  return (
    <div>
      <p key={props.id}>
        <User>{props.username} </User>
        {props.text}
      </p>
      <Timeline>{props.timeStamp}</Timeline>
    </div>
  );
};

export default Comment;
