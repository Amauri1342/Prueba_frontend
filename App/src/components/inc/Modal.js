import React from 'react';
import { Modal, Image, Container, Row, Col } from 'react-bootstrap';
import userimage from '../../components/images/User.jpg';

function ModalUser({
  showModal,
  handleClose,
  selectedUser,
  selectedUsername,
  selectedEmail,
  selectedCompanyName,
  selectedAddressCity,
}) {
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={2} lg={4}>
              <Image className="img" src={userimage} roundedCircle />
            </Col>
            <Col xs={12} md={4} lg={8} className="text-md-start text-center">
              <label className="label_name">{selectedUser}</label><br />
              <label className="label_username">{selectedUsername}</label>
            </Col>
          </Row>
        </Container>
        <hr style={{ borderTop: '2px solid black' }} />
        <p><strong>Correo:</strong> {selectedEmail}</p>
        <p><strong>Empresa:</strong> {selectedCompanyName}</p>
        <p><strong>Ciudad:</strong> {selectedAddressCity}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalUser;
