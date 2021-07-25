pragma solidity ^0.6.6;

contract MyFirstContract {

    uint number;

    function addNumber(uint _num) public {
        number = number + _num;
    }

    function multiplyNumber(uint _num) public {
        number = number * _num;
    }

    function divideNumber(uint _num) public {
        number = number / _num;
    }

    function setNumber(uint _num) public {
        number = _num;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
}