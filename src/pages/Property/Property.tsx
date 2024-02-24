import { BsPlus } from "react-icons/bs";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import DabbleDasIcon from "../../assets/icons/dabble-das.png";
import DashIcon from "../../assets/icons/dash.png";
import UpArr from "../../assets/icons/upArr.png";
import PropertyCard from "./PropertyCard";

const Property = () => {
  return (
    <div className="bg-[#f7f7fd] py-10">
      {/* filtering and add post */}
      <div className="md:flex justify-between">
        <div className="p-3 bg-white rounded-[4px] text-center">
          <select className="p-2 focus:outline-none text-[#000929] font-bold">
            <option disabled selected>
              Selecting All
            </option>
            <option>one</option>
            <option>Owo</option>
            <option>Three</option>
          </select>
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className="flex justify-center items-center text-[20px] gap-2">
            <img
              src={UpArr}
              className="bg-white p-[8px] text-[36px] border border-gray-300 rounded-[4px]"
              alt=""
            />
            <img
              src={DashIcon}
              className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
              alt=""
            />
            <img
              src={DabbleDasIcon}
              className="bg-white p-[6px] text-[36px] border border-gray-300 rounded-[4px]"
              alt=""
            />
          </div>
          <div>
            <button className="bg-[#000929] text-white px-3 py-2 rounded-md flex items-center justify-center">
              <BsPlus className="text-[22px] inline" /> <span>Add New</span>
            </button>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {/* one */}
        <PropertyCard />

        {/* two */}
        <PropertyCard />

        {/* three */}
        <PropertyCard />

        {/* four */}
        <PropertyCard />

        {/* five */}
        <PropertyCard />

        {/* six */}
        <PropertyCard />
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center">
        <div className=" md:space-x-4">
          <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
            1
          </button>
          <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
            2
          </button>
          <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
            3
          </button>
          <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
            ...
          </button>
          <button className="join-item btn bg-white p-4 hover:bg-black text-[#8B8C93] hover:text-white text-[16px] rounded-full">
            10
          </button>
          <button className="join-item btn bg-transparent hover:bg-transparent border-none p-2">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
