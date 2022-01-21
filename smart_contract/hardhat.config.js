// link - 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hFppMLWov1yNyJwu6yWJEcBwXfEY46HF',
      accounts: ['dc75b9df63ca87af2edc20251b7eb0a416606e2b70df56592bb8d3021fb7a7a2']  
    }
  }
}