document.addEventListener("DOMContentLoaded", () => {
  const ojtToggle = document.getElementById("ojtToggle");
  const ojtMenu = document.querySelector(".dropdown-content");

  if (ojtToggle && ojtMenu) {
    ojtToggle.addEventListener("click", (e) => {
      e.preventDefault();
      ojtMenu.classList.toggle("show");
      ojtToggle.classList.toggle("open"); // 🔽🔼 arrow toggle
    });

    document.addEventListener("click", (e) => {
      if (!ojtToggle.contains(e.target) && !ojtMenu.contains(e.target)) {
        ojtMenu.classList.remove("show");
        ojtToggle.classList.remove("open"); // reset arrow
      }
    });
  }
});

/* ===== TASK MODAL ===== */

function openModal(card) {
  document.getElementById("modalTitle").innerText =
    card.getAttribute("data-title");

  document.getElementById("modalImage").src =
    card.getAttribute("data-image");

  document.getElementById("modalDescription").innerText =
    card.getAttribute("data-description");

  document.getElementById("taskModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("taskModal").style.display = "none";
}

/* ===== DOCUMENT MODAL ===== */

function openDoc(card) {
  const image = card.getAttribute("data-image");
  const pdf = card.getAttribute("data-pdf");

  const viewer = document.getElementById("docViewer");
  viewer.innerHTML = "";

  if (pdf) {
    const iframe = document.createElement("iframe");
    iframe.src = pdf;
    iframe.style.width = "100%";
    iframe.style.height = "75vh";
    iframe.style.border = "none";
    viewer.appendChild(iframe);

    document.getElementById("downloadBtn").href = pdf;
  }

  else if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.className = "doc-preview";
    viewer.appendChild(img);

    document.getElementById("downloadBtn").href = image;
  }

  document.getElementById("docModal").style.display = "flex";
}


function closeDoc() {
  document.getElementById("docModal").style.display = "none";
}





/* ===== GLOBAL CLICK CLOSE ===== */

window.onclick = function (e) {
  const taskModal = document.getElementById("taskModal");
  const docModal = document.getElementById("docModal");

  if (e.target === taskModal) closeModal();
  if (e.target === docModal) closeDoc();
};
