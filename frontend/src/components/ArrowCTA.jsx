import React from 'react';
import { Box, Flex } from 'reflexbox';
import FontAwesome from 'react-fontawesome';


export default ({ text, classor, onClick }) => (
  <Flex justify="space-between" className="arrow-cta" onClick={onClick}>
    <Box>{text}</Box>
    <Box><FontAwesome name="arrow-right" className={`arrow-icon ${classor}`} /></Box>
  </Flex>
);
