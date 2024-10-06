"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { CalendarIcon, MagnifyingGlassIcon, ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import airports from "@/utils/airportData.json";

const FormSchema = z.object({
  fromLocation: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  toLocation: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

export default function SearchForm() {
  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();

  const [fromLocation, setFromLocation] = React.useState("");
  const [toLocation, setToLocation] = React.useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fromLocation: "",
      toLocation: "",
    },
  });

  // Function to handle dropdown selection for the "from" location
  const handleSelectFromLocation = (airportCode: string) => {
    setFromLocation(airportCode);
  };

  // Function to handle dropdown selection for the "to" location
  const handleSelectToLocation = (airportCode: string) => {
    setToLocation(airportCode);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            {/* From Location Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Input
                  placeholder="Where from?"
                  value={fromLocation} // Bind the input value to fromLocation state
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-56"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                {airports.airports.map((airport) => (
                  <DropdownMenuItem
                    key={airport.code}
                    onClick={() => handleSelectFromLocation(`(${airport.code}) ${airport.name}`)}
                  >
                   ({airport.code}) {airport.name} 
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="flex flex-col justify-center items-center bg-[#F5F7FA] w-7 h-7 p-1 rounded-full">
              <ArrowRightIcon className="w-4 h-4" />
              <ArrowLeftIcon className="w-4 h-4" />
            </span>

            {/* To Location Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Input
                  placeholder="Where to?"
                  value={toLocation} // Bind the input value to toLocation state
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-56"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {airports.airports.map((airport) => (
                  <DropdownMenuItem
                    key={airport.code}
                    onClick={() => handleSelectToLocation(`(${airport.code}) ${airport.name}`)}
                    className="hover:bg-green-500 px-4 py-2 cursor-pointer text-gray-700"
                  >
                   ({airport.code}) {airport.name} 
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            {/* Departure Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-44 justify-start text-left font-normal",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departureDate ? (
                    format(departureDate, "PPP")
                  ) : (
                    <span>Departure</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Return Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-44 justify-start text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Return</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <Button
            type="submit"
            className="bg-[#003E39] px-12 hover:bg-green-900 rounded"
          >
            <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
            Search flights
          </Button>
        </div>
      </form>
    </Form>
  );
}
