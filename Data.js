import React, { Component } from 'react';
import './Home.css'
class Data extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    deleteData(index){
        const {userData}=this.props;
       userData.splice(index,1);
       this.setState({
           userData
       })
    }
    displayRows=(data,index)=>{
        return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <button className="btn btn-danger ml-3 mt-2" onClick={this.deleteData.bind(this,index)}>delete</button>
               </tr>
              
    }
    render(){
       const {userData} = this.props;
       console.log("check this",userData)
        return(
            <div className="container">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData ?
                            userData.map(this.displayRows):null
                            }  
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};
export default Data;