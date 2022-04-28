import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';
import { Card, Modal } from './styles';

const Lightbox = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const next = (i) => {
    if (i === data.length - 1) {
      console.log('ultimo item');
    } else {
      setIndex(index - 1);
    }
  };
  const prev = (i) => {
    if (i === data[0]) {
      console.log('primeiro item');
    }
  };

  return (
    <>
      <Row>
        { data.map((item, i) => (
          <Col key={i}>
            <Card
              bg={item}
              src={item}
              onClick={() => {
                setShow(true);
                setIndex(i);
              }}
            />
          </Col>
        ))}
      </Row>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <button
          className="prev"
          type="button"
          onClick={() => setIndex(index + 1)}
        >
          <BsChevronRight />
        </button>

        <img className="img-fluid" src={data[index]} alt="" />

        <button
          className="next"
          type="button"
          onClick={() => next(index)}
        >
          <BsChevronLeft />
        </button>
      </Modal>

    </>

  );
};

export default Lightbox;
