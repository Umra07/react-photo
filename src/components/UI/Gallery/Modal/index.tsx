import { FC } from 'react';
import classes from './Modal.module.scss';

interface ModalProps {
  photo: string;
  setShowModal: (a: boolean) => void;
}

const Modal: FC<ModalProps> = ({ photo, setShowModal }) => {
  const hideModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={classes.modal}>
      <button onClick={hideModal}>
        <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
          <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
        </svg>
      </button>
      <div className={classes['image-wrapper']}>
        <img src={photo} alt="modal" />
      </div>
    </div>
  );
};

export default Modal;
