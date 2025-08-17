/* empty css                                   */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderScript, n as renderHead, k as renderComponent, o as renderSlot } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_DtfPswtn.mjs';
import 'clsx';
import { XMLParser } from 'fast-xml-parser';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$WhatIDo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhatIDo;
  const skills = [
    {
      title: "C++",
      icon: "fa-brands fa-cuttlefish text-blue-600",
      // Use blue for C++ (or pick another color)
      description: "Competitive programming experience on platforms like CodeChef; implemented algorithms and data structures efficiently."
    },
    {
      title: "Python & ML",
      icon: "fa-brands fa-python text-yellow-500",
      // Yellow Python logo
      description: "Built ML projects including TF/IDF word classifier from scratch, deployed ML projects using Django and Flask."
    },
    {
      title: "JavaScript (ES6+)",
      icon: "fa-brands fa-js text-yellow-400",
      // JS yellow
      description: "Built mini React from scratch, learning projects, and implemented modular, secure backend services."
    },
    {
      title: "React & Next.js",
      icon: "fa-brands fa-react text-blue-400",
      description: "Developed front-end applications including blogs, e-commerce projects, and integrated backend APIs with proper documentation."
    },
    {
      title: "Node.js & Express",
      icon: "fa-brands fa-node-js text-green-600",
      description: "Built full-featured social media backend with modular architecture, authentication, and security best practices."
    },
    {
      title: "React Native",
      icon: "fa-brands fa-react text-teal-500",
      description: "Built mobile apps including an expense tracker with offline data persistence using Android ID."
    },
    {
      title: "Laravel",
      icon: "fa-brands fa-laravel text-red-600",
      description: "Developed simple CMS projects and backend APIs using Laravel following MVC architecture."
    },
    {
      title: "Django & Flask",
      icon: "fa-brands fa-python text-green-500",
      description: "Deployed ML projects and APIs; designed modular backend systems for various projects."
    },
    {
      title: "HTML & CSS",
      icon: "fa-brands fa-html5 text-orange-500",
      description: "Built responsive web interfaces using semantic HTML5, modern CSS techniques, and preprocessors like Sass and LESS."
    },
    {
      title: "CSS Frameworks",
      icon: "fa-brands fa-css3-alt text-teal-500",
      description: "Built responsive and modern UIs using Tailwind CSS and Bootstrap, leveraging utility-first design and prebuilt components for fast development."
    },
    {
      title: "Machine Learning & Algorithms",
      icon: "fa-solid fa-robot text-green-600",
      description: "Implemented ML models using TensorFlow and PyTorch; built algorithms in JavaScript and Python for NLP and classification tasks."
    },
    {
      title: "Astro",
      icon: "fa-brands fa-html5 text-violet-500",
      description: "Built fast, modern portfolio using Astro with reusable components and theming."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="what-i-do" class="py-16 px-6 md:px-20 bg-[var(--layout-background)] text-[var(--text-primary)]"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl font-bold mb-6 border-l-4 border-[var(--accent-primary)] pl-2">What I do</h2> <p class="mb-12 text-lg leading-relaxed">
I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. 
      Want to find out more about my experience? Check out my
<a href="/resume" class="text-[var(--accent-primary)] hover:underline">online resume</a> and
<a href="/portfolio" class="text-[var(--accent-primary)] hover:underline">project portfolio</a>.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> ${skills.map((skill) => renderTemplate`<div class="flex flex-col items-start gap-3"> <i${addAttribute(`${skill.icon} text-4xl`, "class")}></i> <h3 class="font-bold text-lg">${skill.title}</h3> <p class="text-sm leading-relaxed">${skill.description}</p> </div>`)} </div> <div class="flex justify-center mt-8"> <a href="#contact" class="flex items-center justify-center px-6 py-3 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition gap-2"> <i class="fa-solid fa-briefcase text-xl"></i>
Services & Pricing
</a> </div> </div> </section>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/WhatIDo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { portfolioname, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="hidden md:block w-72"></div> <aside class="hidden fixed overflow-y-auto md:flex items-center flex-col w-72 p-6 h-screen bg-[var(--accent-primary)] bg-[var(--layout-accent)] text-[var(--text-primary)]"> <h1 class="text-xl font-bold">${portfolioname}</h1> <div class="w-36 h-36 rounded-full flex-shrink-0 border-4 border-[var(--text-primary)] m-4 bg-cover bg-center" style="background-image: var(--accent-img);"></div> <p class="text-sm text-[var(--theme-secondary)] leading-relaxed text-justify"> ${description} </p> <button class="hire-me mt-4 px-4 py-2 bg-[var(--text-primary)] text-[var(--color-primary)] rounded hover:bg-[var(--accent-secondary-hover)] transition" type="button" data-modal="desktop"> <i class="fa-solid fa-handshake"></i> Hire Me
</button> <div class="flex items-center w-full justify-evenly mt-4"> <a href="https://github.com/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-github-alt text-2xl"></i> </a> <a href="https://www.linkedin.com/in/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-linkedin text-2xl"></i> </a> <a href="https://https://www.youtube.com/@thedevdharma" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-youtube text-2xl"></i> </a> <a href="https://www.instagram.com/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-instagram text-2xl"></i> </a> </div> <nav class="mt-6 font-bold flex items-center flex-col gap-2 w-full text-justify-start"> <a href="#about" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-user-astronaut"></i> About Me</a> <a href="#portfolio" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-laptop-code"></i> Portfolio</a> <a href="#services" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-briefcase"></i> Services</a> <a href="#resume" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-book"></i> Resume</a> <a href="#blog" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-blog"></i> Blog</a> <a href="#contact" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-id-card"></i> Contact</a> <div class="flex flex-col items-center mt-4 gap-4"> <label for="layout-switch" class="relative inline-flex items-center cursor-pointer"> <!-- hidden checkbox --> <input type="checkbox" id="layout-switch" class="sr-only peer layout-switch"> <!-- background track --> <div class="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out peer-checked:bg-gray-800"></div> <!-- toggle knob --> <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-[var(--accent-primary)] rounded-full shadow transform transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></div> </label> <span class="text-sm text-[var(--text-primary)]">Dark Mode</span> </div> </nav> </aside> <header class="md:hidden bg-[var(--accent-primary)] bg-[var(--layout-accent)] text-[var(--text-primary)] border-b border-[var(--color-secondary)]"> <div class="flex items-center justify-start gap-12 p-4"> <!-- Hamburger toggle --> <button id="mobile-toggle" class="p-2 rounded hover:bg-[var(--accent-secondary)] transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <span class="text-xl font-bold">${portfolioname}</span> </div> <!-- Collapsible menu --> <nav id="mobile-menu" class="flex flex-col gap-2 p-4 border-t border-[var(--color-secondary)] hidden"> <div class="flex flex-col items-center"> <!-- <h1 class="text-xl font-bold">{portfolioname}</h1> --> <div class="w-36 h-36 rounded-full flex-shrink-0 border-4 border-[var(--text-primary)] m-4 bg-cover bg-center" style="background-image: var(--accent-img);"></div> <p class="text-sm text-[var(--theme-secondary)] leading-relaxed text-justify"> ${description} </p> <button class="hire-me mt-4 px-4 py-2 bg-[var(--text-primary)] text-[var(--color-primary)] rounded hover:bg-[var(--accent-secondary-hover)] transition"> <i class="fa-solid fa-handshake"></i> Hire Me
</button> <div class="flex items-center w-full justify-evenly mt-4"> <a href="https://github.com/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-github-alt text-2xl"></i> </a> <a href="https://www.linkedin.com/in/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-linkedin text-2xl"></i> </a> <a href="https://https://www.youtube.com/@thedevdharma" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-youtube text-2xl"></i> </a> <a href="https://www.instagram.com/theabhisheksrivastav" target="_blank" class="hover:text-[var(--accent-secondary)] transition"> <i class="fa-brands fa-instagram text-2xl"></i> </a> </div> <nav class="mt-6 font-bold flex items-center flex-col gap-2 w-full text-justify-start"> <a href="#about" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-user-astronaut"></i> About Me</a> <a href="#portfolio" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-laptop-code"></i> Portfolio</a> <a href="#services" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-briefcase"></i> Services</a> <a href="#resume" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-book"></i> Resume</a> <a href="#blog" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-blog"></i> Blog</a> <a href="#contact" class="px-3 py-2 rounded hover:text-[var(--accent-secondary)] transition"><i class="fa-solid fa-id-card"></i> Contact</a> <div class="flex flex-col items-center mt-4 gap-4"> <label for="layout-switch" class="relative inline-flex items-center cursor-pointer"> <!-- hidden checkbox --> <input type="checkbox" id="layout-switch" class="sr-only peer layout-switch"> <!-- background track --> <div class="w-12 h-6 bg-gray-300 rounded-full shadow-inner transition-colors duration-300 ease-in-out peer-checked:bg-gray-800"></div> <!-- knob --> <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-[var(--accent-primary)] rounded-full shadow transform transition-transform duration-300 ease-in-out peer-checked:translate-x-6"></div> </label> <span class="text-sm text-[var(--text-primary)]">Dark Mode</span> </div> </nav> </div> </nav> </header> <!-- Hire Me Modal --> <div id="hire-modal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50 p-4"> <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg relative overflow-y-auto max-h-[90vh]"> <!-- Close Button --> <button id="close-modal" class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-2xl">
&times;
</button> <!-- Title --> <h2 class="text-2xl font-bold mb-4 text-center">Hire Me</h2> <!-- Form --> <form id="hire-form" class="space-y-4"> <input type="text" name="name" placeholder="Your Name" required class="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"> <input type="email" name="email" placeholder="Your Email" required class="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"> <textarea name="message" placeholder="Your Message" required class="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"></textarea> <select name="plan" required class="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-700"> <option value="">Select a plan</option> <option value="basic">Basic</option> <option value="standard">Standard</option> <option value="custom">Custom</option> <option value="not-sure">Not Sure</option> </select> <button type="submit" class="w-full px-4 py-2 bg-[var(--accent-primary)] text-white rounded hover:bg-[var(--accent-secondary-hover)] transition">
Send
</button> </form> </div> </div> </div> ${renderScript($$result, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Sidebar.astro", void 0);

const $$Theme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Theme / Settings Icon -->${maybeRenderHead()}<div class="fixed top-4 right-4 z-50"> <!-- Settings icon button --> <button id="theme-panel-toggle" class="p-2 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-md hover:bg-[var(--accent-primary)] transition"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v4M12 16v4M4 12h4m8 0h4M6.343 6.343l2.828 2.828M14.828 14.828l2.828 2.828M6.343 17.657l2.828-2.828M14.828 9.172l2.828-2.828"></path> </svg> </button> <!-- Floating modal overlay --> <div id="theme-panel" class="fixed top-16 right-4 w-56 bg-[var(--color-primary)] border border-[var(--color-secondary)] rounded-lg shadow-lg hidden z-50"> <div class="p-2 border-b border-[var(--color-secondary)] flex justify-between items-center"> <h2 class="text-sm font-bold">Select Theme</h2> <button id="theme-panel-close" class="hover:text-[var(--accent-primary)]">✕</button> </div> <div class="flex flex-col p-2 gap-2"> <button data-theme="theme-pikachu" class="theme-btn bg-yellow-400 text-black rounded px-2 py-1">Pikachu</button> <button data-theme="theme-charizard" class="theme-btn bg-red-600 text-white rounded px-2 py-1">Charizard</button> <button data-theme="theme-lucario" class="theme-btn bg-blue-600 text-white rounded px-2 py-1">Lucario</button> <button data-theme="theme-caterpie" class="theme-btn bg-green-600 text-white rounded px-2 py-1">Caterpie</button> <button data-theme="theme-darkrai" class="theme-btn bg-gray-900 text-white rounded px-2 py-1">Darkrai</button> <button data-theme="theme-togepi" class="theme-btn bg-pink-300 text-gray-800 rounded px-2 py-1">Togepi</button> <button data-theme="theme-gengar" class="theme-btn bg-purple-700 text-white rounded px-2 py-1">Gengar</button> </div> </div> </div> ${renderScript($$result, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Theme.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Theme.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Portfolio", portfolioname = "Abhishek Srivastav", role = "Software Developer", description = "Hi, I\u2019m Abhishek Srivastav \u2014 a software developer who loves turning complex problems into clean, elegant code. Welcome to my personal playground where ideas meet execution, projects come to life, and learning never stops." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/src/styles/global.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><title>${title}</title>${renderHead()}</head> <body class="font-sans transition-colors duration-300 bg-[var(--color-primary)] text-[var(--color-secondary)]"> <main class="flex flex-col md:flex-row"> ${renderComponent($$result, "Sidebar", $$Sidebar, { "portfolioname": portfolioname, "role": role, "description": description })} ${renderComponent($$result, "Theme", $$Theme, {})} ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/layouts/BaseLayout.astro", void 0);

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="py-16 px-6 md:px-20 bg-[var(--layout-background)] text-[var(--text-primary)]"> <div class="max-w-6xl mx-auto"> <div class="flex items-center justify-between mb-6"> <h2 class="text-3xl font-bold border-l-4 border-[var(--accent-primary)] pl-2">
Testimonials
</h2> <!-- + Icon --> <button class="p-2 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--color-primary)] transition" onclick="document.getElementById('testimonial-modal').classList.remove('hidden')"> <i class="fa-solid fa-plus"></i> </button> </div> <!-- Grid of testimonials --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" id="testimonials-grid"></div> </div> <!-- Add Testimonial Modal --> <div id="testimonial-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <div class="bg-white text-black p-8 rounded-xl w-full max-w-md relative"> <h3 class="text-xl font-bold mb-4">Add Testimonial</h3> <form id="testimonial-form" class="flex flex-col gap-4"> <input type="text" name="name" placeholder="Your Name" class="border p-2 rounded" required> <input type="text" name="title" placeholder="Your Title" class="border p-2 rounded" required> <textarea name="testimonial" placeholder="Your Testimonial" class="border p-2 rounded" required></textarea> <button type="submit" class="bg-[var(--accent-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-primary)]">
Submit
</button> </form> <button class="absolute top-2 right-2 text-gray-600 hover:text-black" onclick="document.getElementById('testimonial-modal').classList.add('hidden')"> <i class="fa-solid fa-times"></i> </button> </div> </div> <!-- Thank You Modal --> <div id="thankyou-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <div class="bg-white text-black p-8 rounded-xl w-full max-w-sm text-center relative"> <h3 class="text-xl font-bold mb-4">🎉 Thank You!</h3> <p>Your testimonial has been submitted for verification.</p> <button class="mt-6 bg-[var(--accent-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-primary)]" onclick="document.getElementById('thankyou-modal').classList.add('hidden')">
Close
</button> </div> </div> ${renderScript($$result, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Testimonials.astro", void 0);

const $$FeaturedProjects = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://api.github.com/users/theabhisheksrivastav/repos");
  const data = await response.json();
  let allRepos = Array.isArray(data) ? data : [];
  const featuredProjects = allRepos.filter((repo) => repo.stargazers_count >= 1);
  return renderTemplate`${maybeRenderHead()}<section id="featured-projects" class="py-16 px-6 md:px-20 bg-[var(--layout-background)] text-[var(--text-primary)]"> <div class="max-w-6xl mx-auto"> <!-- Section Header --> <div class="flex items-center mb-10"> <span class="w-3 h-10 bg-[var(--accent-primary)] mr-4 rounded"></span> <h2 class="text-3xl md:text-4xl font-bold">Featured Projects</h2> </div> <!-- Projects Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${featuredProjects.slice(0, 4).map((repo) => renderTemplate`<a${addAttribute(repo.homepage || repo.html_url, "href")} target="_blank" rel="noopener noreferrer" class="block bg-[var(--layout-accent)] rounded-2xl p-6 shadow-lg hover:shadow-[var(--accent-primary)]/30 hover:-translate-y-2 transition-all duration-300 group"${addAttribute(`View ${repo.name} on GitHub`, "aria-label")}> <div class="flex flex-col h-full"> <!-- Repo Name --> <h3 class="text-2xl font-bold mb-3 text-[var(--text-primary)]"> ${repo.name} </h3> <!-- Repo Description --> <p class="opacity-80 flex-grow"> ${repo.description || "No description provided."} </p> <!-- Hover Action --> <div class="mt-6"> <span class="text-[var(--accent-primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
View on GitHub →
</span> </div> </div> </a>`)} </div> <div class="flex justify-center mt-8"> <a href="#contact" class="flex items-center justify-center px-6 py-3 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition gap-2"> <i class="fa-regular fa-circle-right"></i>
Portfolio & Projects
</a> </div> </div> </section>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/FeaturedProjects.astro", void 0);

const $$LatestBlogs = createComponent(async ($$result, $$props, $$slots) => {
  let latestPosts = [];
  const placeholderImage = "https://placehold.co/600x400/1a202c/4a5568?text=Blog+Post";
  try {
    const response = await fetch(
      "https://theabhisheksrivastav.blogspot.com/feeds/posts/default?alt=rss"
    );
    if (!response.ok) throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    const xmlText = await response.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    const jsonObj = parser.parse(xmlText);
    const items = jsonObj.rss.channel.item;
    if (Array.isArray(items)) {
      latestPosts = items.map((item) => {
        const description = item["media:group"]?.["media:description"]?.["#text"] || item.description || "";
        const imageUrlMatch = description.match(/<img[^>]+src="([^">]+)"/);
        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : placeholderImage;
        const summary = description.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
        return {
          title: item.title,
          link: typeof item.link === "object" ? item.link["@_href"] : item.link,
          published: new Date(item.pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }),
          summary,
          imageUrl
        };
      }).slice(0, 3);
    }
  } catch (error) {
    console.error("Error fetching or parsing blog posts:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section id="latest-blog-posts" class="py-16 px-6 md:px-20 bg-[var(--layout-background)] text-[var(--text-primary)]" data-astro-cid-jobkppd7> <div class="max-w-6xl mx-auto" data-astro-cid-jobkppd7> <!-- Section Header --> <div class="flex items-center mb-10" data-astro-cid-jobkppd7> <span class="w-3 h-10 bg-[var(--accent-primary)] mr-4 rounded" data-astro-cid-jobkppd7></span> <h2 class="text-3xl md:text-4xl font-bold" data-astro-cid-jobkppd7>Latest Blog Posts</h2> </div> <!-- Grid for Blog Post Cards --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-jobkppd7> ${latestPosts.length > 0 ? latestPosts.map((post) => renderTemplate`<a${addAttribute(post.link, "href")} target="_blank" rel="noopener noreferrer" class="block bg-[var(--layout-accent)] rounded-2xl overflow-hidden shadow-lg hover:shadow-[var(--accent-primary)]/30 hover:-translate-y-2 transition-all duration-300 group"${addAttribute(`Read more about ${post.title}`, "aria-label")} data-astro-cid-jobkppd7> <img${addAttribute(post.imageUrl ?? placeholderImage, "src")}${addAttribute(`Thumbnail for ${post.title}`, "alt")} class="w-full blog-card-image"${addAttribute(`this.onerror=null;this.src='${placeholderImage}';`, "onerror")} data-astro-cid-jobkppd7> <div class="p-6 flex flex-col h-full" data-astro-cid-jobkppd7> <h3 class="text-xl font-bold mb-3 text-[var(--text-primary)]" data-astro-cid-jobkppd7>${post.title}</h3> <p class="opacity-80 text-sm flex-grow" data-astro-cid-jobkppd7>${post.summary}</p> <div class="mt-4" data-astro-cid-jobkppd7> <span class="text-[var(--accent-primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-jobkppd7>
Read more →
</span> <p class="text-xs mt-2 opacity-60" data-astro-cid-jobkppd7>Published on ${post.published}</p> </div> </div> </a>`) : renderTemplate`<p class="opacity-70 col-span-full" data-astro-cid-jobkppd7>Could not load blog posts at this time. Please try again later.</p>`} </div> <div class="flex justify-center mt-8" data-astro-cid-jobkppd7> <a href="#contact" class="flex items-center justify-center px-6 py-3 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition gap-2" data-astro-cid-jobkppd7> <i class="fa-regular fa-circle-right" data-astro-cid-jobkppd7></i>
Blogs & Articles
</a> </div> </div> </section>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/LatestBlogs.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[var(--layout-primary)] text-[var(--text-primary)]"> <div class="container mx-auto px-6 py-4 text-center text-sm opacity-80">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Abhishek Srivastav. All rights reserved.
<br> <a href="https://github.com/theabhisheksrivastav/portfolio-v1" target="_blank" rel="noopener noreferrer" class="text-[var(--accent-secondary)] hover:underline">
Built with Astro 🚀
</a> </div> </footer>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portfolio", "portfolioname": "Abhishek Srivastav", "role": "Software Developer", "description": "Hi, I\u2019m Abhishek Srivastav \u2014 a software developer who loves turning complex problems into clean, elegant code. Welcome to my personal playground where ideas meet execution, projects come to life, and learning never stops." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "WhatIDo", $$WhatIDo, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FeaturedProjects", $$FeaturedProjects, {})} ${renderComponent($$result2, "LatestBlogs", $$LatestBlogs, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/pages/index.astro", void 0);

const $$file = "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
