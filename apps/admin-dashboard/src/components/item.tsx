import React from "react";

export default function Item() {
  React.useState(() => {
    window.document.title = "Item Details";
  });

  return (
    <div>
      <h1>Item Details</h1>
    </div>
  );
}
