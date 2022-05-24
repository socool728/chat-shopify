// import react from 'react';
import {Link} from 'react-router-dom';
// import DropDown from './DropDown';

const Message = ({className: styleName}) => {
  return (
    <div
      className={
        styleName === 'message-out' ? 'message message-out' : 'message'
      }
    >
      <Link
        to="#"
        data-bs-toggle="modal"
        data-bs-target="#modal-user-profile"
        className="avatar avatar-responsive"
      >
        <img className="avatar-img" src="./img/2.jpg" alt="" />
      </Link>

      <div className="message-inner">
        <div className="message-body">
          <div className="message-content">
            <div className="message-text">
              <p>
                Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?
              </p>
            </div>

            <div className="message-action">
              <div className="dropdown">
                <Link
                  className="icon text-muted"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                    className="feather feather-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="#"
                    >
                      <span className="me-auto">Edit</span>
                      <div className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="#"
                    >
                      <span className="me-auto">Reply</span>
                      <div className="icon">
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
                          className="feather feather-corner-up-left"
                        >
                          <polyline points="9 14 4 9 9 4" />
                          <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center text-danger"
                      to="#"
                    >
                      <span className="me-auto">Delete</span>
                      <div className="icon">
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
                          className="feather feather-trash-2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="message-footer">
          <span className="extra-small text-muted">08:45 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
