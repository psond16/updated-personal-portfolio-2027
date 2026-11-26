"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "../styles/ProjectDetail.module.css";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  isMobile?: boolean;
};

export default function ProjectGallery({
  images,
  title,
  isMobile = false,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) =>
      (previous + 1) % images.length
    );
  };

  return (
    <div className={styles.gallerySection}>
      <div
        className={`${styles.gallery} ${
          isMobile ? styles.mobileGallery : ""
        }`}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={previousImage}
            className={`${styles.galleryArrow} ${styles.leftArrow}`}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
        )}

        <div className={styles.galleryImageFrame}>
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            sizes={
              isMobile
                ? "(max-width: 760px) 65vw, 380px"
                : "(max-width: 760px) 85vw, 900px"
            }
            className={styles.galleryImage}
            priority={currentIndex === 0}
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            className={`${styles.galleryArrow} ${styles.rightArrow}`}
            aria-label="Next screenshot"
          >
            ›
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div
          className={styles.galleryDots}
          aria-label="Choose screenshot"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`${styles.galleryDot} ${
                currentIndex === index
                  ? styles.activeDot
                  : ""
              }`}
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={
                currentIndex === index ? "true" : undefined
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
