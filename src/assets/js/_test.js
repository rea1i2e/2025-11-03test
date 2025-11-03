console.log('test.js');
/**
 * テスト用jsファイル
 * クリックしたらテキストが赤色に変更
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  const jsTest = document.querySelector('.js-test');
  jsTest.addEventListener('click', () => {
    jsTest.style.color = 'red';
  });
});