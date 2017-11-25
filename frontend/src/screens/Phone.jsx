import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Phone extends React.Component {

  toastId = null;

  notify = () => {
    if (!toast.isActive(this.toastId)) {
      this.toastId = toast(
        <div>
          <div>
            <div>Kompis</div>
            <div>1m ago</div>
          </div>
          <div>
            You have brought beer with $7.8 tonight, want to save that much?
          </div>
        </div>,
        { closeButton: false }
      )
    }
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
