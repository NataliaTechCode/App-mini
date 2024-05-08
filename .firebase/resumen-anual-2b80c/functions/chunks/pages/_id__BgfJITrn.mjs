/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_9VsSpV_Y.mjs';
import 'kleur/colors';
import { useState } from 'preact/hooks';
import { jsxs, Fragment, jsx } from 'preact/jsx-runtime';
import 'clsx';
/* empty css                          */

function Counter() {
  const [counter, setCounter] = useState(0);
  return jsxs(Fragment, {
    children: [jsx("span", {
      class: "text-yellow-300 text-xl mr-4",
      children: counter
    }), jsx("button", {
      class: "border px-4 py-2 tex-xl",
      onClick: () => setCounter((counter2) => counter2 + 1),
      children: "+"
    }), jsx("button", {
      class: "border px-4 py-2 tex-xl",
      onClick: () => setCounter((counter2) => counter2 - 1),
      children: "-"
    })]
  });
}

const $$Astro$4 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex-row justify-center text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100" href="/#agenda"></a>`;
}, "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/components/HeaderButton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:px-6"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5cl tracking-tight font-extrabold text-white">SpaceX Launches🚀</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p> </div> ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/components/Counter", "client:component-export": "Counter" })} ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/components/Counter", "client:component-export": "Counter" })} <nav class="flex flex-col"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/" }, { "default": ($$result2) => renderTemplate`Ultimos Lanzamientos` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "default": ($$result2) => renderTemplate`about` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/oldest" }, { "default": ($$result2) => renderTemplate`Los mas viejos` })} </nav> </header>`;
}, "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/components/Header.astro", "self");

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray+900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/layouts/Layout.astro", void 0);

const getLaunchBy = async ({
  id
}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};
const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      Options: {
        sort: {
          date_unix: "asc"
        },
        limit: 20
      }
    })
  });
  const {
    docs: launches
  } = await res.json();
  return launches;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  console.log("launch");
  console.log(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">Launch #${launch?.flight_number}</h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/pages/launch/[id].astro", void 0);

const $$file = "D:/Proyectos-Codigo/ASTRO/miniApp/appmini/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLatestLaunches as g };
