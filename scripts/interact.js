const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("ethers");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "ropsten"),
  ALCHEMY_API_KEY
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  const message = await helloWorldContract.message();
  console.log("Current message: " + message);

  const newMessage = "New message!";
  console.log(`Setting message to: '${newMessage}'`);
  const tx = await helloWorldContract.update(newMessage);
  const receipt = await tx.wait();

  console.log(
    "Gas cost for updating: ",
    ethers.utils.formatEther(
      receipt.cumulativeGasUsed.mul(receipt.effectiveGasPrice)
    )
  );

  const updatedMessage = await helloWorldContract.message();
  console.log("The new message is: " + updatedMessage);
}
main();
