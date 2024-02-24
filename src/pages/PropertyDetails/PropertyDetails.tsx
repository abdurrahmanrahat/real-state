import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import plan from "../../assets/details/Plan.png";
import cove from "../../assets/details/Rectangle 5583 (1).png";
import spring from "../../assets/details/Rectangle 5583 (2).png";
import plam from "../../assets/details/Rectangle 5583 (3).png";
import st from "../../assets/details/Rectangle 5583 (4).png";
import tarpon from "../../assets/details/Rectangle 5583 (5).png";
import ave from "../../assets/details/Rectangle 5583.png";
import rightBanner from "../../assets/details/bannerSide.png";
import arrowSing from "../../assets/details/sort.png";

type TTableData = {
  _id: string;
  image: string;
  title: string;
  price: string;
  number: string;
  status: "paid" | "unpaid";
};

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [tableData, setTableData] = useState<TTableData[]>([]);

  useEffect(() => {
    fetch("/totalApplications.json")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className="bg-[#f7f7fd] py-10">
      <div className="max-w-[1240px] mx-auto">
        {/* title */}
        <div className="md:grid md:grid-cols-12 gap-5 px-4 md:px-0">
          <div className="md:col-span-5 flex justify-between">
            <h2 className="text-xl font-bold text-[#000929]">
              Properties{" "}
              <span className="px-2 py-1 rounded-md bg-[#000929] text-white font-semibold text-lg">
                14
              </span>
            </h2>
            <div>
              <img src={arrowSing} alt="" />
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="grid md:grid-cols-12 mt-14 gap-5">
          {/* left-side content */}
          <div className="md:col-span-5 mx-2 lg:mx-0">
            {/* search */}
            <div className="w-full py-3 border rounded flex items-center gap-5 ml-3 lg:ml-0">
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
            <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={ave} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
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
            </div>

            {/* card 2 */}
            <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={cove} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
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
            </div>

            {/* card 3 */}
            <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={spring} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
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
            </div>

            {/* card 4 */}
            <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={plam} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
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
            </div>

            {/* card 5 */}
            <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={st} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
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
            </div>

            {/* card 6 */}
            <div className="w-full py-5 px-5 rounded-md border hover:shadow-lg duration-500 my-5 cursor-pointer bg-white">
              <div className="md:flex gap-4 md:items-center">
                <div>
                  <img src={tarpon} className="w-full" alt="" />
                </div>
                <div className="flex pt-4 md:pt-0">
                  <div>
                    <h4 className="text-[#000929] font-semibold text-xl">
                      Tarpon Bay
                    </h4>
                    <p className="text-[#7F8287] mt-2">
                      103 Lake Shores, Mich...
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
            </div>
          </div>

          {/* right side content */}
          <div className="md:col-span-7">
            {/* right-side-img */}
            <div className="px-2 md:px-0">
              <img src={rightBanner} className="w-full" alt="" />
            </div>

            {/* details */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 px-5 border rounded-md items-center w-full py-2 text-center lg:text-start bg-white">
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
            <div className="border px-3 mt-10 py-2">
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

              {/* custom table */}
              <div className="overflow-x-auto mt-5 grid relative">
                <table className="">
                  <thead className="text-[12px] md:text-[16px] text-[#7F8287] font-medium ">
                    <tr className="">
                      <th className="text-start">Name</th>
                      <th className="text-start">Amount</th>
                      <th className="text-start">Phone Number </th>
                      <th className="text-start">Status</th>
                      <th className="text-start">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#000929] text-[12px] md:text-[16px] font-medium ">
                    {tableData?.map((item) => (
                      <>
                        <tr key={item._id} className="">
                          <td className="flex gap-2 items-center ">
                            <img
                              src="https://i.ibb.co/WBvbYRM/Group.png"
                              alt=""
                            />
                            <p>{item.title}</p>
                          </td>

                          <td className="">${item.price}</td>
                          <td className="">{item.number}</td>
                          <td>
                            {item.status === "paid" ? (
                              <button className="text-[#27AE60] bg-[#E6F9EE]  rounded-full text-xs font-semibold text-center ">
                                Paid
                              </button>
                            ) : (
                              <button className="text-[#FF6161]  bg-[#F9E9E9] text-center rounded-full text-sm font-semibold">
                                Unpaid
                              </button>
                            )}
                          </td>
                          <td>
                            <span onClick={() => setToggle(!toggle)}>
                              <BsThreeDots />
                            </span>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>

                {/* toggle */}
                {toggle && (
                  <div className="bg-white absolute top-[50%] right-14 px-3 py-2 rounded-sm shadow-lg">
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-2 w-2 bg-[#27AE60] rounded-full"></div>
                      <p className="text-[12px] font-medium text-[#000929]">
                        Paid
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div className="h-2 w-2 bg-[#FF6161] rounded-full"></div>
                      <p className="text-[12px] font-medium text-[#000929]">
                        Unpaid
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
