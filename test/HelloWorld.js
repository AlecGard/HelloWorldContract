const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld contract", () => {
  it("Deployment should set the init message", async () => {
    const factory = await ethers.getContractFactory("HelloWorld");
    const initMessage = "Test Hello World!";

    const deployed = await factory.deploy(initMessage);

    const message = await deployed.message();

    expect(message).to.equal(initMessage);
  });

  it("Update should set the message", async () => {
    const factory = await ethers.getContractFactory("HelloWorld");
    const initMessage = "Test Hello World!";

    const deployed = await factory.deploy(initMessage);

    const newMessage = "New message!";
    const tx = await deployed.update(newMessage);
    await tx.wait();
    const updatedMessage = await deployed.message();

    expect(updatedMessage).to.equal(newMessage);
  });
});
