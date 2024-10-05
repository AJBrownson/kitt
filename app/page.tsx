"use client";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="px-40 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-5">Good afternoon, Brian</h1>
      <section className="container p-6 border border-[#E6E8EB] shadow-lg rounded-lg">
        <div className="bg-[#F5F7FA] w-20 px-4 py-1 mb-6 rounded-md text-black">
          Flights
        </div>
        <SearchForm />
      </section>
    </main>
  );
}
