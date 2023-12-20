import { useEffect, useState } from 'react'
import './Product_item.scss'

const Product_item = ({ item, removeData }) => {
    const { id, name, price, count } = item
    const [counter, setCounter] = useState(count)

    function decrease(e){
        setCounter(counter-1)
        if(counter === 1){
            removeData(id)
        }
    }
    function increase(e){
        counter < 25 && setCounter(counter+1)
        e.stopPropagation();
    }

    return (
        <div id='div' className='product hov' onDoubleClick={() => removeData(id)}>
            <h1>{name}</h1>
            <p>Price: <span style={{textDecoration: 'underline'}}>{price}</span></p>
            <button style={{color: counter > 1 ? 'blueviolet' : 'crimson', borderColor: counter > 1 ? 'whitesmoke' : 'crimson'}} onDoubleClick={(e) => e.stopPropagation()} onClick={decrease}>-</button>
            <p>{counter}</p>
            <button style={{backgroundColor: counter < 25 ? 'inherit' : 'gainsboro', color: counter < 25 ? 'blueviolet' : 'grey'}} onDoubleClick={(e) => e.stopPropagation()} onClick={increase}>+</button>
        </div>
    )
}
export default Product_item