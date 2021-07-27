import React from 'react';
import ListOfPieChartsPresenter from './ListOfPieChartsPresenter'
import { v4 as uuidv4 } from 'uuid';
import PieChartCompleteForm from './PieChartCompleteForm'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { ListItemAvatar } from '@material-ui/core';
import MyResponsivePieChart from './MyResponsivePieChart';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const purchaLise = { "apple": "12", "pear": "30", "lemon": "90", "car": "56", "water": "90", "salad": "12", "plane": "20" }


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});





export default function ListOfPieCharts({ purchaseList = purchaLise }) {
    const classes = useStyles();

    // const [open, setOpen] = React.useState(false);
    const [pieChartData, setPieChartData] = React.useState([
        {
            id: uuidv4(),
            data: [],
            open: false,
        }
    ])

    const [formset, setFormset] = React.useState([
        {
            id: uuidv4(),
            product: "",
            price: 0,
            quantity: 0,
            productSubtotal: 0,
            name: "hu",
        }
    ])



    const singleForm = {
        id: uuidv4(),
        product: "",
        price: 0,
        quantity: 0,
        productSubtotal: 0,
    }

    const singlePieChartForm = {
        id: uuidv4(),
        data: [],
        open: false
    }


    const handleAdd = () => {
        setFormset([...formset, singleForm])
    }




    const handleDelete = (id) => {
        const newFormset = formset.filter(item =>
            item.id !== id
        )
        setFormset(newFormset)
    }


    const handleProduct = (e, id) => {
        const newFormset = formset.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, product: e.target.value, price: purchaseList[e.target.value]
                }
                return newItem
            }
            return item
        })
        setFormset(newFormset)
    }


    const handleQuantity = (e, id) => {
        const newFormset = formset.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, quantity: e.target.value
                }
                return newItem
            }
            return item
        })
        setFormset(newFormset)
    }

    const handleName=(e,id)=>{
        const newFormset = formset.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, name: e.target.value
                }
                return newItem
            }
            return item
        })
        console.log(e.target.value)
        setFormset(newFormset)
    }


    // above this is from lifting the state , down is form this component

    const handleClickOpen = (id) => {
        const newPieChartData = pieChartData.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, open: true
                }
                return newItem
            } return item
        })
        setPieChartData(newPieChartData)
        addPieChartGroup(id)
    };


    const handleClose = (id) => {
        console.log(id)
        const newPieChartData = pieChartData.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, open: false, data:formset
                }
                return newItem
            } 
            return item
        })
        console.log(pieChartData)
        setPieChartData(newPieChartData)      
        console.log(newPieChartData)
    };

    // const listOfIds = pieChartData.map((item) => {
    //     return item.id
    // })


    const handleDeletePieChart=(id)=>{
        const newPieChartData = pieChartData.filter(item =>
            item.id !== id
        )
        setPieChartData(newPieChartData)
    }

    const updatePieChartData=(id,formset)=>{
        const newPieChartData = pieChartData.map((item) => {
            if (item.id === id) {
                const newItem = {
                    ...item, open: true
                }
                return newItem
            } return item
        })
        setPieChartData(newPieChartData)
    }
    
    
    const addPieChartGroup = () => {
        setPieChartData(pieChartData => [...pieChartData, singlePieChartForm])
    }

    console.log(formset)
    console.log(pieChartData)

    return (
        <div>
            {pieChartData.map((item) => {
                return (
                    <div key={"item" + item.id}>
                        <Dialog fullScreen open={item.open}   onClose={()=>handleClose(item.id)} TransitionComponent={Transition}>
                            <AppBar className={classes.appBar}>
                                <Toolbar>
                                    <Typography variant="h6" className={classes.title}>
                                        Sound
                                    </Typography>
                                    <Button autoFocus color="inherit" onClick={()=>handleClose(item.id)}>
                                        Save
                                    </Button>
                                </Toolbar>
                            </AppBar>
                            <form >
                                <PieChartCompleteForm
                                    // handlePieChartData={handlePieChartData}
                                    pieChartData={pieChartData}
                                    purchaseList={purchaseList}
                                    handleQuantity={handleQuantity}
                                    handleProduct={handleProduct}
                                    handleAdd={handleAdd}
                                    handleDelete={handleDelete}
                                    formset={formset}
                                    handleName={handleName}
                                     />
                            </form>
                        </Dialog>
                        <MyResponsivePieChart
                            data={item.data}
                            id={item.id}
                            key={"key" + item.id}
                            addPieChartGroup={addPieChartGroup}
                            handleClickOpen={handleClickOpen} 
                            handleDeletePieChart={handleDeletePieChart}
                            // formset={item.data}
                            updatePieChartData={updatePieChartData}/>
                    </div>
                )
            })}
        </div>
    );
}

