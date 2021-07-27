import { ResponsivePie } from "@nivo/pie";
import React from 'react'
import { randomColor } from "randomcolor"




const MyResponsivePieChart = ({ data, id, addPieChartGroup, handleClickOpen,handleDeletePieChart,formset,updatePieChartData }) => {

    const computeSubtotal = (data) => {
        const result = (Math.round(data.price * data.quantity) / 100).toFixed(2);
        return result
    }

    var pieChartData = []
    for (let i = 0; i < data.length; i++) {
        pieChartData[i] = {
            "id": data[i].product,
            "label": data[i].product,
            "value": computeSubtotal(data[i]),
            "color": randomColor(),
        }
    }

    console.log(data)


    return (
        <div>  
            {/* <button >--</button> */}
            <div style={{ height: 400 }} >
                <ResponsivePie
                    data={pieChartData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
            {data.map((item)=>{
                return(
                    <span key={item.id}>
                <h4>{item.product}: Price:{item.price} Quantity:{item.quantity}</h4>
                {/* <h4>{item.price}</h4> */}
                </span>
                )
            })}

            {}       
            {data.length>0? <button onClick={() => updatePieChartData(id,formset)} type="button" >Update</button>:
        <button onClick={() => handleClickOpen(id)} type="button" >Add NOW!</button>}           
            {data.length>0? <button onClick={()=> handleDeletePieChart(id)} type="button">Delte this pie!</button>:
            null}
        </div>
    )

}

export default MyResponsivePieChart