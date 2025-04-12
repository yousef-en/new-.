

export const Header = ()=>{

    return (
      <div className="bg-[#99e899] ">
        <div className=" py-5 px-5 flex items-center justify-between container mx-auto">
          <div className="w-[20%] cursor-pointer">
            <h1 className=" font-bold text-lg">Example</h1>
          </div>
          <div>
            <ul className="flex items-end gap-10">
              <li className="font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                Home
              </li>
              <li className="font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                Features
              </li>
              <li className="font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                Community
              </li>
              <li className="font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                Blog
              </li>
              <li className="font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                Pricing
              </li>
            </ul>
          </div>
          <div className="w-[18%] flex gap-2">
            <button className=" px-8 py-3 text-white rounded-md bg-[#45d449] hover:bg-green-600 text-sm font-medium">
              Register Now --&gt;
            </button>
          </div>
        </div>
      </div>
    );
}