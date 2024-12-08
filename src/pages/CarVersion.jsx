import m3 from "../assets/for first.png";
import m8 from "../assets/m82.png";
import electric1 from "../assets/electric1.png";
import m4 from "../assets/m4.png";
import electricicon from "../assets/electricicon.png";
function CarVersion() {
  return (
    <>
      <div className="w-full md:h-screen  bg-[#ffffff] ">
        <div className="flex justify-center py-10 ">
          {" "}
          <h1 className="text-3xl">Find Your BMW</h1>
        </div>

        <div className="flex flex-row justify-center py-10 px-5 pl-7">
          <div className=" w-96 flex flex-col justify-center  items-center  h-[45vh]">
            <img className="w-[90%] hover:scale-110" src={m3} alt="" />

            <div className="flex flex-col  ">
              <span className="sticky">
                {" "}
                <img
                  className="w-12 absolute  bottom-[33%] "
                  src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                  alt=""
                />
              </span>{" "}
              <h1 className="text-l pr-32 font-sans">THE BMW M340i</h1>{" "}
              <p>Petrol</p>
              <h1 className="font-bold text-lg">Starting from ₹ 74,90,000</h1>
            </div>
          </div>
          <div className=" w-96 flex flex-col justify-center  items-center  h-[45vh]">
            <img className="w-[90%] hover:scale-110 " src={m8} alt="" />

            <div className="flex flex-col  ">
              {" "}
              <span className="sticky">
                {" "}
                <img
                  className="w-10 h-4 absolute  bottom-[33%] "
                  src={electricicon}
                  alt=""
                />
              </span>{" "}
              <h1 className="text-l pr-32 font-sans">
                THE BMW M8 COMPETITION COUPÉ
              </h1>{" "}
              <p>Petrol</p>
              <h1 className="font-bold text-lg">Starting from ₹ 2,44,00,000</h1>
            </div>
          </div>
          <div className=" w-96 flex flex-col justify-center  items-center sticky">
            <img className="w-[90%] hover:scale-110" src={electric1} alt="" />

            <div className="flex flex-col  ">
              <span className="sticky">
                {" "}
                <img
                  className="w-12 absolute  bottom-[33%] "
                  src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                  alt=""
                />
              </span>{" "}
              <h1 className="text-l pr-32 font-sans">
                THE FULLY ELECTRIC BMW i4
              </h1>{" "}
              <p>Full-Electric</p>
              <h1 className="font-bold text-lg">Starting from ₹ 72,50,000</h1>
            </div>
          </div>
          <div className=" w-96 flex flex-col justify-center  items-center sticky">
            <img className="w-[90%] hover:scale-110" src={m4} alt="" />

            <div className="flex flex-col  ">
              <span className="sticky">
                {" "}
                <img
                  className="w-12 absolute  bottom-[33%] "
                  src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                  alt=""
                />
              </span>{" "}
              <h1 className="text-l pr-32 font-sans">THE BMW M4 CS</h1>{" "}
              <p>Petrol</p>
              <h1 className="font-bold text-lg">Starting from ₹ 1,89,00,000</h1>
            </div>
          </div>
        </div>
        {/* next row */}
        <div>
          {" "}
          <div className="flex flex-row justify-center py-10 px-5 pl-7">
            <div className=" w-96 flex flex-col justify-center  items-center  h-[45vh]">
              <img className="w-[90%] hover:scale-110" src={m3} alt="" />

              <div className="flex flex-col  ">
                <span className="sticky">
                  {" "}
                  <img
                    className="w-12 absolute  bottom-[33%] "
                    src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                    alt=""
                  />
                </span>{" "}
                <h1 className="text-l pr-32 font-sans">THE BMW M340i</h1>{" "}
                <p>Petrol</p>
                <h1 className="font-bold text-lg">Starting from ₹ 74,90,000</h1>
              </div>
            </div>
            <div className=" w-96 flex flex-col justify-center  items-center  h-[45vh]">
              <img className="w-[90%] hover:scale-110 " src={m8} alt="" />

              <div className="flex flex-col  ">
                {" "}
                <span className="sticky">
                  {" "}
                  <img
                    className="w-10 h-4 absolute  bottom-[33%] "
                    src={electricicon}
                    alt=""
                  />
                </span>{" "}
                <h1 className="text-l pr-32 font-sans">
                  THE BMW M8 COMPETITION COUPÉ
                </h1>{" "}
                <p>Petrol</p>
                <h1 className="font-bold text-lg">
                  Starting from ₹ 2,44,00,000
                </h1>
              </div>
            </div>
            <div className=" w-96 flex flex-col justify-center  items-center sticky">
              <img className="w-[90%] hover:scale-110" src={electric1} alt="" />

              <div className="flex flex-col  ">
                <span className="sticky">
                  {" "}
                  <img
                    className="w-12 absolute  bottom-[33%] "
                    src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                    alt=""
                  />
                </span>{" "}
                <h1 className="text-l pr-32 font-sans">
                  THE FULLY ELECTRIC BMW i4
                </h1>{" "}
                <p>Full-Electric</p>
                <h1 className="font-bold text-lg">Starting from ₹ 72,50,000</h1>
              </div>
            </div>
            <div className=" w-96 flex flex-col justify-center  items-center sticky">
              <img className="w-[90%] hover:scale-110" src={m4} alt="" />

              <div className="flex flex-col  ">
                <span className="sticky">
                  {" "}
                  <img
                    className="w-12 absolute  bottom-[33%] "
                    src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                    alt=""
                  />
                </span>{" "}
                <h1 className="text-l pr-32 font-sans">THE BMW M4 CS</h1>{" "}
                <p>Petrol</p>
                <h1 className="font-bold text-lg">
                  Starting from ₹ 1,89,00,000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarVersion;
