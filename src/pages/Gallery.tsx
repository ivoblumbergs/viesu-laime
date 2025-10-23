import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomPine from "@/assets/room-pine.jpg";
import roomLinden from "@/assets/room-linden.jpg";
import commonArea from "@/assets/common-area.jpg";
import natureForest from "@/assets/nature-forest.jpg";
import natureMeadow from "@/assets/nature-meadow.jpg";
import heroImage from "@/assets/hero-guesthouse.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Visas");

  const images: GalleryImage[] = [
    { src: roomPine, alt: "Priežu istaba", category: "Istabas" },
    { src: roomLinden, alt: "Liepas istaba", category: "Istabas" },
    { src: commonArea, alt: "Kopīgā telpa", category: "Kopīgās telpas" },
    { src: heroImage, alt: "Viesu nama ārpuse", category: "Apkārtne" },
    { src: natureForest, alt: "Priežu mežs", category: "Apkārtne" },
    { src: natureMeadow, alt: "Vasaras pļava", category: "Apkārtne" },
  ];

  const categories = ["Visas", "Istabas", "Kopīgās telpas", "Apkārtne"];

  const filteredImages =
    activeCategory === "Visas"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Galerija</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apskatiet mūsu viesu nama interjeru, istabas un skaisto apkārtni
          </p>
        </div>

        <div className="folk-pattern-divider mb-12" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer hover-lift group animate-scale-in"
              onClick={() => openLightbox(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={closeLightbox}
              aria-label="Aizvērt"
            >
              <X size={32} />
            </button>
            <div className="max-w-6xl max-h-[90vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-center text-lg mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
