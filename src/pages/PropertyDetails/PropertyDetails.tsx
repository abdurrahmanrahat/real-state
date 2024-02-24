import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import plan from "../../assets/details/Plan.png";
import rightBanner from "../../assets/details/bannerSide.png";
import arrowSing from "../../assets/details/sort.png";
import { TProperties } from "../Property/Property";

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
  const [properties, setProperties] = useState<TProperties[]>([]);

  useEffect(() => {
    fetch("/totalApplications.json")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  }, []);

  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
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
            {properties?.map((item) => (
              <div className="w-full py-5 px-2 rounded-md border hover:shadow-lg duration-500 mt-5 cursor-pointer bg-white">
                <div className="md:flex gap-4 md:items-center">
                  <div>
                    <img
                      src={item.image}
                      className="md:w-[105px] rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between w-full pt-4 md:pt-0">
                    <div>
                      <h4 className="text-[#000929] font-semibold text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[#7F8287] mt-2">
                        {item.address.length > 31
                          ? item.address?.slice(0, 31)
                          : item.address}{" "}
                        {item.address.length > 31 ? "..." : ""}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        {item.status === "active" && (
                          <p className="text-[#6565F0] border bg-[#E9E9F9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "occupied" && (
                          <p className="text-[#27AE60] border bg-[#E6F9EE] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "maintenance" && (
                          <p className="text-[#FF6161] border bg-[#F9E9E9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "request" && (
                          <p className="text-[#FFB154] border bg-[#FFF1E0] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                        {item.status === "vacant" && (
                          <p className="text-[#6565F0] border bg-[#E9E9F9] px-3 py-1 rounded-full text-sm font-semibold uppercase">
                            {item.status}
                          </p>
                        )}
                      </div>
                      <p className="text-[#7F8287] mt-2">{item.sqm} sq m</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                            <img src={item.image} alt="" />
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
