export const init = (fabElement, wrapperElement) => {
  let oldPositionX, oldPositionY;

  const move = (e) => {
    if (!fabElement.classList.contains("fab-active")) {
      if (e.type === "touchmove") {
        fabElement.style.top = e.touches[0].clientY + "px";
        fabElement.style.left = e.touches[0].clientX + "px";
      } else {
        fabElement.style.top = e.clientY + "px";
        fabElement.style.left = e.clientX + "px";
      }
    }
  };

  const mouseDown = (e) => {
    oldPositionY = fabElement.style.top;
    oldPositionX = fabElement.style.left;
    if (e.type === "mousedown") {
      window.addEventListener("mousemove", move);
    } else {
      window.addEventListener("touchmove", move);
    }

    fabElement.style.transition = "none";
  };

  const mouseUp = (e) => {
    if (e.type === "mouseup") {
      window.removeEventListener("mousemove", move);
    } else {
      window.removeEventListener("touchmove", move);
    }
    snapToSide(e);
    fabElement.style.transition = "0.3s ease-in-out left";
  };

  const snapToSide = (e) => {
    const windowWidth = window.innerWidth;
    let currPositionX, currPositionY;
    if (e.type === "touchend") {
      currPositionX = e.changedTouches[0].clientX;
      currPositionY = e.changedTouches[0].clientY;
    } else {
      currPositionX = e.clientX;
      currPositionY = e.clientY;
    }
    if (currPositionY < 50) {
      fabElement.style.top = 50 + "px";
    }
    if (currPositionY > wrapperElement.clientHeight - 50) {
      fabElement.style.top = wrapperElement.clientHeight - 50 + "px";
    }
    if (currPositionX < windowWidth / 2) {
      fabElement.style.left = 30 + "px";
      fabElement.classList.remove("right");
      fabElement.classList.add("left");
    } else {
      fabElement.style.left = windowWidth - 50 + "px";
      fabElement.classList.remove("left");
      fabElement.classList.add("right");
    }
  };

  fabElement.addEventListener("mousedown", mouseDown);

  fabElement.addEventListener("mouseup", mouseUp);

  fabElement.addEventListener("touchstart", mouseDown);

  fabElement.addEventListener("touchend", mouseUp);

  fabElement.addEventListener("click", (e) => {
    if (
      oldPositionY === fabElement.style.top &&
      oldPositionX === fabElement.style.left
    ) {
      fabElement.classList.toggle("fab-active");
    }
  });
};
