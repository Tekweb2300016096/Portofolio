import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './About.css';
import './Resume.css';
import './Gallery.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);
  const uiGalleryRef = useRef(null);
  const uiGallery2Ref = useRef(null);
  const uiGallery3Ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isUiHovered, setIsUiHovered] = useState(false);
  const [isUi2Hovered, setIsUi2Hovered] = useState(false);
  const [isUi3Hovered, setIsUi3Hovered] = useState(false);

  useEffect(() => {
    let animationFrameId;
    
    const scrollGallery = () => {
      if (galleryRef.current && !isHovered) {
        galleryRef.current.scrollLeft += 1; // Kecepatan scroll
        
        // Looping tak terbatas: jika sudah sampai tengah (selesai grup 1), kembali ke 0
        if (galleryRef.current.scrollLeft >= galleryRef.current.scrollWidth / 2) {
          galleryRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollGallery);
    };

    animationFrameId = requestAnimationFrame(scrollGallery);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  useEffect(() => {
    let animationFrameIdUi;
    
    const scrollUiGallery = () => {
      if (uiGalleryRef.current && !isUiHovered) {
        if (uiGalleryRef.current.scrollWidth > uiGalleryRef.current.clientWidth) {
          uiGalleryRef.current.scrollLeft += 1;
          if (uiGalleryRef.current.scrollLeft >= uiGalleryRef.current.scrollWidth / 2) {
            uiGalleryRef.current.scrollLeft = 0;
          }
        }
      }
      if (uiGallery2Ref.current && !isUi2Hovered) {
        if (uiGallery2Ref.current.scrollWidth > uiGallery2Ref.current.clientWidth) {
          uiGallery2Ref.current.scrollLeft += 1;
          if (uiGallery2Ref.current.scrollLeft >= uiGallery2Ref.current.scrollWidth / 2) {
            uiGallery2Ref.current.scrollLeft = 0;
          }
        }
      }
      if (uiGallery3Ref.current && !isUi3Hovered) {
        if (uiGallery3Ref.current.scrollWidth > uiGallery3Ref.current.clientWidth) {
          uiGallery3Ref.current.scrollLeft += 1;
          if (uiGallery3Ref.current.scrollLeft >= uiGallery3Ref.current.scrollWidth / 2) {
            uiGallery3Ref.current.scrollLeft = 0;
          }
        }
      }
      animationFrameIdUi = requestAnimationFrame(scrollUiGallery);
    };

    animationFrameIdUi = requestAnimationFrame(scrollUiGallery);
    return () => cancelAnimationFrame(animationFrameIdUi);
  }, [isUiHovered, isUi2Hovered, isUi3Hovered]);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="dashboard-minimal">
        <header className="header" data-aos="fade-down" data-aos-duration="1200">
          <div className="header-left">
            <span className="subtitle">PORTFOLIO FILE</span>
            <span className="title-name">Kanza Cahya Pratama</span>
          </div>
          <div className="header-right">
            <span className="subtitle">JURUSAN</span>
            <span className="title-name">Sistem Informasi</span>
          </div>
        </header>

        <main className="main-content" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200">
          <div className="portfolio-text-container">
            <img src="/assets/porto-folio-text.png" alt="PORTO FOLIO" className="porto-folio-image" />
          </div>

          <img src="/assets/question.png" alt="?" className="dec-icon question-tl" />
          <img src="/assets/question.png" alt="?" className="dec-icon question-tr" />
          <img src="/assets/question.png" alt="?" className="dec-icon question-bl" />
          <img src="/assets/question.png" alt="?" className="dec-icon question-br" />
          <img src="/assets/squiggle.png" alt="Squiggle" className="dec-icon squiggle-left" />
          <img src="/assets/sun.png" alt="Sun" className="dec-icon sun-right" />
        </main>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          {/* Photo Column */}
          <div className="about-photo-wrapper" data-aos="fade-right">
            <img src="/assets/about-photo-combined.png" alt="Kanza" className="about-photo-combined" />
          </div>

          {/* Text Column */}
          <div className="about-text-wrapper" data-aos="fade-left" data-aos-delay="200">
            <div className="about-heading-row">
              <h2 className="about-title">HALO !</h2>
              <img src="/assets/question.png" alt="?" className="about-icon-heading" />
            </div>
            
            <h3 className="about-subtitle">Saya Kanza, seorang Progamer & Desainer Grafis.</h3>
            <div className="about-line"></div>

            <div className="about-description">
              <span className="dropcap">S</span>
              aya Kanza Cahya Pratama, Mahasiswa Sistem Informasi yang tertarik belajar dan menjelajah hal baru.
              <br /><br />
              Saya menyukai dan berfokus untuk mengembangkan sistem ataupun interface yang menarik serta pengalaman efektif yang akan dirasakan oleh pengguna.
            </div>

            <div className="about-quote">
              Setiap karya dirancang untuk memberikan dampak visual yang kuat sekaligus mempertahankan tingkat keterbacaan serta estetika modern yang rapi.
            </div>

            <img src="/assets/question.png" alt="?" className="about-icon-tr" />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="resume-content">
          {/* Column 1 */}
          <div className="resume-col" data-aos="fade-up">
            <h2 className="resume-heading">
              <img src="/assets/question.png" alt="?" className="resume-heading-icon" />
              PENGALAMAN
            </h2>
            
            <div className="resume-item">
              <div className="resume-year">2024</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Komisi Pemilihan Umum FAST Koordinator ACARA</div>
            </div>

            <div className="resume-item">
              <div className="resume-year">2025</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Ikatan Mahasiswa Muhammadiyah FAST Anggota Sosial Pemberdayaan Masyarakat</div>
            </div>

            <div className="resume-item">
              <div className="resume-year">2025</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Badan Eksekutif Mahasiswa FAST Kepala Departemen Luar Negri</div>
            </div>

            <div className="resume-item">
              <div className="resume-year">2025</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Masa Taaruf FAST Ketua Pelaksana</div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="resume-col" data-aos="fade-up" data-aos-delay="200">
            <div className="resume-item" style={{marginTop: '55px'}}>
              <div className="resume-year">2025</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Program Mahasiswa Berdampak Koordinator Logistik</div>
            </div>

            <div className="resume-item">
              <div className="resume-year">2026</div>
              <div className="resume-title">ORGANISASI</div>
              <div className="resume-desc">Ikatan Mahasiswa Muhammadiyah FAST Ketua Sosial Pemberdayaan Masyarakat</div>
            </div>

            <h2 className="resume-heading" style={{marginTop: '50px'}}>
              <img src="/assets/question.png" alt="?" className="resume-heading-icon" />
              PENDIDIKAN
            </h2>

            <div className="resume-item small-mb">
              <div className="edu-title">SD SWADAYA ANDIKA</div>
              <div className="edu-year">2011 - 2017</div>
            </div>
            <div className="resume-item small-mb">
              <div className="edu-title">SMP N 3 KALIWIRO</div>
              <div className="edu-year">2017 - 2020</div>
            </div>
            <div className="resume-item small-mb">
              <div className="edu-title">SMK N 1 WADASLINTANG</div>
              <div className="edu-year">2020 - 2023</div>
            </div>
            <div className="resume-item small-mb">
              <div className="edu-title">UNIVERSITAS AHMAD DAHLAN</div>
              <div className="edu-year">2023 - Sekarang</div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="resume-col" data-aos="fade-up" data-aos-delay="400">
            <h2 className="resume-heading">
              <img src="/assets/question.png" alt="?" className="resume-heading-icon" />
              KEAHLIAN
            </h2>
            <div className="skills-container">
              <div className="skill-pill">ADAPTIF</div>
              <div className="skill-pill">FIGMA</div>
              <div className="skill-pill">PROBLEM SOLVING</div>
              <div className="skill-pill">BASIC CODING</div>
            </div>

            <div className="resume-divider"></div>

            <h2 className="resume-heading">
              <img src="/assets/question.png" alt="?" className="resume-heading-icon" />
              MINAT
            </h2>
            <div className="interests-container">
              <div className="interest-item">
                <svg className="interest-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8v8M20 8v8M8 6v12M16 6v12M8 12h8"/></svg>
                <span className="interest-text">OLAHRAGA</span>
              </div>
              <div className="interest-item">
                <svg className="interest-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <span className="interest-text">BUKU</span>
              </div>
              <div className="interest-item">
                <svg className="interest-icon" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="7"></rect><line x1="12" y1="6" x2="12" y2="10"></line></svg>
                <span className="interest-text">DESAIN</span>
              </div>
            </div>

            <div className="resume-divider"></div>

            <h2 className="resume-heading">
              <img src="/assets/question.png" alt="?" className="resume-heading-icon" />
              HUBUNGI
            </h2>
            <div className="contact-list">
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                Caraclik96@gmail.com
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                0877-0711-1919
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6zm8.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 16.25 8 1.25 1.25 0 0 1 15 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
                @Kanza_cp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="portfolio-gallery-section">
        <div className="gallery-header" data-aos="fade-up">
          <div className="gallery-header-left">
            <div className="gallery-subtitle">
              <img src="/assets/question.png" alt="?" className="gallery-icon" />
              GALERI PORTFOLIO SAYA
            </div>
            <h2 className="gallery-title">KARYA DESAIN GRAFIS SAYA</h2>
          </div>
          <div className="gallery-header-right">
            <p className="gallery-desc">
              Koleksi karya desain grafis yang didominasi oleh nuansa biru modern yang tegas, mencakup publikasi akademik universitas (UAD), identitas kopi retro (Neko Coffe), promosi produk (Eiger), hingga kolase komersial premium (Nike, Hermes, Louis Vuitton).
            </p>
          </div>
        </div>
        
        <div className="gallery-line" data-aos="fade-right" data-aos-delay="100"></div>

        <div 
          className="gallery-grid-container"
          data-aos="fade-up" data-aos-delay="200"
          ref={galleryRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="marquee-track">
            {/* Group 1 */}
            <div className="marquee-group">
              {[1, 2, 3, 6, 8, 10, 11, 14, 16, 17, 18, 19].map(num => (
                <img 
                  key={`g1-jpg-${num}`}
                  src={`/assets/port-${num}.jpg`} 
                  alt={`Poster ${num}`} 
                  className="gallery-item" 
                  onClick={() => setSelectedImage(`/assets/port-${num}.jpg`)}
                />
              ))}
              {[4, 7, 9, 12, 13, 15].map(num => (
                <img 
                  key={`g1-png-${num}`}
                  src={`/assets/port-${num}.png`} 
                  alt={`Poster ${num}`} 
                  className="gallery-item" 
                  onClick={() => setSelectedImage(`/assets/port-${num}.png`)}
                />
              ))}
            </div>
            
            {/* Group 2 (Duplicate for seamless loop) */}
            <div className="marquee-group">
              {[1, 2, 3, 6, 8, 10, 11, 14, 16, 17, 18, 19].map(num => (
                <img 
                  key={`g2-jpg-${num}`}
                  src={`/assets/port-${num}.jpg`} 
                  alt={`Poster ${num}`} 
                  className="gallery-item" 
                  onClick={() => setSelectedImage(`/assets/port-${num}.jpg`)}
                />
              ))}
              {[4, 7, 9, 12, 13, 15].map(num => (
                <img 
                  key={`g2-png-${num}`}
                  src={`/assets/port-${num}.png`} 
                  alt={`Poster ${num}`} 
                  className="gallery-item" 
                  onClick={() => setSelectedImage(`/assets/port-${num}.png`)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UI Portfolio Section */}
      <section className="ui-portfolio-section">
        <div className="gallery-header" data-aos="fade-up">
          <div className="gallery-header-left">
            <div className="gallery-subtitle">
              <img src="/assets/question.png" alt="?" className="gallery-icon" />
              GALERI PORTFOLIO SAYA
            </div>
            <h2 className="gallery-title">KARYA USER INTERFACE SAYA</h2>
          </div>
          <div className="gallery-header-right">
            <p className="gallery-desc">
              Koleksi karya user interface yang saya buat melalui eksperimen pribadi serta proyek mata kuliah.
            </p>
          </div>
        </div>
        
        <div className="gallery-line" data-aos="fade-right" data-aos-delay="100"></div>

        <div className="ui-project-header" data-aos="fade-right">
          <h1 className="ui-project-title">Manajemen Book</h1>
        </div>
        
        {/* UI Images Grid */}
        <div 
          className="ui-grid-container"
          data-aos="fade-up" data-aos-delay="200"
          ref={uiGalleryRef}
          onMouseEnter={() => setIsUiHovered(true)}
          onMouseLeave={() => setIsUiHovered(false)}
          onTouchStart={() => setIsUiHovered(true)}
          onTouchEnd={() => setIsUiHovered(false)}
        >
          {/* Group 1 */}
          <div className="ui-marquee-group">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <img 
                key={`ui-g1-${num}`}
                src={`/assets/ui-${num}.png`} 
                alt={`UI Screenshot ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui-${num}.png`)}
              />
            ))}
          </div>
          
          {/* Group 2 (Only visible on mobile for infinite loop) */}
          <div className="ui-marquee-group ui-marquee-duplicate">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <img 
                key={`ui-g2-${num}`}
                src={`/assets/ui-${num}.png`} 
                alt={`UI Screenshot ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui-${num}.png`)}
              />
            ))}
          </div>
        </div>

        <div className="ui-project-header" style={{marginTop: '80px'}} data-aos="fade-right">
          <h1 className="ui-project-title">GAMFIELD LEARNING (CLASSROOM)</h1>
        </div>
        
        {/* UI Images Grid 2 */}
        <div 
          className="ui-grid-container"
          data-aos="fade-up" data-aos-delay="200"
          ref={uiGallery2Ref}
          onMouseEnter={() => setIsUi2Hovered(true)}
          onMouseLeave={() => setIsUi2Hovered(false)}
          onTouchStart={() => setIsUi2Hovered(true)}
          onTouchEnd={() => setIsUi2Hovered(false)}
        >
          {/* Group 1 */}
          <div className="ui-marquee-group">
            {[1, 2, 3, 4, 5].map(num => (
              <img 
                key={`ui2-g1-${num}`}
                src={`/assets/ui2-${num}.png`} 
                alt={`UI Gamfield ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui2-${num}.png`)}
              />
            ))}
          </div>
          
          {/* Group 2 (Only visible on mobile for infinite loop) */}
          <div className="ui-marquee-group ui-marquee-duplicate">
            {[1, 2, 3, 4, 5].map(num => (
              <img 
                key={`ui2-g2-${num}`}
                src={`/assets/ui2-${num}.png`} 
                alt={`UI Gamfield ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui2-${num}.png`)}
              />
            ))}
          </div>
        </div>

        <div className="ui-project-header" style={{marginTop: '80px'}} data-aos="fade-right">
          <h1 className="ui-project-title">REKANS - RESEP MAKANAN</h1>
        </div>
        
        {/* UI Images Grid 3 */}
        <div 
          className="ui-grid-container"
          data-aos="fade-up" data-aos-delay="200"
          ref={uiGallery3Ref}
          onMouseEnter={() => setIsUi3Hovered(true)}
          onMouseLeave={() => setIsUi3Hovered(false)}
          onTouchStart={() => setIsUi3Hovered(true)}
          onTouchEnd={() => setIsUi3Hovered(false)}
        >
          {/* Group 1 */}
          <div className="ui-marquee-group">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => (
              <img 
                key={`ui3-g1-${num}`}
                src={`/assets/ui3-${num}.png`} 
                alt={`UI Rekans ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui3-${num}.png`)}
              />
            ))}
          </div>
          
          {/* Group 2 */}
          <div className="ui-marquee-group ui-marquee-duplicate">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => (
              <img 
                key={`ui3-g2-${num}`}
                src={`/assets/ui3-${num}.png`} 
                alt={`UI Rekans ${num}`} 
                className="ui-grid-item" 
                onClick={() => setSelectedImage(`/assets/ui3-${num}.png`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={selectedImage} alt="Full screen view" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default App;
