import hre from "hardhat";

async function main() {
  const LandOwnership = await hre.ethers.getContractFactory("LandOwnership");
  const landOwnership = await LandOwnership.deploy();

  console.log("LandOwnership contract deployed to:", landOwnership.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});