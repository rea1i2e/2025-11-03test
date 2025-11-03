import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const splide = new Splide('.splide', {
  type: 'loop',
  autoWidth: true,
  autoplay: false,
});

let lastIsOverflow = null;
splide.on('overflow', function(isOverflow) {
  // 状態が変化したときのみ先頭へ戻す
  if (lastIsOverflow !== null && lastIsOverflow !== isOverflow) {
    splide.go(0);
  }
  lastIsOverflow = isOverflow;

  // 一度の代入で全体を上書き（既存値も維持）
  splide.options = {
    ...splide.options,
    type: isOverflow ? 'loop' : 'slide',
    arrows: isOverflow,
    pagination: isOverflow,
    drag: isOverflow,
    clones: isOverflow ? undefined : 0,
    autoplay: isOverflow,
  };

  // Autoplay の開始/停止を明示
  if (splide.Components && splide.Components.Autoplay) {
    if (isOverflow) {
      splide.Components.Autoplay.play();
    } else {
      splide.Components.Autoplay.pause();
    }
  }
});

splide.mount();

// 画像読み込み後にサイズ確定 → overflow 再評価
window.addEventListener('load', () => {
  splide.refresh();
});

document.addEventListener('DOMContentLoaded', () => {
  const li = document.querySelectorAll('.splide .splide__slide');
  console.log(li.length);
});
