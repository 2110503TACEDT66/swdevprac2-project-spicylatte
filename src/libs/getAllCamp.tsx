export default async function getAllCamp({token} : {token : string}) {
  const response = await fetch(process.env.BACKEND_URL + "/api/v1/campground/", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if(!response.ok) throw new Error("Failed to get all Camp" + response.statusText)
  return await response.json()
}
