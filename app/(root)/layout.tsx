import { redirect } from "next/navigation";
//import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const { userId } = auth();

  const userId = "user_2bYBYCjrQzapn8M7vHj8qIQIK9v";

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
