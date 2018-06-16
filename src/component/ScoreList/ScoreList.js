import React from 'react';
import { v4 } from 'node-uuid';
import './ScoreList.css';

function ScoreList() {
  let scorelist = localStorage.getItem('scorelist');
  function compare(a, b) {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  }
  if(scorelist === null) {
    return (
      <div className='scorelist'>
        <h1>排行榜</h1>
        <p>暂无数据</p>
      </div>
    )
  }
  scorelist = scorelist.split(',');
  scorelist = scorelist.map(item => parseInt(item));
  scorelist = scorelist.sort(compare);
  return (
    <div className='scorelist'>
      <h1>排行榜</h1>
      {
        scorelist.length === 0 ?
          <p>暂无数据</p> :
          scorelist.map((item, index) => (
          <p key={v4()}>{`第${index + 1}名：${item}分`}</p>
        ))
      }
    </div>
  )
}

export default ScoreList;