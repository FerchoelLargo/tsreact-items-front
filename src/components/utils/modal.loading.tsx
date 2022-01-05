import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";

type ModalLoadingProps = {
  visible:boolean,
};


const Loading = ( props : ModalLoadingProps) =>{
  return(
    <Modal
    centered
    isOpen={props.visible}
    contentClassName="loading-body"
    size="sm"
  >
    <ModalBody>
      <Spinner />
      <br/>
      <span>Loading...</span>
    </ModalBody>
  </Modal>
  )
}

export default Loading;