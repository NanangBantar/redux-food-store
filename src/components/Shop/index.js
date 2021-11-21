const Shop = () => {
    return (
        <div className="rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="px-6 py-3 bg-green-400">
                <div className="font-bold text-xl text-white"><i className="fa fa-shopping-cart"></i> Start shopping</div>
            </div>
            <div className="flex px-2">
                <div className="w-2/5">
                    <div className="rounded overflow-hidden shadow-lg m-4 bg-white px-4 py-3">
                        <div className="flex mb-2 justify-between py-2 border-b-2 border-blue-500">
                            <h1 className="text-2xl text-blue-500"><i className="fas fa-list-ul"></i> List Items</h1>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded float-right">
                                <i className="fa fa-trash"></i> Clear
                            </button>
                        </div>
                        <div className="rounded overflow-hidden border-2 border-green-400">
                            <div className="px-6 py-4">
                                <ul className="list-disc px-4">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded overflow-hidden border-2 border-green-400 mt-2 px-6 py-2">
                            <div className="flex justify-between items-center my-2">
                                <h1 className="text-1xl font-bold">
                                    Total Items
                                </h1>
                                <div>
                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-1xl font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-2">
                                <h1 className="text-1xl font-bold">
                                    Payment
                                </h1>
                                <div>
                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-1xl font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <button className="bg-green-500 hover:bg-blue-700 text-white py-1 rounded w-full">
                                <i className="fas fa-share-square"></i> Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-3/5">
                    <div className="rounded overflow-hidden shadow-lg m-4 bg-white px-4 py-3">
                        <div className="flex justify-between border-b-2 border-blue-500">
                            <h1 className="text-2xl text-blue-500 py-2 ">
                                <i className="fas fa-utensils"></i> Food List
                            </h1>
                            <div className="font-bold text-xl mb-2 text-blue-500">
                                <div className="flex justify-center items-center border rounded shadow px-2">
                                    <div>
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <div>
                                        <input className="appearance-none w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search Food" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Shop;