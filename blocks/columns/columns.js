export default function decorate(block) {
  console.log("*** columns ", block);
  block.className = "columns";

  const inner = block.firstElementChild;
  inner.className = "inner";

  [...inner.children].forEach((child, index) => {
    const isHeader = index === 0;

    if (isHeader) {
      child.className = "header-container";
      return;
    }
    console.log("*** child ", child);
  });
}
