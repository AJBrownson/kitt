            <div className="flex flex-col space-y-6">
      {Object.entries(flights[0]).map(([key, flightGroup]) => (
        <div key={key} className="border p-4 rounded-lg space-y-4">
          {flightGroup.map((flight) => (
            <div key={flight.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">

                {flight.airlineLogo && (
                     <img
                     src={flight.airlineLogo}
                     alt={`${flight.airlineName} logo`}
                     className="w-12 h-12 object-contain"
                   />
                )}

                <div className="flex flex-col">
                  <p className="">{flight.airlineName} • {flight.flightCode}</p>
                  <span className="flex">
                  <p className="text-sm text-gray-500">{flight.departureTime} - {flight.arrivalTime}</p>
                  {flight.extension && <span className="text-red-500 text-xs font-medium"> {flight.extension}</span>}
                  </span>
                </div>
              </div>

              {/* flight duration */}
                <div className="flex flex-col">
              <p className="text-sm">{flight.fromTo}</p>
              <p className="text-sm">{flight.duration}</p>
             </div>
           

              
              {/* {flight.stopoverInfo && (
                <div className="text-xs text-gray-400 truncate w-24">{flight.stopoverInfo}</div>
              )} */}
              {flight.price && (
                <div className="flex flex-col">
                    <p>from</p>
                <p className="font-semibold text-lg">
                  AED {flight.price}
                </p>
                <Button className="px-4 py-2 bg-green-500 text-white rounded">Select</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>