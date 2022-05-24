import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large color-white">Welcome to Shopify WebSite</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-demo row pt-10 px-15">
        <div className="col-md-8 px-lg-15 mt-10">
          <h1 className="text-center">
            The largest international B2B sourcing platform
          </h1>
          <p className="mx-8">
            Find the products of more than 3 million companies in all B2B sectors. Choose and contact the best suppliers for free.
          </p>
        </div>
        <div className="col-md-4 flex center ml-5 ml-4">
          <img
            src="./img/44c654928cd32244a5e14473eed33730.svg"
            aria-hidden="true"
            width="309"
            height="245"
            loading="lazy"
            data-v-624e8ec4=""
            data-v-034b15d6=""
            data-xblocker="passed"
            className=" align-self-center"
            alt="img"
          />
        </div>
        <div className="row py-10">
          <div className="tiny-slider arrow-round arrow-blur arrow-hover">
            <div className="tns-outer" id="tns1-ow">
              <div
                className="tns-liveregion tns-visually-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                slide <span className="current">14 to 18</span> of 4
              </div>
              <div id="tns1-mw" className="tns-ovh">
                <div className="tns-inner" id="tns1-iw">
                  <div
                    className="tiny-slider-inner pb-1  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                    data-autoplay="true"
                    data-arrow="true"
                    data-edge="2"
                    data-dots="false"
                    data-items="3"
                    data-items-lg="2"
                    data-items-sm="1"
                    id="tns1"
                    style={{transform: 'translate3d(-77.7778%, 0px, 0px)'}}
                  >
                    <div
                      className="tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div className="card action-trigger-hover border bg-transparent">
                        <img
                          src="/img/14.jpg"
                          className="card-img-top"
                          alt="course imge"
                          data-xblocker="passed"
                          style={{visibility: 'visible'}}
                        />
                        <div className="card-body pb-0">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="hstack gap-2">
                              <Link
                                to="#"
                                className="badge bg-primary bg-opacity-10 text-primary"
                              >
                                Development
                              </Link>
                              <Link to="#" className="badge bg-dark text-white">
                                All level
                              </Link>
                            </span>
                            <Link to="#" className="h6 fw-light mb-0">
                              <i className="far fa-bookmark" />
                            </Link>
                          </div>
                          <h5 className="card-title">
                            <Link to="#">
                              Angular – The Complete Guide (2021 Edition)
                            </Link>
                          </h5>
                          <div className="d-flex justify-content-between mb-2">
                            <div className="hstack gap-2">
                              <p className="text-warning m-0">
                                4.0
                                <i className="fas fa-star text-warning ms-1" />
                              </p>
                              <span className="small">(3500)</span>
                            </div>
                            <div className="hstack gap-2">
                              <p className="h6 fw-light mb-0 m-0">4500</p>
                              <span className="small">(Student)</span>
                            </div>
                          </div>
                          <div className="hstack gap-3">
                            <span className="h6 fw-light mb-0">
                              <i className="far fa-clock text-danger me-2" />
                              12h 45m
                            </span>
                            <span className="h6 fw-light mb-0">
                              <i className="fas fa-table text-orange me-2" />
                              65 lectures
                            </span>
                          </div>
                        </div>
                        <div className="card-footer pt-0 bg-transparent">
                          <hr />
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-1"
                                  src="/img/2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <Link to="#" className="h6 fw-light mb-0">
                                  Billy Vasquez
                                </Link>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-success mb-0 item-show">
                                $255
                              </h4>
                              <Link
                                to="#"
                                className="btn-sm btn-success-soft item-show-hover"
                              >
                                <i className="fas fa-shopping-cart me-2" />
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div className="card action-trigger-hover border bg-transparent">
                        <img
                          src="/img/14.jpg"
                          className="card-img-top"
                          alt="course imge"
                          data-xblocker="passed"
                          style={{visibility: 'visible'}}
                        />
                        <div className="card-body pb-0">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="hstack gap-2">
                              <Link
                                to="#"
                                className="badge bg-primary bg-opacity-10 text-primary"
                              >
                                Development
                              </Link>
                              <Link to="#" className="badge bg-dark text-white">
                                All level
                              </Link>
                            </span>
                            <Link to="#" className="h6 fw-light mb-0">
                              <i className="far fa-bookmark" />
                            </Link>
                          </div>
                          <h5 className="card-title">
                            <Link to="#">
                              Angular – The Complete Guide (2021 Edition)
                            </Link>
                          </h5>
                          <div className="d-flex justify-content-between mb-2">
                            <div className="hstack gap-2">
                              <p className="text-warning m-0">
                                4.0
                                <i className="fas fa-star text-warning ms-1" />
                              </p>
                              <span className="small">(3500)</span>
                            </div>
                            <div className="hstack gap-2">
                              <p className="h6 fw-light mb-0 m-0">4500</p>
                              <span className="small">(Student)</span>
                            </div>
                          </div>
                          <div className="hstack gap-3">
                            <span className="h6 fw-light mb-0">
                              <i className="far fa-clock text-danger me-2" />
                              12h 45m
                            </span>
                            <span className="h6 fw-light mb-0">
                              <i className="fas fa-table text-orange me-2" />
                              65 lectures
                            </span>
                          </div>
                        </div>
                        <div className="card-footer pt-0 bg-transparent">
                          <hr />
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-1"
                                  src="/img/2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <Link to="#" className="h6 fw-light mb-0">
                                  Billy Vasquez
                                </Link>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-success mb-0 item-show">
                                $255
                              </h4>
                              <Link
                                to="#"
                                className="btn-sm btn-success-soft item-show-hover"
                              >
                                <i className="fas fa-shopping-cart me-2" />
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div className="card action-trigger-hover border bg-transparent">
                        <img
                          src="/img/14.jpg"
                          className="card-img-top"
                          alt="course imge"
                          data-xblocker="passed"
                          style={{visibility: 'visible'}}
                        />
                        <div className="card-body pb-0">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="hstack gap-2">
                              <Link
                                to="#"
                                className="badge bg-primary bg-opacity-10 text-primary"
                              >
                                Development
                              </Link>
                              <Link to="#" className="badge bg-dark text-white">
                                All level
                              </Link>
                            </span>
                            <Link to="#" className="h6 fw-light mb-0">
                              <i className="far fa-bookmark" />
                            </Link>
                          </div>
                          <h5 className="card-title">
                            <Link to="#">
                              Angular – The Complete Guide (2021 Edition)
                            </Link>
                          </h5>
                          <div className="d-flex justify-content-between mb-2">
                            <div className="hstack gap-2">
                              <p className="text-warning m-0">
                                4.0
                                <i className="fas fa-star text-warning ms-1" />
                              </p>
                              <span className="small">(3500)</span>
                            </div>
                            <div className="hstack gap-2">
                              <p className="h6 fw-light mb-0 m-0">4500</p>
                              <span className="small">(Student)</span>
                            </div>
                          </div>
                          <div className="hstack gap-3">
                            <span className="h6 fw-light mb-0">
                              <i className="far fa-clock text-danger me-2" />
                              12h 45m
                            </span>
                            <span className="h6 fw-light mb-0">
                              <i className="fas fa-table text-orange me-2" />
                              65 lectures
                            </span>
                          </div>
                        </div>
                        <div className="card-footer pt-0 bg-transparent">
                          <hr />
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-1"
                                  src="/img/2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <Link to="#" className="h6 fw-light mb-0">
                                  Billy Vasquez
                                </Link>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-success mb-0 item-show">
                                $255
                              </h4>
                              <Link
                                to="#"
                                className="btn-sm btn-success-soft item-show-hover"
                              >
                                <i className="fas fa-shopping-cart me-2" />
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tns-item"
                      id="tns1-item0"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div className="card action-trigger-hover border bg-transparent">
                        <img
                          src="/img/14.jpg"
                          className="card-img-top"
                          alt="course imge"
                          data-xblocker="passed"
                          style={{visibility: 'visible'}}
                        />
                        <div className="ribbon mt-3"><span>Free</span></div>
                        <div className="card-body pb-0">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="hstack gap-2">
                              <Link
                                to="#"
                                className="badge bg-primary bg-opacity-10 text-primary"
                              >
                                Design
                              </Link>
                              <Link to="#" className="badge bg-dark text-white">
                                Beginner
                              </Link>
                            </span>
                            <Link to="#" className="h6 fw-light mb-0">
                              <i className="far fa-bookmark" />
                            </Link>
                          </div>
                          <h5 className="card-title">
                            <Link to="#">
                              The complete Digital Marketing Course - 8 Course in 1
                            </Link>
                          </h5>
                          <div className="d-flex justify-content-between mb-2">
                            <div className="hstack gap-2">
                              <p className="text-warning m-0">
                                4.5
                                <i className="fas fa-star text-warning ms-1" />
                              </p>
                              <span className="small">(6500)</span>
                            </div>
                            <div className="hstack gap-2">
                              <p className="h6 fw-light mb-0 m-0">6500</p>
                              <span className="small">(Student)</span>
                            </div>
                          </div>
                          <div className="hstack gap-3">
                            <span className="h6 fw-light mb-0">
                              <i className="far fa-clock text-danger me-2" />
                              6h 56m
                            </span>
                            <span className="h6 fw-light mb-0">
                              <i className="fas fa-table text-orange me-2" />
                              82 lectures
                            </span>
                          </div>
                        </div>
                        <div className="card-footer pt-0 bg-transparent">
                          <hr />
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-1"
                                  src="/img/2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <Link to="#" className="h6 fw-light mb-0">
                                  Larry Lawson
                                </Link>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-success mb-0 item-show">
                                Free
                              </h4>
                              <Link
                                to="#"
                                className="btn-sm btn-success-soft item-show-hover"
                              >
                                <i className="fas fa-shopping-cart me-2" />
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tns-item tns-slide-cloned"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div className="card action-trigger-hover border bg-transparent">
                        <img
                          src="/img/14.jpg"
                          className="card-img-top"
                          alt="course imge"
                          data-xblocker="passed"
                          style={{visibility: 'visible'}}
                        />
                        <div className="ribbon mt-3"><span>Free</span></div>
                        <div className="card-body pb-0">
                          <div className="d-flex justify-content-between mb-3">
                            <span className="hstack gap-2">
                              <Link
                                to="#"
                                className="badge bg-primary bg-opacity-10 text-primary"
                              >
                                Design
                              </Link>
                              <Link to="#" className="badge bg-dark text-white">
                                Beginner
                              </Link>
                            </span>
                            <Link to="#" className="h6 fw-light mb-0">
                              <i className="far fa-bookmark" />
                            </Link>
                          </div>
                          <h5 className="card-title">
                            <Link to="#">
                              The complete Digital Marketing Course - 8 Course in 1
                            </Link>
                          </h5>
                          <div className="d-flex justify-content-between mb-2">
                            <div className="hstack gap-2">
                              <p className="text-warning m-0">
                                4.5
                                <i className="fas fa-star text-warning ms-1" />
                              </p>
                              <span className="small">(6500)</span>
                            </div>
                            <div className="hstack gap-2">
                              <p className="h6 fw-light mb-0 m-0">6500</p>
                              <span className="small">(Student)</span>
                            </div>
                          </div>
                          <div className="hstack gap-3">
                            <span className="h6 fw-light mb-0">
                              <i className="far fa-clock text-danger me-2" />
                              6h 56m
                            </span>
                            <span className="h6 fw-light mb-0">
                              <i className="fas fa-table text-orange me-2" />
                              82 lectures
                            </span>
                          </div>
                        </div>
                        <div className="card-footer pt-0 bg-transparent">
                          <hr />
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm">
                                <img
                                  className="avatar-img rounded-1"
                                  src="/img/2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <p className="mb-0 ms-2">
                                <Link to="#" className="h6 fw-light mb-0">
                                  Larry Lawson
                                </Link>
                              </p>
                            </div>
                            <div>
                              <h4 className="text-success mb-0 item-show">
                                Free
                              </h4>
                              <Link
                                to="#"
                                className="btn-sm btn-success-soft item-show-hover"
                              >
                                <i className="fas fa-shopping-cart me-2" />
                                Add to cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tns-controls"
                aria-label="Carousel Navigation"
                tabindex="0"
              >
                <button
                  type="button"
                  data-controls="prev"
                  tabindex="-1"
                  aria-controls="tns1"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button
                  type="button"
                  data-controls="next"
                  tabindex="-1"
                  aria-controls="tns1"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>;

      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect (mapStateToProps) (Landing);
