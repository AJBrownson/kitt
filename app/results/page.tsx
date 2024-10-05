import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { InputForm } from "@/components/Input";
import Lufthansa from "@/public/lufthansa.png";
import Emirates from "@/public/emirates.png";
import Image from "next/image";

export default function ResultsPage() {
  const availableResults = 356;
  const totalResults = 767;

  const flights = [
    {
      one: [
        {
          id: 1,
          airlineLogo: "/emirates.png",
          airlineName: "Emirates",
          flightCode: "AT 4334",
          departureTime: "9:45 AM",
          arrivalTime: "11:45 AM",
          extension: " ",
          duration: "2h 10min",
          fromTo: "CDG - DXB",
          stops: "Non stop",
          stopoverInfo: " ",
        },
        {
          id: 2,
          airlineLogo: "/lufthansa.png",
          airlineName: "Lufthansa",
          flightCode: "AT 4334",
          departureTime: "11:45 PM",
          arrivalTime: "6:45 AM",
          extension: "+1 day",
          duration: "4h 10min",
          fromTo: "DXB - CDG",
          stops: "2 stops",
          stopoverInfo: "6h 32m in Lisbon, Portugal",
        },
        {
          id: 3,
          price: "2,456.90",
        },
      ],
      two: [
        {
          id: 1,
          airlineLogo: "/emirates.png",
          airlineName: "Emirates",
          flightCode: "AT 4334",
          departureTime: "9:45 AM",
          arrivalTime: "11:45 AM",
          extension: " ",
          duration: "2h 10min",
          fromTo: "CDG - DXB",
          stops: "1 stop",
          stopoverInfo: " ",
        },
        {
          id: 2,
          airlineLogo: "/emirates.png",
          airlineName: "Lufthansa",
          flightCode: "AT 4334",
          departureTime: "11:45 PM",
          arrivalTime: "6:45 AM",
          extension: "+1 day",
          duration: "4h 10min",
          fromTo: "DXB - CDG",
          stops: "1 stops",
          stopoverInfo: "Lisbon",
        },
        {
          id: 3,
          price: "1,456.90",
        },
      ],
      three: [
        {
          id: 1,
          airlineLogo: "/emirates.png",
          airlineName: "Emirates",
          flightCode: "AT 4334",
          departureTime: "9:45 AM",
          arrivalTime: "11:45 AM",
          extension: " ",
          duration: "2h 10min",
          fromTo: "CDG - DXB",
          stops: "Non stop",
          stopoverInfo: " ",
        },
        {
          id: 2,
          airlineLogo: "/lufthansa.png",
          airlineName: "Lufthansa",
          flightCode: "AT 4334",
          departureTime: "11:45 PM",
          arrivalTime: "6:45 AM",
          extension: "+1 day",
          duration: "4h 10min",
          fromTo: "DXB - CDG",
          stops: "2 stops",
          stopoverInfo: " ",
        },
        {
          id: 3,
          price: "1,456.90",
        },
      ],
    },
  ];

  return (
    <main className="font-neueMontreal">
      <div className="px-36 flex justify-between items-center py-5">
        <span className="w-[662px]">
          <InputForm />
        </span>
        <Button className="bg-transparent rounded-full p-1 w-10 h-10 hover:bg-transparent text-black border-transparent">
          <CrossCircledIcon />
        </Button>
      </div>

      {/* loading line animation */}
      <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
        <div className="absolute h-[2px] bg-green-500 animate-progres"></div>
      </div>

      {/* flight results */}
      <section className="mt-5 px-36">
        <p className="text-[#787B80] mb-4">
          Showing {availableResults} of {totalResults} results
        </p>

        {/* flight info */}
        <div className="flex flex-col space-y-6">
          {Object.entries(flights[0]).map(([key, flightGroup]) => (
            <div key={key} className="border pt-10 p-4 rounded-lg space-y-10">
              {flightGroup.map((flight) => (
                <div
                  key={flight.id}
                  className="flex justify-between items-center"
                >
                  {/* first part */}
                  <div className="w-1/3 flex items-center space-x-4">
                    {flight.airlineLogo && (
                      <>
                        <img
                          src={flight.airlineLogo}
                          alt={`${flight.airlineName} logo`}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <p className="text-[#787B80] text-xs tracking-wide">
                            {flight.airlineName} • {flight.flightCode}
                          </p>
                          <span className="flex space-x-1">
                            <p className="text-[#001F1D] text-lg">
                              {flight.departureTime} - {flight.arrivalTime}
                            </p>
                            <p className="text-xs font-medium text-[#962828]">
                              {flight.extension}
                            </p>
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex space-x-10">

                  {/* second part */}
                  <div className="flex flex-col space-y-1">
                    <p className="text-[#787B80] text-sm -mb-1">{flight.fromTo}</p>
                    <p className="text-[#001F1D] text-lg">{flight.duration}</p>
                  </div>


                  
                  {/* third part */}
                  <span className="text-left flex flex-col ">
                    {flight.stopoverInfo && (
                      <p className="text-[#787B80] text-sm truncate w-32">
                        {flight.stopoverInfo}
                      </p>
                    )}
                    <div className="text-lg">{flight.stops}</div>
                  </span>

                  {/* fourth part */}
                  <div className="w-[180px] -mt-32">
                    {flight.price && (
                      <div className="flex flex-col">
                        <p className="text-[#787B80]">from</p>
                        <p className="text-[#001F1D] text-lg mb-2">
                          AED {flight.price}
                        </p>
                        <Button className="px-4 py-2 bg-[#003E39] text-white rounded">
                          Select
                        </Button>
                      </div>
                    )}
                  </div>

                 </div>

                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
