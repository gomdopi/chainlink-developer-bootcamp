task("set-number", "Sets the number to input value")
    .addParam("value", "The value you want to set the number to")
    .setAction(async taskArgs => {

        const contractAddr = "0x36865f34aa29ac93ed12321C256b715D3325B00f"
        const networkId = network.name
        const value = taskArgs.value

        const MyFirstContract = await ethers.getContractFactory("MyFirstContract")

        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const myFirstContract = await new ethers.Contract(contractAddr, MyFirstContract.interface, signer)
        await myFirstContract.setNumber(value).then((data) => {
            console.log('Number set to: ', value)
        })
    })

module.exports = {}