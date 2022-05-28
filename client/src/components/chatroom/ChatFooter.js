import React from 'react';
import {Link} from 'react-router-dom';

const ChatFooter = () => {
  return (
    <div className="chat-footer pb-3 pb-lg-7 mb-10 position-absolute bottom-0 start-0">
      <div
        className="dz-preview"
        id="dz-preview-row"
        data-horizontal-scroll=""
      />
      <form className="chat-form rounded-pill bg-light" data-emoji-form="">
        <div className="row align-items-center gx-0">
          <div
            className="avatar avatar-responsive "
            style={{marginRight: '12px'}}
          >
            <img className="avatar-img" src="./img/2.jpg" alt="" />
          </div>
          <div className="col">
            <div className="input-group">
              <textarea
                className="form-control form-control-flush ml-3"
                placeholder="Type your message..."
                rows="1"
                data-emoji-input=""
                data-autosize="true"
              />

              <div className="col-auto">
                <Link
                  to="#"
                  className="btn btn-icon btn-link text-body rounded-circle dz-clickable"
                  id="dz-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-paperclip"
                  >
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </Link>
              </div>

              <div className="col-auto">
                <button className="btn btn-icon btn-primary rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatFooter;
