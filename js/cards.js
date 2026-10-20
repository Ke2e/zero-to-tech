(function () {
  var cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  // 动画是锦上添花。anime.js 走的是 CDN，加载失败时直接跳过，
  // 卡片保持 CSS 里的默认可见状态，页面不会变成一片空白。
  if (typeof anime === "undefined" || typeof anime.animate !== "function") {
    console.warn("[cards] anime.js 未加载，跳过入场动画");
    return;
  }

  anime.animate(cards, {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),
    duration: 700,
    ease: "outBack",
  });
})();
