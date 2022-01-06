import React, { useEffect } from "react";
import { Button } from "reactstrap";

import './utils.css'

type ListHeaderProps = {
  label:string,
  isNew:boolean,
  operation:string,
  onSave: ( () => void) | undefined,
  onDelete: ( () => void) | undefined
};

const FormHeader = ( props : ListHeaderProps) => {

  useEffect(()=>{
  },[])

  return (
    <div className="form_header" >
      <div className="left-side" >
        <h4> {props.label} </h4>
      </div>
      <div className="right-side">
        <Button color="primary" onClick={props.onSave} > Save </Button>
        {
          !props.isNew && 
          <Button color="danger" onClick={props.onDelete} > Delete </Button>
        }
      </div>
    </div>
  )
}

export default FormHeader;