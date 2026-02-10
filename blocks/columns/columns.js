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

    const grandChild = child.children;

    [...grandChild].forEach((g, i) => {
      if (i === 0) return; // title

      const placeholder = g.querySelector("p em");

      if (placeholder) {
        console.log("*** placeholder ", placeholder);
        console.log("*** placeholder val ", placeholder.textContent);

        const input = document.createElement("input");
        input.placeholder = placeholder;
        input.required = true;
        input.type = "text";
        input.id = placeholder;
        input.name = placeholder;
        grandChild[i].append(input);
      }
      // const textArea = document.createElement('textarea')
    });

    console.log("*** child ", child);
  });
}
