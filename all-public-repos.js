// Creates a output of all public repos 👉 Usage: node all-public-repos_and-write.js "users/ckroeger"
const axios = require("axios");

// example
// node all-public-repos.js "users/ckroeger"
// node all-public-repos.js "orgs/arena-challenges"
async function getRepoData(org) {
  try {
    const response = await axios.get(
      `https://api.github.com/${org}/repos?per_page=100&sort=created`
    );
    //console.log(response.data);
    const data = response.data.map((repo) => ({
      id: repo.id,
      url: repo.url,
      name: repo.name,
    }));
    return data;
  } catch (error) {
    console.error(error);
  }
}

const orgName = process.argv[2];
if (!orgName) {
  console.log(
    "Please provide an organization name as a command-line argument."
  );
  process.exit(1);
}

async function printRepoData() {
  let reposData = await getRepoData(orgName);
  //console.log(reposData);

  reposData.forEach((repo) => {
    console.log(`Repo ID: ${repo.id}`);
    console.log(`Repo URL: ${repo.url}`);
    console.log(`Repo Name: ${repo.name}`);
    console.log("----------------------");
  });

  console.log(`Total repos: ${reposData.length}`);
}

printRepoData();
