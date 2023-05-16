function addElement(name, url) {
  let div_img = document.createElement("div"); //div앞 "" 로 가둬야함

  div_img.classList.add("pic");

  div_img.innerHTML = `
      <img src="${url}"/> 
      <span>${name}</span>
      `;
  document.querySelector("#section").appendChild(div_img);

  // let img_name = document.body.createElement(span);
  // div.appendChild(img_name);
}

function dataSumbit(e) {
  e.preventDefault(); //submit되면 새로고침이 자동적으로 되니 방지해주기.
  let img_name = document.querySelector("#name").value;
  let img_url = document.querySelector("#url").value;

  addElement(img_name, img_url);

  deleteModal();
}

document
  .getElementById("modalBackground")
  .addEventListener("submit", dataSumbit);
