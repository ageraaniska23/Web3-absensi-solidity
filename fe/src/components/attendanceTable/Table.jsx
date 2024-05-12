import React, { useState } from "react";

const Table = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const data = [
        { nama: "Angie", id: "091231412312321", email: "contoh@gmail.com", absenPagi: "Senin, 24/05/2024 08:00", absenSore: "Senin, 24/05/2024 16:00", status: "Hadir" },
        { nama: "vivi", id: "091231412312321", email: "contoh@gmail.com", absenPagi: "Senin, 24/05/2024 08:00", absenSore: "Senin, 24/05/2024 16:00", status: "Hadir" },
        { nama: "Amel", id: "091231412312321", email: "contoh@gmail.com", absenPagi: "Senin, 24/05/2024 08:00", absenSore: "Senin, 24/05/2024 16:00", status: "Hadir" },
        { nama: "Khaty", id: "091231412312321", email: "contoh@gmail.com", absenPagi: "Senin, 24/05/2024 08:00", absenSore: "Senin, 24/05/2024 16:00", status: "Hadir" },
    ];

    const filteredData = data.filter(item =>
        item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.absenPagi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.absenSore.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="overflow-x-auto shadow-md max-w-full">
            <h1 className="text-4xl text-center mb-9 font-bold italic text-sky-400">Daftar Hadir Karyawan</h1>
            <div className="relative mb-2">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" value={searchTerm} onChange={handleSearchChange} />
            </div>
            <div className="overflow-x-auto rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 md:px-6 py-3">Nama</th>
                            <th scope="col" className="px-2 md:px-6 py-3">Id Karyawan</th>
                            <th scope="col" className="px-2 md:px-6 py-3">E-mail</th>
                            <th scope="col" className="px-2 md:px-6 py-3">Absen Pagi</th>
                            <th scope="col" className="px-2 md:px-6 py-3">Absen Sore</th>
                            <th scope="col" className="px-2 md:px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.nama}</td>
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap">{item.id}</td>
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap">{item.email}</td>
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap">{item.absenPagi}</td>
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap">{item.absenSore}</td>
                                <td className="px-2 md:px-6 py-4 md:whitespace-nowrap">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
