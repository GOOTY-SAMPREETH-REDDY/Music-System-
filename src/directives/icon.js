export default {
  beforeMount(el, binding) {
    // Construct the icon class with proper syntax
    let iconClass = `fa fa-${binding.value}   text-xl`
    // Use proper quotes around class attribute and interpolate iconClass
    if (binding.arg === 'full') {
      iconClass = binding.value
    }
    if(binding.modifiers.right){
        iconClass+= ' float-right'
    }
    if(binding.modifiers.yellow){
        iconClass+=' text-yellow-400'
    }
    else{
        iconClass+='text-green-400'

    }
    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
