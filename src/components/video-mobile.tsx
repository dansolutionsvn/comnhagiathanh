export default function VideoMobile() {
  return (
    <section className="block bg-brown-900 py-12 md:hidden">
      <div className="mx-auto max-w-sm px-4">
        <p className="mb-4 text-center text-sm font-medium tracking-[0.2em] text-gold-light uppercase">
          Video giới thiệu
        </p>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
            poster="/images/hero.jpg"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
