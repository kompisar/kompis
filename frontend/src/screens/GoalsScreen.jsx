import React from 'react';
import {Box, Flex} from 'reflexbox';
import {withRouter} from 'react-router-dom';
import MainNav from '../components/MainNav';
import KompisBars from '../components/KompisBars';
import goals from '../goals';
import {startCase} from 'lodash';
import take from 'lodash/take';
import ProgressPic1 from '../img/goal-progress-1.png';
import ProgressPic2 from '../img/goal-progress-2.png';

const GoalsScreen = withRouter(({history}) => (
  <Flex flex auto column className="bg-white">
    <MainNav active="goals" />
    <Box auto flex column align="center" justify="center">
      <Box style={{
        textAlign: 'center',
        fontSize: '16pt',
        paddingTop: '5pt',
        width: '70%',
        marginBottom: '3pt',
      }}>
        <KompisBars style={{width: '25vw', display: 'block', margin: 'auto'}} />
        <div style={{marginTop: '5pt'}}>
          You should pay attention to your long term goals.
        </div>
      </Box>
      {take(goals, 2).map((g) => (
        <Box key={g.title} className="habit-box" style={{width: '80%'}}>
          <Box auto className="title">{startCase(g.title)}</Box>
          <img src={(g.title === 'take a beach vacation') ? ProgressPic1 : ProgressPic2} style={{width: '100%'}} />
        </Box>
      ))}
    </Box>
  </Flex>
));

export default GoalsScreen;
