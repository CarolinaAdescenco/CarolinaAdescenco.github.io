import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Card, Modal } from './styles';

const Lightbox = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const prev = (i) => {
    if (i !== 0) {
      setIndex(index - 1);
    }
  };

  const next = (i) => {
    if (i !== (data.length - 1)) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      { data.map((item, i) => (
        <Card
          show={i === 0}
          key={i}
          bg={item}
          src={item}
          onClick={() => {
            setShow(true);
            setIndex(i);
          }}
        />
      ))}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <button
          className="next"
          type="button"
          onClick={() => next(index)}
        >
          <BsChevronRight />
        </button>

        <img className="img-fluid" src={data[index]} alt="" />

        <button
          className="prev"
          type="button"
          onClick={() => prev(index)}
        >
          <BsChevronLeft />
        </button>
      </Modal>

    </>

  );
};

export default Lightbox;
