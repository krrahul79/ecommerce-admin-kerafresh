// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import prismadb from "@/lib/prismadb";

export default async function Page() {
  const store = await prismadb.category.findFirst({
    where: {
      storeId: "2553e45e-55c7-424f-8a15-fa48e566509d",
    },
  });

  return <Link href="/2553e45e-55c7-424f-8a15-fa48e566509d">Dashboard</Link>;
}
