const menu = [
  {
    id: 1,
    label: "Phim lẻ",
  },
  {
    id: 2,
    label: "Phim chiếu rạp",
  },
  {
    id: 3,
    label: "Phim Netflix",
  },
];

const HeaderTop = () => {
  return (
    <nav class="hidden lg:flex items-center justify-between flex-wrap bg-[#0C111B] py-4 lg:px-20 shadow">
      <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 border-solid border-b-2 border-gray-300">
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span class="font-semibold text-3xl tracking-tight uppercase text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 md:text-center">
            SAGO
          </span>
        </div>
      </div>

      <div class="w-auto flex-grow flex items-center justify-between">
        <div class="text-md text-white">
            {menu.map((item,index) => <a key={index} class="inline-block mr-2.5 px-2.5 py-2 rounded hover:text-red-500 uppercase">{item.label}</a>)}
          <div className="inline-block group">
            <div className="flex items-center">
                <a class="pl-4 pr-2 py-2 rounded group-hover:text-red-500 uppercase">
                    Thể loại
                </a>
                <img src="/svg/vector_down.svg"/>
            </div>

            <ul className="absolute hidden bg-[#0C111B] p-5 group-hover:grid grid-cols-2 gap-5 z-20">
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                <li><a className="inline-block rounded hover:text-red-500 uppercase">Hành động</a></li>
                
            </ul>
          </div>

        </div>
        <div class="relative self-end text-white">
          <input
            class="border-b w-48 border-b-white h-10 bg-transparent text-sm text-white placeholder:text-white focus:outline-none"
            name="search"
            placeholder="Tìm kiếm...."
          />
          <img src="/svg/search.svg" className="absolute right-0 top-0 mt-4 mr-2"/>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTop;
