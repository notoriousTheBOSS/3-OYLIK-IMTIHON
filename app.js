"use strict";

const modalFirst = document.querySelector(".modalpopupwrapper");
const modalSecond = document.querySelector(".modalpopupwrapper2");
const modal_btn = document.querySelector("#modal_btn");
const modal_btn2 = document.querySelector("#modal_btn2");
const blur_div = document.querySelector(".blur");
const close_btn = document.querySelector(".close");
const close_btn_2 = document.querySelector("#close_btn_2");
const close_btn_3 = document.querySelector("#close_btn_3");
const submit_button = document.querySelector("#submit_button");
const popup_input = document.querySelector(".popup-input");
const popup_input2 = document.querySelector("#popup_input2");

function renderFooter(data) {
    let res = "";
    data.forEach((el) => {
        res += `
         <div class="footer-card">
            <h3 class="footer-title">${el.title}</h3>
            <ul class="footer-ul">
                <li class="footer-li">
                    <a class="footer-a" href="">
                    ${el.content1 ? el.content1 : ""}</a>
                </li>
                <li class="footer-li">
                    <a class="footer-a" href="">${
                        el.content2 ? el.content2 : ""
                    }</a>
                </li>
                <li class="footer-li">
                    <a class="footer-a" href="">${
                        el.content3 ? el.content3 : ""
                    }</a>
                </li>
                <li class="footer-li">
                    <a class="footer-a" href="">${
                        el.content4 ? el.content4 : ""
                    }</a>
                </li>
            </ul>
         </div>
        `;
    });
    $("#footer-wrapper").innerHTML = res;
}

renderFooter(footer);

modal_btn2.addEventListener("click", () => {
    modalFirst.style.display = "flex";
    document.body.classList.add("stop_scrolling");
    modalpopup.style.zIndex = "945341132";
    blur_div.style.display = "block";
});

modal_btn.addEventListener("click", () => {
    modalFirst.style.display = "flex";
    document.body.classList.add("stop_scrolling");
    modalpopup.style.zIndex = "945341132";
    blur_div.style.display = "block";
});

close_btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalFirst.style.display = "none";
    document.body.classList.remove("stop_scrolling");
    blur_div.style.display = "none";
    modalpopup.style.zIndex = "-1";
});

submit_button.addEventListener("click", (e) => {
    if (popup_input.value != "" && popup_input2.value != "") {
        e.preventDefault();
        modalFirst.style.display = "none";
        document.body.classList.add("stop_scrolling");
        blur_div.style.display = "block";
        modalSecond.style.display = "flex";
        popup_input.value = "";
        popup_input2.value = "";
    } else {
        alert("Please fill the input correctly");
    }
});

close_btn_2.addEventListener("click", (e) => {
    e.preventDefault();
    modalSecond.style.display = "none";
    document.body.classList.remove("stop_scrolling");
    blur_div.style.display = "none";
    modalpopup.style.zIndex = "-1";
});

close_btn_3.addEventListener("click", (e) => {
    e.preventDefault();
    modalSecond.style.display = "none";
    document.body.classList.remove("stop_scrolling");
    blur_div.style.display = "none";
    modalpopup.style.zIndex = "-1";
});
