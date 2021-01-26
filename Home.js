import React,{Component} from 'react';
import './Home.css'
import Data from './Data'
class Home extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            userData:[]
        }
    }
  changeHandler=(event,stateVariable)=>{
        this.setState({
            [stateVariable]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        const {userData}=this.state
      event.preventDefault();
      console.log(`${this.state.email},${this.state.password}`)
        const submitUserData={
            email:this.state.email,
            password:this.state.password
        }
        userData.push(submitUserData);
        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        const {email,password,userData}=this.state;
        console.log("buddy",userData)
        return(
            <React.Fragment>
            <div className="body">
                <h1>React Js Form </h1>
               <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                   <div className="email">
                   <label>
                       Email
                   </label>
                   </div>
                   <div>
                   <input type="email" value={email} name="email" placeholder="enter email" onChange={(event)=>{this.changeHandler(event,"email")}} />
                   </div>
                   <div>
                   <label>
                       Password
                   </label></div>
                   <div>
                   <input type="password" value={password} name="password" onChange={(event)=>{this.changeHandler(event,"password")}} />
                  </div>
                  <br />
                  <div>
                      <input type="submit" value="submit" />
                  </div>
               </form>
               </div>
                <Data userData={userData} />
            </React.Fragment>
        )
    }
};
export default Home;