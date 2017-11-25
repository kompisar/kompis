import React from 'react';
import {withRouter} from 'react-router-dom';
import {HotKeys} from 'react-hotkeys';
import {Flex, Box} from 'reflexbox'
import {ToastContainer, toast} from 'react-toastify';
import Transition from 'react-transition-group/Transition';
import {formatEUR} from '../utils';
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
    'showDemo3': '3',
    'showDemo4': '4',
    'showDemo5': '5',
  };

  const handlers = {
    'showDemo1': () => createToast(
      <span>
        You just spent {formatEUR(7)} in a bar 🍺
        Have fun!
        You can enjoy 4 more drinks tonight.
      </span>,
      '/result'
    ),
    'showDemo2': () => createToast(
      <span>
        You have spent {formatEUR(29)} in bars 🍻 tonight.
        If you keep going, you'll go over your non-essential budget! 📉
      </span>,
      '/result'
    ),
    'showDemo3': () => createToast(
      <span>
        🎉 PARTY! 🎉
        Yesterday you spent {formatEUR(183.1)} in bars!
        Hope you are feeling alright 🙈 😇
        This affects your saving plan though, should we retune it?
      </span>,
      '/result'
    ),
    'showDemo4': () => createToast(
      <span>
        Sees like you just had a dinner for {formatEUR(48.1)},
        should we tune your retirement plan so you can have
        such a dinner once every month? 🍲 🍲 🍲
      </span>,
      '/result'
    ),
    'showDemo5': () => createToast(
      <span>
        Good morning!
        It's an exceptional day as you reached 35% of your Vacation Trip goal ✈ 🌴 😎
        Keep up the hard work! 🏋
      </span>,
      '/result'
    ),
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
