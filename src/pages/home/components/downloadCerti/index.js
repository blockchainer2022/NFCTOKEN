// import React, { useState } from "react";
// import downcaret from "../../../../assets/downcaret.png";
import "./downloadNftCertificate.css";

const DownloadCerti = ({ blockChainDetails, handler }) => {
  const isDetails =
    Object.keys(blockChainDetails).length === 0 &&
    blockChainDetails.constructor === Object;
  console.log(isDetails);
  return (
    <>
      <div className="create-nft-heading">
        <h1>DOWNLOAD NFT CERTIFICATE</h1>
      </div>
      {/* Owner Information Start */}
      <div className="form-wrapper">
        <div className="form-box-wraper">
          <div className="form-box-heading">
            <h3>Download Form</h3>
          </div>
          <div className="information-wrapper">
            <div className="information-row">
              <p className="left">Enter Token</p>
              <p className="right">
                <input type="text" />
              </p>
            </div>
          </div>
        </div>

        {!isDetails ? (
          <>
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
              </div>
            </div>
            {/* BLOCKCHAIN INFORMATION End */}
          </>
        ) : null}
      </div>
      {/* Owner Information End */}
      <div className="download-certificate-btn">
        <button onClick={handler}>DOWNLOAD CERTIFICATE</button>
      </div>
    </>
  );
};

export default DownloadCerti;
