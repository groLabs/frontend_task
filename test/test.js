const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Gro", function () {
  it("Should return the new message once it's changed", async function () {
    const Gro = await ethers.getContractFactory("Gro");
    const gro = await Gro.deploy("Hello, world!");
    await gro.deployed();

    expect(await gro.getMessage()).to.equal("Hello, world!");

    const setMessageTx = await gro.setMessage("Hola, mundo!");

    // wait until the transaction is mined
    await setMessageTx.wait();

    expect(await gro.getMessage()).to.equal("Hola, mundo!");
  });
});
