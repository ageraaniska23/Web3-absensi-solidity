import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("Absen", function () {
  // Fixture untuk menyediakan setup yang sama dalam setiap pengujian
  async function deployAbsenContractFixture() {
    // Deploy contract Absen
    const Absen = await hre.viem.deployContract("Absen", []);

    return { Absen };
  }

  describe("Deployment", function () {
    it("Should deploy Absen contract", async function () {
      const { Absen } = await loadFixture(deployAbsenContractFixture);

      expect(Absen.address).to.not.be.null;
    });

    it("Admin should be the deployer", async function () {
      const { Absen } = await loadFixture(deployAbsenContractFixture);

      const admin = await Absen.read.Admin();
      const [owner] = await hre.viem.getWalletClients();

      expect(admin).to.equal(getAddress(owner.account.address));
    });

    // Tambah pengujian lainnya seperti memastikan nilai default jamMasuk adalah 08:00:00 AM
  });

  describe("Absen Process", function () {
    it("Should allow employee to absen datang", async function () {
      const { Absen } = await loadFixture(deployAbsenContractFixture);
  
      // Tambahkan kode untuk melakukan absen datang oleh karyawan dan pastikan transaksi berhasil
      // Assertion dapat dilakukan untuk memastikan data absen sesuai yang diharapkan
    });
  
    it("Should allow employee to absen pulang", async function () {
      const { Absen } = await loadFixture(deployAbsenContractFixture);
  
      // Tambahkan kode untuk melakukan absen pulang oleh karyawan dan pastikan transaksi berhasil
      // Assertion dapat dilakukan untuk memastikan data absen sesuai yang diharapkan
    });
  
    it("Should correctly determine whether an employee is on time", async function () {
      const { Absen } = await loadFixture(deployAbsenContractFixture);
  
      // Tambahkan kode untuk menguji logika penentuan karyawan tepat waktu atau tidak
      // Ini dapat melibatkan pengujian untuk berbagai jam absen dan jam masuk
      // Pastikan untuk mengonfirmasi bahwa logika penentuan waktu berfungsi dengan benar
    });
  
    // Tambahkan pengujian lainnya yang diperlukan untuk fitur absen yang spesifik
  });
});
