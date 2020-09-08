import Matter from "https://cdn.skypack.dev/pin/matter-js@v0.14.2-gHmqzMV14E3LQddwzv3S/min/matter-js.js";
import decomp from "https://cdn.skypack.dev/pin/poly-decomp@v0.3.0-RkBuTspoDAiBeHYQ6G4x/min/poly-decomp.js";

let RUNNING = true;

// play/pause animation
const pauseBtn = document.querySelector("#pause-animation");
pauseBtn.addEventListener("click", () => {
  RUNNING = !!RUNNING; // toggle pause

  if (RUNNING === true) {
    pauseBtn.innerHTML = "■";
  } else {
    pauseBtn.innerHTML = "▶︎";
  }
});

// matter.js
window.decomp = decomp;

const D = Matter.Vertices.fromPath(
  "38.18 22.06 31.89 38.49 14.79 44.24 0 44.24 0 22.06 10.37 22.06 10.37 35.08 14.79 35.08 23.95 31.7 27.3 22.13 23.95 12.52 14.79 9.17 10.37 9.17 10.37 22.06 0 22.06 0 0 14.79 0 31.92 5.66"
);
const F = Matter.Vertices.fromPath(
  "25.22 27.18 10.49 27.18 10.49 44.24 0 44.24 0 0 27.18 0 27.18 9.1 10.49 9.1 10.49 18.52 25.22 18.52"
);
const U = Matter.Vertices.fromPath(
  "33.13 0 33.13 30.34 28.74 41.31 16.83 45.2 4.39 41.33 0 30.34 0 0 11.19 0 11.19 29.45 12.71 34.16 17.01 35.77 21.37 34.16 22.89 29.45 22.89 0"
);
const d = Matter.Vertices.fromPath(
  "33.93 44.56 25.59 44.56 25.21 39 21.2 43.68 14.28 45.45 4.04 40.96 0 28.7 3.95 16.06 13.9 11.51 20 12.99 23.95 16.88 23.95 0 33.93 0 33.93 28.51 23.94 28.51 21.95 22.41 16.99 20.23 12.06 22.41 10.16 28.57 12.06 34.51 16.99 36.6 21.98 34.51 23.94 28.51 33.93 28.51"
);
const e = Matter.Vertices.fromPath(
  "32.62 19.04 9.36 19.29 9.42 14.24 23.26 14.11 21.02 9.46 16.37 7.8 11.82 9.44 9.42 14.24 9.36 19.29 11.73 24.66 16.69 26.43 22.88 22.64 32.04 22.7 27.21 31.01 16.81 34.45 4.68 29.68 0 17.07 4.65 4.71 16.69 0 28.95 5.52"
);
const g = Matter.Vertices.fromPath(
  "33.31 32.3 28.95 42.76 17.76 46.33 6.6 42.98 1.2 34.19 10.93 34.19 17.38 38.3 22.03 36.78 23.7 32.55 23.7 25.98 20.22 30.18 14.03 31.73 4.01 27.53 0 16.12 4.01 4.33 14.22 0 20.89 1.9 24.65 6.7 25.03 0.83 33.31 0.83 33.31 16.06 23.27 16.06 21.37 10.66 16.69 8.73 12.01 10.66 10.11 16.06 12.01 21.4 16.69 23.26 21.37 21.4 23.27 16.06 33.31 16.06"
);
const n = Matter.Vertices.fromPath(
  "29.64 33.3 19.34 33.3 19.34 14.47 15.11 9.22 11.54 10.77 10.18 15.23 10.18 33.31 0 33.31 0 1.01 8.28 1.01 8.72 7.33 12.2 2.02 18.96 0 26.83 3.19 29.64 11.94"
);
const o = Matter.Vertices.fromPath(
  "33.12 17.19 28.54 29.64 16.68 34.38 4.61 29.64 0 17.19 4.65 4.71 16.75 0 28.57 4.71 33.12 17.19 23.64 17.19 21.74 10.93 16.68 8.53 11.47 10.93 9.54 17.19 11.44 23.45 16.68 25.79 21.74 23.42 23.64 17.19"
);
const p = Matter.Vertices.fromPath(
  "29.93 29.61 19.91 34.07 13.75 32.58 9.86 28.5 9.86 43.92 0 43.92 0 17.26 9.93 17.26 11.89 23.29 16.82 25.34 21.72 23.26 23.65 17.19 21.72 11.06 16.82 8.97 11.89 11.06 9.93 17.13 0 17.13 0 0.88 8.47 0.88 8.79 6.69 12.96 1.79 19.79 0 29.9 4.49 33.88 17.13"
);
const r = Matter.Vertices.fromPath(
  "10.18 33.19 0 33.19 0 0.89 8.34 0.89 8.72 6.7 11.79 1.77 17.38 0 19.91 0.38 19.53 11.38 15.74 10.37 11.76 11.98 10.18 16.5"
);
const s = Matter.Vertices.fromPath(
  "27.588 19.701 28.26 23.7 27.336 28.307 24.56 31.76 19.623 34.074 14.66 34.63 9.209 33.919 4.74 31.79 1.568 28.376 0 23.83 8.97 23.7 10.696 26.35 14.66 27.56 17.88 26.64 19.08 24.02 17.607 21.584 14.97 20.86 9.98 20.29 6.139 19.384 3.34 17.54 1.513 14.469 1.07 11.31 2.172 6.402 4.77 3.16 8.864 0.839 14.35 0 19.49 0.724 23.92 3.19 26.801 6.754 28.19 11.06 19.15 11.19 17.509 8.177 14.16 7.08 10.94 8.09 9.74 10.68 10.721 12.69 13.66 13.65 18.46 14.16 22.335 14.939 25.809 16.987"
);
const t = Matter.Vertices.fromPath(
  "15.05 29.27 18.14 32.68 21.68 31.92 21.68 39.06 19.34 40.86 15.17 41.65 7.56 38.87 4.87 30.65 4.87 16.62 0 16.62 0 8.28 4.87 8.28 4.87 0 15.04 0 15.04 8.28 21.68 8.28 21.68 16.63 15.05 16.63"
);
const u = Matter.Vertices.fromPath(
  "29.57 32.3 21.29 32.3 20.72 26.04 17.34 31.35 17.34 31.35 10.68 33.31 2.747 30.178 0 20.42 0 0 10.18 0 10.18 19.47 11.35 23.04 14.6 24.33 18.04 22.84 19.4 18.64 19.4 0 29.57 0"
);
const v = Matter.Vertices.fromPath(
  "22.38 32.3 10.68 32.3 0 0 11 0 15.55 15.42 16.88 20.67 17.13 20.67 18.46 15.42 23.2 0 33.12 0"
);

