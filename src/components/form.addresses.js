const clickFormAddresse = (ev) => {
  const target = ev.target;
  const id = target.dataset.form;
  const eventType = target.dataset.event;

  console.log(eventType);

  if(eventType === "edit") {
    document.getElementById('container-addresses-list').classList.add('hidden');
    document.getElementById('container-addresses-forms').classList.remove('hidden');
    document.querySelector(`.address-container[data-form="${id}"]`).classList.add('hidden');
    document.querySelector(`.form-edit-addresse[data-form="${id}"]`).classList.remove('hidden');
  }else if (eventType === "new"){
    document.getElementById('containers-new-addresse').classList.remove('hidden');
    document.getElementById('btn-new_addresse').classList.add('hidden');
  }
  else if (eventType === "cancel-new"){
    document.getElementById('containers-new-addresse').classList.add('hidden');
    document.getElementById('btn-new_addresse').classList.remove('hidden');
  }
  else {
    document.getElementById('container-addresses-list').classList.remove('hidden');
    document.getElementById('container-addresses-forms').classList.add('hidden');
    document.querySelector(`.address-container[data-form="${id}"]`).classList.remove('hidden');
    document.querySelector(`.form-edit-addresse[data-form="${id}"]`).classList.add('hidden');

  }

}


export const openFormEdit = () => {
  const buttonEdit = document.querySelectorAll('.edit-addresse');
  for (let button of buttonEdit) {
    button.addEventListener('click', (e) => {
      clickFormAddresse(e);
    })
  }
}
