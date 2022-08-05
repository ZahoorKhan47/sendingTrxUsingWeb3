// SPDX-License-Identifier: MIT
pragma solidity >=0.8.11 <0.9.0;

contract Nadra{

    struct Person{
        string name ;
        string cnic;
        string addr;
        string dob;
        uint treenum;
    }


    mapping(uint=>Person)public personMap;
    uint[] idArry;
    


    function addDetail(
        uint id,
        string memory _name,
        string memory _cnic,
        string memory _addr,
        string memory _dob,
        uint _treenum
    )public {
        
        idArry.push(id);
        

        Person storage newPerson = personMap[id];

        newPerson.name=_name;
        newPerson.cnic=_cnic;
        newPerson.addr=_addr;
        newPerson.dob=_dob;
        newPerson.treenum=_treenum;
        
        
    }

    function getDetailsByID(uint _id)public view returns(Person memory){
        return personMap[_id];
    }



    function getAllDetails()public view  returns(Person[] memory) {

        Person[] memory personArr;

        for(uint i=0 ;i<idArry.length; i++){

            personArr[i]=personMap[idArry[i]];

        }

        return personArr;



    }



}
