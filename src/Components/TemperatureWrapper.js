import {Component} from "react";
import Temperature from "./temperature";


class TemperatureWrapper extends Component {

    state={
        myCounter: 0 //C degree

    }


    handlebtnminusclick = (e) => {
        console.log(e)
        this.setState({myCounter:  --this.state.myCounter})

    }

    handlebtnplusclick = (e) => {
        console.log(e)

        this.setState({myCounter: ++this.state.myCounter})
    }


    handlebtnreset =  (e) => {
        console.log(e)

        this.setState({myCounter: 0})


    }


    render() {

        return (
            <div>
                <Temperature
                    myTemperature={this.state.myCounter}
                    handlebtnplusclick={ this.handlebtnplusclick}
                    handlebtnminusclick={ this.handlebtnminusclick}
                    handlebtnreset={this.handlebtnreset}


                />
            </div>



        )



    }

}


export default TemperatureWrapper