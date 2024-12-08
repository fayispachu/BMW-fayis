import bmhome from "../assets/bmhome.webp";
// import bmname from "../assets/bmlogomen.jpg";
import Footer from "../component/Footer";
function HomePage() {
  return (
    <>
      <section>
        <div className="bg-[#403d39] w-full h-screen sec-1">
          <div className=" hidden  text-4xl font-extrabold absolute left-[46%] top-28 text-white">
            <h1 className="">Show</h1>
          </div>
          {/* home message */}

          <img className="w-[100%] h-[100vh]" src={bmhome} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
