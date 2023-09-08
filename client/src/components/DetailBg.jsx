import React from 'react'
import Detail from './Detail'

function DetailBg({ sk, setSk }) {
  return (
    <div className='click-out' onClick={() => setSk(null)}>
        <Detail sk={sk}/>
    </div>
  )
}

export default DetailBg