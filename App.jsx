import { useState } from "react"
import './App.scss'
import Product_List from './components/product_List/Product_List';

function App() {
  const data = [
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
  ]
  const [datas, setDatas] = useState(data)

  function addData() {
    const newData = prompt('введите данные').trim().replace(/\s+/g, ' ').split(' ')
    if (newData.length !== 2) {
      alert('неверный ввод данных')
      return;
    }
    // console.log(newData);
    setDatas([...datas, { id: new Date(), name: newData[0], price: newData[1], count: 1 }])
  }
  function removeData(ID) {
    const needToRemove = datas.findIndex(({ id }) => id === ID)
    const newDatas = [...datas]
    newDatas.splice(needToRemove, 1)
    // console.log(ID, needToRemove, newDatas);
    setDatas(newDatas)
  }

  return (
    <>
      <button onClick={() => addData()} className='addNewProduct hov'>Добавить новый товар</button>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <Product_List datas={datas} removeData={removeData} />
    </>
  );
}

export default App;
