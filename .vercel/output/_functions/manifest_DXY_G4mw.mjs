import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_hy5EYIg1.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bd4FOPHP.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/","cacheDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/node_modules/.astro/","outDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/dist/","srcDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/","publicDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/public/","buildClientDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/dist/client/","buildServerDir":"file:///D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/add-contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/add-contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"add-contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/add-contact.js","pathname":"/api/add-contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/add-testimonial","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/add-testimonial\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"add-testimonial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/add-testimonial.js","pathname":"/api/add-testimonial","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.2sUaTE_M.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.2sUaTE_M.css"},{"type":"inline","content":".blog-card-image[data-astro-cid-jobkppd7]{aspect-ratio:16 / 9;-o-object-fit:cover;object-fit:cover}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/add-contact@_@js":"pages/api/add-contact.astro.mjs","\u0000@astro-page:src/pages/api/add-testimonial@_@js":"pages/api/add-testimonial.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DXY_G4mw.mjs","D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D1Nx6F1i.mjs","D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.qOabSHjx.js","D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts":"_astro/Testimonials.astro_astro_type_script_index_0_lang.CVF05bkK.js","D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts":"_astro/Sidebar.astro_astro_type_script_index_0_lang.-35tBbuL.js","D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Theme.astro?astro&type=script&index=0&lang.ts":"_astro/Theme.astro_astro_type_script_index_0_lang.DhQHUH8i.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const e=new Date,a=e.getFullYear()-2024+(e.getMonth()>=8?1:0);document.getElementById(\"experience\").textContent=a;fetch(\"https://api.github.com/users/theabhisheksrivastav\").then(t=>t.json()).then(t=>{t.avatar_url&&(document.getElementById(\"profile-image\").src=t.avatar_url)}).catch(t=>console.error(\"Failed to fetch GitHub avatar:\",t));"],["D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"testimonials-grid\");async function n(){try{const t=await fetch(\"/api/add-testimonial\");if(!t.ok)throw new Error(\"Failed to fetch testimonials\");const a=await t.json();s.innerHTML=a.map(e=>`\n          <div class=\"p-6 bg-[var(--layout-accent)] rounded-2xl shadow-lg\">\n            <p class=\"italic mb-4\">“${e.testimonial}”</p>\n            <h3 class=\"font-bold\">${e.name}</h3>\n            <p class=\"text-sm opacity-75\">${e.title||\"\"}</p>\n          </div>\n        `).join(\"\")}catch(t){console.error(\"Failed to fetch testimonials:\",t),s.innerHTML=\"<p class='col-span-full text-center text-red-500'>Failed to load testimonials.</p>\"}}n();const i=document.getElementById(\"testimonial-form\");i?.addEventListener(\"submit\",async t=>{t.preventDefault();const a=Object.fromEntries(new FormData(i).entries());(await fetch(\"/api/add-testimonial\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)})).ok?(document.getElementById(\"testimonial-modal\").classList.add(\"hidden\"),document.getElementById(\"thankyou-modal\").classList.remove(\"hidden\"),i.reset()):alert(\"Error submitting testimonial.\")});"],["D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"mobile-toggle\"),c=document.getElementById(\"mobile-menu\");d&&c&&d.addEventListener(\"click\",()=>{c.classList.toggle(\"hidden\")});document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.documentElement,n=document.querySelectorAll(\".layout-switch\");!e.classList.contains(\"layout-light\")&&!e.classList.contains(\"layout-dark\")&&e.classList.add(\"layout-light\");const s=localStorage.getItem(\"layout\");s&&(e.classList.remove(\"layout-light\",\"layout-dark\"),e.classList.add(s));function i(a){e.classList.remove(\"layout-light\",\"layout-dark\"),e.classList.add(a?\"layout-dark\":\"layout-light\"),localStorage.setItem(\"layout\",a?\"layout-dark\":\"layout-light\"),n.forEach(r=>r.checked=a)}n.forEach(a=>{a.checked=e.classList.contains(\"layout-dark\"),a.addEventListener(\"change\",()=>i(a.checked))})});const o=document.getElementById(\"hire-form\"),m=document.querySelectorAll(\".hire-me\"),t=document.getElementById(\"hire-modal\"),l=document.getElementById(\"close-modal\");function u(){t&&!t.classList.contains(\"hidden\")&&t.classList.add(\"hidden\")}d&&d.addEventListener(\"click\",u);m.forEach(e=>{e.addEventListener(\"click\",()=>{t&&t.classList.remove(\"hidden\")})});l&&l.addEventListener(\"click\",()=>{t&&t.classList.add(\"hidden\")});t&&t.addEventListener(\"click\",e=>{e.target===t&&t.classList.add(\"hidden\")});o instanceof HTMLFormElement&&o.addEventListener(\"submit\",async e=>{e.preventDefault();const n=Object.fromEntries(new FormData(o).entries());try{(await fetch(\"/api/add-contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(n)})).ok?(alert(\"Message sent successfully!\"),o.reset(),t&&t.classList.add(\"hidden\")):alert(\"Something went wrong. Please try again.\")}catch(s){console.error(s),alert(\"Network error.\")}});"],["D:/Projects/Portfolio/v1/frontend/astro/portfolio-v1/src/components/Theme.astro?astro&type=script&index=0&lang.ts","const s=[\"theme-pikachu\",\"theme-charizard\",\"theme-lucario\",\"theme-caterpie\",\"theme-darkrai\",\"theme-togepi\",\"theme-gengar\"],c=document.documentElement,l=localStorage.getItem(\"theme\")||\"theme-pikachu\";c.classList.add(l);const t=document.getElementById(\"theme-panel\"),n=document.getElementById(\"theme-panel-toggle\"),m=document.getElementById(\"theme-panel-close\");n.addEventListener(\"click\",()=>{t.classList.toggle(\"hidden\")});m.addEventListener(\"click\",()=>{t.classList.add(\"hidden\")});document.querySelectorAll(\".theme-btn\").forEach(e=>{e.addEventListener(\"click\",()=>{const a=e.dataset.theme;s.forEach(d=>c.classList.remove(d)),c.classList.add(a),localStorage.setItem(\"theme\",a),t.classList.add(\"hidden\")})});document.addEventListener(\"click\",e=>{!t.contains(e.target)&&!n.contains(e.target)&&t.classList.add(\"hidden\")});"]],"assets":["/_astro/contact.2sUaTE_M.css","/favicon.svg","/icon.ico"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"+lBBILDInRgQOgyAVluo6WQLfgbyOMJQRqY4TCCLJHk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
