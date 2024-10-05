"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
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

const FormSchema = z.object({
  fromLocation: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  toLocation: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function SearchForm() {
  const [departureDate, setDepartureDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fromLocation: "",
      toLocation: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name="fromLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Where from?"
                      {...field}
                      className="w-56"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <span className="flex flex-col justify-center items-center bg-[#F5F7FA] w-7 h-7 p-1 rounded-full">
              <ArrowRightIcon className="w-4 h-4" />
              <ArrowLeftIcon className="w-4 h-4" />
            </span>

            <FormField
              control={form.control}
              name="toLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Where to?"
                      {...field}
                      className="w-56"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center space-x-4">
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
