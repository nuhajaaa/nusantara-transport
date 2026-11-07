
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileNav = document.getElementById('mobileNav');
  burgerBtn.addEventListener('click', function(){ mobileNav.classList.toggle('open'); });
  mobileNav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ mobileNav.classList.remove('open'); }); });

  document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    var nama = document.getElementById('nama').value.trim();
    var tanggal = document.getElementById('tanggal').value;
    var armadaEl = document.getElementById('jenis_armada') || document.querySelector('#bookingForm select');
    var armada = armadaEl ? armadaEl.value : '';
    var jumlah = document.getElementById('jumlah').value.trim();
    var rute = document.getElementById('rute').value.trim();
    var catatan = document.getElementById('catatan').value.trim();

    var lines = [
      'Halo Nusantara Transport, saya ingin memesan armada.',
      '',
      'Nama: ' + nama,
      'Tanggal keberangkatan: ' + (tanggal || '-'),
      'Jenis armada: ' + (armada || '-'),
      'Jumlah penumpang: ' + (jumlah || '-'),
      'Rute/tujuan: ' + rute
    ];
    if (catatan) lines.push('Catatan: ' + catatan);

    var msg = encodeURIComponent(lines.join('\n'));
    window.open('https://wa.me/6285733812033?text=' + msg, '_blank');
  });
