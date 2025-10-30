function showCustomAlert(message, isError = false) {
    const oldAlert = document.getElementById('customAlert');
    if (oldAlert) {
        oldAlert.remove();
    }

    const alertModal = document.createElement('div');
    alertModal.id = 'customAlert';
    alertModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        backdrop-filter: blur(5px);
        opacity: 0;
        transition: opacity 0.2s ease;
    `;

    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        background-color: #ffffff;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        text-align: center;
        max-width: 90%;
        width: 400px;
        transform: scale(0.9);
        transition: transform 0.2s ease;
    `;

    const alertMessage = document.createElement('p');
    alertMessage.textContent = message;
    alertMessage.style.cssText = `
        font-size: 1.1rem;
        color: ${isError ? '#D9534F' : '#3A4A3A'};
        margin: 0 0 1.5rem 0;
        line-height: 1.6;
    `;

    const alertButton = document.createElement('button');
    alertButton.textContent = 'OK';
    alertButton.className = 'btn'; 
    alertButton.style.padding = '0.8rem 2rem';
    
    alertButton.onclick = () => {
        alertModal.style.opacity = '0';
        alertBox.style.transform = 'scale(0.9)';
        setTimeout(() => alertModal.remove(), 200);
    };

    alertBox.appendChild(alertMessage);
    alertBox.appendChild(alertButton);
    alertModal.appendChild(alertBox);
    document.body.appendChild(alertModal);

    setTimeout(() => {
        alertModal.style.opacity = '1';
        alertBox.style.transform = 'scale(1)';
    }, 10);
}

