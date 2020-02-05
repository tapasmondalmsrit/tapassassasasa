import React from 'react';
import style from '../App.css'
import {Grid} from "phoenix-component"
import PropTypes from "prop-types";
import {
  Input,
  StateField,
} from "../component/Input";
import DatePicker from "../component/DatePicker/DatePicker";
import {checkOnSubmit} from "phoenix-component/Validation/"
import Button from "../component/Button";

import { connect } from "react-redux";

class ReduxSetup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vihicle:'',
                        stateName:'',
                        dateValue:null,
                      }
    }
    handleChange = (e) =>{
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }
    onDateChange = (dateString,user) => {
      console.log("logged form parent component: " +dateString)
      console.log("logged form parent component: " +user)
    //   alert(dateString ,user)
      this.setState({dateValue: dateString});
    }
    submitbtnClick =(e)=>{
      e.preventDefault()
      console.log("hello")
       const isValid =  checkOnSubmit(e);  
      isValid.then((res) => {
        if(res){
          console.log(res)
          console.log(this.state)
        }
        else{
          console.log(res)
        }
      })
    }
    render() { 
      console.log(this.props)
        return ( 
          <>

<form onSubmit={this.submitbtnClick} id="form1" noValidate >
        <Grid container className="form-container">
            <Grid item xs={12} md={12}>
              <p className="transporte-heading">Transporter Details</p>
              
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="item">
              <Input
               placeholder="Enter Vihicle Number"
               label="Vihicle Number"
               size="sm"
               name="vihicle"
               value={this.state.name}
               onChange={this.handleChange} />
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
            <div className="item">
              <StateField  
              defaultText="Select satate" 
              size="sm" 
              label="From state" 
              name="stateName"
              size="sm"
              value={this.state.stateName} 
              onChange={this.handleChange}>
                  <option value="option1">option</option>
                  <option value="option1">option 3</option>
                  <option value="option1">option</option>
                  <option value="option1">option</option>
              </StateField >
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
            <div className="item">
            <DatePicker 
            selected={this.state.dateValue} 
            name="dateValue"
            getDate={this.onDateChange} 
            placeholder="Select date" 
            label="Select date"
            />
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
            <div className="item">
            <center><Button size="sm" color="secondary" type="submit" style={{marginTop:"15px"}}>Submit</Button></center>
              </div>
            </Grid>
        </Grid>
        
        </form>
        </>
         );
    }
}
 

const mapStateToProps = state => ({
    PartyList: state.PartyMasterReducer
  });
  
  // redux action
  
  const mapDispatchToProps = dispatch => ({
    // GetPartyList: (pageSize, pageNumber) =>
    //   dispatch(GetAllPartyList(pageSize, pageNumber)),
    // Add: annexure => dispatch(Add(annexure))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ReduxSetup);