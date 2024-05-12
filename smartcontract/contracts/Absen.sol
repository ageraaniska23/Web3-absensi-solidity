// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Absen {
    address public Admin;

    struct absenEntry {
        string name;
        string idKaryawan;
        uint timestampDatang;
        uint timestampPulang;
        bool ontime;
        address walletAddress;
    }

    mapping(string => bool) public isKaryawanRegistered; // Menyimpan status karyawan sudah terdaftar atau belum
    mapping(address => absenEntry) public absenData;
    address[] public registeredEmployees; // To store registered employees
    absenEntry[] public allData; // To store all attendance data

    uint public jamMasuk = 3600; // 08:00:00 AM

    event startAbsen(string name, string idKaryawan, uint indexed timestampDatang, uint indexed timestampPulang, bool ontime);

    modifier onlyAdmin() {
        require(msg.sender == Admin, "Hanya admin yang dapat mengakses");
        _;
    }

    constructor() {
        Admin = msg.sender;
    }

    function addKaryawan(string memory _name, string memory _idKaryawan, address _walletAddress) public onlyAdmin {
        require(!isKaryawanRegistered[_idKaryawan], "User already registered");
        
        absenData[_walletAddress] = absenEntry({
            name: _name,
            idKaryawan: _idKaryawan,
            timestampDatang: 0,
            timestampPulang: 0,
            ontime: false,
            walletAddress: _walletAddress
        });
        
        isKaryawanRegistered[_idKaryawan] = true;
        registeredEmployees.push(_walletAddress); // Add the employee to the list of registered employees
        
        // Add the employee's attendance data to allData array
        allData.push(absenData[_walletAddress]);
    }

    function absen() public {
        require(isKaryawanRegistered[absenData[msg.sender].idKaryawan], "User is not registered");
        require(absenData[msg.sender].timestampDatang == 0, "User has already absen");

        // Gunakan waktu sekarang sebagai waktu absen
        uint timestampNow = block.timestamp;

        absenData[msg.sender].timestampDatang = timestampNow;

        // Lakukan pengecekan apakah karyawan absen tepat waktu atau tidak
        uint jamSekarang = timestampNow % 86400; // Menggunakan modulo untuk mendapatkan waktu dalam satu hari (detik)
        absenData[msg.sender].ontime = jamSekarang <= jamMasuk;

        // Jika datang lebih dari jam masuk, anggap telat
        if (jamSekarang > jamMasuk) {
            absenData[msg.sender].ontime = false;
        }
        
        emit startAbsen(absenData[msg.sender].name, absenData[msg.sender].idKaryawan, timestampNow, timestampNow, absenData[msg.sender].ontime);
        
        // Update the allData array with the latest attendance data
        allData[registeredEmployees.length - 1] = absenData[msg.sender];
    }

    function absenPulang() public {
        require(isKaryawanRegistered[absenData[msg.sender].idKaryawan], "User is not registered");
        require(absenData[msg.sender].timestampDatang != 0, "User hasn't absen datang yet");
        require(absenData[msg.sender].timestampPulang == 0, "User has already absen pulang");
        // Gunakan waktu sekarang sebagai waktu absen pulang
        uint timestampNow = block.timestamp;
        absenData[msg.sender].timestampPulang = timestampNow;
        emit startAbsen(absenData[msg.sender].name, absenData[msg.sender].idKaryawan, absenData[msg.sender].timestampDatang, timestampNow, absenData[msg.sender].ontime);
        // Update the allData array with the latest attendance data
        allData[registeredEmployees.length - 1] = absenData[msg.sender];
    }

    // Function to get all attendance data
    function getAllData() public view returns (absenEntry[] memory) {
        return allData;
    }
}
