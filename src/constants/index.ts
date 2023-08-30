import dayjs from "@/lib/dayjs";

const START_YEAR = 1940;
const CURRENT_YEAR = dayjs().year();

export const WEBSITE_URL = "https://animet.tv";
export const DISCORD_URL = "https://discord.gg/nNY94AqFtK";
export const FACEBOOK_URL = "https://discord.gg/nNY94AqFtK";
export const KO_FI_URL = "https://www.patreon.com/AnimetTV";
export const DISCORD_REG_URL = "https://discord.gg/nNY94AqFtK";

export const REVALIDATE_TIME = 86_400; // 24 hours
export const SKIP_TIME = 90; // 1m30s

export const supportedUploadVideoFormats = [
  "ogm",
  "wmv",
  "mpg",
  "webm",
  "ogv",
  "mov",
  "asx",
  "mpeg",
  "mp4",
  "m4v",
  "avi",
];

export const supportedUploadSubtitleFormats = ["srt", "vtt", "ass"];
export const supportedUploadFontFormats = [
  "JFPROJ",
  "ETX",
  "PFA",
  "FNT",
  "WOFF",
  "FOT",
  "TTF",
  "SFD",
  "VLW",
  "PFB",
  "VFB",
  "OTF",
  "GXF",
  "ODTTF",
  "WOFF2",
  "PF2",
  "BF",
  "TTC",
  "CHR",
  "BDF",
  "FON",
  "GF",
  "PMT",
  "AMFM",
  "MF",
  "PFM",
  "COMPOSITEFONT",
  "GDR",
  "ABF",
  "VNF",
  "PCF",
  "SFP",
  "MXF",
  "DFONT",
  "UFO",
  "PFR",
  "TFM",
  "GLIF",
  "XFN",
  "AFM",
  "TTE",
  "XFT",
  "ACFM",
  "EOT",
  "FFIL",
  "PK",
  "SUIT",
  "NFTR",
  "EUF",
  "TXF",
  "CHA",
  "LWFN",
  "T65",
  "MCF",
  "YTF",
  "F3F",
  "FEA",
  "SFT",
  "PFT",
];

export const supportedUploadImageFormats = ["jpg", "jpeg", "png"];

export const SEASON_YEARS = new Array(CURRENT_YEAR + 1 - START_YEAR)
  .fill(null)
  .map((_, index) => START_YEAR + index)
  .sort((a, b) => b - a);
