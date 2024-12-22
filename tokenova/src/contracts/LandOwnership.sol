// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandOwnership {
    address public admin;

    struct Land {
        uint256 id;
        string location;
        uint256 price;
        address currentOwner;
    }

    uint256 public landCount;
    mapping(uint256 => Land) public lands;

    event LandRegistered(uint256 id, string location, uint256 price, address indexed owner);
    event OwnershipTransferred(uint256 id, address indexed oldOwner, address indexed newOwner);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyOwner(uint256 landId) {
        require(lands[landId].currentOwner == msg.sender, "Only the current owner can transfer ownership");
        _;
    }

    function registerLand(string memory _location, uint256 _price) public onlyAdmin {
        landCount++;
        lands[landCount] = Land(landCount, _location, _price, msg.sender);
        emit LandRegistered(landCount, _location, _price, msg.sender);
    }

    function transferOwnership(uint256 _landId, address _newOwner) public onlyOwner(_landId) {
        address oldOwner = lands[_landId].currentOwner;
        lands[_landId].currentOwner = _newOwner;
        emit OwnershipTransferred(_landId, oldOwner, _newOwner);
    }

    function getLandDetails(uint256 _landId) public view returns (string memory, uint256, address) {
        Land memory land = lands[_landId];
        return (land.location, land.price, land.currentOwner);
    }
}
