// Hedef saat ve tarih ayarlaması
const targetDate = new Date();
targetDate.setHours(17);
targetDate.setMinutes(30);
targetDate.setSeconds(0);
targetDate.setMilliseconds(0);

// Geri sayım fonksiyonu
function countdown() {
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  // Zamanı hesapla
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Geri sayımı güncelle
  document.getElementById('countdown').innerHTML = `${hours} saat ${minutes} dakika ${seconds} saniye`;

  // Eğer hedef tarih geçtiyse
  if (difference < 0) {
    document.getElementById('countdown').innerHTML = "Geri sayım tamamlandı!";
    clearInterval(countdownInterval);
  }
}

// Her saniyede geri sayımı güncelle
const countdownInterval = setInterval(countdown, 1000);
