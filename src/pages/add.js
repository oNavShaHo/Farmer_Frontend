import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import I1 from './images/add.jpg'
function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
        
        </Modal.Header>

        <Modal.Body>
        <img src={I1.src} />
        </Modal.Body>

        
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;