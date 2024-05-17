import React from 'react'

const Employee = () => {
    return (
        <div className='p-4 sm:ml-64 bg-slate-100'>
            <div className='p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 '>
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Tambah Karyawan Baru</h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="nama" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nama
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="tgl-lahir" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tanggal Lahir
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="tgl-lahir"
                                            name="tgl-lahir"
                                            type="text"
                                            autoComplete="tgl-lahir"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="noHp" className="block text-sm font-medium leading-6 text-gray-900">
                                        No HP
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="noHp"
                                            id="noHp"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            pattern="[0-12()+ -]*"
                                            // pattern="[0-9]*" // Jika ingin membatasi hanya angka
                                            // pattern="[0-9()+ -]*" // Jika ingin memperbolehkan karakter khusus seperti +, -, (), dan spasi
                                            title="Hanya masukkan angka dan karakter khusus seperti +, -, (), dan spasi"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Status
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-center"
                                        >
                                            <option>Karyawan Tetap</option>
                                            <option>Karyawan Kontrak</option>
                                            <option>Magang </option>
                                        </select>
                                    </div>
                                </div>




                                <div className="sm:col-span-2 sm:col-start-1">

                                    <label htmlFor="kewarganegaraan" className="block text-sm font-medium leading-6 text-gray-900">
                                        Kewarganegaraan
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="text"
                                            name="kewarganegaraan"
                                            autoComplete="kewarganegaraan"
                                            className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 text-center"
                                        >
                                            <option>WNI</option>
                                            <option>WNA</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="devisi" className="block text-sm font-medium leading-6 text-gray-900">
                                        Devisi
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="devisi"
                                            id="devisi"
                                            autoComplete="devisi"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Tanggal Mulai kerja
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Alamat
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Employee