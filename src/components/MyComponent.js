import React, { Component } from "react";
 
export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latestMessage: null
    };
 
    this.handleMessage = this.handleMessage.bind(this);
  }
 
  handleMessage(stompMessage) {
    this.setState({
      latestMessage: stompMessage
    });
  }
 
  render() {
      /*
    const { latestMessage } = this.state;
    return (
      <StompClient
        endpoint="ws://localhost:8090/ws"
        topic="/user/queue/notify"
        onMessage={this.handleMessage}
      >
        <div>
          {latestMessage
            ? `Latest message received: ${latestMessage}`
            : "No message received yet"}
        </div>
      </StompClient>
    );
    */return (<div>abc</div>);
  }
}