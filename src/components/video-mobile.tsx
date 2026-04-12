export default function VideoMobile() {
  return (
    <section className="block bg-brown-900 py-12 md:hidden">
      <div className="mx-auto max-w-xs px-4">
        <p className="mb-4 text-center text-sm font-medium tracking-[0.2em] text-gold-light uppercase">
          Video giới thiệu
        </p>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <video
            className="aspect-[9/16] w-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
