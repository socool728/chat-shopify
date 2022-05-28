import React from 'react';
import Company from './Company';

const SaveCom = () => {
  return (
    <div className="main-content mt-4">
      <div className="container-fluid">
        <h1>Saved Companies</h1>
        <div className="row mb-4">
          <div className="col">
            <form>
              <div className="input-group input-group-lg input-group-merge input-group-reverse">

                <input
                  className="form-control list-search"
                  type="text"
                  placeholder="Search"
                />

                <div className="input-group-text">
                  <span className="fas fa-search" />
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" role="tabpanel">
            <div className="row listAlias">
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
              <Company />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCom;
