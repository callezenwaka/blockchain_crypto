require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};