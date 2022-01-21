import react, { useContext } from "react";
import { TransactionContext, TransactionProvider } from "../context/TransactionsContext";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  <input
    placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />;
};

const handleChange = () => {};

const Welcome = () => {

  const { connectWallet, currentAccount, formData, setTransaction, handleChange } = useContext(TransactionContext);

  const handleSubmit = () => {
    const {addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

  }
 
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-white">
            Send Crypto across the world
          </h1>
          <p class="mb-8 leading-relaxed text-white">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <input
          placeholder="Address To"
          className="p-5 sm:w-96 w-full flex flex-col my-3  justify-start items-center blue-glassmorphism"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <input
          placeholder="Amount (ETH)"
          name="amount"
          className="p-5 sm:w-96 w-full flex flex-col my-3  justify-start items-center blue-glassmorphism"
          type="number"
          handleChange={handleChange}
        />
        <input
          placeholder="Keyword (Gif)"
          name="keyword"
          className="p-5 sm:w-96 w-full flex flex-col  my-3 justify-start items-center blue-glassmorphism"
          type="text"
          handleChange={handleChange}
        />
        <input
          placeholder="Enter Message"
          name="message"
          className="p-5 sm:w-96 w-full flex flex-col my-3 justify-start items-center blue-glassmorphism"
          type="text"
          handleChange={handleChange}
        />
        <button type="button" className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer" onClick={connectWallet}>
          Send
        </button>
      </div>
    </section>
  );
};

export default Welcome;
