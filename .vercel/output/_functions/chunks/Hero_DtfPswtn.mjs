import { e as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate } from './astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import 'clsx';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-16 px-6 md:px-20 bg-[var(--layout-background)] text-[var(--text-primary)]"> <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"> <!-- Text Content --> <div class="flex-1"> <h1 class="text-3xl font-bold mb-4">Abhishek Srivastav</h1> <h3 class="text-lg md:text-2xl font-semibold mb-4">Software Engineer</h3> <p class="md:text-lg leading-relaxed mb-4 leading-relaxed text-justify">
a software engineer who loves writing clean, scalable code. I’ve been building web and mobile applications for over <span id="experience"></span> years, working with technologies like <strong>JavaScript, Node.js, React, React Native, Python, Django, Flask, Laravel, and Spring Boot</strong>.
</p> <p class="md:text-lg leading-relaxed mb-4">
When I’m not coding, I write technical <a href="" class="text-[var(--layout-accent)]">blogs</a>, contribute to open-source <a href="" class="text-[var(--layout-accent)]">projects</a>, and figure out ways to make code explanations less boring.
</p> <a href="#contact" class="inline-block mt-4 px-6 py-3 bg-[var(--accent-primary)] text-white font-semibold rounded-lg hover:bg-[var(--text-primary)] transition"> <i class="fa-solid fa-laptop-code text-lg"></i>
View Portfolio
</a> <a href="#contact" class="inline-block mt-4 px-6 py-3 bg-[var(--accent-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--text-primary)] transition"> <i class="fa-solid fa-book text-lg"></i>
View Resume
</a> </div> <!-- Image / Profile --> <div class="flex-shrink-0"> <img id="profile-image" src="" alt="Abhishek Srivastav" class="w-64 h-64 rounded-lg shadow-lg object-cover"> </div> </div> ${renderScript($$result, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Hero.astro", void 0);

export { $$Hero as $ };
