export const forceNumeric = (e) => {
  e.target.value = e.target.value.replace(/[^\d]/,'')
}
