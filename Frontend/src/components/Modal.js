// import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Register from "./Register";
// class CustomModal extends Component {

//     handleClose = () => {
//         this.props.onClose && this.props.onClose();
//     }

//     render() {
//         let { isOpen, handleCloseModal } = this.props;
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     {this.props.children}
//                 </div>

//                 <button onClick={this.handleClose}>
//                     Close
//                 </button>
//                 <Modal isOpen={isOpen}
//                     toggle={handleCloseModal}
//                     backdrop={true}
//                     centered={true}>
//                     <ModalBody>
//                         <Register />
//                     </ModalBody>
//                 </Modal>



//             </div>
//         );
//     }
// }

// export default CustomModal;