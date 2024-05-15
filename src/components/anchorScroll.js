// components/AnchorScroll.js

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop,
    });
  }
};

export default scrollTo;
