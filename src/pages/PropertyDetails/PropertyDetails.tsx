import { BsThreeDots } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import groupImg from "../../assets/details/Group.png";
import plan from "../../assets/details/Plan.png";
import cove from "../../assets/details/Rectangle 5583 (1).png";
import spring from "../../assets/details/Rectangle 5583 (2).png";
import plam from "../../assets/details/Rectangle 5583 (3).png";
import st from "../../assets/details/Rectangle 5583 (4).png";
import tarpon from "../../assets/details/Rectangle 5583 (5).png";
import ave from "../../assets/details/Rectangle 5583.png";
import rightBanner from "../../assets/details/bannerSide.png";
import arrowSing from "../../assets/details/sort.png";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* title */}
      <div className="flex gap-28 lg:gap-60 mt-20 justify-center lg:justify-start">
        <h2
          className="text-xl font-bold 
        text-[#000929] "
        >
          Properties{" "}
          <span className="px-2 py-1 rounded-md bg-[#000929] text-white font-semibold text-lg">
            14
          </span>
        </h2>
        <div>
          <img src={arrowSing} alt="" />
        </div>
      </div>

      {/* main content */}
      <div className="grid lg:grid-cols-12 mt-14 gap-5">
        {/* left-side content */}
        <div className="col-span-5 mx-2 lg:mx-0">
          {/* search */}
          <div className="w-full py-3 border-2 rounded flex items-center gap-5 ml-3 lg:ml-0">
            <LuSearch className="text-2xl ml-5" />
            <input
              className="focus:outline-none w-full text-lg"
              type="text"
              name=""
              id=""
              placeholder="Search..."
            />
          </div>

          {/* small house content */}
          {/* card 1 */}
          <div className="w-full py-5 px-2 rounded-md border-2 hover:shadow-lg duration-500 mt-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={ave} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  Faulkner Ave
                </h4>
                <p className="text-[#7F8287] mt-2">
                  909 Woodland St, Michig...
                </p>
              </div>
              <div>
                <h4 className="text-[#27AE60] border bg-[#E6F9EE] px-3 py-1 rounded-full text-sm font-semibold">
                  OCCUPIED
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full py-5 px-2 rounded-md border-2 hover:shadow-lg duration-500 mt-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={cove} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  Cove Red
                </h4>
                <p className="text-[#7F8287] mt-2">
                  243 Curlew Road, Palm H...
                </p>
              </div>
              <div>
                <h4 className="text-[#FFB154] border bg-[#FFF1E0] px-3 py-1 rounded-full text-sm font-semibold">
                  REQUEST
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full py-5 px-2 rounded-md border-2 hover:shadow-lg duration-500 mt-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={spring} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  Beverly Springs
                </h4>
                <p className="text-[#7F8287] mt-2">
                  2821 Lake Sevilla, Palm Ha...
                </p>
              </div>
              <div>
                <h4 className="text-[#6565F0] border bg-[#E9E9F9] px-3 py-1 rounded-full text-sm font-semibold">
                  VACANT
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="w-full py-5 px-2 rounded-md border-2 hover:shadow-lg duration-500 mt-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={plam} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  Palm Harbor
                </h4>
                <p className="text-[#7F8287] mt-2">
                  2699 Green Valley, Highla...
                </p>
              </div>
              <div>
                <h4 className="text-[#FFB154] border bg-[#FFF1E0] px-3 py-1 rounded-full text-sm font-semibold">
                  REQUEST
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="w-full py-5 px-2 rounded-md border-2 hover:shadow-lg duration-500 mt-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={st} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  St. Crystal
                </h4>
                <p className="text-[#7F8287] mt-2">
                  210 US Highway, Highlan...
                </p>
              </div>
              <div>
                <h4 className="text-[#FF6161] border bg-[#F9E9E9] px-3 py-1 rounded-full text-sm font-semibold">
                  MAINTENANCE
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="w-full py-5 px-5 rounded-md border-2 hover:shadow-lg duration-500 my-5 cursor-pointer">
            <div className="flex gap-4 lg:items-center">
              <img src={tarpon} alt="" />
              <div>
                <h4 className="text-[#000929] font-semibold text-xl">
                  Tarpon Bay
                </h4>
                <p className="text-[#7F8287] mt-2">103 Lake Shores, Mich...</p>
              </div>
              <div>
                <h4 className="text-[#FF6161] border bg-[#F9E9E9] px-3 py-1 rounded-full text-sm font-semibold">
                  MAINTENANCE
                </h4>
                <p className="text-[#7F8287] mt-2">128 sq m</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side content */}

        <div className="col-span-7">
          {/* right-side-img */}
          <img src={rightBanner} alt="" />

          {/* details */}
          <div className="grid lg:grid-cols-6 gap-5 px-5 border-2 rounded-md items-center w-full py-2 text-center lg:text-start">
            <div>
              <h2 className="text-[#8B8C93] text-xl">Properties</h2>
              <p className="mt-2">46</p>
            </div>
            <div>
              <h2 className="text-[#8B8C93] text-xl">Rooms</h2>
              <p className="mt-2">4</p>
            </div>
            <div>
              <h2 className="text-[#8B8C93] text-xl">Living Space</h2>
              <p className="mt-2">6x7.5 m²</p>
            </div>
            <div>
              <h2 className="text-[#8B8C93] text-xl">Year Built</h2>
              <p className="mt-2">2018</p>
            </div>
            <div>
              <h2 className="text-[#8B8C93] text-xl">Tenants</h2>
              <p className="mt-2">12</p>
            </div>
            <div>
              <h2 className="text-[#8B8C93] text-xl">Request</h2>
              <p className="mt-2">12</p>
            </div>
          </div>

          {/* total application */}

          <div className="border-2 px-3 mt-10 py-2">
            <div className=" text-center lg:text-start lg:flex justify-between items-center">
              <h2
                className="text-xl font-bold 
        text-[#000929] "
              >
                Total Applicants{" "}
                <span className="px-2 py-1 rounded-md bg-[#000929] text-white font-semibold text-lg my-8 lg:my-0">
                  394
                </span>
              </h2>
              <img className="mx-auto lg:mx-0" src={plan} alt="" />
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-5">
              <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                  <tr>
                    <th></th>
                    <td>Name</td>
                    <td>Amount</td>
                    <td>Phone Number </td>
                    <td>Status</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={groupImg} alt="" />
                    </td>
                    <td>Wade Warren</td>
                    <td>$396</td>
                    <td>(217) 555-0113</td>
                    <td className="text-[#27AE60] bg-[#E6F9EE]  rounded-full text-xs font-semibold text-center">
                      Paid
                    </td>
                    <td>
                      <BsThreeDots />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={groupImg} alt="" />
                    </td>
                    <td>Marvin McKinney</td>
                    <td>$778</td>
                    <td>(704) 555-0127</td>
                    <td className="text-[#27AE60] bg-[#E6F9EE]  rounded-full text-xs font-semibold text-center">
                      Paid
                    </td>
                    <td>
                      <BsThreeDots />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={groupImg} alt="" />
                    </td>
                    <td>Cody Fisher</td>
                    <td>$396</td>
                    <td>(225) 555-0118</td>
                    <td className="text-[#FF6161]  bg-[#F9E9E9] text-center rounded-full text-sm font-semibold">
                      Unpaid
                    </td>
                    <td>
                      <BsThreeDots />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={groupImg} alt="" />
                    </td>
                    <td>Wade Warren</td>
                    <td>$396</td>
                    <td>(217) 555-0113</td>
                    <td className="text-[#FF6161]  bg-[#F9E9E9] text-center rounded-full text-sm font-semibold">
                      Unpaid
                    </td>
                    <td>
                      <BsThreeDots />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
