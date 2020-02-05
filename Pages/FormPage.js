import React from 'react';
import { connect } from "react-redux";
import {getProfileData}from '../store/profile'
class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:this.props.isLoading
         }
    }

    render() { 
        console.log(this.props.isLoading)
        const userList = this.props.user.map((item,index)=>{
        return(
        <div key={index}>
            <p>id:{item.id}</p>
            <p>Title:{item.title}</p>

        </div>)

        }) 

        return ( 
        <div>
            <h2>Form  page</h2> 
            <button onClick={this.props.getProfileData}>Get User</button>
            {this.state.isLoading ? <h2>page is loading</h2> : userList}
           
            {/* {this.props.isLoggedIn?<h2>Loading data</h2>:<h2>Success fully loaded</h2>} */}
         
        </div>
        );
    }
}
 

const mapStateToProps = state => ({
    user: state.profileReducer.data,
    isLoading: state.profileReducer.isLoading
  });
  

  
  const mapDispatchToProps = dispatch => ({
      getProfileData:()=> dispatch(getProfileData())

  });
export default connect(mapStateToProps, mapDispatchToProps)(FormPage) ;