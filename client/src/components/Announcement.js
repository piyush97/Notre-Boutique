import React from "react";
import styled from "styled-components";
import { ANOUNCEMENT } from "../utils/constants";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>{ANOUNCEMENT}</Container>;
};

export default Announcement;
