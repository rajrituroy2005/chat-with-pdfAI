"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleClick = () => {
    // Check if user is FREE tier and if theyre over the file limit, push to the upgrade page
    router.push("/dashboard/upload");
  };
  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <Link href="/dashboard" className="text-2xl">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/dashboard">My Documents</Link>
          </Button>
          
          <Button onClick={handleClick} className="bg-indigo-500 scale-100 cursor-pointer mx-2 my-auto hover:scale-98" > 
            <FilePlus />
          </Button>
          
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;