document.addEventListener('click' , e => {

  const dropDowns = document.querySelectorAll('[data-dropdown]');
  const isDropDownBtn = e.target.matches('[data-dropdown-button]')

  dropDowns.forEach(dropDown => {
    dropDownBtn = dropDown.querySelector('[data-dropdown-button]')

    if (!isDropDownBtn && e.target.closest('[data-dropdown]')) return

    if (e.target === dropDownBtn) {
      dropDown.classList.toggle('active')
    }

    else{
      dropDown.classList.remove('active')
     }
  })
})