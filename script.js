// ============================================
// 1. STATE / VARIABLE PENYIMPAN VOTE
// ============================================
let geatsVotes = 0;
let gotchardVotes = 0;
let gavvVotes = 0;
let zeztzVotes = 0;
let totalVotes = 0;

// ============================================
// 2. MENGAMBIL ELEMEN DOM (QUERY SELECTOR)
// ============================================
// Tombol Vote
const geatsBtn = document.querySelector("#geats-btn");
const gotchardBtn = document.querySelector("#gotchard-btn");
const gavvBtn = document.querySelector("#gavv-btn");
const zeztzBtn = document.querySelector("#zeztz-btn");

// Teks Jumlah Vote
const geatsVoteText = document.querySelector("#geats-votes");
const gotchardVoteText = document.querySelector("#gotchard-votes");
const gavvVoteText = document.querySelector("#gavv-votes");
const zeztzVoteText = document.querySelector("#zeztz-votes");

// Teks Persentase Vote
const geatsPctText = document.querySelector("#geats-pct");
const gotchardPctText = document.querySelector("#gotchard-pct");
const gavvPctText = document.querySelector("#gavv-pct");
const zeztzPctText = document.querySelector("#zeztz-pct");

// Total Vote & Card Elements (untuk efek boom)
const totalVotesText = document.querySelector("#total-votes");
const geatsCard = document.querySelector("#geats-card");
const gotchardCard = document.querySelector("#gotchard-card");
const gavvCard = document.querySelector("#gavv-card");
const zeztzCard = document.querySelector("#zeztz-card");

// ============================================
// 3. FUNGSI UNTUK MENGHITUNG & MEMPERBARUI PERSENTASE
// ============================================
function updateAllPercentages() {
  if (totalVotes === 0) {
    geatsPctText.textContent = "0%";
    gotchardPctText.textContent = "0%";
    gavvPctText.textContent = "0%";
    zeztzPctText.textContent = "0%";
    return;
  }

  // Menghitung persentase dengan rumus: (vote / total) * 100
  const geatsPct = Math.round((geatsVotes / totalVotes) * 100);
  const gotchardPct = Math.round((gotchardVotes / totalVotes) * 100);
  const gavvPct = Math.round((gavvVotes / totalVotes) * 100);
  const zeztzPct = Math.round((zeztzVotes / totalVotes) * 100);

  // Menampilkan hasil ke halaman HTML
  geatsPctText.textContent = geatsPct + "%";
  gotchardPctText.textContent = gotchardPct + "%";
  gavvPctText.textContent = gavvPct + "%";
  zeztzPctText.textContent = zeztzPct + "%";
}

// ============================================
// 4. FUNGSI UNTUK MEMICU EFEK ANIMASI BOOM
// ============================================
function triggerBoomEffect(cardElement) {
  cardElement.classList.remove("boom");
  void cardElement.offsetWidth; // Memaksa browser merender ulang (reflow) agar animasi bisa diputar berulang
  cardElement.classList.add("boom");

  setTimeout(function () {
    cardElement.classList.remove("boom");
  }, 900);
}

// ============================================
// 5. EVENT LISTENERS UNTUK SETIAP TOMBOL VOTE
// ============================================

// Klik Vote Geats
geatsBtn.addEventListener("click", function () {
  geatsVotes++;
  totalVotes++;
  geatsVoteText.textContent = geatsVotes;
  totalVotesText.textContent = totalVotes;
  updateAllPercentages();
  triggerBoomEffect(geatsCard);
});

// Klik Vote Gotchard
gotchardBtn.addEventListener("click", function () {
  gotchardVotes++;
  totalVotes++;
  gotchardVoteText.textContent = gotchardVotes;
  totalVotesText.textContent = totalVotes;
  updateAllPercentages();
  triggerBoomEffect(gotchardCard);
});

// Klik Vote Gavv
gavvBtn.addEventListener("click", function () {
  gavvVotes++;
  totalVotes++;
  gavvVoteText.textContent = gavvVotes;
  totalVotesText.textContent = totalVotes;
  updateAllPercentages();
  triggerBoomEffect(gavvCard);
});

// Klik Vote Zeztz
zeztzBtn.addEventListener("click", function () {
  zeztzVotes++;
  totalVotes++;
  zeztzVoteText.textContent = zeztzVotes;
  totalVotesText.textContent = totalVotes;
  updateAllPercentages();
  triggerBoomEffect(zeztzCard);
});

// Ambil elemen tombol reset
const resetBtn = document.querySelector("#reset-btn");

// Logic Reset Voting saat tombol diklik
resetBtn.addEventListener("click", function () {
  // 1. Kembalikan semua variabel counter ke 0
  geatsVotes = 0;
  gotchardVotes = 0;
  gavvVotes = 0;
  zeztzVotes = 0;

  // 2. Perbarui tampilan angka vote masing-masing Rider ke 0
  geatsVoteText.textContent = 0;
  gotchardVoteText.textContent = 0;
  gavvVoteText.textContent = 0;
  zeztzVoteText.textContent = 0;

  // 3. Perbarui tampilan persentase ke 0%
  geatsPctText.textContent = "0%";
  gotchardPctText.textContent = "0%";
  gavvPctText.textContent = "0%";
  zeztzPctText.textContent = "0%";

  // 4. Perbarui Total Votes ke 0
  totalVotes = 0;
  totalVotesText.textContent = 0;
});