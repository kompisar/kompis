import React from 'react';
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

const keyMap = {
  'showDemo1': '1',
};

const iosToast = (message) => (
  <div>
    <Flex>
      <Box w={1 / 2} style={{textAlign: 'left'}}>Kompis</Box>
      <Box w={1 / 2} style={{textAlign: 'right'}}>now</Box>
    </Flex>
    <div style={{marginTop: '2vh'}}>
      {message}
    </div>
  </div>
);

export default class Phone extends React.Component {

  notify = () => {
    toast(
      iosToast('You have brought beer with $7.8 tonight, want to save that much?'),
      {closeButton: false}
    )
  };

  render() {
    const handlers = {
      'showDemo1': this.notify,
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
  }

}
