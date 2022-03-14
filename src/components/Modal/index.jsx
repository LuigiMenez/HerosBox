import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SModal from './style';

const Modal = ({ isShowing, hide, title, ...props }) =>
  isShowing &&
  ReactDOM.createPortal(
    <SModal className="modalOverlay">
      <div className="modalWrapper">
        <div className="modal">
          <div className="modalHeader">
            <h4>{title}</h4>
            <button type="button" className="modalCloseButton" onClick={hide}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modalBody">{props.children}</div>
        </div>
      </div>
    </SModal>,
    document.body
  );

Modal.prototype = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
