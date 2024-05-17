import Table from "../attendanceTable/Table";
import Stat from "../stat/Stat";

const Home = () => {
    return (
        <div className="p-4 sm:ml-64 bg-slate-100">
            <div className="p-1 ">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 mt-8">
                    <div className="stat items border-2 rounded-xl border-gray-300 bg-neutral-50">
                        <div className="stat-figure text-primary">
                            <svg
                                className="w-11 h-11 text-gray-800 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                />
                            </svg>
                        </div>
                        <div className="stat-title text-neutral-900">Total Karyawan</div>
                        <div className="stat-value text-primary">250</div>
                    </div>

                    <div className="stat items border-2 rounded-xl border-gray-300 bg-neutral-50">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <svg
                                    className="w-11 h-11 text-gray-800 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="stat-title text-neutral-900">Karyawan hadir</div>
                        <div className="stat-value text-secondary">240</div>
                    </div>

                    <div className="stat items border-2 rounded-xl border-gray-300 bg-neutral-50">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <svg
                                    className="w-11 h-11 text-gray-800 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="stat-title text-neutral-900">Karyawan tidak Hadir</div>
                        <div className="stat-value">10</div>
                    </div>
                </div>

                <div className="flex items-center justify-center rounded mt-">
                    <Table />
                </div>
                <Stat />
            </div>
        </div>
    );
};

export default Home;
