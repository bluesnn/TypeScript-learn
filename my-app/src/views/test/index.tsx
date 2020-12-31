import React from 'react'
import Test from './test'

let data = 123456;

setTimeout(() => {
  data = 2
}, 1000);

function app() {
  return <Test user={data}/>
}

export default app;
