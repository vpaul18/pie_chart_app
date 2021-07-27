import React from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { FormControl, MenuItem } from '@material-ui/core';


const PieChartGroupFormPresenter=({handleProduct,handleQuantity,handleDelete,product,quantity,item,purchaseList,id,name})=>{
    return (
        <div>
            <FormControl>
            <Select onChange={(e)=>handleProduct(e,id)} value={product || ""} name="product">
                {Object.keys(purchaseList).map((item,index) =>
                    <MenuItem value={item} key={index}>{item}</MenuItem>
                )}
            </Select>
            <TextField onChange={(e)=>handleQuantity(e,id)} value={quantity || ""} name="quantity"/>
            <TextField value={item.price || ""} disabled>{item.price}</TextField>
            <button onClick={()=>handleDelete(id)}>Delete</button>
            </FormControl>
            <br>

            </br>
        </div>
    )
}


export default PieChartGroupFormPresenter