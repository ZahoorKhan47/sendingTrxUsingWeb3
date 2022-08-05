const Web3 = require('web3');
const { API_URL, PRIVATE_KEY,CONTRACT_ADDRESS } = process.env;
const nadraContract = require('../build/contracts/Nadra.json');

const addingDetail = async () => {
  const web3 = new Web3(API_URL);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    nadraContract.abi,CONTRACT_ADDRESS 
  );

  const tx = myContract.methods.addDetail(
    1,            // person id
    'ZahoorKhan', // person name
    '4747',       // person CNIC no
    'Swat,Kp',    // person address
    '2001',       // Date of birth
    7             // tree no family
);
  const gas = await tx.estimateGas({from: CONTRACT_ADDRESS});
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(CONTRACT_ADDRESS);

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: myContract.options.CONTRACT_ADDRESS, 
      data,
      gas,
      gasPrice,
      nonce, 
      chainId: networkId
    },
    PRIVATE_KEY
  );
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`Data at this id : ${await myContract.methods.getDetailsByID(1).call()}`);
};


addingDetail();