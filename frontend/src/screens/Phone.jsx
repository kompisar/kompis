import React from 'react';
import {withRouter} from 'react-router-dom';
import {HotKeys} from 'react-hotkeys';
import {Flex, Box} from 'reflexbox'
import {ToastContainer, toast} from 'react-toastify';
import Transition from 'react-transition-group/Transition';
import 'react-toastify/dist/ReactToastify.min.css';

const ZoomInAndOut = ({children, position, ...props}) => (
  <Transition
    {...props}
    timeout={400}
    onEnter={node => node.classList.add('zoom-in', 'animate-notification')}
    onExit={node => {
      node.classList.remove('zoom-in', 'animate-notification');
      node.classList.add('zoom-out', 'animate-notification');
    }}
  >
    {children}
  </Transition>
);

const PhoneScreen = withRouter(({history}) => {

  const createToast = (message, location) => {
    toast(
      (
        <div>
          <Flex>
            <Box w={1 / 2} style={{textAlign: 'left'}}>Kompis</Box>
            <Box w={1 / 2} style={{textAlign: 'right'}}>now</Box>
          </Flex>
          <div style={{marginTop: '2vh'}}>
            {message}
          </div>
        </div>
      ),
      {
        closeButton: false,
        onClose:
          (childrenProps) => history.push(location)
      }
    )
  };

  const keyMap = {
    'showDemo1': '1',
    'showDemo2': '2',
  };

  const handlers = {
    'showDemo1': () => createToast('You have brought beer for $15.8 tonight, want to save that much?', '/result'),
    'showDemo2': () => createToast('You had a nice dinner for $78.1, should we tune your retirement savings so you can have a dinner like this once every month?', '/result'),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} className="lock-screen-bg">
      <ToastContainer
        position="top-center"
        autoClose={9999999999999}
        hideProgressBar={true}
        newestOnTop={false}
        transition={ZoomInAndOut}
      />
    </HotKeys>
  );
});

export default PhoneScreen;
