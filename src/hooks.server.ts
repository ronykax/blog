import { PUBLIC_POCKETBASE } from "$env/static/public";
import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase(PUBLIC_POCKETBASE);
  const response = await resolve(event);
  
  return response;
}