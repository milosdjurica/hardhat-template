import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployer } = await hre.getNamedAccounts();
	const { deploy } = hre.deployments;

	const contractName = await deploy("ContractName", {
		from: deployer,
		args: [], // ! constructor args
		log: true,
	});

	console.log(`ContractName contract: `, contractName.address);
};
export default func;
func.id = "deploy_contractName"; // id required to prevent re-execution
func.tags = ["ContractName"];
