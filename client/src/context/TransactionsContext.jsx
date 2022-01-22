import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currrentAccount, setCurrrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

  const handleChange = (e, name) => {
    setFormData((prevstate) => ({ ...prevstate, [name]: e.target.value })); // mapping all form values
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.lenth) {
        setCurrrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(accounts);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

     const { addressTo, amount, keyword, message } = formData;

     const transactionContract = getEthereumContract();
     const parsedAmout = ethers.utils.parseEther(amount);

     await ethereum.request({
       method: 'eth_sendTransactions',
       params: [{
         from: currrentAccount,
         to: addressTo,
         gas: '0x5208',
         value: parsedAmout._hex,
       }]
     });

     const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmout, message, keyword);
     
     setIsLoading(true);
     console.log(`loading - ${transactionHash.hash}`);
     await transactionHash.wait();
     setIsLoading(false);
     console.log(`Sucess - ${transactionHash.hash}`);

     const transactionCount = await transactionContract.getTransactionCount();

     setTransactionCount(transactionCount.toNumber());
    
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currrentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
