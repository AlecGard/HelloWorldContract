const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("HelloWorld");

  const deployed = await factory.deploy("Hello World!");
  console.log(`Deployed HelloWorld to address: ${deployed.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
