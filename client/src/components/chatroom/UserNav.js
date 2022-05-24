import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = () => {
  return (
    <aside className="sidebar bg-light">
      <div className="tab-content h-100" role="tablist">
        <div
          className="tab-pane fade h-100 show active"
          id="tab-content-chats"
          role="tabpanel"
        >
          <div className="d-flex flex-column h-100 position-relative">
            <div className="hide-scrollbar">

              <div className="container">

                <div className="mb-3">
                  <h2 className="fw-bold m-0">Chats</h2>
                </div>

                <div className="mb-3">
                  <form action="#">
                    <div className="input-group">
                      <div className="input-group-text">
                        <div className="icon icon-lg">
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
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        </div>
                      </div>

                      <input
                        type="text"
                        className="form-control form-control-lg ps-0"
                        placeholder="Search messages or users"
                        aria-label="Search for messages or users..."
                      />
                    </div>
                  </form>
                </div>

                <div className="card-list">
                  <Link to="#" className="card border-0 text-reset">
                    <div className="card-body">
                      <div className="row gx-5">
                        <div className="col-auto">
                          <div className="avatar avatar-online">
                            <img
                              src="./img/2.jpg"
                              alt="#"
                              className="avatar-img"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="d-flex align-items-center mb-3">
                            <h5 className="me-auto mb-0">William Wright</h5>
                            <span className="text-muted extra-small ms-2">
                              12:45 PM
                            </span>
                          </div>

                          <div className="d-flex align-items-center">
                            <div className="line-clamp me-auto">
                              Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                            </div>

                            <div className="badge badge-circle bg-primary ms-5">
                              <span>3</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="row align-items-center gx-4">
                        <div className="col-auto">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img"
                              src="./img/2.jpg"
                              alt="Bootstrap Community"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <h6 className="mb-0">company</h6>
                        </div>

                        <div className="col-auto">
                          <div className="avatar-group">
                            <div className="avatar avatar-xs">
                              <img
                                src="./img/2.jpg"
                                alt="#"
                                className="avatar-img"
                              />
                            </div>

                            <div className="avatar avatar-xs">
                              <img
                                src="./img/2.jpg"
                                alt="#"
                                className="avatar-img"
                              />
                            </div>

                            <div className="avatar avatar-xs">
                              <img
                                src="./img/2.jpg"
                                alt="#"
                                className="avatar-img"
                              />
                            </div>

                            <div className="avatar avatar-xs">
                              <span className="avatar-text">+5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserNav;
