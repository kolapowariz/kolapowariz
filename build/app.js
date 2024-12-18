"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const md = require("markdown-it")({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
});
// import { fetchRssData } from "./fetchRssData";
const fetchGitHubData_1 = require("./fetchGitHubData");
const ossProjectRepos = [
    "BMark-ECommerce",
    "javascript-note"
];
const githubUsername = "kolapowariz";
const twitterUrl = "https://twitter.com/kolapowariz";
const linkedinUrl = "https://linkedin.com/in/warizkolapo";
const githubSponsorsUrl = "https://github.com/sponsors/kolapowariz";
function generateMarkdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-warizkolapo-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/warizkolapo)](${linkedinUrl})`;
        const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@kolapowariz-1ca0f1?style=for-the-badge&logo=twitter&logoColor=white&link=https://twitter.com/kolapowariz)](${twitterUrl})`;
        const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;
        const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
        const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
        const markdownText = `<div align="center">\n

    ${linkedinBadge} ${twitterBadge} ${githubSponsorsBadge}\n

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
   ${yield (0, fetchGitHubData_1.fetchGitHubData)(ossProjectRepos)}\n  
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
            if (error)
                throw new Error(`Something went wrong: ${error}.`);
            console.log(`✅ README.md file was succesfully generated.`);
        });
    });
}
generateMarkdown();
