import styles from "@/app/page.module.css";

type CinematicLoopProps = {
  eyebrow: string;
  title: string;
  text?: string;
  src: string;
  poster?: string;
  reverse?: boolean;
  chips: string[];
};

export function CinematicLoop({
  eyebrow,
  title,
  text,
  src,
  poster,
  reverse = false,
  chips,
}: CinematicLoopProps) {
  return (
    <section
      className={`${styles.videoStorySection} ${styles.parallaxSection} ${reverse ? styles.videoStorySectionReverse : ""}`}
      data-parallax-section
      data-parallax-speed={reverse ? "0.11" : "0.14"}
    >
      <div className={`${styles.parallaxBackground} ${styles.videoStoryBackground}`} aria-hidden="true" />
      <div className={styles.videoStoryGrid}>
        <div className={styles.videoStoryCopy}>
          <p className={styles.videoStoryEyebrow}>{eyebrow}</p>
          <h2 className={styles.videoStoryTitle}>{title}</h2>
          {text ? <p className={styles.videoStoryText}>{text}</p> : null}
          <div className={styles.videoStoryChips}>
            {chips.map((chip) => (
              <span key={chip} className={styles.videoStoryChip}>{chip}</span>
            ))}
          </div>
        </div>

        <figure className={styles.videoStoryVisual}>
          <video
            className={styles.videoStoryVideo}
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </figure>
      </div>
    </section>
  );
}
