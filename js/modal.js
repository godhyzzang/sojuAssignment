let modal = document.body.querySelector("#modalBackground");
let button = document.body.querySelector("#addButton");
let X = document.body.querySelector("#X");
let submit = document.body.querySelector("#submit");

function modal_show() {
  let result = modal.classList.toggle("modal_show"); //이 코드만 있어도 class에  modal_show가 추가됐다안됐다 그러긴 하네??
  modal.classList = result ? "modal_show" : "modal_hide";
  //   modal.classList.add("modal_show");
  //   modal.classList.remove("modal_hide");
}

button.addEventListener("click", modal_show);

//Moral창 닫기
function deleteModal() {
  modal.classList.remove("modal_show");
  modal.classList.add("modal_hide");
}

X.addEventListener("click", deleteModal);
