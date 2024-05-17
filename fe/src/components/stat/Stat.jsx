import React from 'react'

const Stat = () => {
    return (
        <div className="grid grid-cols-1 gap-2 mb-4 mt-6 sm:grid-cols-2">
            <div className="relative flex items-center justify-center bg-neutral-50 h-64 border-2 rounded-xl">
                <div className="absolute top-2 left-2 text-lg font-semibold text-neutral-900 ml-2 mt-3">
                    Persentase Kehadiran
                </div>
                <div className="radial-progress text-cyan-600 mt-12" style={{ "--value": 90, width: '8rem', height: '8rem', fontSize: '2rem' }} role="progressbar">
                    90%
                </div>
            </div>

            <div className="relative flex items-center justify-center bg-neutral-50 border-2 rounded-xl">
                <section className=" antialiased">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">
                                Jadwal Kerja
                            </h2>
                        </div>

                        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                        08:00
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900 ">
                                        <a href="#" className="hover:underline">Absen</a>
                                    </h3>
                                </div>
                                
                                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-start">
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                        12:00 - 13:00
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900 ">
                                        <a href="#" className="hover:underline">Istirahat</a>
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-start">
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                        15:30
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900 ">
                                        <a href="#" className="hover:underline">Pulang</a>
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-start">
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                        15:30 - 23:59
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-900 ">
                                        <a href="#" className="hover:underline">Jam Lembur</a>
                                    </h3>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Stat
