import { BsThreeDotsVertical } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Img1 from "../../assets/1.png";
import BathIcon from "../../assets/icons/bath.png";
import BetIcon from "../../assets/icons/bet.png";
import SqRIcon from "../../assets/icons/squ-round.png";

const PropertyCard = () => {
  return (
    <div className="p-4 rounded-md border border-gray-300 bg-white">
      <div className="relative">
        <div className="">
          <img src={Img1} className="rounded-md" alt="" />
        </div>
        <div className="absolute top-6 right-6">
          <BsThreeDotsVertical className="bg-transparent p-[6px] text-[36px] border-2 border-white text-white rounded-md" />
        </div>
        <div className="absolute bottom-6 right-6">
          <button className="text-[#000929] text-[12px] font-semibold px-3 py-2 rounded-md flex items-center justify-center bg-white opacity-70 uppercase">
            Active
          </button>
        </div>
      </div>

      <div className="">
        <p className="text-[12px] font-medium pt-4">
          <CiLocationOn className="inline" /> 2699 Green Valley, Highland Lak...
        </p>
        <div className="flex justify-between pb-3">
          <h4 className="text-[20px] font-bold">Palm Harbor</h4>
          <div>
            <h4 className="text-[20px] font-extrabold">
              $2,095
              <span className="text-[12px] font-medium text-[#8B8C93]">
                /month
              </span>
            </h4>
          </div>
        </div>

        <div className="text-[14px] font-medium text-[#8B8C93] flex justify-between py-[12px] border-t border-gray-300">
          <div className="flex justify-center items-center gap-2">
            <img src={BetIcon} alt="" />
            <p>3 Beds</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={BathIcon} alt="" />
            <p>2 Bathrooms</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={SqRIcon} alt="" />
            <p>5x7 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
