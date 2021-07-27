import React from 'react'
import PieChartGroupFormPresenter from "./PieChartGroupFormPresenter";
import TextField from '@material-ui/core/TextField';


const PieChartCompleteForm=({purchaseList,handleQuantity,handleProduct,handleAdd,handleDelete,formset,handleName})=>{
    
    const nameId=formset[0].id


    


    return (
        <div>
             <TextField onChange={(e)=>handleName(e,nameId)} value={formset[0].name ||""} name="name"/>
            {formset.map((item)=>{
                return(
                <PieChartGroupFormPresenter
                item={item}
                key={item.id}
                id={item.id}
                purchaseList={purchaseList}
                product={item.product}
                quantity={item.quantity}
                handleQuantity={handleQuantity}
                handleProduct={handleProduct}
                handleDelete={handleDelete}
                name={item.name}
                />
                )
            }
            )
            }
            <button type="button" onClick={handleAdd}>More</button>
        </div>
    )

}

export default PieChartCompleteForm