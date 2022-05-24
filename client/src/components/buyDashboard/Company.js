import React from 'react';
import {Link} from 'react-router-dom';

const Company = () => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card">
        <Link to="#">
          <img
            src="/img/14.jpg"
            alt="..."
            className="card-img-top"
            data-xblocker="passed"
          />
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">

                <h4 className="mb-2 name">
                  <Link to="project-overview.html">Homepage Redesign</Link>
                </h4>

                <p className="card-text small text-muted">
                  Updated 4hr ago
                </p>

              </div>
              <div className="col-auto">

                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#!" className="dropdown-item">
                      Action
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      Another action
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      Something else here
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="card-footer card-footer-boxed">
            <div className="row align-items-center">
              <div className="col">
                <div className="row align-items-center g-0">
                  <div className="col-auto">

                    <div className="small me-2">29%</div>

                  </div>
                  <div className="col">

                    <div className="progress progress-sm">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="29"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-auto">

                <div className="avatar-group">
                  <Link
                    to="#"
                    className="avatar avatar-xs"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Ab Hadley"
                  >
                    <img
                      src="/img/2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                      data-xblocker="passed"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="avatar avatar-xs"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Adolfo Hess"
                  >
                    <img
                      src="/img/2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                      data-xblocker="passed"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="avatar avatar-xs"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Daniela Dewitt"
                  >
                    <img
                      src="/img/2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                      data-xblocker="passed"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="avatar avatar-xs"
                    data-bs-toggle="tooltip"
                    title=""
                    data-bs-original-title="Miyah Myles"
                  >
                    <img
                      src="/img/2.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                      data-xblocker="passed"
                    />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Company;
