import React from 'react'
import PieChartGroupFormPresenter from './PieChartGroupFormPresenter'
import { v4 as uuidv4 } from 'uuid';




const PieChartGroupForm = ({ purchaseList={"skittle":"10","romo":"20"},form }) => {



    const [productsList, setProductsList] = React.useState(
        {
            id: uuidv4(),
            product:"",
            price: 0,
            quantity: 0,
            productSubtotal: 0,
        }
    )

    const product=productsList.product
    const quantity=productsList.quantity
    const price=productsList.price


    const handleProduct = (e) => {
        e.preventDefault()
        setProductsList({ ...productsList, product: e.target.value, price:purchaseList[e.target.value] })
    }

    const handleQuantity = (e) => {
        setProductsList({ ...productsList, quantity: e.target.value })
    }


    React.useEffect(()=>{
            setProductsList({...productsList, productSubtotal: price * quantity})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[product,quantity,price])

    console.log(productsList)
    return (
        <div>
            <PieChartGroupFormPresenter handleProduct={handleProduct} handleQuantity={handleQuantity} product={product} quantity={quantity} productsList={productsList} purchaseList={purchaseList} />
        </div>
    )
}


export default PieChartGroupForm