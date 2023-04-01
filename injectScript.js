document.addEventListener('click', (el) => {
  console.log('element clicked')
  console.log('el.ctrlKey:', el.ctrlKey)
  console.log('el.target:', el.target)
  console.log('isEditableElement(el):', isEditableElement(el.target))

  if (isEditableElement(el.target)) {
    if (el.ctrlKey || el.metaKey) {
      el.target.value = ''
      el.target.innerText = ''
    }
  }
})

/* document.addEventListener('pointerup', (e) => {
  if (e.which == 2 || e.button == 4 ) {
    e.target.value = ''
    e.target.innerText = ''
  } 
})

document.addEventListener('pointerdown', (e) => {
  if (e.which == 2 || e.button == 4) {
    if (isEditableElement(e.target)) {
      e.target.focus()
      e.preventDefault()
      e.stopPropagation()
    }
  }
}) */

const isEditableElement = (el) =>{
  //console.log('el.instanceof', el instanceof)
  if (el instanceof HTMLElement && el.isContentEditable) return true;
  if (el instanceof HTMLInputElement) {
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
    if (/text|email|number|password|search|tel|url/.test(el.type || '')) {
      return !(el.disabled || el.readOnly);
    }
  }
  if (el instanceof HTMLTextAreaElement) return !(el.disabled || el.readOnly);
  return false;
}
