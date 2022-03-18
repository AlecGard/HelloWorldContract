This is a test project to use Hardhat, Alchemy and ethers.js.

Built following: https://ethereum.org/en/developers/tutorials/hello-world-smart-contract-fullstack/

Hello World contract is deployed to Ropsten at address: [0x9f4c1484Afc07Bb9B40AD7311168Db7998767ffE](https://ropsten.etherscan.io/address/0x9f4c1484Afc07Bb9B40AD7311168Db7998767ffE).

### Commands

- `npx hardhat compile`
- `npx hardhat run scripts/deploy.js --network ropsten`
  - deploy the contract to Ropsten
- `npx hardhat run scripts/interact.js`
  - Run the interact script - interact with the deployed contract.
- `npx hardhat verify --network ropsten 0x9f4c1484Afc07Bb9B40AD7311168Db7998767ffE 'Hello World!'`
  - Verify the deployed contract, provides the contract source code to Etherscan.

### .env

- Alchemy API details: alchemyapi.io
  - `ALCHEMY_API_URL`
  - `ALCHEMY_API_KEY`
- Metamask development account private key
  - `PRIVATE_KEY`
- Deployed contract address (set after deploying)
  - `CONTRACT_ADDRESS`
- Etherscan API Key, for verification:
  - `ETHERSCAN_API_KEY`
