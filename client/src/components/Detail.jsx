import { useState } from 'react'

function Detail({ sk, setSk }) {

    const [index, setIndex] = useState(0)

    function handleChange(e) {
      setIndex(e.target.selectedIndex)
      e.target.value = sk.prices[index]
    }

  return (
    <div id='detail-div'>
        <img className='sk-img' src={sk.image} alt={`${sk.maker} ${sk.name}`}></img>
        <h1>{ sk.name }</h1>
        <h2>{ sk.maker }</h2>
        <select value={sk.prices[index].size} onChange={handleChange}>{ sk.prices.map(price => <option>{price.size}</option>)}</select>
        <h3>{`$${sk.prices[index].price.toFixed(2)}`}</h3>
        <button id='addToCart'>Add To Cart</button>
        <button id='addToCart' onClick={() => setSk(null)}>Close</button>
    </div>
  )
}

export default Detail