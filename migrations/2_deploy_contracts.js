const MetaCoin = artifacts.require('MetaCoin')
const NaivePaymaster = artifacts.require('NaivePaymaster.sol')

const {
  networks
} = require('../app/scripts/networks')
// console.log( Object.keys(networks),'networks');
console.log(networks[3].forwarder, 'networks');
console.log(networks["3"]["forwarder"], 'networks[][]');

module.exports = async function (deployer, network) {
  await deployer.deploy(NaivePaymaster)
  const paymaster = await NaivePaymaster.deployed()

  console.log(paymaster, 'paymaster');

  await deployer.deploy(MetaCoin)
  const forwarderAddress = getForwarder(network)
  const relayAddress = getRelayHub(network)
  // const tx=  await paymaster.send('1e18')

  await paymaster.setRelayHub(relayAddress)

  console.log(forwarderAddress, 'forwarderAddress');

  const instance = await MetaCoin.deployed()
  await paymaster.setTarget(instance.address)
  const accounts = await web3.eth.getAccounts()
  web3.eth.sendTransaction({
    from: accounts[0],
    to: paymaster.address,
    value: 2e18
  }, (e, r) => {
    if (e) {
      console.log('Failed to fund metamask', e)
    } else {
      console.log('Funded metamask @', paymaster.address)
    }
  })
  await paymaster.setTrustedForwarder(forwarderAddress)
  await instance.setTrustedForwarder(forwarderAddress)
  console.log(`Successfully set Trusted Forwarder (${forwarderAddress}) on Recipient (${instance.address})`)
}

function getForwarder (network) {
  console.log(network, 'network name');
  if (network === 'development') {
    return require('../build/gsn/Forwarder.json').address
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    return networks[3].forwarder;
  } else if (network === 'kovan') {
    return networks['42'].forwarder;
  } else {
    return null
  }
}

function getRelayHub (network) {
  console.log(network, 'network name');
  if (network === 'development') {
    return require('../build/gsn/RelayHub.json').address
  } else if (network === 'ropsten' || network === 'ropsten-fork') {
    return networks[3].forwarder;
  } else if (network === 'kovan') {
    return networks['42'].forwarder;
  } else {
    return null
  }
}