const LETTER_OPTIONS = {
  render: {
    fillStyle: "#0f0",
  },
};

const letters = [
  Matter.Bodies.fromVertices(13.59, 23.57, F, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(40.485, 29.105, r, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(68.71, 29.51, o, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(104.37, 29.045, n, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(132.995, 25.935, t, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(176.07, 29.525, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(210.985, 29.045, n, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(246.705, 27.5, d, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(303.05, 23.57, D, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(341.341, 29.525, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(373.89, 29.54, v, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(406.88, 29.525, e, LETTER_OPTIONS),
  Matter.Bodies.rectangle(432.06, 23.35, 10.18, 44.68, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(458.01, 29.51, o, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(495.8, 34.47, p, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(531.95, 29.525, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(562.005, 29.105, r, LETTER_OPTIONS),

  Matter.Bodies.fromVertices(16.565, 121.18, U, LETTER_OPTIONS),
  Matter.Bodies.rectangle(45.375, 120.7, 10.37, 44.24, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(90.63, 120.7, D, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(128.93, 126.655, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(161.58, 129.585, s, LETTER_OPTIONS),
  Matter.Bodies.rectangle(185.615, 101.71, 10.49, 9.16, LETTER_OPTIONS),
  Matter.Bodies.rectangle(185.62, 126.68, 10.24, 32.3, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(211.875, 132.865, g, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(249.1, 126.175, n, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(284.015, 126.655, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(314.075, 126.235, r, LETTER_OPTIONS),

  Matter.Bodies.fromVertices(13.6, 216.35, F, LETTER_OPTIONS),
  Matter.Bodies.rectangle(36.6, 197.4, 10.49, 9.16, LETTER_OPTIONS),
  Matter.Bodies.rectangle(36.59, 222.35, 10.24, 32.3, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(62.8, 228.65, g, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(99.535, 222.855, u, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(130.035, 221.9, r, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(158, 222.35, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(188, 221.9, r, LETTER_OPTIONS),
  Matter.Bodies.rectangle(208.215, 219.75, 17.89, 8.66, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(236.5, 222.35, o, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(271.55, 222.85, u, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(300.75, 218.6, t, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(329.95, 222.35, e, LETTER_OPTIONS),
  Matter.Bodies.fromVertices(359.95, 221.9, r, LETTER_OPTIONS),
];

let scrolls = [0, 0];
let lastEvent = 0;

function scrollVelocity(newY) {
  const oldVelocity = scrolls[1] - scrolls[0];
  const newVelocity = newY - scrolls[1];
  const threshold = 10;

  scrolls = [scrolls[1], newY];

  // if scroll is too fast, it’s probably not mouse action
  if (newVelocity > window.innerHeight) {
    return undefined;
  }

  // if gaining momentum, return difference
  if (
    Math.abs(newVelocity) >= Math.abs(oldVelocity) &&
    Math.abs(newVelocity) >= threshold
  ) {
    return newVelocity;
  }

  // if losing momentum, do nothing
  return undefined;
}

const engine = Matter.Engine.create();
let render;

function scrollHandler() {
  if (RUNNING) {
    const deltaY = scrollVelocity(window.scrollY);
    const now = performance.now();

    // only scroll if gaining momentum and last event was > 1s ago
    if (deltaY && now - lastEvent >= 250) {
      lastEvent = performance.now();
      letters.forEach((body) => {
        Matter.Body.applyForce(body, body.position, {
          x: 0,
          y: -0.0001 * deltaY,
        });
      });
    }
  }
}

const height = window.innerHeight;
const width = window.innerWidth;
render = Matter.Render.create({
  element: document.querySelector("#matter-canvas"),
  engine,
  options: {
    background: "transparent",
    height,
    pixelRatio: window.devicePixelRatio || 1,
    width,
    wireframes: false,
  },
});
engine.world.gravity.scale = 0;

letters.forEach((body) => {
  Matter.Body.translate(body, { x: 300, y: 40 });
});

const centerX = width * 0.5;
const centerY = height * 0.5;
const wall = {
  isStatic: true,
  render: { fillStyle: "transparent" },
};

Matter.World.add(engine.world, [
  ...letters,
  Matter.Bodies.rectangle(centerX, -30, width, 100, wall),
  Matter.Bodies.rectangle(centerX, height + 30, width, 100, wall),
  Matter.Bodies.rectangle(-30, centerY, 100, height, wall),
  Matter.Bodies.rectangle(width + 30, centerY, 100, height, wall),
]);

Matter.Engine.run(engine);
Matter.Render.run(render);

window.addEventListener("scroll", scrollHandler);

// init
if (render) {
  if (RUNNING === true) {
    Matter.Render.run(render);
  } else {
    Matter.Render.stop(render);
  }
}
