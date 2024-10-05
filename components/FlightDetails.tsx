import { Button } from "./ui/button";
import { ArrowLeftIcon, TimerIcon } from "@radix-ui/react-icons";
import Lufthansa from "@/public/lufthansa.png";
import Image from "next/image";

export default function FlightDetails() {
  const details = [
    {
      id: 1,
      departureDate: "Sat 28 Sept • 2:15",
      arrivalDate: "Sat 28 Sept • 2:15",
      departureAirport: "DXB • Dubai International Airport",
      interimAirport: "RUH • King Khalid International Airport",
      arrivalAirport: " CDG • Paris - Charles de Gualle Airport",
      airlineName: "Saudi Arabian Airlines • SV553",
      airlineClass: "Economy • A330",
      flightTime: "Flight time 3h 45m",
    },
  ];

  return (
    <>
      <section className="w-[659px] h-screen px-7 py-5 bg-white font-neueMontreal">
        <Button className="bg-[#F5F7FA] rounded-full p-1 w-6 h-6 hover:bg-transparent text-black border-transparent">
          <ArrowLeftIcon />
        </Button>

        <div className="py-8 border border-transparent border-b-[#E6E8EB]">
          <h1 className="text-xl font-medium">Flight details</h1>
        </div>

        <div className="container mt-5">
          {/* starting point */}
          <div>
            <span className="space-y-1">
              <p className="text-xs text-[#787B80]">Sat 28 Sept • 2:15</p>
              <p className="text-[#001F1D] text-sm font-medium">
                DXB • Dubai International Airport
              </p>
            </span>

            <span className="flex items-center justify-end space-x-5">
              <Image src={Lufthansa} alt="" />
              <span className="text-[#484A4D] text-xs space-y-1">
                <p>Saudi Arabian Airlines • SV553</p>
                <p>Economy • A330</p>
                <p>Flight time 3h 45m</p>
              </span>
            </span>

            <span className="space-y-1">
              <p className="text-xs text-[#787B80]">Sat 28 Sept • 2:15</p>
              <p className="text-[#001F1D] text-sm font-medium">
                RUH • King Khalid International Airport
              </p>
            </span>
          </div>

          {/* Layover timing */}
          <div className="flex space-x-2 my-16">
            <TimerIcon />
            <p className="text-sm text-[#787B80]">Layover 2h 25m</p>
          </div>

          {/* destination */}
          <div>
            <span className="space-y-1">
              <p className="text-xs text-[#787B80]">Sat 28 Sept • 2:15</p>
              <p className="text-[#001F1D] text-sm font-medium">
                RUH • King Khalid International Airport
              </p>
            </span>

            <span className="flex items-center justify-end space-x-5">
              <Image src={Lufthansa} alt="" />
              <span className="text-[#484A4D] text-xs space-y-1">
                <p>Saudi Arabian Airlines • SV553</p>
                <p>Economy • A330</p>
                <p>Flight time 3h 45m</p>
              </span>
            </span>

            <span className="space-y-1">
              <p className="text-xs text-[#787B80]">Sat 28 Sept • 2:15</p>
              <p className="text-[#001F1D] text-sm font-medium">
                CDG • Paris - Charles de Gualle Airport
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
