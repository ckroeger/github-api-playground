// Creates a list of all public repos and add them to README.md 👉 Usage: node all-public-repos_and-write.js "users/ckroeger"
const axios = require("axios");
const fs = require("fs");

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
      name: repo.name,
      url: `https://github.com/${org}/${repo.name}`,
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

  let output = "";
  reposData.forEach((repo) => {
    output += `Repo ID: ${repo.id}\n`;
    output += `Repo URL: ${repo.url}\n`;
    output += `Repo Name: ${repo.name}\n`;
    output += "----------------------\n";
  });
  output += `Total repos: ${reposData.length}\n`;

  let readme = fs.readFileSync("README.md", "utf8");
  readme = readme.replace(
    /<!-- start -->([\s\S]*?)<!-- end -->/,
    `<!-- start -->\n\`\`\`text\n${output}\`\`\`\n<!-- end -->`
  );
  fs.writeFileSync("README.md", readme);
}

printRepoData();