const studentData = [
    { id: 1, name: "Afifah Azzahra", ttl: "Padang, 13 Juli 2006", quote: "Siapa sma?", photo: "assets/siswa/01.webp" },
    { id: 2, name: "Aisyah Nawa Pratiwi", ttl: "Padang, 03 September 2005", quote: "You all bikin my otak samak, you all need therapy.", photo: "assets/siswa/02.webp" },
    { id: 3, name: "Akhbar Aldzaky Yose", ttl: "Padang, 27 Juli 2006", quote: "Menerima kenyataan tanpa menyalahkan keadaan.", photo: "assets/siswa/03.webp" },
    { id: 4, name: "Albadri Rehen", ttl: "Padang, 24 Januari 2006", quote: "Wubba lubba dub dub!", photo: "assets/siswa/04.webp" },
    { id: 5, name: "Asyifa Zauhara", ttl: "Pematang Siantar, 07 September 2006", quote: "Haloinicipa.", photo: "assets/siswa/05.webp" },
    { id: 6, name: "Athira Tsaabitha Widianto", ttl: "Palembang, 23 Mei 2007", quote: "Dek jgn belajar grammar biar diajarin jake saja.", photo: "assets/siswa/06.webp" },
    { id: 7, name: "Aulia Radzaky Aria", ttl: "Padang, 03 Juni 2006", quote: "Tetaplah berusaha walaupun nt.", photo: "assets/siswa/07.webp" },
    { id: 8, name: "Azra Nailatul Izzah", ttl: "Padang, 10 Agustus 2006", quote: "Akhirnya quotes aku dibaca juga.", photo: "assets/siswa/08.webp" },
    { id: 9, name: "Berlian Nofranda", ttl: "Padang, 10 November 2006", quote: "Jujur aku udah siap kok jadi kaya ya Allah.", photo: "assets/siswa/09.webp" },
    { id: 10, name: "Callista Viandra R", ttl: "Padang, 12 Oktober 2006", quote: "First u Learn, then u remove the L.", photo: "assets/siswa/10.webp" },
    { id: 11, name: "Dhani Febrian", ttl: "Padang, 09 April 2006", quote: "Hidup adalah perjalanan, bukan tujuan.", photo: "assets/siswa/11.webp" },
    { id: 12, name: "Dimas Athar Hakim", ttl: "Padang, 28 Agustus 2006", quote: "There is a time to hope and a time to decide.", photo: "assets/siswa/12.webp" },
    { id: 13, name: "Dzikra Fathya Rahmaini", ttl: "Padang, 30 Juni 2006", quote: "Tetap bersyukur walaupun tiap hari ya allah terus.", photo: "assets/siswa/13.webp" },
    { id: 14, name: "Faaiqah Rabbaanii", ttl: "Padang, 01 September 2006", quote: "Harta, tahta, kamu yg baca.", photo: "assets/siswa/14.webp" },
    { id: 15, name: "Fadia Arfis", ttl: "Padang, 30 Maret 2006", quote: "Udah coba mengambis, tapi malah menangis.", photo: "assets/siswa/15.webp" },
    { id: 16, name: "Farel Trisnal", ttl: "Padang, 29 September 2006", quote: "Perbaiki sholatmu maka Allah akan perbaiki hidupmu.", photo: "assets/siswa/16.webp" },
    { id: 17, name: "Farhana Aqiilah", ttl: "Karawang, 27 April 2006", quote: "And if you never bleed, you're never gonna grow.", photo: "assets/siswa/17.webp" },
    { id: 18, name: "Fauziah Winovic", ttl: "Padang, 20 Maret 2006", quote: "Nun mati bertemu ain, ain terkejut.", photo: "assets/siswa/18.webp" },
    { id: 19, name: "Feldiaz Harmen", ttl: "Padang, 07 Januari 2005", quote: "Jangan lari dari kenyataan, lari bila dikejar orang gila.", photo: "assets/siswa/19.webp" },
    { id: 20, name: "Habibi Putra Rizqullah", ttl: "Pekanbaru, 01 Mei 2006", quote: "Akhirnya, gweh lulus dari sma ii.", photo: "assets/siswa/20.webp" },
    { id: 21, name: "Kesya Mikhailova", ttl: "Tanjung Pinang, 01 Juli 2005", quote: "Bingung mau jadi shinigami, quincy, atau hollow.", photo: "assets/siswa/21.webp" },
    { id: 22, name: "Kesya Yuliandina", ttl: "Padang, 25 Juli 2006", quote: "Banyak drama? operet aja.", photo: "assets/siswa/22.webp" },
    { id: 23, name: "Kyla Aleta Putri", ttl: "Padang, 11 Juli 2006", quote: "Lovanda, ke konser LANY yuk??", photo: "assets/siswa/23.webp" },
    { id: 24, name: "Lovanda Mutiara Mariandika", ttl: "Padang, 10 Maret 2006", quote: "Mama, boleh izin nonton LANY sm aleta.", photo: "assets/siswa/24.webp" },
    { id: 25, name: "Luthfi Fhadlurrahman", ttl: "Padang, 04 Desember 2006", quote: "Semua yang berlebihan itu ga baik, kecuali DUIT.", photo: "assets/siswa/25.webp" },
    { id: 26, name: "Muhammad Ikhlas", ttl: "Padang, 23 November 2005", quote: "Well played.", photo: "assets/siswa/26.webp" },
    { id: 27, name: "Muhammad Khairul Arfandi", ttl: "Durian Dangka, 01 Oktober 2006", quote: "Semoga ini akan menjadi kenangan yg indah.", photo: "assets/siswa/27.webp" },
    { id: 28, name: "Nada Fasya Asrin", ttl: "Padang, 09 Februari 2006", quote: "Born to shine ✨.", photo: "assets/siswa/28.webp" },
    { id: 29, name: "Najwa Deswa Rani", ttl: "Padang, 04 Juni 2006", quote: "Do good without others knowing.", photo: "assets/siswa/29.webp" },
    { id: 30, name: "Nia Putri Islami", ttl: "Padang, 17 Agustus 2005", quote: "Pintar itu relatif, klo nyontek itu alternatif.", photo: "assets/siswa/30.webp" },
    { id: 31, name: "Queenaya Parhandini", ttl: "Medan, 26 Juni 2006", quote: "Makasi IPA 5 udah rajin bayar uang kas <3.", photo: "assets/siswa/31.webp" },
    { id: 32, name: "Rafif Rizky Maheswari", ttl: "Padang, 25 Juli 2006", quote: "Dak ngarti kami lai do, serius lah jgn gitu jo lai.", photo: "assets/siswa/32.webp" },
    { id: 33, name: "Regina Prameswari", ttl: "Padang, 07 September 2006", quote: "Gatau aku juga bingung mau ketik apa lagi.", photo: "assets/siswa/33.webp" },
    { id: 34, name: "Shania Derinov", ttl: "Padang, 25 November 2006", quote: "Don't give up.", photo: "assets/siswa/34.webp" },
    { id: 35, name: "Syadira Hana Abrar", ttl: "Padang, 24 Juni 2005", quote: "Jadi sebenernya aku robot gais, tanya aja ara.", photo: "assets/siswa/35.webp" },
    { id: 36, name: "Zaharatul Aisyah", ttl: "Padang, 21 September 2005", quote: "Kak? aku gapapa.", photo: "assets/siswa/36.webp" }
];

