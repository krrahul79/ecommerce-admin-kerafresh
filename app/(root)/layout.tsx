import { redirect } from "next/navigation";
//import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const { userId } = auth();

  redirect(`/2553e45e-55c7-424f-8a15-fa48e566509d`);

  return <>{children}</>;
}
