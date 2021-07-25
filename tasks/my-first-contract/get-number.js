task("get-number", "Sets the number to input value")
    .setAction(async taskArgs => {

        const contractAddr = "0x36865f34aa29ac93ed12321C256b715D3325B00f"
        const networkId = network.name

        const MyFirstContract = await ethers.getContractFactory("MyFirstContract")

        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const myFirstContract = await new ethers.Contract(contractAddr, MyFirstContract.interface, signer)
        await myFirstContract.getNumber().then((data) => {
            console.log('Number is: ', BigInt(data).toString())
        })
    })

module.exports = {}