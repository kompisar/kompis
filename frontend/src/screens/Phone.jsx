import React from 'react';
import {Flex, Box} from 'reflexbox'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Phone extends React.Component {

  notify = () => {
    toast(
      <div>
        <Flex>
          <Box w={1 / 2} style={{textAlign: 'left'}}>Kompis</Box>
          <Box w={1 / 2} style={{textAlign: 'right'}}>2m ago</Box>
        </Flex>
        <div style={{marginTop: '2vh'}}>
          You have brought beer with $7.8 tonight, want to save that much?
        </div>
      </div>,
      {closeButton: false}
    )
  };

  render() {
    return (
      <main className="lock-screen-bg">
        <button onClick={this.notify}>DEMO 1</button>
        <ToastContainer
          position="top-center"
          autoClose={9999999999999}
          hideProgressBar={true}
          newestOnTop={false}
        />
      </main>
    );
  }

}
