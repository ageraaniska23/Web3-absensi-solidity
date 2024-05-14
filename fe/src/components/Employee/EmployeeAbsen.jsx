import React from 'react';
import Background from '../../asset/workk.jpg'

const EmployeeAbsen = () => {
    return (
        <div className='p-4 sm:ml-64'
            style={{
                backgroundImage: ` linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 '>
                {/* <h1 className='text-center text-4xl text-gray-950 font-bold italic'>SELAMAT DATANG DAN SELAMAT BEKERJA</h1> */}
                <div className='flex items-center justify-center h-screen'>
                    <div className="max-w-xs">
                        <h1 className='text-center text-2xl text-gray-950 font-bold italic mb-3'>Silahkan Isi Absen</h1>
                        <form className="bg-white shadow-md px-16 pt-12 pb-16 mb-4 rounded-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idKaryawan">
                                    ID Karyawan
                                </label>
                                <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="idKaryawan" type="text" placeholder="ID Karyawan" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="token">
                                    Token
                                </label>
                                <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="token" type="password" placeholder="******************" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-cyan-200 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:text-gray-900" type="button">
                                    Absen
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmployeeAbsen;
