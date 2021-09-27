import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header";
import CreateNftOwner from "./components/createNftOwner";
import DownloadNftCertificate from "./components/downloadNftCertificate";
import VerifyNewNft from "./components/verifyNewNft";
import "./home.css";

toast.configure();

const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  blockChainDetails,
}) => {
  const passportRegex = /^[0-9a-zA-Z]+$/;
  const nameRegex = /^[a-zA-Z][a-zA-Z\s]*$/;
  const [ownerInformation, setOwnerInformation] = useState({
    firstName: "",
    lastName: "",
    identificationType: "SELECT",
    identificationNumber: "",
  });
  const [ownerInformationErr, setOwnerInformationErr] = useState({
    firstName: "",
    lastName: "",
    identificationType: "",
    identificationNumber: "",
  });
  const [nftInformation, setNftInformation] = useState({
    nftName: "",
    nftAvailableAmount: "SELECT",
    totalEditionNumber: "",
    nftType: "SELECT",
    files: [],
  });
  const [nftInformationErr, setNftInformationErr] = useState({
    nftName: "",
    nftAvailableAmount: "",
    totalEditionNumber: "",
    nftType: "",
  });
  const [createNftOwner, setCreateNftOwner] = useState(true);
  const [createNftOwnerCmp, setCreateNftOwnerCmp] = useState(false);
  const [verifyNewNft, setVerifyNewNft] = useState(false);
  const [verifyNewNftCmp, setVerifyNewNftCmp] = useState(false);
  const [downloadNftCertificate, setDownloadNftCertificate] = useState(false);
  const [downloadNftCertificateCmp, setDownloadNftCertificateCmp] =
    useState(false);

  const handleOwnerInformationFields = ({ target }) => {
    setOwnerInformation({ ...ownerInformation, [target.name]: target.value });
  };

  const handleNftInformationFields = ({ target }) => {
    setNftInformation({ ...nftInformation, [target.name]: target.value });
  };

  const handleIdentificationTypeSelection = (type) => {
    setOwnerInformation({ ...ownerInformation, identificationType: type });
  };

  const handleNftAvailableAmountSelection = (type) => {
    setNftInformation({ ...nftInformation, nftAvailableAmount: type });
  };

  const handleNftTypeSelection = (type) => {
    setNftInformation({ ...nftInformation, nftType: type });
  };

  const handleNextClick = () => {
    if (ownerInformation.firstName === "") {
      setOwnerInformationErr({
        firstName: "* First Name Is Required.",
        lastName: "",
        identificationType: "",
        identificationNumber: "",
      });
    } else if (!ownerInformation.firstName.match(nameRegex)) {
      setOwnerInformationErr({
        firstName: "* Please Input a valid name.",
        lastName: "",
        identificationType: "",
        identificationNumber: "",
      });
    } else if (ownerInformation.lastName === "") {
      setOwnerInformationErr({
        firstName: "",
        lastName: "* Last Name Is Required.",
        identificationType: "",
        identificationNumber: "",
      });
    } else if (!ownerInformation.lastName.match(nameRegex)) {
      setOwnerInformationErr({
        firstName: "",
        lastName: "* Please Input a valid name.",
        identificationType: "",
        identificationNumber: "",
      });
    } else if (ownerInformation.identificationType === "SELECT") {
      setOwnerInformationErr({
        firstName: "",
        lastName: "",
        identificationType: "* Select Identification Type.",
        identificationNumber: "",
      });
    } else if (!ownerInformation.identificationNumber.match(passportRegex)) {
      setOwnerInformationErr({
        firstName: "",
        lastName: "",
        identificationType: "",
        identificationNumber: "* Input a valid Identification Id",
      });
    } else {
      setCreateNftOwner(false);
      setCreateNftOwnerCmp(true);
      setVerifyNewNft(true);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleGenerateCertificateClick = () => {
    if (nftInformation.nftName === "") {
      setNftInformationErr({
        nftName: "* Please valid nft name",
        nftAvailableAmount: "",
        totalEditionNumber: "",
        nftType: "",
      });
    } else if (nftInformation.nftAvailableAmount === "SELECT") {
      setNftInformationErr({
        nftName: "",
        nftAvailableAmount: "* Select Nft Available Amount",
        totalEditionNumber: "",
        nftType: "",
      });
    } else if (nftInformation.totalEditionNumber === "") {
      setNftInformationErr({
        nftName: "",
        nftAvailableAmount: "",
        totalEditionNumber: "* Please Enter Total Edition Number",
        nftType: "",
      });
    } else if (nftInformation.nftType === "SELECT") {
      setNftInformationErr({
        nftName: "",
        nftAvailableAmount: "",
        totalEditionNumber: "",
        nftType: "* Select Nft Type",
      });
    } else {
      mint(
        ownerInformation.firstName,
        ownerInformation.lastName,
        ownerInformation.identificationType,
        ownerInformation.identificationNumber,
        nftInformation.nftName,
        nftInformation.nftAvailableAmount,
        nftInformation.totalEditionNumber,
        nftInformation.nftType,
        nftInformation.files[0][0]?.response?.Hash
      );
      setVerifyNewNft(false);
      setVerifyNewNftCmp(true);
      setDownloadNftCertificate(true);
    }
  };

  const handleDownloadCertificateClick = () => {
    setDownloadNftCertificate(false);
    setDownloadNftCertificateCmp(true);
  };

  return (
    <div>
      <div className="create-nft-heading">
        {createNftOwner ? <h1>CREATE NFT OWNER</h1> : null}
        {verifyNewNft ? <h1>VERIFY NEW NFT</h1> : null}
        {downloadNftCertificate ? (
          <h1>DOWNLOAD NFT CERTIFICATE</h1>
        ) : downloadNftCertificateCmp ? (
          <h1>DOWNLOAD NFT CERTIFICATE</h1>
        ) : null}
      </div>
      <div className="form-wrapper">
        <div className="below-heading-buttons-wrapper">
          <div
            className="below-heading-button"
            style={createNftOwner ? { border: "1px solid #E9E61D" } : null}
          >
            <div
              className="tik"
              style={
                createNftOwnerCmp
                  ? { backgroundColor: "#00B707" }
                  : createNftOwner
                  ? { backgroundColor: "#E9E61D" }
                  : { backgroundColor: "#696969" }
              }
            >
              {createNftOwner ? (
                <i style={{ color: "#1B1C1E" }} class="fas fa-check"></i>
              ) : (
                <i style={{ color: "#fff" }} class="fas fa-check"></i>
              )}
            </div>
            <p>Registered to the Blockchain</p>
          </div>
          <div
            className="below-heading-button"
            style={verifyNewNft ? { border: "1px solid #E9E61D" } : null}
          >
            <div
              className="tik"
              style={
                verifyNewNftCmp
                  ? { backgroundColor: "#00B707" }
                  : verifyNewNft
                  ? { backgroundColor: "#E9E61D" }
                  : { backgroundColor: "#696969" }
              }
            >
              {verifyNewNft ? (
                <i style={{ color: "#1B1C1E" }} class="fas fa-check"></i>
              ) : (
                <i style={{ color: "#fff" }} class="fas fa-check"></i>
              )}
            </div>
            <p>Mint to the Blockchian</p>
          </div>
          <div
            className="below-heading-button"
            style={
              downloadNftCertificate ? { border: "1px solid #E9E61D" } : null
            }
          >
            <div
              className="tik"
              style={
                downloadNftCertificateCmp
                  ? { backgroundColor: "#00B707" }
                  : downloadNftCertificate
                  ? { backgroundColor: "#E9E61D" }
                  : { backgroundColor: "#696969" }
              }
            >
              {downloadNftCertificate ? (
                <i style={{ color: "#1B1C1E" }} class="fas fa-check"></i>
              ) : (
                <i style={{ color: "#fff" }} class="fas fa-check"></i>
              )}
            </div>
            <p>Avalible on the Blockchain</p>
          </div>
        </div>

        {/* Form Box Start */}

        <div className="form-box-wraper">
          {/* CREATE NFT OWNER Start */}
          <CreateNftOwner
            createNftOwner={createNftOwner}
            ownerInformation={ownerInformation}
            handleOwnerInformationFields={handleOwnerInformationFields}
            handleIdentificationTypeSelection={
              handleIdentificationTypeSelection
            }
            ownerInformationErr={ownerInformationErr}
          />
          {/* CREATE NFT OWNER End */}
          {/* VERIFY NEW NFT Start */}
          <VerifyNewNft
            verifyNewNft={verifyNewNft}
            nftInformation={nftInformation}
            handleNftInformationFields={handleNftInformationFields}
            handleNftAvailableAmountSelection={
              handleNftAvailableAmountSelection
            }
            handleNftTypeSelection={handleNftTypeSelection}
            nftInformationErr={nftInformationErr}
            setNftInformation={setNftInformation}
          />
          {/* VERIFY NEW NFT End */}
          <div
            className="next-btn"
            style={downloadNftCertificate ? { display: "none" } : null}
          >
            {createNftOwner ? (
              <button onClick={() => handleNextClick()}>NEXT</button>
            ) : null}
            {verifyNewNft ? (
              // <button onClick={() => handleGenerateCertificateClick()}>
              <button onClick={handleGenerateCertificateClick}>
                GENARATE CERTIFICATE
              </button>
            ) : null}
          </div>
        </div>
        {/* DOWNLOAD NFT CERTIFICATE Start */}
        <DownloadNftCertificate
          ownerInformation={ownerInformation}
          downloadNftCertificate={downloadNftCertificate}
          blockChainDetails={blockChainDetails}
        />
        {/* DOWNLOAD NFT CERTIFICATE End */}
        <div className="download-certificate-btn">
          {downloadNftCertificate ? (
            <button onClick={() => handleDownloadCertificateClick()}>
              DOWNLOAD CERTIFICATE
            </button>
          ) : null}
        </div>
        {/* Form Box End */}
      </div>
    </div>
  );
};

export default Home;
