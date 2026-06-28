import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isLoginRoute = request.nextUrl.pathname === "/dashboard/login";

  let user = null;

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const { data } = await supabase.auth.getUser();
    user = data.user;
  } catch {
    // Supabase niet bereikbaar of misconfigureerd: behandel als niet-ingelogd
    // in plaats van de hele site te laten crashen.
    user = null;
  }

  // Niet ingelogd en probeert bij het dashboard te komen -> terug naar login
  if (isDashboardRoute && !isLoginRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard/login";
    return NextResponse.redirect(url);
  }

  // Al ingelogd en gaat naar de loginpagina -> meteen door naar het dashboard
  if (isLoginRoute && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
