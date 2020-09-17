# GSN-Based metacoin.

This a basic metacoin, with minimal modifications to support working through GSN, without the client paying for gas.
You still need a wallet, but only for signing transactions, not paying for them.

See https://github.com/opengsn/gsn for the GSN project.

The Metacoin itself pays for all transactions.

Other than supporting GSN, the project added links to [tenderly](https://dashboard.tenderly.dev/contract/kovan/0x2E0d94754b348D208D64d52d78BcD443aFA9fa52) and [etherscan](https://kovan.etherscan.io/address/0x2e0d94754b348d208d64d52d78bcd443afa9fa52), to ease seeing the various components on the blockchain

## Running the project
#### The "TL;DR"
1. Run `npm install`
2. Run `npm run ganache` to run local ethereum node
3. Run `npx gsn start` -
4. Run `npx truffle migrate && npm run dev` to deploy Metacoin.sol contract, webpack and run local site at `http://localhost:8080`. 
