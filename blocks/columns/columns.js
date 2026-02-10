export default function decorate(block) {
  console.log("*** columns ", block);

  const inner = block.children.child;
  inner.className = "columns";

  [...inner].forEach((child) => {
    console.log("*** child ", child);
  });
}
