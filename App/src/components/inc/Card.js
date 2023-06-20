import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Style/Cards.css';
import '../../Style/Modal.css';
import userimage from '../../components/images/User.jpg';
import ModalUser from './Modal';

function Cards() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedCompanyName, setSelectedCompanyName] = useState(null);
  const [selectedAddressCity, setSelectedAddressCity] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleOpen = (user) => {
    setSelectedUser(user.name);
    setSelectedUsername(user.username);
    setSelectedEmail(user.email);
    setSelectedCompanyName(user.company.name);
    setSelectedAddressCity(user.address.city);
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-md-center">
        {users.map((user) => (
          <Col key={user.id}>
            <Card onClick={() => handleOpen(user)}>
              <div className="card_img_container">
                <Card.Img variant="top" src={userimage} />
                <div className="card_img_over"></div>
              </div>
              <Card.ImgOverlay>
                <Card.Title class="card_title">{user.name}</Card.Title>
                <Card.Subtitle class="card_subtitle">
                  {user.username}
                </Card.Subtitle>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  <span className="bold-text">Empresa: </span>
                  {user.company.name}
                </Card.Text>
                <Card.Text>
                  <span className="bold-text">Sitio Web: </span>{' '}
                  <Card.Link href={user.website}>{user.website}</Card.Link>{' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalUser
        showModal={showModal}
        handleClose={handleClose}
        selectedUser={selectedUser}
        selectedUsername={selectedUsername}
        selectedEmail={selectedEmail}
        selectedCompanyName={selectedCompanyName}
        selectedAddressCity={selectedAddressCity}
      />
    </>
  );
}

export default Cards;
