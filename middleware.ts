import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  // Define the paths that should be protected  
    '/onboarding(.*)',
    '/organization(.*)',
    '/sprint(.*)',
    '/issue(.*)',
    '/project(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  const session = await auth();
  if (!session.userId && isProtectedRoute(req)) {
    return session.redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};