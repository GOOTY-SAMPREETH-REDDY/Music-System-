export default {
  beforeMount(el, binding) {
    // Construct the icon class with proper syntax
    let iconClass = `fa fa-${binding.value.icon} text-green-400  text-xl`
    // Use proper quotes around class attribute and interpolate iconClass
   
    if (binding.value.right) {
      iconClass += ' float-right'
    }
   
    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}