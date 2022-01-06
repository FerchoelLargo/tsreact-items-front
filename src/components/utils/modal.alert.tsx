import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter,Button } from "reactstrap";

type ModalAlertProps = {
  visible:boolean,
  toggleHandler: ( ()=>void ) | undefined
  title:string,
  text:string,
  onOk: (()=>void)|undefined,
  onCancel: (()=>void)|undefined,
  okText:string,
  cancelText:string
};


const Alert = ( props : ModalAlertProps) =>{
  return(
    <Modal
    centered
    isOpen={props.visible}
    toggle={props.toggleHandler}
    size="lg"
    unmountOnClose
  >
    <ModalHeader toggle={props.toggleHandler}>
      { props.title } 
    </ModalHeader>
    <ModalBody>
      <p> {props.text} </p>
    </ModalBody>
    <ModalFooter>
      <Button  color="primary" onClick={props.onOk}  > {props.okText} </Button>
      <Button color="danger" onClick={props.onCancel} > {props.cancelText} </Button>
    </ModalFooter>
  </Modal>
  )
}

export default Alert;