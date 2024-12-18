import * as fs from "fs";
const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links
});
// import { fetchRssData } from "./fetchRssData";
import { fetchGitHubData } from "./fetchGitHubData";

const ossProjectRepos = [
  "BMark-ECommerce",
];

const githubUsername = "kolapowariz";
const twitterUrl = "https://twitter.com/kolapowariz";
const linkedinUrl = "https://linkedin.com/in/warizkolapo";
const githubSponsorsUrl = "https://github.com/sponsors/kolapowariz";

async function generateMarkdown() {
  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-warizkolapo-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/warizkolapo)](${linkedinUrl})`;
  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@kolapowariz-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/kolapowariz)](${twitterUrl})`;
  // const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `<div align="center">\n

    ${linkedinBadge} ${twitterBadge}\n

  ---\n

  Hi there 👋🏾! I'm a dedicated frontend engineer skilled in React.js, Vue.js, Next.js, and TypeScript, specializing in building performant and responsive web applications. Experienced in Agile development environments, delivering optimized user interfaces, and passionate about learning and solving real-world problems through technology..\n

  ---\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n

  ---\n

  ## Highlights

  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
   ${await fetchGitHubData(ossProjectRepos)}\n  
  </details>\n



  <details>\n
  <summary>Quick Tips</summary>\n\n
  - 💬 How to reach me: DM [@kolapowariz](https://twitter.com/kolapowariz) on X (Twitter).\n

  </details>\n
  ---\n

  [![An image of @kolapowariz's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/kolapowariz)](https://holopin.io/@kolapowariz)

  ---\n

`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
