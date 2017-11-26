/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, Flex } from 'reflexbox';
import { withRouter } from 'react-router-dom';
import MainNav from '../components/MainNav';
import KompisBars from '../components/KompisBars';
import CircularProgressbar from 'react-circular-progressbar';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

const MonthableChart = ({ yValues }) => {
  const labels = [];
  const polyPoints = [];
  const currentMonth = (new Date().getMonth());
  const ySpan = 30;
  yValues.forEach((y, i) => {
    // I am so tired
    const invertI = (yValues.length - 1) - i;
    const monthIndex = currentMonth - 1 - invertI;
    const monthName = months[(monthIndex + months.length) % months.length];
    const x = 100 * (i / (yValues.length - 1));
    polyPoints.push(`${x},${(1 - y) * ySpan}`);
    labels.push(<text x={x} y={ySpan + 7} key={i}>{monthName}</text>);
  });
  return (
    <svg viewBox="-5 -1 110 40" className="monthable-chart">
      <line x1={0} x2={100} y1={ySpan} y2={ySpan} className="tick-line" />
      <line x1={0} x2={100} y1={ySpan / 2} y2={ySpan / 2} className="tick-line" />
      <line x1={0} x2={100} y1={0} y2={0} className="tick-line" />
      <polyline points={polyPoints.join(' ')} />
      {labels}
    </svg>
  );
};

const OverviewScreen = withRouter(({ history }) => (
  <Flex flex auto column className="bg-white overview-screen">
    <MainNav active="overview" />

    <Box style={{ margin: '1em', textAlign: 'center' }}>
      <div className="situation">
        <KompisBars style={{ width: '25vw', display: 'block', margin: 'auto' }} />
        <div className="situation-text">
          Well done!<br />
          You are staying under budget.
        </div>
      </div>
      <div className="trackerino">
        <div className="track-prog-container">
          <CircularProgressbar
            percentage={80}
            textForPercentage={
              (p) => ([
                <tspan x={50} y={45} key="1">{`${p}`}%</tspan>,
                <tspan x={50} dy={17} fontSize="10pt" key="2" fill="black">this month</tspan>,
              ])
            }
          />
        </div>
        <MonthableChart yValues={[0.9, 0.6, 0.8, 0.81, 0.86, 0.65, 0.55, 0.57, 0.61, 0.52, 0.3, 0.1]} />
        <div className="track-summary">
          Spending is down by <b>30%</b> over 12 months
        </div>
      </div>
    </Box>
  </Flex>
));

export default OverviewScreen;
