import { useState } from 'react'

function Detail({ sk }) {

    const [index, setIndex] = useState(0)

    function handleChange(e) {
        setIndex(sk.size.indexOf(e.target.value))
    }

  return (
    <div id='detail-div'>
        <img className='sk-img' src={sk.image} alt={`${sk.maker} ${sk.name}`}></img>
        <h1>{ sk.name }</h1>
        <h2>{ sk.maker }</h2>
        <select value={sk.size[index]} onChange={handleChange}>{ sk.size.map(size => <option>{size}</option>)}</select>
        <h3>{`$${sk.price[index].toFixed(2)}`}</h3>
        <button id='addToCart'>Add To Cart</button>
    </div>
  )
}

export default Detail