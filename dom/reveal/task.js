const arrReveal = Array.from(document.querySelectorAll("div.reveal"));

let isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return (elementTop > 0 && elementTop < viewportHeight) || (elementBottom.bottom < viewportHeight && elementBottom.bottom > 0) ? true : false;
};

const onScrollToggle = function() {
  arrReveal.forEach((itemReveal) => {
    console.log(isInViewport(itemReveal));
    (isInViewport(itemReveal)) ? itemReveal.classList.add('reveal_active') : itemReveal.classList.remove('reveal_active');
  });
}
window.addEventListener('scroll', onScrollToggle);
