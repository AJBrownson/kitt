import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { InputForm } from "@/components/temp";

export default function Page() {
  return (
    <main className="py-5">
      <div className="px-40 flex justify-between items-center">
        <span className="w-[662px]">
        <InputForm />
        </span>
        <Button className="bg-transparent rounded-full p-1 w-10 h-10 hover:bg-transparent text-black border-transparent">
        <CrossCircledIcon />
        </Button>
       
      </div>

      <section className="px-40">
        {/* results appear here */}
      </section>
    </main>
  );
}
