import React from 'react';
import {Flex} from 'reflexbox';
import { userFirstName } from '../config';


export default () => (
  <Flex flex auto align="center" justify="center" column className="welcome">
    <div style={{ textAlign: 'center', fontSize: '48pt'}}>
      Welcome
      <br />
      {userFirstName}!
    </div>
  </Flex>
);
