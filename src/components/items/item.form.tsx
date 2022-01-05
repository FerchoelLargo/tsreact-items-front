import React, { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Col, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import {ItemData,ItemMetadata} from'./../../models/items.type'

type ItemFormProps = {
  data: ItemMetadata,
  onChangeValues: ( (index:string,newValue:any) => void) | undefined
};

const ItemForm = ( props : ItemFormProps) =>{

  const onChangeValues = (index:string,e:any) => {
    if(props.onChangeValues){
      console.log('item.form.onChangeValues',index,e.target.value)
      props.onChangeValues(index,e.target.value)
    }
  }

  return(
    <Form>
  
      {
        props.data.name.visible &&
        <FormGroup row >
          <Label for="itemName" sm={2} > Name </Label>
          <Col sm={10}>
            <Input id="itemName" name="itemName" type="text"
              value={props.data.name.newDisplayValue}
              onChange={ e => onChangeValues('name',e)}
              readOnly={props.data.name.readonly} />
          </Col>
        </FormGroup>
      }

      {
        props.data.description.visible &&
        <FormGroup row> 
          <Label for="itemDescription"  sm={2}  > Description </Label>
          <Col sm={10}>
            <Input id="itemDescription" name="itemDescription" type="textarea"
              value={props.data.description.newDisplayValue}
              onChange={ e => onChangeValues('description',e)}
              readOnly={props.data.description.readonly} />
          </Col>
        </FormGroup>
      }

      {
        props.data.quantity.visible &&
        <FormGroup row> 
          <Label for="itemQuantity"  sm={2}  > Quantity </Label>
          <Col sm={10}>
            <Input id="itemQuantity" name="itemQuantity" type="text"
              value={props.data.quantity.newDisplayValue}
              onChange={ e => onChangeValues('quantity',e)}
              readOnly={props.data.quantity.readonly} />
          </Col>
        </FormGroup>
      }

      {
        props.data.updated_at.visible &&
        <FormGroup row> 
          <Label for="itemUpdated"  sm={2}  > Updated at </Label>
          <Col sm={10}>
            <Input id="itemUpdated" name="itemUpdated" type="text"
              value={props.data.updated_at.newDisplayValue}
              onChange={ e => onChangeValues('updated_at',e)}
              readOnly={props.data.updated_at.readonly} />
          </Col>
        </FormGroup>
      }

      {
        props.data.created_at.visible &&
        <FormGroup row> 
          <Label for="itemCreated"  sm={2}  > Created at </Label>
          <Col sm={10}>
            <Input id="itemCreated" name="itemCreated" type="text"
              value={props.data.created_at.newDisplayValue}
              onChange={ e => onChangeValues('created_at',e)}
              readOnly={props.data.created_at.readonly} />
          </Col>
        </FormGroup>
      }


      {
        props.data.id.visible && 
        <FormGroup row> 
          <Label for="itemCreated"  sm={2}  > Id </Label>
          <Col sm={10}>
            <Input id="itemCreated" name="itemCreated" type="text"
              value={props.data.id.newDisplayValue}
              onChange={ e => onChangeValues('id',e)}
              readOnly={props.data.id.readonly} />
          </Col>
        </FormGroup>
      }

      {
        props.data.uniqueValue.visible && 
        <FormGroup row> 
          <Label for="itemCreated"  sm={2}  > Unique value </Label>
          <Col sm={10}>
            <Input id="itemCreated" name="itemCreated" type="text"
              value={props.data.uniqueValue.newDisplayValue}
              onChange={ e => onChangeValues('uniqueValue',e)}
              readOnly={props.data.uniqueValue.readonly} />
          </Col>
        </FormGroup>
      }

    </Form>
  )
}

export default ItemForm;