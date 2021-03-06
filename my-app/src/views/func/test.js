import React from 'react'

class btn extends React.Component {
  showMessage = () => {
    alert('成功关注 ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>关注</button>;
  }
}

export default btn;
