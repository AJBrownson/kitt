import Image from 'next/image';

const flights = [
  {
    "one": [
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
        stopoverInfo: "6h 32m in Lisbon, Portugal",
      },
      {
        id: 3,
        price: "2,456.90",
      },
    ],
    "two": [
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
        airlineLogo: "/lufthansa.png",
        airlineName: "Lufthansa",
        flightCode: "AT 4334",
        departureTime: "11:45 PM",
        arrivalTime: "6:45 AM",
        extension: "+1 day",
        duration: "4h 10min",
        fromTo: "DXB - CDG",
        stops: "1 stop",
        stopoverInfo: "Lisbon",
      },
      {
        id: 3,
        price: "1,456.90",
      },
    ],
    "three": [
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

export default function Flights() {
  return (
    <div className="flex flex-col space-y-6">
      {Object.entries(flights[0]).map(([key, flightGroup]) => (
        <div key={key} className="border p-4 rounded-lg space-y-4">
          {flightGroup.map((flight) => (
            <div key={flight.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {flight.airlineLogo && (
                  <Image src={flight.airlineLogo} alt={flight.airlineName} width={50} height={50} />
                )}
                <div>
                  <div className="font-bold">{flight.airlineName}</div>
                  <div className="text-sm">{flight.flightCode}</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                {flight.departureTime} - {flight.arrivalTime}
                {flight.extension && <span className="text-red-500"> {flight.extension}</span>}
              </div>
              <div className="text-sm">{flight.duration}</div>
              <div className="text-sm">{flight.fromTo}</div>
              <div className="text-sm">{flight.stops}</div>
              {flight.stopoverInfo && (
                <div className="text-xs text-gray-400 truncate w-24">{flight.stopoverInfo}</div>
              )}
              {flight.price && (
                <div className="font-semibold text-lg">
                  AED {flight.price}
                </div>
              )}
              <button className="px-4 py-2 bg-green-500 text-white rounded">Select</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
