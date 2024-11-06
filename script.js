const menubarBtn = document.querySelector('.header-top i')
menubarBtn.addEventListener("click", function() {
    document.querySelector('.header-top ul').classList.toggle('active')
})

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    const destination = document.getElementById("destination").value;
    const people = document.getElementById("people").value;

    if (destination !== "#" && people > 0) {
        // Chuyển hướng đến trang chi tiết (cần tạo các trang tương ứng)
        const destinationMap = {
            tpsonla: "tpsonla.html",
            bacyen: "bacyen.html",
            mocchau: "mocchau.html",
            muongla: "muongla.html",
            phuyen: "phuyen.html",
            quynhnhai: "quynhnhai.html",
            thuanchau: "thuanchau.html",
            vanho: "vanho.html",
            songma: "Songma.html"
        };

        const url = destinationMap[destination];
        if (url) {
            window.location.href = url; // Chuyển hướng đến trang tương ứng
        }
    } else {
        alert("Vui lòng chọn địa điểm hợp lệ và số người.");
    }
});