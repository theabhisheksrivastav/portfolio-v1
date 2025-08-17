/* empty css                                   */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_hy5EYIg1.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_DtfPswtn.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}`;
}, "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/pages/contact.astro", void 0);

const $$file = "D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
