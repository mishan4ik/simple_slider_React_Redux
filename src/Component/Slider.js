import React from "react"
import "./Slider.css"
import { connect } from 'react-redux'

let Slider = (props) => {

    let Left = () => {

        

            props.Next(props.SlideStore.firstImg)
       
        
        

    }

    return (

        <div>
            <div className = "SliderBlock">
            <div>
            <img style = {{display:props.SlideStore.firstImg}} src="https://i.ytimg.com/vi/XOhJAHDWJv8/maxresdefault.jpg" alt="" />
            </div>
            <div>
            <img style = {{display:props.SlideStore.secondImg}} src="https://krot.info/uploads/posts/2021-10/1634620083_25-krot-mobi-p-mashina-lamborgini-khurakan-mashini-krasiv-25.jpg" alt="" />
            </div>
            <div>
            <img style = {{display:props.SlideStore.thirdImg}} src="https://i.gaw.to/content/photos/54/54/545481-lamborghini-huracan-tecnica-2023-furieusement-vive-d-esprit.jpeg" alt="" />
            </div>


            </div>
            <button onClick={Left}>Left</button>
            

        </div>

    )

}
export default connect(

    state=>({

        SlideStore:state

    }),
    dispatch => ({
        Next:(next)=>{
            dispatch({type:"block", payload:next})
        }
    })

)(Slider);