// ====== RESERVA WHATSAPP ======
function reservar() {
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!data || !hora) {
        alert("Por favor, selecione a data e o horário.");
        return;
    }

    const dataFormatada = new Date(data).toLocaleDateString("pt-BR");

    const msg = `Olá! 👋
Gostaria de verificar disponibilidade para reserva da *Chácara Matos*.

📅 Data: ${dataFormatada}
⏰ Horário: ${hora}

Aguardo retorno, obrigado!`;

    const numero = "5579998426464";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}

// ====== SLIDER GALERIA ======
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

setInterval(() => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 3500);

// ====== CARROSSEL DE DEPOIMENTOS ======
let depoIndex = 0;
const depoTrack = document.querySelector(".depoimentos-track");
const depoPages = document.querySelectorAll(".depoimentos-page").length;

setInterval(() => {
    depoIndex = (depoIndex + 1) % depoPages;
    depoTrack.style.transform = `translateX(-${depoIndex * 100}%)`;
}, 4500);
