import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase("https://rony-blog.pockethost.io");
  const response = await resolve(event);
  
  return response;
}