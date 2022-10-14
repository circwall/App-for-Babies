import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

class AddNewBox extends React.Component{
  state={
    color:"",
    idn:""
  }

    add=(e)=>{
      e.preventDefault()
      if(this.state.color==="" || this.state.idn===""){
        alert("Please add The requirred Values")

        return
      }
      this.props.addNewBOxhanler(this.state)
      this.setState({color:'', idn:""})
      console.log(this.state)
       
    }

  render(){
    return(
      <div className='row   justify-content-center'style={{justifyContent:"center"}}>
        <form className='col-2' onSubmit={this.add}>
            <label className='form-label '>Color of Box to Create:
            </label>
            <input 
                type="text" 
                name="colorOfBox"
                className="form-control"
                value={this.state.name}
                onChange={(e) => this.setState({color:e.target.value})}
            />
            <label className='form-label'>Enter your age:
                </label>
                <input 
                className='form-control'
                type="number" 
                name="idn"
                value={this.state.idn}
                onChange={(e) => this.setState({idn:e.target.value})} 
                />
                <input
                className='form-control justify-content-center mt-2' 
                type="submit" />
        </form>
      </div>
    )
  }
}

export default AddNewBox