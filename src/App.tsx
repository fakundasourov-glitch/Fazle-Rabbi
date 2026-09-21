import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SelectedWorks } from './components/SelectedWorks';
import { CommercialPackaging } from './components/CommercialPackaging';
import { BusinessCardsShowcase } from './components/BusinessCardsShowcase';
import { PhotographyGallery } from './components/PhotographyGallery';
import { CinematographyReels } from './components/CinematographyReels';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { StationeryDetailModal } from './components/StationeryDetailModal';
import {
  SELECTED_WORKS,
  PHOTOGRAPHY_ITEMS,
} from './data/portfolioData';
import {
  WorkProject,
  PhotoItem,
  CommercialProduct,
  BusinessCardItem,
  FilmReel,
} from './types';

export default function App() {
  // Modal states
  const [selectedMedia, setSelectedMedia] = useState<WorkProject | PhotoItem | null>(null);
  const [mediaList, setMediaList] = useState<(WorkProject | PhotoItem)[]>([]);
  const [activeReel, setActiveReel] = useState<FilmReel | null>(null);
  const [selectedCard, setSelectedCard] = useState<BusinessCardItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<CommercialProduct | null>(null);
  const [contactDiscipline, setContactDiscipline] = useState<string>(
    'Brand Identity & Stationery Design'
  );

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectWorkProject = (project: WorkProject) => {
    setMediaList(SELECTED_WORKS);
    setSelectedMedia(project);
  };

  const handleSelectPhoto = (photo: PhotoItem) => {
    setMediaList(PHOTOGRAPHY_ITEMS);
    setSelectedMedia(photo);
  };

  const handleSelectService = (serviceTitle: string) => {
    let discipline = 'Brand Identity & Stationery Design';
    if (serviceTitle.includes('Photography')) discipline = 'Commercial Photography';
    else if (serviceTitle.includes('Cinematography')) discipline = 'Cinematography / DP';
    else if (serviceTitle.includes('Videography')) discipline = 'Documentary / Videography';
    else if (serviceTitle.includes('Photo Editing')) discipline = 'Photo Grading & Editing';
    else if (serviceTitle.includes('Packaging') || serviceTitle.includes('3D'))
      discipline = 'Commercial 3D Packaging';

    setContactDiscipline(discipline);
    scrollToSection('contact');
  };

  const handleInquireProduct = (product: CommercialProduct) => {
    setSelectedProduct(product);
  };

  const handleRequestCommissionFromModal = (discipline: string) => {
    setContactDiscipline(discipline);
    scrollToSection('contact');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#131313] text-[#e5e2e1] font-body selection:bg-[#c8a96b] selection:text-[#131313] overflow-x-hidden">
      {/* Fixed Sticky Header */}
      <Header onContactClick={() => scrollToSection('contact')} />

      {/* Main Container */}
      <main className="w-full bg-[#131313]">
        {/* Section 01: Hero */}
        <Hero
          onExploreClick={() => scrollToSection('selected-works')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Section 02: About Me */}
        <About />

        {/* Section 03: Selected Works */}
        <SelectedWorks onSelectProject={handleSelectWorkProject} />

        {/* Section 03B: Commercial Product Design & 3D Packaging */}
        <CommercialPackaging
          onInquireAsset={handleInquireProduct}
          onViewProduct={handleInquireProduct}
        />

        {/* Section 03C: Brand Identity & Business Card Systems Showcase */}
        <BusinessCardsShowcase
          onSelectCard={(card) => setSelectedCard(card)}
          onRequestCustom={() => {
            setContactDiscipline('Brand Identity & Stationery Design');
            scrollToSection('contact');
          }}
        />

        {/* Section 04: Photography */}
        <PhotographyGallery onSelectPhoto={handleSelectPhoto} />

        {/* Section 05: Cinematography & Videography */}
        <CinematographyReels onPlayReel={(reel) => setActiveReel(reel)} />

        {/* Section 06: Services & Capabilities */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 07: Commissions & Direct Dispatch Inquiries */}
        <ContactSection preselectedDiscipline={contactDiscipline} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Media Inspector / Fullscreen Lightbox Modal */}
      {selectedMedia && (
        <MediaModal
          item={selectedMedia}
          itemsList={mediaList}
          onClose={() => setSelectedMedia(null)}
          onNavigate={(newItem) => setSelectedMedia(newItem)}
        />
      )}

      {/* Video Reel Cinema Player Modal */}
      {activeReel && (
        <VideoPlayerModal reel={activeReel} onClose={() => setActiveReel(null)} />
      )}

      {/* Stationery & 3D Packaging Detail Modal */}
      {(selectedCard || selectedProduct) && (
        <StationeryDetailModal
          cardItem={selectedCard}
          productItem={selectedProduct}
          onClose={() => {
            setSelectedCard(null);
            setSelectedProduct(null);
          }}
          onRequestCommission={handleRequestCommissionFromModal}
        />
      )}
    </div>
  );
}
