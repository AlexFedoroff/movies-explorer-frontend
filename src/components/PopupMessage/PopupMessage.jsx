import './PopupMessage.css';
import { React } from 'react';

export default function messagePopup({ onClose, status: { isOpen, successful, text } }) {
  function handleClickOverlay(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={`popup-message ${isOpen && 'popup-message_opened'}`}
      onClick={onClose}
    >
      <div className="popup-message__container" onClick={handleClickOverlay}>
        <div
          className={`message-popup__status ${
            successful
              ? 'popup-message__status_success'
              : 'popup-message__status_err'
          }`}
        />
        <h2 className="popup-message__title">{text}</h2>
        <button
          type="button"
          className="popup-message__close-btn"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
