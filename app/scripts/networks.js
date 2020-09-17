module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      metacoin: '0x90c2344d737923048f37d6818fe5BC925071aFf9',
      relayHub: '0xcfcb6017e8ac4a063504b9d31b4AbD618565a276',
      paymaster: '0x9940c8e12Ca14Fe4f82646D6d00030f4fC3C7ad1',
      forwarder: '0x663946D7Ea17FEd07BF1420559F9FB73d85B5B03'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      metacoin: '0x06E5a3314dD098DE1Eb0C4D5987E26F609B73c8a',
      relayHub: '0xF0851c3333a9Ba0D61472de4C0548F1160F95f17',
      paymaster: '0x4aa21CdEba9dfEC2C2621b83a15262a41C67aC67',
      forwarder: '0x766400B526fB5889AE6C52b369671F5eE137880b'
    }
  }
}
/**module.exports = {
  networks: {
    42: {
      // addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      // txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      addressUrl: 'https://kovan.etherscan.io/address/',
      txUrl: 'https://kovan.etherscan.io/tx/',
      // to be updated
      // metacoin: '0x90c2344d737923048f37d6818fe5BC925071aFf9',
      relayHub: '0x2E0d94754b348D208D64d52d78BcD443aFA9fa52',
      paymaster: '0x38489512d064106f5A7AD3d9e13268Aaf777A41c',
      stakeManager: '0x0ecf783407C5C80D71CFEa37938C0b60BD255FF8',

      forwarder: '0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B'
    },
    3: {


      //  Ropsten Testnet

      // addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      // txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      addressUrl: 'https://ropsten.etherscan.io/address/',
      txUrl: 'https://ropsten.etherscan.io/tx/',
// our
      metacoin: '0x06E5a3314dD098DE1Eb0C4D5987E26F609B73c8a',
      relayHub: '0xEF46DD512bCD36619a6531Ca84B188b47D85124b',
      paymaster: '0x663946D7Ea17FEd07BF1420559F9FB73d85B5B03',
      stakeManager: '0x41c7C7c1Bf501e2F43b51c200FEeEC87540AC925',

      forwarder: '0xcC87aa60a6457D9606995C4E7E9c38A2b627Da88'
    }
  }
} */