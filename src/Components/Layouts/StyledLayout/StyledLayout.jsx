import React from "react";
import styled from "@emotion/styled";

// type Props = {
//   children: ReactNode,
// };

const StyledLayout = (props) => {
  return (
    <container>
      <content>{props.children}</content>
    </container>
  );
};

export default StyledLayout;

const container = styled.div`
width: 100vh;
height: 100vh;
background: blue;
overflow: hidden:
display: flex;
justify-content: center;
margin: 0;
`;

const content = styled.div`
  width: 300px;
  height: 500px;
  background-color: red;
`;
