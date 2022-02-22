function confirmOrder() {
    const contact = confirm("Anda akan menghubungi Dewa Anggun");
    if (contact) {
        window.location = "https://api.whatsapp.com/send?phone=+628156958491";
    } else {
        alert("Terima kasih. Mungkin lain waktu :)");
    }
}