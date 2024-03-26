export default async function getAllCamp() {
  const response = await fetch(
    "https://presentation-day-1-spicylatte.vercel.app" + "/api/v1/campground/",
    {
      method: "GET",
    }
  );
  if (!response.ok)
    throw new Error("Failed to get all Camp" + response.statusText);
  return await response.json();
}
