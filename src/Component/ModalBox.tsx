import { Button, Modal } from 'react-bootstrap';
type propToAccept={
  show:boolean;
  closeHandle: () => void;
}
export const ModalBox =(props :propToAccept)=>{
  const {show, closeHandle } = props;
    return      <Modal show={show} onHide={closeHandle}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeHandle}>
        Close
      </Button>
      <Button variant="primary" onClick={closeHandle}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
}