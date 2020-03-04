import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.header`
  width: 100%;
  height: 60px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Ul = styled.ul`
  border-bottom: 3px solid #0984e3;
`;

const SLink = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
`;

export default () => (
  <Div>
    <Ul>
      <li>
        <SLink to="/main">Main</SLink>
      </li>
    </Ul>
  </Div>
);
