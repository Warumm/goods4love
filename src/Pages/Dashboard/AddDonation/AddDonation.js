/* eslint-disable import/no-cycle */
import React from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';

const AddDonation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-menu">
          <Sidebar />
        </div>
        <div className="col-9 mt-2 mt-md-5 col-xl-10 px-sm-0 px-md-5 py-3 py-md-5" id="profile">
          <h4 className="m-2">Add A Donation </h4>
          <p className="m-2">
            <input type="text" name="donationName" id="addDonation" placeholder="Title" />
          </p>

          <p className="m-2">
            <input type="file" name="uploadDonationPicture" />
          </p>

          <p className="m-2">
            <input type="text" name="details" placeholder="Details" />
          </p>
          <p className="m-2">
            <button className="btn btn-primary px-3" type="submit">
              Submit
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddDonation;
