export default function decorate(block) {
  console.log("*** columns ", block);

  const inner = block.children;
  inner.className = "columns";

  [...block.children].forEach((child) => {
    console.log("*** child ", child);
  });
}
