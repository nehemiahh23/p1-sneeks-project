import React from 'react'
import Detail from './Detail'

function DetailBg({ sk, setSk }) {
  return (
    <div className='click-out'>
        <Detail sk={sk} setSk={setSk}/>
    </div>
  )
}

export default DetailBg