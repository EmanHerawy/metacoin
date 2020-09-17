// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;

import "./ConvertLib.sol";
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";
import "@opengsn/gsn/contracts/interfaces/IKnowForwarderAddress.sol";


// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin is BaseRelayRecipient, IKnowForwarderAddress {
    string public symbol = "META";
    string public description = "GSN Sample MetaCoin";
    uint256 public decimals = 0;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() public {
        balances[tx.origin] = 10000;
    }

    function getTrustedForwarder() public override view returns (address) {
        return trustedForwarder;
    }

    function setTrustedForwarder(address _trustedForwarder) public {
        trustedForwarder = _trustedForwarder;
    }

    function versionRecipient() external override view returns (string memory) {
        return "2.0.0";
    }

    function transfer(address receiver, uint256 amount)
        public
        returns (bool sufficient)
    {
        if (balances[_msgSender()] < amount) return false;
        balances[_msgSender()] -= amount;
        balances[receiver] += amount;
        emit Transfer(_msgSender(), receiver, amount);
        return true;
    }

    function getBalanceInEth(address addr) public view returns (uint256) {
        return ConvertLib.convert(balanceOf(addr), 2);
    }

    function balanceOf(address addr) public view returns (uint256) {
        return balances[addr];
    }

    mapping(address => bool) minted;

    /**
     * mint some coins for this caller.
     * (in a real-life application, minting is protected for admin, or by other mechanism.
     * but for our sample, any user can mint some coins - but just once..
     */
    function mint() public {
        require(!minted[_msgSender()], "already minted");
        minted[_msgSender()] = true;
        balances[_msgSender()] += 10000;
    }
}
