import React from "react"
import styled from "styled-components"
import { Button, Modal as M } from "react-bootstrap"

import { colors } from "../../utils/colors"

const ModalComponent = styled(M)`
    .modal-content {
        padding: 24px;
        border-radius: 0;
    }

    .modal-header,
    .modal-footer {
        border: none;
    }

    .btn {
        background: ${colors.transparentBlack};
        border-radius: 0;
        border: none;
        padding: 8px 16px;

        &:hover {
            background: ${colors.black};
        }
    }
`

const Modal = ({ button, title, children }) => {
    const [show, setShow] = React.useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="link" className="text-light" onClick={handleShow}>
                {button}
            </Button>

            <ModalComponent show={show} onHide={handleClose} keyboard>
                <ModalComponent.Header closeButton>
                    <ModalComponent.Title>{title}</ModalComponent.Title>
                </ModalComponent.Header>
                <ModalComponent.Body>{children}</ModalComponent.Body>
                <ModalComponent.Footer>
                    <Button onClick={handleClose}>Fechar</Button>
                </ModalComponent.Footer>
            </ModalComponent>
        </>
    )
}

export default Modal
