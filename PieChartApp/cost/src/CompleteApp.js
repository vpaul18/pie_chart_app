import React from 'react'
import ListOfPieCharts from './ListOfPieCharts'






const CompleteApp=({ purchaseList = { "testtest": "900", "testtest2": "90" } })=>{


    const [open, setOpen] = React.useState(false);
    const [pieChartData, setPieChartData] = React.useState([
        {
            id:uuidv4(),
            data:[]
        }
    ])

    const [formset, setFormset] = React.useState([
        {
            id: uuidv4(),
            product:"",
            price: 0,
            quantity: 0,
            productSubtotal: 0,
        }
    ])
    
    const singleForm= {
        id: uuidv4(),
        product:"",
        price: 0,
        quantity: 0,
        productSubtotal: 0,
    }

    const singlePieChartForm={
        id:uuidv4(),
        data: []
    }
    
       
    const handleAdd=()=>{
        setFormset([...formset,singleForm])
    }


    
    
    const handleDelete=(id)=>{
        const newFormset=formset.filter(item=>
            item.id !==id
        )
        setFormset(newFormset)
    }


    const handleAnyChange=(e,id)=>{
        const { name,value }=e.target

        const newFormset=formset.map(item=>{
            if (item.id===id){
                const newItem={ ...item,[name]:value }

                return newItem
            }return item
        })

        setFormset(newFormset)
    }


    // above this is from liftinf the state , down is form this component
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (id) => {
        setOpen(false);
        handlePieChartData(formset,id)
    };
    

    const handlePieChartData = (formset,id) => {
        console.log(id)

        const newPieChartData=pieChartData.map((item)=>{
            if (item.id===id){
                const newItem={
                    ...item,data:formset
                } 
                console.log("HEY")
                return newItem              
            } return item
        })
    }

    const addPieChartGroup=()=>{
        setPieChartData([...pieChartData,singlePieChartForm])
    }

    console.log(open)
    console.log(formset)
    console.log(pieChartData)


    return(
        pieChartData.map((item)=>{
            return (
                <div>
                    <ListOfPieCharts 
                    pieChartData={item}
                    id={item.id}
                    key={'key'+item.id}
                    handleAdd={handleAdd}
                    handleAnyChange={handleAnyChange}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                    handlePieChartData={handlePieChartData}
                    addPieChartGroup={addPieChartGroup}
                    open={open}
                    purchaseList={purchaseList}
                    formset={formset}
                    />
                </div>
            )
        })
    )

}


export default CompleteApp
export default Transition