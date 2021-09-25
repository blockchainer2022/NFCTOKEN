// import React, { useState } from "react";
// import downcaret from "../../../../assets/downcaret.png";
import "./downloadNftCertificate.css";

const DownloadNftCertificate = ({
  downloadNftCertificate,
  ownerInformation,
}) => {
  return (
    <>
      {downloadNftCertificate ? (
        <>
          {/* Owner Information Start */}
          <div className="form-box-wraper">
            <div className="form-box-heading">
              <h3>Owner Information</h3>
            </div>
            <div className="information-wrapper">
              <div className="information-row">
                <p className="left">First Name</p>
                <p className="right">{ownerInformation.firstName}</p>
              </div>
              <div className="information-row">
                <p className="left">Last Name</p>
                <p className="right">{ownerInformation.lastName}</p>
              </div>
              <div className="information-row">
                <p className="left">ID OR PASSPORT</p>
                <p className="right">{ownerInformation.identificationType}</p>
              </div>
              <div className="information-row">
                <p className="left">IDENTIFICATION NUMBER</p>
                <p className="right">{ownerInformation.identificationNumber}</p>
              </div>
            </div>
          </div>
          {/* Owner Information End */}
          {/* NFT INFORMATION Start */}
          <div className="form-box-wraper1">
            <div className="form-box-heading">
              <h3>NFT INFORMATION</h3>
            </div>
            <div className="information-wrapper">
              <div className="information-row">
                <p className="left">NFT NAME</p>
                <p className="right">the future of originatlty</p>
              </div>
              <div className="information-row">
                <p className="left">TOTAL EDITION NUMBER</p>
                <p className="right">500</p>
              </div>
              <div className="information-row">
                <p className="left">NFT EDITION NUMBER</p>
                <p className="right">#0012</p>
              </div>
            </div>
          </div>
          {/* NFT INFORMATION End */}
          {/* BLOCKCHAIN INFORMATION Start */}
          <div className="form-box-wraper1">
            <div className="form-box-heading">
              <h3>BLOCKCHAIN INFORMATION</h3>
            </div>
            <div className="information-wrapper">
              <div className="information-row">
                <p className="left">ADDRESS OWNER</p>
                <p className="right">
                  E0x8c5aCF6dBD24c66e6FD44d4A4C3d7a2D955AAad2
                </p>
              </div>
              <div className="information-row">
                <p className="left">TOKEN ID</p>
                <p className="right">
                  66941509727395398082473272810930026
                  0072922066110344370580022080279393 53792849
                </p>
              </div>
            </div>
          </div>
          {/* BLOCKCHAIN INFORMATION End */}
        </>
      ) : null}
    </>
  );
};

export default DownloadNftCertificate;
