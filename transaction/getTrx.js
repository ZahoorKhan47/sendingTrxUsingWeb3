const Web3 = require("web3");
const { API_URL, PUBLIC_KEY,CONTRACT_ADDRESS } = process.env;


( async ()=>{
    const web3 = new Web3(API_URL);
    
    const CONTRACT_ABI=[
        {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
              }
            ],
            "name": "getDetailsByID",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "cnic",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "string",
                    "name": "dob",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "treenum",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct Nadra.Person",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
    ];
    
    const nadraContract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
    const getDetailsbyId = await nadraContract.methods.getDetailsByID(1).call({from: PUBLIC_KEY});
    
    console.log("Details by ID", getDetailsbyId.toString());
    
    
})();



