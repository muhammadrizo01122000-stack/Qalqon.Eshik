var al = document.getElementById("al");
function show(t, x) {
  document.getElementById("at").textContent = t;
  document.getElementById("ax").textContent = x;
  al.classList.add("on");
}
document.addEventListener("click", function (e) {
  var bt = e.target.closest(".btn");
  if (bt) {
    var r = bt.getBoundingClientRect(),
      s = document.createElement("span");
    s.className = "rp";
    s.style.left = e.clientX - r.left + "px";
    s.style.top = e.clientY - r.top + "px";
    bt.appendChild(s);
    setTimeout(function () {
      s.remove();
    }, 700);
  }
  var b = e.target.closest("[data-a]");
  if (b) {
    show(b.getAttribute("data-t"), b.getAttribute("data-a"));
    return;
  }
  if (e.target.closest("[data-x]") || e.target === al) {
    al.classList.remove("on");
    return;
  }
  if (e.target.id === "s") {
    var n = document.getElementById("n").value.trim(),
      p = document.getElementById("p").value.trim();
    if (p.length < 7) {
      show(
        "Raqam kerak",
        "Iltimos, telefon raqamingizni toʻliq kiriting, shunda usta siz bilan bogʻlana oladi.",
      );
      return;
    }
    show(
      "Rahmat" + (n ? ", " + n : "") + "!",
      "Soʻrovingiz qabul qilindi. Usta 15 daqiqa ichida qoʻngʻiroq qiladi.",
    );
  }
});