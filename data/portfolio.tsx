import { Category } from "./category";

export interface PortfolioItemProps {
  title: string;
  slug: string;
  description?: string;
  images: string[];
  tools: string[];
  github: string;
  site: string;
  thumbnail: string;
}

export const Portfolio = [
  {
    title: "I-EVKIN BUMD",
    slug: "i-evkin-bumd",
    category: Category[1].label,
    description:
      "This system was created to assess the performance of BUMD (Regional Owned Enterprises). Many aspects are considered in the performance appraisal, such as finance, operations, and administration. This website was built using the next js framework on the frontend and adonisjs for the backend.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239198/homepage/i-evkin-bumd-1_lr10au.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239199/homepage/i-evkin-bumd-2_qhy9qo.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239198/homepage/i-evkin-bumd-3_sxtial.png",
    ],
    tools: ["Next.js", "Sass", "AdonisJS"],
    github: "",
    site: "https://i-evkin.com/",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678239198/homepage/i-evkin-bumd-1_lr10au.png",
  },
  {
    title: "Nusakala Institute",
    slug: "nusakala-institute",
    category: Category[1].label,
    description:
      "As the name implies, Nusakala Institute is a website that aims to educate cryptocurrency investors. Nusakaka Institute will share actual and factual news about cryptocurrencies. This website was built using Next.js for the frontend and Strapi to support the backend and cms needs.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239219/homepage/nusakala-institute-1_axndrg.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239215/homepage/nusakala-institute-2_ksgaht.png",
    ],
    tools: ["Next.js", "TailWind CSS", "Strapi"],
    github: "",
    site: "https://www.nusakalainstitute.com/",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678239219/homepage/nusakala-institute-1_axndrg.png",
  },
  {
    title: "HIPMI PT Bekasi Homepage",
    slug: "hipmi-pt-bekasi-homepage",
    category: Category[0].label,
    description:
      "This is the homepage for HIPMI PT Bekasi. The purpose of making this website is as one of the promotional media for HIPMI PT Bekasi. This website was built using Next.js for the frontend and Strapi to support the backend and cms needs.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239283/homepage/hipmi-1_dxdlpy.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239266/homepage/hipmi-2_bleiif.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239295/homepage/hipmi-3_c52t5j.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678239268/homepage/hipmi-4_hp0lff.png",
    ],
    tools: ["Next.js", "Chakra UI", "Strapi"],
    github: "",
    site: "https://hipmikabupatenbekasi.org/",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678239283/homepage/hipmi-1_dxdlpy.png",
  },
  {
    title: "Humanize Human",
    slug: "humanize-human",
    category: Category[1].label,
    description:
      "The idea behind this website is to create a transparent donation website. I mean, the flow of money on the blockchain can be tracked, so donors don't have to worry about misuse of donated money. Unfortunately this project had to be stopped due to funding problems. This website was created using Next.js as a frontend and Strapi to support cms and api. Besides that, we also use the public API available on BscScan.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189879/homepage/humanizehuman-1_fsg4sp.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189873/homepage/humanizehuman-2_vodvjv.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189870/homepage/humanizehuman-3_ghoovy.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189871/homepage/humanizehuman-4_ezb7xi.png",
    ],
    tools: ["Next.js", "TailWind CSS", "Strapi"],
    github: "",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189879/homepage/humanizehuman-1_fsg4sp.png",
  },
  {
    title: "300 Doge",
    slug: "300-doge",
    category: Category[0].label,
    description: "",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189158/homepage/300doge_hx7o6l.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189158/homepage/300doge_hx7o6l.png",
  },
  {
    title: "Pinksale Killer",
    slug: "pinksale-killer",
    category: Category[0].label,
    description: "",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189967/homepage/pinksale-killer_dcubdb.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189967/homepage/pinksale-killer_dcubdb.png",
  },
  {
    title: "AvatarFi",
    slug: "avatarfi",
    category: Category[0].label,
    description: "",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189744/homepage/avatarfi_qnqxqi.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "",
    site: "https://www.avatarfi.tech/",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189744/homepage/avatarfi_qnqxqi.png",
  },
  {
    title: "Callerbox",
    slug: "callerbox",
    category: Category[0].label,
    description: "",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189704/homepage/callerbox_cyowd9.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189704/homepage/callerbox_cyowd9.png",
  },
  {
    title: "DeFi",
    slug: "defi",
    category: Category[0].label,
    description: "",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678189718/homepage/defi_rynyz1.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678189718/homepage/defi_rynyz1.png",
  },
  {
    title: "Second Project",
    slug: "second-project",
    category: Category[3].label,
    description:
      "After making two games, I wanted to make a game with my own assets. This game has very different mechanics from previous games. In this game, players have launchers and swords. In addition, enemies can only be seen within a certain range. I didn't release this game, but you can download the source at the attached link.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201744/homepage/second-project-1_xrqc2o.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201745/homepage/second-project-2_h8dujc.png",
    ],
    tools: ["Godot"],
    github: "https://github.com/fahri-r/godot-secondproject",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201745/homepage/second-project-2_h8dujc.png",
  },
  {
    title: "Red Scarf Boy",
    slug: "red-scarf-boy",
    category: Category[3].label,
    description:
      "This game was created to improve the mechanics of the first game. In Find a Key game, only stationary objects can injure the player. In this game, I want to make real enemies. Enemies in this game can chase and attack players at a certain range. Unlike Find a Key, the tool used to build this game is Godot.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201780/homepage/red-scarf-boy-1_rg4udh.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201780/homepage/red-scarf-boy-2_s1ulhd.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201780/homepage/red-scarf-boy-3_pxztib.png",
    ],
    tools: ["Godot"],
    github: "https://github.com/fahri-r/red-scarf-boy",
    site: "https://fahri-r.itch.io/red-scarf-boy",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201780/homepage/red-scarf-boy-2_s1ulhd.png",
  },
  {
    title: "Perpustakaan Bot",
    slug: "perpustakaan-bot",
    category: Category[2].label,
    description:
      "The Perpustakaan Bot is a Telegram based bot. This bot was created with the aim of making it easier for library visitors to get information on books in a library. In addition, librarians can also manage book data available at the library.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201847/homepage/perpustakaan-bot-1_gjevi7.jpg",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201876/homepage/perpustakaan-bot-2_yki7bg.gif",
    ],
    tools: ["python-telegram-bot", "AdonisJS"],
    github: "https://github.com/fahri-r/perpustakaan-bot",
    site: "https://t.me/PerpustakaankuBot",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201847/homepage/perpustakaan-bot-1_gjevi7.jpg",
  },
  {
    title: "E-Perpustakaan",
    slug: "e-perpustakaan",
    category: Category[4].label,
    description:
      "E-Perpustakaan is a desktop application that can assist librarians in managing book data in the library. This application was made to fulfill my college assignments in the second semester. This application is still made using the Java language with Apache NetBeans tools.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201905/homepage/perpustakaan-1_obsboz.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201905/homepage/perpustakaan-6_rno9i9.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201905/homepage/perpustakaan-5_ye3qen.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201904/homepage/perpustakaan-2_r8dwj8.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201904/homepage/perpustakaan-4_wrh7az.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201904/homepage/perpustakaan-3_nltdfk.png",
    ],
    tools: ["Apache NetBeans"],
    github: "https://github.com/fahri-r/netbeans-perpustakaan",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201905/homepage/perpustakaan-1_obsboz.png",
  },
  {
    title: "Main Bersama API",
    slug: "main-bersama-api",
    category: Category[5].label,
    description:
      "Main Bersama API is my first API that uses TypeScript as its programming language. This API was created to fulfill a training assignment from JabarCodingCamp. Main bersama (Play Together) is a rental backend application for sports venues such as soccer, mini soccer, futsal, basketball, or volleyball. In addition, users can also join the schedule that has been made. So, each user can play together. This API is built with the AdonisJS framework.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201930/homepage/main-bersama_t2ohbc.png",
    ],
    tools: ["AdonisJS"],
    github: "https://github.com/fahri-r/main-bersama-api",
    site: "https://mainbersama-api.herokuapp.com/docs/",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201930/homepage/main-bersama_t2ohbc.png",
  },
  {
    title: "Perpustakaan API",
    slug: "perpustakaan-api",
    category: Category[5].label,
    description:
      "The Perpustakaan API is one of the supporting tools for running Perpustakaan Bot. The usefulness of Perpustakaan Bot itself has been discussed in another article. This API is built using the AdonisJS framework.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201834/homepage/perpustakaan-api-1_d1kf2b.png",
    ],
    tools: ["AdonisJS"],
    github: "https://github.com/fahri-r/perpustakaan-api",
    site: "https://apiperpustakaan.herokuapp.com/docs",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201834/homepage/perpustakaan-api-1_d1kf2b.png",
  },
  {
    title: "Jobbb",
    slug: "jobbb",
    category: Category[0].label,
    description:
      "Jobbb is my first frontend that uses JavaScript as its programming language. This website was created to fulfill a training assignment from JabarCodingCamp.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201958/homepage/jobbb_a77mbs.png",
    ],
    tools: ["Next.js", "TailWind CSS"],
    github: "https://github.com/fahri-r/jobbb",
    site: "",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201958/homepage/jobbb_a77mbs.png",
  },
  {
    title: "Find a Key",
    slug: "find-a-key",
    category: Category[3].label,
    description:
      "This game was made to fulfill college assignments in the first semester. At that time, my lecturer gave me tools to make games using Java, namely Greenfoot. Actually I just made the mechanics of the game because I downloaded the assets for the game from various sources. This game was originally for desktop but thanks to my lecturer for helping me to upload it to Google Play.",
    images: [
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201992/homepage/find-a-key-1_psap1t.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201991/homepage/find-a-key-2_s7shhe.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201990/homepage/find-a-key-3_v7z3cq.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201991/homepage/find-a-key-4_f9rpnt.png",
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/v1678201991/homepage/find-a-key-5_gwxydp.png",
    ],
    tools: ["Greenfoot"],
    github: "https://github.com/fahri-r/greenfoot-findakey",
    site: "https://play.google.com/store/apps/details?id=com.kxland.findk2exit&pli=1",
    thumbnail:
      "https://res.cloudinary.com/dr1ohfvxn/image/upload/c_scale,w_300/v1678201990/homepage/find-a-key-3_v7z3cq.png",
  },
];
