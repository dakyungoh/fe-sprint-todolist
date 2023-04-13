import React from "react";

function NewWindowComponent() {
  const handleClick = () => {
    const newWindow = window.open("/new-page", "_blank");
    newWindow.document.write("<h1>To-do Application!</h1>");
  };

  return (
    <div>
      <button onClick={handleClick}>새 창 열기</button>
    </div>
  );
}

export default NewWindowComponent;
