document.getElementById('buy-tour-btn').addEventListener('click', function() {
    alert('Cảm ơn bạn đã đặt tour! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
});

document.getElementById('contact-zalo-btn').addEventListener('click', function() {
    const phoneNumber = '0359821310'; // Thay đổi số điện thoại của bạn
    const zaloLink = `https://zalo.me/${phoneNumber}`;
    window.open(zaloLink, '_blank');
});
document.addEventListener("DOMContentLoaded", function() {
    const buyTourBtn = document.getElementById('buy-tour-btn');
    const contactZaloBtn = document.getElementById('contact-zalo-btn');
    const toggleItineraryBtn = document.getElementById('toggle-itinerary');
    const itineraryDiv = document.getElementById('itinerary');

    buyTourBtn.addEventListener('click', function() {
        alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.');
    });

    contactZaloBtn.addEventListener('click', function() {
        alert('Vui lòng thêm số Zalo của chúng tôi: 0123456789 để liên hệ!');
    });

    toggleItineraryBtn.addEventListener('click', function() {
        if (itineraryDiv.style.display === "none") {
            itineraryDiv.style.display = "block";
            toggleItineraryBtn.textContent = "Ẩn Lịch Trình";
        } else {
            itineraryDiv.style.display = "none";
            toggleItineraryBtn.textContent = "Xem Lịch Trình";
        }
    });
});
// lịch chuyến đi
// JavaScript để xử lý modal
const modal = document.getElementById("itineraryModal");
const btn = document.getElementById("toggle-itinerary");
const span = document.getElementById("closeModal");

// Khi người dùng nhấn nút, mở modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Khi người dùng nhấn vào x, đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấn ở bên ngoài modal, đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}