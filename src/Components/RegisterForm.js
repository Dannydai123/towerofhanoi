import {Component} from "react";









class RegisterForm extends Component {

    state= {
        firstname: '',
        lastname: '',
        email: '',
        fnhelp: 'please input your first name',
        lnhelp: 'please input your last name',
        emailhelp: 'please input your email',
        signupflag: false



    }

    handlefirstnamechange =(e) => {
        this.setState({firstname: e.target.value})
    }

    handlelastnamechange = (e) => {
         this.setState({lastname: e.target.value})
    }
    handleemailchange = (e) => {
         this.setState({email: e.target.value})
    }

    handlesubmit = (e) => {

        let fnhelplocal,lnhelplocal,emailhelplocal,signupflaglocal=false

        e.preventDefault()
        const {firstname, lastname, email, fnhelp, lnhelp, emailhelp} = this.state
        if (firstname) {
            fnhelplocal = ''
            // this.setState({fnhelp: ''})
        }
        else {
             // this.setState({fnhelp: 'firstname  required'})
            fnhelplocal = 'firstname  required'

        }

        lnhelplocal = lastname? '': 'lastname  required'

        emailhelplocal = email.includes('@',1)? '': 'email not correct'

            if (fnhelplocal || lnhelplocal|| emailhelplocal) {

            } else {
                 signupflaglocal =  true
                 this.setState((state,props,) =>{
                     return {firstname: '', lastname: '', email: ''}

                 })

            }


        this.setState({
            fnhelp: fnhelplocal,
            lnhelp: lnhelplocal,
            emailhelp: emailhelplocal,
            signupflag: signupflaglocal

        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

            console.log('prev', prevState, this)


    }

    render() {


        const {firstname, lastname, email, fnhelp, lnhelp, emailhelp} = this.state
        return (


                <div className="card bg-success">
                    <div className="card-header">
                        Sign Up
                    </div>
                    <div className="card-body">

                        <form onSubmit={this.handlesubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby=" firstnameHelp"  value={firstname} onChange={this.handlefirstnamechange}/>
                                    <small id="firstnameHelp" className="form-text text-white">{fnhelp} </small>
                            </div>
                             <div className="form-group">
                                <label htmlFor="exampleInputEmail2">Last Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail2"
                                       aria-describedby=" lastnameHelp" value={lastname} onChange={this.handlelastnamechange}/>
                                    <small id="lastnameHelp" className="form-text text-white"> {lnhelp}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"   aria-describedby=" emailHelp"
                               value={this.state.email} onChange={this.handleemailchange}
                                />
                                    <small id="emailHelp" className="form-text text-white"> {emailhelp} </small>
                            </div>
                            {this.state.signupflag? (
                                <div className="text-center"><button type="button" className="btn btn-success w-50" >thanks for signup</button></div>
                                )

                                :
<div className="text-center"><button type="submit" className="btn btn-outline-light w-50" >Submit</button></div>




                            }

                        </form>




                    </div>



                </div>




        );
    }


}

export default RegisterForm;