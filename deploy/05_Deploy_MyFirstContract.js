let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    log("----------------------------------------------------")
    const myFirstContract = await deploy('MyFirstContract', {
        from: deployer,
        log: true
    })
    log("Run MyFirstContract commands via:")
    log("npx hardhat ")
}