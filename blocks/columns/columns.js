export default function decorate(block) {
  console.log("*** columns ", block);
  block.className = "columns";

  const inner = block.firstElementChild;
  inner.className = "inner";

  [...inner.children].forEach((child) => {
    console.log("*** child ", child);
  });
}
