import React from "react";

const createElementFromHTML = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body;
};

const renderNodes = (node, key) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  const children = Array.from(node.childNodes).map((child, index) => (
    <React.Fragment key={`${key}-${index}`}>
      {renderNodes(child, `${key}-${index}`)}
    </React.Fragment>
  ));

  const elementProps = {};
  Array.from(node.attributes).forEach((attr) => {
    elementProps[attr.name] = attr.value;
  });

  return React.createElement(
    node.tagName.toLowerCase(),
    { ...elementProps, key },
    children
  );
};

const RenderHTML = ({ html }) => {
  const content = createElementFromHTML(html);

  return (
    <>
      {Array.from(content.childNodes).map((node, index) =>
        renderNodes(node, `node-${index}`)
      )}
    </>
  );
};

export default RenderHTML;