document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    let navOverlay = document.querySelector('.nav-overlay');

    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.classList.add('nav-overlay');
        body.appendChild(navOverlay);
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navOverlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            body.style.overflow = '';
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target && menuToggle && navLinks) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                body.style.overflow = ''; 

                const nav = document.querySelector('nav');
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const isShortPage = window.location.pathname.includes('now-we-are.html') || 
                        window.location.pathname.includes('about.html');

    if (isShortPage) {
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('visible');
        });
    } else {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (submitBtn) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Mengirim...';
                submitBtn.disabled = true;

                const formData = new FormData(contactForm);
                const jsonData = {};
                formData.forEach((value, key) => (jsonData[key] = value));

                try {
                    const response = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            access_key: 'bdaf9c4c-c4e5-445b-9789-efe26309e7f1',
                            ...jsonData
                        })
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                        showCustomAlert('✅ Pesan kamu berhasil dikirim! Terima kasih 💙');
                        contactForm.reset();
                    } else {
                        showCustomAlert('⚠️ Terjadi kesalahan: ' + (result.message || 'Gagal mengirim pesan.'), true);
                    }
                } catch (error) {
                    showCustomAlert('❌ Tidak dapat menghubungi server. Coba lagi nanti.', true);
                    console.error('Error:', error);
                } finally {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
    }

    const navLinksItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    if (navLinksItems.length > 0 && sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.pageYOffset + 150;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinksItems.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active-link');
                }
            });
        });
    }

    const studentGrid = document.querySelector('.students-name-grid');

    if (studentGrid) {
        studentGrid.innerHTML = ''; 

        const modal = document.getElementById('studentModal');
        const modalClose = document.querySelector('.modal-close');
        const modalImg = document.getElementById('modalStudentImage');
        const modalName = document.getElementById('modalStudentName');
        const modalTTL = document.getElementById('modalStudentTTL');
        const modalQuote = document.getElementById('modalStudentQuote');

        studentData.forEach(student => {
            const card = document.createElement('div');
            card.className = 'student-name-card';
            card.setAttribute('data-id', student.id); 
            
            card.innerHTML = `
                <span class="student-number">${String(student.id).padStart(2, '0')}</span>
                <span class="student-name">${student.name}</span>
            `;

            if (modal && modalImg && modalName && modalTTL && modalQuote) {
                card.addEventListener('click', () => {
                    const clickedStudent = studentData.find(s => s.id === student.id);
                    
                    if (clickedStudent) {
                        modalImg.src = clickedStudent.photo;
                        modalName.textContent = clickedStudent.name;
                        modalTTL.textContent = clickedStudent.ttl;
                        modalQuote.textContent = clickedStudent.quote;
                        
                        modal.classList.add('active');
                    }
                });
            }

            studentGrid.appendChild(card);
        });

        if (modal) {
            const closeModal = () => {
                modal.classList.remove('active');
            };

            if (modalClose) {
                modalClose.addEventListener('click', closeModal);
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    }

    console.log('✅ DOMContentLoaded: All scripts loaded successfully!');
});

function openGuide(event) {
    if (event) event.preventDefault();
    const guideModal = document.getElementById('guideModal');
    if (guideModal) {
        guideModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeGuide() {
    const guideModal = document.getElementById('guideModal');
    if (guideModal) {
        guideModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const guideModal = document.getElementById('guideModal');
    
    if (guideModal) {
        guideModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeGuide();
            }
        });
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const guideModal = document.getElementById('guideModal');
        if (guideModal && guideModal.classList.contains('active')) {
            closeGuide();
        }
    }
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.padding = '0.5rem 5%';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
        } else {
            nav.style.padding = '1rem 5%';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    }
});

window.addEventListener('resize', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (window.innerWidth > 768 && menuToggle && navLinks) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

window.addEventListener('orientationchange', () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
});

(function() {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  
    document.addEventListener('keydown', function(e) {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'K')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
        e.stopPropagation();

        if (typeof showCustomAlert === 'function') {
          showCustomAlert('Mau ngapain?', true);
        } else {

          console.log('Aksi diblokir: shortcut dinonaktifkan.');
        }
        return false;
      }
    });
  
    document.addEventListener('mousedown', function(e) {
      if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  })();
  

