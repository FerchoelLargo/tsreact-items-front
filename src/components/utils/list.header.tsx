import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import './utils.css'

type ListHeaderProps = {
  label:string,
  link:string
};

const ListHeader = ( props : ListHeaderProps) => {

  useEffect(()=>{
  },[])

  return (
    <div className="list_header" >
      <div className="left-side" >
        <h4> {props.label} </h4>
      </div>
      <div className="right-side">
        <Button color="primary" tag="a" href={props.link} > New </Button>
      </div>
    </div>
  )
}

export default ListHeader;