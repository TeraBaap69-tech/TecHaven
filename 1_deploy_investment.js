const MultiCurrencyInvestment = artifacts.require("MultiCurrencyInvestment");

module.exports = async function (deployer, network, accounts) {
    const admin = accounts[0]; // Default admin account

    console.log("Deploying MultiCurrencyInvestment contract...");
    
    // Deployment process
    await deployer.deploy(MultiCurrencyInvestment, { from: admin });

    const multiCurrencyInvestment = await MultiCurrencyInvestment.deployed();

    console.log(
        `MultiCurrencyInvestment contract deployed at address: ${multiCurrencyInvestment.address}`
    );
    
    // Optionally, initialize the contract with initial data
    console.log("Initializing contract with default values...");
    // Example: Set a default stablecoin address (Replace with actual address)
    const stablecoinAddress = "0x0000000000000000000000000000000000000000";
    await multiCurrencyInvestment.setStablecoin(stablecoinAddress, { from: admin });
    console.log("Default stablecoin address set.");
};
