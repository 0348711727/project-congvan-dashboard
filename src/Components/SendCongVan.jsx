import React, { useRef, useState } from 'react';
import { Form, Button, ProgressBar } from "react-bootstrap";
import axios from "axios";
class SendCongVan extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            upload :"",
            file : "",
            area_content: "Nhập vào ghi chú"
            
        }
    }
    handleChangeFile = (event)=>{
        event.stopPropagation();
        event.preventDefault();
        let file = event.target.files[0];
        // console.log(this.state);
        this.setState({file})
    }
    Changetext = (e) => {
        this.setState({area_content: e.target.value})
        
    }
    Alert = ()=>
    {
        console.log()
    }
    render(){
        const data_file = [this.state.upload, this.state.file];
        console.log(data_file);
        // for(let i =0; i<= 100; i++)
        // {
        //     console.log(i);
        // }
        let now = 30;
        // axios.post("http://127.0.0.1:8000/api/sendcv", this.data_file).then(rs => {console.log(rs)}).catch(err=>{console.log(err)});
    return (
        <div style={{justifyContent:"center"}}>
            <Form style={{ border:"1px solid black", marginTop:"200px", width:"70%"}}>
            <textarea value={this.state.area_content} onChange={ this.Changetext }></textarea>
            <input type="file" id="file" ref={(ref)=>this.state.upload = ref } onChange={ this.handleChangeFile } placeholder="Choose a file" />
            {/* <Button primary={false} onClick={()=>{ this.upload.click() } }>Open File </Button> */}
            <Button onClick={this.Changetext}>Change</Button>
            <ProgressBar  striped variant= "success" animated now = {now} label={`${now}%`} style={{width:"30%", height:"25px"}}/>
            </Form>
        </div>
    );
}
}
export default SendCongVan;