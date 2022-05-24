import React from 'react';
import Product from './Product';

const SaveProduct = () => {
  return (
    <div className="main-content mt-4">
      <div className="container-fluid">
        <h1>Saved Products</h1>
        <div className="row mb-4">
          <div className="col">
            <form>
              <div class="input-group input-group-lg input-group-merge input-group-reverse">

                <input
                  class="form-control list-search"
                  type="text"
                  placeholder="Search"
                />

                <div class="input-group-text">
                  <span class="fas fa-search" />
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" role="tabpanel">
            <div className="row listAlias">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveProduct;
