// import React, { useState } from "react";
// import downcaret from "../../../../assets/downcaret.png";
import "./downloadNftCertificate.css";

const DownloadNftCertificate = ({
  downloadNftCertificate,
  ownerInformation,
  blockChainDetails,
}) => {
  console.log(blockChainDetails);
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
                <p className="right">{blockChainDetails[1]}</p>
              </div>
              <div className="information-row">
                <p className="left">Last Name</p>
                <p className="right">{blockChainDetails[2]}</p>
              </div>
              <div className="information-row">
                <p className="left">ID OR PASSPORT</p>
                <p className="right">{blockChainDetails[3]}</p>
              </div>
              <div className="information-row">
                <p className="left">IDENTIFICATION NUMBER</p>
                <p className="right">{blockChainDetails[4]}</p>
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
                <p className="right">{blockChainDetails[5]}</p>
              </div>
              <div className="information-row">
                <p className="left">TOTAL EDITION NUMBER</p>
                <p className="right">{blockChainDetails[7]}</p>
              </div>
              <div className="information-row">
                <p className="left">NFT EDITION NUMBER</p>
                <p className="right">{blockChainDetails[6]}</p>
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
                <p className="right">{blockChainDetails[0]}</p>
              </div>
              <div className="information-row">
                <p className="left">TOKEN ID</p>
                <p className="right">
                  66941509727395398082473272810930026
                  0072922066110344370580022080279393 53792849
                </p>
              </div>
              <div className="information-row">
                <p className="left">IMAGE</p>
                <div className="right">
                  <img src="https://via.placeholder.com/100" alt="" />
                </div>
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
