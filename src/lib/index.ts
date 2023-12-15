export const timestamp = (value: string) => {
  const date = new Date(value).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  return date;
}

export const getImageURL = (collectionId: string, recordId: string, fileName: string) => {
  return `https://rony-blog.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
}