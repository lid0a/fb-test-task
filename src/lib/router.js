import { observable } from '~/lib/voy';

export class HashRouter {
  #routes;
  #pathname;

  constructor(routes) {
    this.#routes = routes;
    this.#pathname = observable(window.location.hash.slice(1));
    window.addEventListener('hashchange', () => {
      this.#pathname.value = window.location.hash.slice(1);
    });
  }

  getRoutes() {
    return this.#routes;
  }

  getPathname() {
    return this.#pathname.value;
  }

  getParams() {
    const currentRoute = this.#routes.find((route) =>
      matches(route.path, this.#pathname.value),
    );
    if (!currentRoute) {
      return {};
    }
    const regex = /:[a-z0-9-_]+/gi;
    const matchesList = Array.from(currentRoute.path.match(regex) ?? []);
    const params = {};
    for (const match of matchesList) {
      const paramName = match.slice(1);
      const { hash } = window.location;
      const currentPath = hash.slice(1);
      const paramValue =
        currentPath.split('/')[currentRoute.path.split('/').indexOf(match)];
      params[paramName] = paramValue;
    }
    return params;
  }
}

export function Switch({ router }) {
  const routes = router.getRoutes();
  for (const route of routes) {
    if (matches(route.path, router.getPathname())) {
      return route.component();
    }
  }
  return routes.find((route) => route.path === '*')?.component() ?? null;
}

function matches(pattern, path) {
  if (pattern === path) {
    return true;
  }
  const patternSegments = pattern.split('/');
  for (let i = 0; i < patternSegments.length; ++i) {
    const segment = patternSegments[i];
    if (segment.startsWith(':') && segment.length > 1) {
      continue;
    }
    if (segment !== path.split('/')[i]) {
      return false;
    }
  }
  return true;
}
