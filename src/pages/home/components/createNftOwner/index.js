import React, { useState } from "react";
import downcaret from "../../../../assets/downcaret.png";
import "./createNftOwner.css";

const CreateNftOwner = ({
  createNftOwner,
  ownerInformation,
  handleOwnerInformationFields,
  handleIdentificationTypeSelection,
  ownerInformationErr,
}) => {
  const [openSelect, setOpenSelect] = useState(false);

  const handleSelectOpen = () => {
    setOpenSelect((prev) => !prev);
  };

  const handleSelectItemClick = (option) => {
    setOpenSelect((prev) => !prev);
    handleIdentificationTypeSelection(option);
  };

  return (
    <>
      {createNftOwner ? (
        <>
          <div className="form-box-heading">
            <h3>Owner Information</h3>
          </div>
          <div className="fields-wrapper">
            {/* Row 1 Start */}
            <div className="first-row">
              <div className="first-row-left">
                <p>First Name</p>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={ownerInformation.firstName}
                  onChange={handleOwnerInformationFields}
                />
                {ownerInformationErr.firstName !== "" ? (
                  <p style={{ color: "red", marginBottom: 0 }}>
                    {ownerInformationErr.firstName}
                  </p>
                ) : null}
              </div>
              <div className="first-row-right">
                <p>Last Name</p>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={ownerInformation.lastName}
                  onChange={handleOwnerInformationFields}
                />
                {ownerInformationErr.lastName !== "" ? (
                  <p style={{ color: "red", marginBottom: 0 }}>
                    {ownerInformationErr.lastName}
                  </p>
                ) : null}
              </div>
            </div>
            {/* Row 1 End */}
            {/* Row 2 Start */}
            <div className="second-row">
              <p>ID OR PASSPORT</p>
              <div className="select" onClick={() => handleSelectOpen()}>
                {ownerInformation.identificationType}
                <img src={downcaret} alt="downcaret" />
              </div>
              {openSelect ? (
                <>
                  <div
                    className="option"
                    onClick={() => handleSelectItemClick("ID")}
                  >
                    ID
                  </div>
                  <div
                    className="option"
                    onClick={() => handleSelectItemClick("Passport")}
                  >
                    Passport
                  </div>
                </>
              ) : null}
              {ownerInformationErr.identificationType !== "" ? (
                <p style={{ color: "red", marginBottom: 0 }}>
                  {ownerInformationErr.identificationType}
                </p>
              ) : null}
            </div>
            {/* Row 2 End */}
            {/* Row 3 Start */}
            <div className="third-row">
              <p>IDENTIFICATION NUMBER</p>
              <input
                type="text"
                placeholder="Identification number"
                name="identificationNumber"
                value={ownerInformation.identificationNumber}
                onChange={handleOwnerInformationFields}
              />
              {ownerInformationErr.identificationNumber !== "" ? (
                  <p style={{ color: "red", marginBottom: 0 }}>
                    {ownerInformationErr.identificationNumber}
                  </p>
                ) : null}
            </div>
            {/* Row 3 End */}
          </div>
        </>
      ) : null}
    </>
  );
};

export default CreateNftOwner;
