//Déployer le contrat mock sur la blockchain de test localchost hardhat

const { network } = require("hardhat");

const DECIMALS = "8";
const INITIAL_PRICE = "200000000000"; // 2000
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  if (chainId == 31337) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_PRICE],
    });
    log("Mocks Deployed!");
    log("------------------------------------------------");
    log(
      "You are deploying to a local network, you'll need a local network running to interact"
    );
    log("------------------------------------------------");
  }
};
module.exports.tags = ["all", "mocks"];
