const { ethers } = require("hardhat");
async function main() {
  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  const HelloCore = await ethers.getContractAt("HelloCore", contractAddress);
  console.log("Message:", await HelloCore.message());
  const tx = await HelloCore.setMessage("Core is awesome!");
  await tx.wait();
  console.log("Updated message:", await HelloCore.message());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
