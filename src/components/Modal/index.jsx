import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ isShowing, hide, title }) =>
  isShowing &&
  ReactDOM.createPortal(
    <>
      <div className="modalOverlay">
        <div className="modalWrapper">
          <div className="modal">
            <div className="modalHeader">
              <h4>{title}</h4>
              <button type="button" className="modalCloseButton" onClick={hide}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modalBody">{title}</div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );

Modal.prototype = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
