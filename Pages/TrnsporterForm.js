import React from 'react';
import style from '../App.css'

import {Grid} from "phoenix-component"
import PropTypes from "prop-types";
import {
  Input,
  NumberField,
  PANField,
  PINCodeField,
  StateField,
  SelectField,
  AddressField,
  TextArea,
  SearchField,
  PasswordField
  
} from "../component/Input";
import DatePicker from "../component/DatePicker/DatePicker";
import InputIcon from "../component/Input/InputIcon";
import CountryField from "../component/Input/CountryField";
import {checkOnSubmit} from "phoenix-component/Validation/"
import Button from "../component/Button";

class TrnsporterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vihicle:'',
                        place:'' ,
                        stateName:'',
                        transport:'',
                        dateValue:null,
                        vihicle:''
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
      
      alert(dateString ,user)
      // console.log(dateValue);
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
          // alert(this.state.vihicle,this.state.place,this.state.stateName,this.state.transport,this.state.dateValue,this.state.vihicle)
        }
        else{

          console.log(res)

        }
      })
    }
    render() { 
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
              <Input 
              required  
              placeholder="Enter From Place" 
              label="From Place" 
              size="sm"
              name="place"
              value={this.state.place}
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
              <SelectField 
              defaultText="Select Mode  of transport" 
              size="sm" 
              label="Mode of transport" 
              size="sm"
              name="transport"
              size="sm"
              value={this.state.transport} 
              onChange={this.handleChange}>
                  <option value="transfer mode 1">option</option>
                  <option value="transfer mode 2">option 3</option>
                  <option value="transfer mode 3">option</option>
                  <option value="transfer mode 4">option</option>
              </SelectField>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
            <div className="item">
            <SelectField 
            defaultText="Select Option" 
            size="sm" 
            label="Vihicle Type" 
            size="sm"
            name="vihicle"
            value={this.state.vihicle} 
            onChange={this.handleChange}>>
                  <option  value="Vihicle 1">option</option>
                  <option  value="Vihicle 1">option 3</option>
                  <option  value="Vihicle 1">option</option>
                  <option  value="Vihicle 1">option</option>
              </SelectField>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
            <div className="item">
            <center><Button size="sm" color="secondary" type="submit">Submit</Button></center>
              </div>
            </Grid>
        </Grid>
        
        </form>
        </>
         );
    }
}
 
export default TrnsporterForm;