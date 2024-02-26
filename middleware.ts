

// export default authMiddleware({
//   publicRoutes: ["/api/:path*"],
// });

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function (request: NextRequest) {
  // Your middleware logic here
  return NextResponse.next(); // Or a custom response
}
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
