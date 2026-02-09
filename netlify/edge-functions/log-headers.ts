import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Log specific custom headers
  const customHeaderValue = request.headers.get("X-CSRF-Token");
  if (customHeaderValue) {
    console.log(`Received X-CSRF-Token:: ${customHeaderValue}`);
  }

  // Log all headers (for debugging purposes)
  console.log("All request headers:", Object.fromEntries(request.headers.entries()));

  // Continue to the next part of the request handling
  return context.next(); 
};
