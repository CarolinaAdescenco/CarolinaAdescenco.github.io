import React from 'react';
import { Button } from 'react-bootstrap';

import { ModalComponent } from './styles';

const Modal = ({
  button, title, children,
}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className="text-light" onClick={handleShow}>
        { button }
      </Button>

      <ModalComponent
        show={show}
        onHide={handleClose}
        keyboard
      >
        <ModalComponent.Header closeButton>
          <ModalComponent.Title>
            {title}
          </ModalComponent.Title>
        </ModalComponent.Header>
        <ModalComponent.Body>
          {children}
        </ModalComponent.Body>
        <ModalComponent.Footer>
          <Button onClick={handleClose}>
            Fechar
          </Button>
        </ModalComponent.Footer>
      </ModalComponent>
    </>
  );
};

export default Modal;
