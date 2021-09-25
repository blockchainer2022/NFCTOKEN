import React, { useState } from "react";
import downcaret from "../../../../assets/downcaret.png";
import { Upload, message } from "antd";
import "antd/dist/antd.css";
import "./verifyNewNft.css";

const { Dragger } = Upload;

const VerifyNewNft = ({
  verifyNewNft,
  nftInformation,
  handleNftInformationFields,
  handleNftAvailableAmountSelection,
  handleNftTypeSelection,
  nftInformationErr,
  setNftInformation,
}) => {
  const client = "https://ipfs.infura.io:5001/api/v0/add";
  const [files, setFiles] = useState([]);
  const [openSelect, setOpenSelect] = useState(false);
  const [openSelect1, setOpenSelect1] = useState(false);

  const handleSelectOpen = () => {
    setOpenSelect((prev) => !prev);
  };

  const handleSelectOpen1 = () => {
    setOpenSelect1((prev) => !prev);
  };

  const handleNftAvailableAmountItemClick = (option) => {
    handleNftAvailableAmountSelection(option);
    handleSelectOpen();
  };

  const handleNftTypeItemClick = (option) => {
    handleNftTypeSelection(option);
    handleSelectOpen1();
  };

  const props = {
    name: "file",
    action: client,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
        setFiles(info.fileList);
        setNftInformation({ ...nftInformation, files: [info.fileList] });
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <>
      {verifyNewNft ? (
        <>
          <div className="form-box-heading">
            <h3>NFT INFORMATION</h3>
          </div>
          <div className="fields-wrapper">
            {/* Row 1 Start */}
            <div className="third-row">
              <p>NFT name</p>
              <input
                type="text"
                placeholder="NFT name"
                value={nftInformation.nftName}
                name="nftName"
                onChange={handleNftInformationFields}
              />
              {nftInformationErr.nftName !== "" ? (
                <p style={{ color: "red", marginBottom: 0 }}>
                  {nftInformationErr.nftName}
                </p>
              ) : null}
            </div>
            {/* Row 1 End */}
            {/* Row 2 Start */}
            <div className="first-row">
              <div className="first-row-left">
                <p>NFT AVAILABLE AMMOUNT</p>
                <div className="select" onClick={() => handleSelectOpen()}>
                  {nftInformation.nftAvailableAmount}
                  <img src={downcaret} alt="downcaret" />
                </div>
                {openSelect ? (
                  <>
                    <div
                      className="option"
                      onClick={() =>
                        handleNftAvailableAmountItemClick("Option 1")
                      }
                    >
                      Option 1
                    </div>
                    <div
                      className="option"
                      onClick={() =>
                        handleNftAvailableAmountItemClick("Option 2")
                      }
                    >
                      Option 2
                    </div>
                    <div
                      className="option"
                      onClick={() =>
                        handleNftAvailableAmountItemClick("Option 3")
                      }
                    >
                      Option 3
                    </div>
                  </>
                ) : null}
                {nftInformationErr.nftAvailableAmount !== "" ? (
                  <p style={{ color: "red", marginBottom: 0 }}>
                    {nftInformationErr.nftAvailableAmount}
                  </p>
                ) : null}
              </div>
              <div className="first-row-right">
                <p>TOTAL EDITION NUMBER</p>
                <input
                  type="number"
                  placeholder="Total Edition Number"
                  value={nftInformation.totalEditionNumber}
                  name="totalEditionNumber"
                  onChange={handleNftInformationFields}
                />
                {nftInformationErr.totalEditionNumber !== "" ? (
                  <p style={{ color: "red", marginBottom: 0 }}>
                    {nftInformationErr.totalEditionNumber}
                  </p>
                ) : null}
              </div>
            </div>
            {/* Row 2 End */}
            {/* Row 3 Start */}
            <div className="second-row">
              <p>NFT TYPE</p>
              <div className="select" onClick={() => handleSelectOpen1()}>
                {nftInformation.nftType}
                <img src={downcaret} alt="downcaret" />
              </div>
              {openSelect1 ? (
                <>
                  <div
                    className="option"
                    onClick={() => handleNftTypeItemClick("Option 1")}
                  >
                    Option 1
                  </div>
                  <div
                    className="option"
                    onClick={() => handleNftTypeItemClick("Option 2")}
                  >
                    Option 2
                  </div>
                  <div
                    className="option"
                    onClick={() => handleNftTypeItemClick("Option 3")}
                  >
                    Option 3
                  </div>
                </>
              ) : null}
              {nftInformationErr.nftType !== "" ? (
                <p style={{ color: "red", marginBottom: 0 }}>
                  {nftInformationErr.nftType}
                </p>
              ) : null}
            </div>
            {/* Row 3 End */}
            <div className="mydraner-wrapper">
              <Dragger {...props} className="dragger">
                <p className="upload-text">
                  Select a file or drag file here...
                </p>
              </Dragger>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default VerifyNewNft;
