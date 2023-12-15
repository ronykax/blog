import { PUBLIC_POCKETBASE } from "$env/static/public";

export const timestamp = (value: string) => {
  const date = new Date(value).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  return date;
}

export const getImageURL = (collectionId: string, recordId: string, fileName: string) => {
  return `${PUBLIC_POCKETBASE}/api/files/${collectionId}/${recordId}/${fileName}`;
}