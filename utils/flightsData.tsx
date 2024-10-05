export default function Ho() {
    const flight = [
        {
          one: [
            {
              id: 1,
              airlineLogo: "/emirates.png",
              airlineName: "Emirates",
              flightCode: "AT 4334",
              departureTime: "9:45 AM",
              arrivalTime: "11:45 AM",
              extension: "",
              duration: "2h 10min",
              fromTo: "CDG - DXB",
              stops: "Non stop",
              stopoverInfo: "",
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
              stopoverInfo: "6h 32m in Lisbon, Portugal", // should be truncated
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
              extension: "",
              duration: "2h 10min",
              fromTo: "CDG - DXB",
              stops: "1 stop",
              stopoverInfo: "",
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
              extension: "",
              duration: "2h 10min",
              fromTo: "CDG - DXB",
              stops: "Non stop",
              stopoverInfo: "",
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
              stopoverInfo: "",
            },
            {
                id: 3,
                price: "1,456.90",
            },
          ],
        },
      ];
  const flights = [
    {
      id: 1,
      airlineLogo: "/emirates.png",
      airlineName: "Emirates",
      flightCode: "AT 4334",
      departureTime: "9:45 AM",
      arrivalTime: "11:45 AM",
      duration: "2h 10min",
      fromTo: "CDG - DXB",
      stops: "Non stop",
      price: "2,456.90",
    },
    {
      id: 2,
      airlineLogo: "/lufthansa.png",
      airlineName: "Lufthansa",
      flightCode: "AT 4334",
      departureTime: "11:45 PM",
      arrivalTime: "6:45 AM",
      duration: "4h 10min",
      fromTo: "DXB - CDG",
      stops: "2 stops",
      stopoverInfo: "6h 32m in Lisbon",
      price: "2,456.90",
    },
    {
      id: 3,
      airlineLogo: "/emirates.png",
      airlineName: "Emirates",
      flightCode: "AT 4334",
      departureTime: "9:45 AM",
      arrivalTime: "11:45 AM",
      duration: "2h 10min",
      fromTo: "CDG - DXB",
      stops: "Non stop",
      price: "2,456.90",
    },
    {
      id: 4,
      airlineLogo: "/lufthansa.png",
      airlineName: "Lufthansa",
      flightCode: "AT 4334",
      departureTime: "11:45 PM",
      arrivalTime: "6:45 AM",
      duration: "4h 10min",
      fromTo: "DXB - CDG",
      stops: "2 stops",
      stopoverInfo: "6h 32m in Lisbon",
      price: "2,456.90",
    },
  ];

  return (
    <section className="mt-5 px-40">
      <div className="">
        <p className="text-[#787B80] mb-4">Showing 356 of 767 results</p>

        <div className="space-y-4">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
            >
              {/* Flight Details */}
              <div className="flex space-x-4 items-start">
                {/* Airline Logo */}
                <img
                  src={flight.airlineLogo}
                  alt={`${flight.airlineName} logo`}
                  className="w-12 h-12 object-contain"
                />

                {/* Flight Info */}
                <div>
                  <p className="text-[#787B80] text-xs">
                    {flight.airlineName} • {flight.flightCode}
                  </p>
                  <p className="text-[#001F1D] text-xl">
                    {flight.departureTime} - {flight.arrivalTime}
                  </p>
                  {flight.stopoverInfo && (
                    <p className="text-xs text-red-500">
                      {flight.stopoverInfo}
                    </p>
                  )}
                </div>
              </div>

              {/* dividing line */}
              <div></div>

              {/* Flight Meta Info */}
              <div className="text-right space-y-2">
                <p className="text-[#787B80]">{flight.fromTo}</p>
                <p className="text-[#787B80]">{flight.duration}</p>
              </div>

              <div className=" ">
                <p className="font-medium">{flight.stops}</p>
              </div>

              {/* divider line */}

              {/* Price and Select Button */}
              <div className="text-left px-4 border border-transparent border-l-[#E6E8EB]">
                <p className="text-[#787B80] text-sm pt-14">from</p>
                <p className="text-lg text-[#001F1D]">AED {flight.price}</p>
                <Button className="mt-2 bg-[#003E39] hover:bg-[#003E39] text-white px-16 py-2 rounded">
                  Select
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
