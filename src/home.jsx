import Navbar from "./components/Navbar";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
// if user is logged in, redirect to /temp
const Home = () => {
  const { isSignedIn, user } = useUser();
  if (isSignedIn) {
    console.log(user);
  }
  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-semibold mb-4">Design products</h1>
            <h2 className="text-5xl font-semibold mb-4 ml-8">
              Deliver experience
            </h2>
            <div>
              <div className="border-l-4 border-slate-950 ml-4 ">
                <p className="ml-4 mb-6 text-gray-600 font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus imperdiet sed id elementum. Quam vel aliquam sit
                  vulputate. Faucibus nec gravida ipsum pulvinar vel. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                  imperdiet sed id elementum.
                </p>
                <button className="bg-slate-950 text-white px-6 py-2 rounded-full ml-4">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-10 flex justify-center">
            <img
              src="src\heroimg.png"
              alt="Polaroid Camera"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={num}
              className={`bg-gray-100 p-6 rounded-lg ${
                index === 1 || index === 3 ? "bg-slate-400" : ""
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Title {num}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
