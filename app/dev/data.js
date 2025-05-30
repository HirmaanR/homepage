// get profile data from leetcode
// NOTE : call function should in await
// NOTE : this api has limit
async function getData() {
  const url = "https://alfa-leetcode-api.onrender.com/userProfile/HirmanR";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}
export default getData;
