import React from 'react'

function btn(props:any) {
  const showMessage = () => {
    alert('成功关注 ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>关注</button>;
}

export default btn;
