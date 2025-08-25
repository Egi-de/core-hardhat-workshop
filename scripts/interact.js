const { ethers } = require("hardhat");
async function main() {
  const contractAddress = "0xfb4277711C306d1A223cEA9d6Cd995c297d9A3b3";
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
