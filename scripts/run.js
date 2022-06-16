const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("EpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Old RICK", "Summer", "Tiny RICK"],      
    ["https://i.imgur.com/KzVP8AD.jpeg",
    "https://i.imgur.com/JULjIbH.png", 
    "https://i.imgur.com/qoNNdPs.jpeg"],
    [300, 200, 150],                   
    [100, 50, 150],
    "Dark Fracture", // Boss name
        "https://i.imgur.com/SVyjKHh.jpeg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage 
    );
    await gameContract.deployed();

    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log('token uri:', returnedTokenUri);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

runMain();