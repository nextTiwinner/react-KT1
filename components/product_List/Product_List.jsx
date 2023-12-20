import Product_item from "./product_item/Product_item"
import './Product_List.scss'

function Product_list(props) {
    const { datas, removeData } = props
    return (
        <section>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            {datas.map(item => <Product_item key={item.id} item={item} removeData={removeData} />)}
        </section>
    )
}
export default Product_list