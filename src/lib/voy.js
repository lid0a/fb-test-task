export function h(tag, props = {}, children) {
  return {
    tag,
    props,
    children,
    element: null,
  };
}

export function mount(vnode, container) {
  if (!vnode) {
    return;
  }

  const element = createElement(vnode.tag);
  vnode.element = element;

  for (const [name, value] of Object.entries(vnode.props || {})) {
    setProp(element, name, value, null);
  }

  if (typeof vnode.children === 'string') {
    element.textContent = vnode.children;
  } else if (Array.isArray(vnode.children)) {
    for (const child of vnode.children) {
      mount(child, element);
    }
  }

  container.appendChild(element);
}

export function unmount(vnode) {
  if (vnode.element) {
    vnode.element.remove();
  }
}

export function patch(oldVnode, newVnode) {
  if (!oldVnode || !newVnode) {
    return;
  }

  const element = oldVnode.element;
  newVnode.element = element;

  if (oldVnode.tag !== newVnode.tag) {
    mount(newVnode, element.parentNode);
    unmount(oldVnode);
  } else {
    patchProps(element, oldVnode.props || {}, newVnode.props || {});

    if (typeof newVnode.children === 'string') {
      if (oldVnode.children !== newVnode.children) {
        element.textContent = newVnode.children;
      }
    } else if (Array.isArray(newVnode.children)) {
      const oldChildren = oldVnode.children || [];
      const newChildren = newVnode.children || [];
      const commonLength = Math.min(oldChildren.length, newChildren.length);

      for (let i = 0; i < commonLength; ++i) {
        patch(oldChildren[i], newChildren[i]);
      }

      if (newChildren.length < oldChildren.length) {
        for (const child of oldChildren.slice(newChildren.length)) {
          unmount(child);
        }
      } else if (newChildren.length > oldChildren.length) {
        for (const child of newChildren.slice(oldChildren.length)) {
          mount(child, element);
        }
      }
    }
  }
}

function patchProps(element, oldProps, newProps) {
  for (const name in oldProps) {
    if (!(name in newProps)) {
      if (isEventListener(name, oldProps[name])) {
        element.removeEventListener(
          name.slice(2).toLowerCase(),
          oldProps[name],
        );
      } else {
        element.removeAttribute(name);
      }
    }
  }

  for (const [name, value] of Object.entries(newProps)) {
    const oldValue = oldProps[name];
    if (oldValue !== value) {
      setProp(element, name, value, oldValue);
    }
  }
}

let activeEffect = null;

export function observable(value) {
  const subscribers = new Set();

  function subscribe() {
    if (activeEffect) {
      subscribers.add(activeEffect);
    }
  }

  function notify() {
    for (const subscriber of subscribers) {
      subscriber();
    }
  }

  return new proxify(
    { value },
    {
      get(target, prop, receiver) {
        subscribe();
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        Reflect.set(target, prop, value, receiver);
        notify();
        return true;
      },
    },
  );
}

export function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

function proxify(object, handler) {
  if (typeof object !== 'object') {
    return object;
  }
  for (const key in object) {
    object[key] = proxify(object[key], handler);
  }
  return new Proxy(object, handler);
}

function createElement(tagName) {
  const svgElements = [
    'svg',
    'g',
    'defs',
    'symbol',
    'use',
    'marker',
    'pattern',
    'mask',
    'clipPath',
    'foreignObject',
    'switch',
    'circle',
    'ellipse',
    'line',
    'rect',
    'polygon',
    'polyline',
    'path',
    'image',
    'use',
    'text',
    'tspan',
    'tref',
    'textPath',
    'title',
    'desc',
    'metadata',
    'linearGradient',
    'radialGradient',
    'meshGradient',
    'stop',
    'filter',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'feSpecularLighting',
    'feTile',
    'feTurbulence',
    'animate',
    'animateMotion',
    'animateTransform',
    'set',
    'mpath',
    'cursor',
    'view',
  ];
  if (svgElements.includes(tagName)) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  }
  return document.createElement(tagName);
}

function setProp(element, name, value, oldValue) {
  if (isEventListener(name, value)) {
    if (oldValue) {
      element.removeEventListener(name.slice(2).toLowerCase(), oldValue);
    }
    element.addEventListener(name.slice(2).toLowerCase(), value);
  } else if (typeof value === 'boolean') {
    if (value) {
      element.setAttribute(name, '');
    } else {
      element.removeAttribute(name);
    }
  } else if (name === 'class' || name === 'className') {
    element.className = value;
  } else if (name === 'style' && typeof value === 'object') {
    for (const styleName in oldValue || {}) {
      if (!(styleName in value)) {
        element.style[styleName] = '';
      }
    }
    for (const [styleName, styleValue] of Object.entries(value)) {
      element.style[styleName] = styleValue;
    }
  } else if (name === 'value') {
    if (element.value !== value) {
      element.value = value ?? '';
    }
  } else if (name === 'checked') {
    element.checked = !!value;
  } else if (name === 'selected') {
    element.selected = !!value;
  } else {
    element.setAttribute(name, value);
  }
}

function isEventListener(name, value) {
  return name.startsWith('on') && typeof value === 'function';
}
