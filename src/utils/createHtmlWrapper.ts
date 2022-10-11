/**
 * function accepts an ID, and will craete an element
 * and set an id property to the created element with the
 * provided ID
 * @return HTMLDivElement with id property identical with the proovided ID
 */
export function createHtmlWrapper(id: string) {
  const wrapper = document.createElement("div");
  // wrapper.setAttribute('id', id)
  wrapper.id = id;
  document.body.appendChild(wrapper);
  return wrapper;
}
