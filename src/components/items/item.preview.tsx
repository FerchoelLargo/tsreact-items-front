import React, { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label, Col, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import {ItemData,ItemMetadata} from'./../../models/items.type'
import ItemForm from './item.form'

type ItemPreviewProps = {
  visible:boolean,
  data: ItemMetadata,
  toggleHandler: ( ()=>void ) | undefined
};


const ItemPreview = ( props : ItemPreviewProps) =>{
  return(
    <Modal
    centered
    isOpen={props.visible}
    toggle={props.toggleHandler}
    size="lg"
    unmountOnClose
  >
    <ModalHeader toggle={props.toggleHandler}>
      { props.data.description.displayValue } 
    </ModalHeader>
    <ModalBody>
      <ItemForm data={props.data} onChangeValues={undefined} />
    </ModalBody>
    <ModalFooter>
      <Button tag="a" href={"/items/details?sys_id="+props.data.uniqueValue.displayValue} color="primary" outline >
        Open record 
      </Button>
      <Button onClick={props.toggleHandler} > Close </Button>
    </ModalFooter>
  </Modal>
  )
}

export default ItemPreview;