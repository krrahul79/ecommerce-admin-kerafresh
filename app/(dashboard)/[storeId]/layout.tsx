import { redirect } from "next/navigation";
//import { auth } from "@clerk/nextjs";

import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  //const { userId } = auth();

  const userId = "user_2bYBYCjrQzapn8M7vHj8qIQIK9v";

  // if (!userId) {
  //   redirect("/sign-in");
  // }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
