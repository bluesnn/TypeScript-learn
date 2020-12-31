import React from 'react'
import Test from './test'


window.data = 123456;

setTimeout(() => {
  window.data = 12
  console.log(1)
}, 1000);

class app extends React.Component {
  render() {
    return <Test user={window.data} />
  }
}

export default app;
