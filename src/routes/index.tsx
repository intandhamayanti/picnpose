import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram, MapPin, Minus, Plus } from "lucide-react";

import { Reveal, TextReveal, Parallax } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import soloImg from "@/assets/solo.jpg";
import coupleImg from "@/assets/couple.jpg";
import bestieImg from "@/assets/bestie.jpg";
import familyImg from "@/assets/family.jpg";
import wisudaImg from "@/assets/wisuda.jpg";
import brandingImg from "@/assets/branding.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RUANG — Self Photo Studio Surabaya | Sesi 20 Menit" },
      {
        name: "description",
        content:
          "Self photo studio premium di Surabaya. Private room, pencahayaan estetik, sesi 20 menit, hasil editorial. Cocok untuk solo, couple, bestie, keluarga, dan wisuda.",
      },
      { property: "og:title", content: "RUANG — Self Photo Studio Surabaya" },
      {
        property: "og:description",
        content:
          "Foto sendiri di private studio Surabaya. 20 menit, hasil premium, mulai Rp99.000.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/6281234567890";

const nav = [
  { label: "Kenapa Di Sini", href: "#kenapa" },
  { label: "Jenis Sesi", href: "#sesi" },
  { label: "Paket", href: "#paket" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
];

const sesi = [
  { no: "01", nama: "Solo Portrait", ket: "Waktu buat lihat diri sendiri, tanpa buru-buru.", img: soloImg },
  { no: "02", nama: "Couple Session", ket: "Momen berdua yang gak perlu dijelasin ke siapa-siapa.", img: coupleImg },
  { no: "03", nama: "Bestie Session", ket: "Ketawa bareng, dan semuanya kesimpen rapi.", img: bestieImg },
  { no: "04", nama: "Family Session", ket: "Satu frame untuk orang-orang paling penting.", img: familyImg },
  { no: "05", nama: "Wisuda", ket: "Toga, senyum, dan akhir dari satu babak panjang.", img: wisudaImg },
  { no: "06", nama: "Personal Branding", ket: "Wajah profesional kamu, versi paling meyakinkan.", img: brandingImg },
];

const paket = [
  {
    nama: "Paket Solo",
    harga: "Rp99.000",
    orang: "1 orang",
    fitur: ["20 menit sesi", "2 foto edit", "Semua softcopy", "Opsi cetak 4R", "Private room"],
  },
  {
    nama: "Paket Couple / Duo",
    harga: "Rp149.000",
    orang: "Maks. 2 orang",
    fitur: ["20 menit sesi", "4 foto edit", "Semua softcopy", "2 cetak 4R gratis", "Private room"],
    unggulan: true,
  },
  {
    nama: "Paket Group",
    harga: "Rp199.000",
    orang: "Maks. 6 orang",
    fitur: ["20 menit sesi", "6 foto edit", "Semua softcopy", "4 cetak 4R gratis", "Private room luas"],
  },
];

const testimoni = [
  {
    q: "Awalnya deg-degan karena baru pertama kali, ternyata gampang banget. Remote-nya tinggal pencet, 20 menit kerasa cepet tapi hasilnya banyak yang bagus.",
    n: "Nabila",
    d: "Bestie session, Juli",
  },
  {
    q: "Ruangannya private, jadi bebas gaya tanpa malu. Editannya rapi, gak lebay, warnanya bersih.",
    n: "Rizky & Sasa",
    d: "Couple session, Agustus",
  },
  {
    q: "Foto wisuda di sini malah lebih bagus daripada di kampus. Cepet dan gak antre lama.",
    n: "Dimas",
    d: "Wisuda, Juni",
  },
];

const faq = [
  { q: "Satu sesi berapa menit?", a: "Setiap sesi berdurasi 20 menit di dalam ruangan. Kamu bisa ambil foto sebanyak yang kamu mau selama waktu berjalan." },
  { q: "Maksimal berapa orang dalam satu sesi?", a: "Paket Solo untuk 1 orang, Duo maksimal 2 orang, dan Group maksimal 6 orang. Kalau lebih dari 6, hubungi kami untuk pengaturan khusus." },
  { q: "Apakah dapat file digitalnya?", a: "Dapat. Semua hasil softcopy kami kirim tanpa watermark, plus foto edit sesuai paket." },
  { q: "Apakah bisa langsung cetak?", a: "Bisa. Cetak 4R tersedia di studio dan bisa langsung dibawa pulang setelah sesi." },
  { q: "Apakah bisa reschedule?", a: "Bisa, maksimal H-1 sebelum jadwal sesi. Cukup kabari kami lewat WhatsApp." },
  { q: "Boleh bawa properti sendiri?", a: "Boleh banget. Bunga, balon, banner wisuda, boneka, sampai outfit ganti — silakan bawa." },
  { q: "Kapan hasilnya dikirim?", a: "Softcopy mentah dikirim di hari yang sama. Foto edit maksimal 2 hari kerja lewat Google Drive." },
];

const langkah = [
  { t: "Pilih paket", d: "Tentukan paket sesuai jumlah orang dan kebutuhan." },
  { t: "Pilih jadwal", d: "Booking lewat form atau WhatsApp, pilih tanggal dan jam." },
  { t: "Datang ke studio", d: "Datang 10 menit lebih awal untuk siap-siap." },
  { t: "Sesi 20 menit", d: "Ruangan jadi milik kamu. Remote di tangan, bebas berekspresi." },
  { t: "Pilih hasil", d: "Review di layar, pilih favorit, sisanya kami rapikan." },
];

const marqueeImgs = [soloImg, coupleImg, bestieImg, wisudaImg, familyImg, brandingImg];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Statement />
        <Kenapa />
        <JenisSesi />
        <Strip />
        <Paket />
        <Galeri />
        <Testimoni />
        <Cara />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-10">
        <a href="#top" className="min-w-0 text-lg font-black tracking-[-0.06em] uppercase">
          Ruang<span className="font-serif-editorial italic lowercase"> studio</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <a
            href="#booking"
            className="rounded-full bg-foreground px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.04] sm:px-5"
          >
            Booking
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="pt-6 pb-2">
            <Reveal>
              <div className="mb-7 flex flex-wrap gap-2">
                {["Surabaya, Indonesia", "20 menit sesi", "Private studio"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1.5 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <h1 className="text-[13vw] leading-[0.86] font-black tracking-[-0.055em] uppercase sm:text-[9vw] lg:text-[6.6vw]">
              <TextReveal text="Cerita kamu," />
              <br />
              <TextReveal text="ditangkap" italicWords={["ditangkap"]} delay={0.2} />
              <br />
              <TextReveal text="sendiri." italicWords={[]} delay={0.4} />
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Self photo studio di Surabaya. Ruangan private, remote di tangan kamu, dan 20 menit
                penuh untuk jadi versi paling kamu — tanpa ada orang lain yang mengarahkan.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#booking"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-semibold tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.03]"
                >
                  Booking Sekarang
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-7 py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Lihat Paket
                </a>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="grain relative aspect-[4/5] w-full overflow-hidden bg-muted lg:aspect-[3/4]"
          >
            <img
              src={heroImg}
              alt="Potret editorial hitam putih di self photo studio Surabaya"
              width={1408}
              height={1808}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-[10px] tracking-[0.18em] text-white/80 uppercase mix-blend-difference">
              <span>No. 01 / Ruang Studio</span>
              <span>Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mb-10 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          (Statement)
        </p>
        <h2 className="max-w-5xl text-[7.6vw] leading-[0.95] font-semibold tracking-[-0.04em] md:text-[4.4vw]">
          <TextReveal
            text="Ini bukan sekadar foto. Ini cara pelan-pelan berkenalan lagi dengan wajah sendiri — tanpa penonton, tanpa buru-buru."
            italicWords={["berkenalan", "sendiri", "penonton"]}
          />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-sm leading-relaxed text-muted-foreground md:ml-auto">
            Kami cuma menyiapkan ruang, cahaya, dan waktu. Sisanya kamu yang tentukan: mau serius,
            mau ketawa lepas, atau diam sebentar dan lihat hasilnya.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const alasan = [
  { t: "Private room", d: "Pintu tertutup. Tidak ada fotografer, tidak ada mata asing." },
  { t: "Pencahayaan estetik", d: "Lighting sudah kami set. Kamu tinggal masuk dan pose." },
  { t: "Ramah first timer", d: "Panduan pose sederhana di layar untuk yang belum terbiasa." },
  { t: "Hasil premium", d: "Tone editorial, retouch halus, bukan filter instan." },
  { t: "Proses cepat", d: "20 menit sesi, softcopy di hari yang sama." },
  { t: "Untuk banyak momen", d: "Wisuda, ulang tahun, anniversary, atau tanpa alasan sama sekali." },
];

function Kenapa() {
  return (
    <section id="kenapa" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-8 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
              (Kenapa di sini)
            </p>
            <h2 className="text-[10vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[7vw] lg:text-[4.4vw]">
              <TextReveal text="Sederhana," />
              <br />
              <TextReveal text="tapi terasa" italicWords={["terasa"]} delay={0.1} />
              <br />
              <TextReveal text="berbeda." delay={0.2} />
            </h2>
            <Parallax className="mt-10 hidden overflow-hidden lg:block" distance={40}>
              <div className="grain aspect-[7/5] overflow-hidden bg-muted">
                <img
                  src={studioImg}
                  alt="Interior private room self photo studio dengan lighting"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-[115%] w-full object-cover"
                />
              </div>
            </Parallax>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {alasan.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.06}>
                <li className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 py-7 transition-colors duration-500 md:grid-cols-[auto_0.8fr_1.2fr] md:items-center">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                    {a.t}
                  </h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3">
                    {a.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function JenisSesi() {
  return (
    <section id="sesi" className="border-t border-border bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[10vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[6vw] lg:text-[4vw]">
            <TextReveal text="Jenis sesi" />
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-background/60">
            Enam cara berbeda untuk masuk ke ruangan yang sama. Semuanya 20 menit, semuanya milik
            kamu sepenuhnya.
          </p>
        </div>

        <div className="grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
          {sesi.map((s, i) => (
            <Reveal key={s.nama} delay={(i % 3) * 0.08}>
              <article className="group relative h-full bg-foreground">
                <div className="grain relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={`Contoh hasil ${s.nama} di self photo studio Surabaya`}
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover grayscale transition-transform duration-[1200ms] ease-out group-hover:scale-100"
                  />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-background/70">
                    {s.no}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-5">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-[-0.02em]">{s.nama}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-background/55">{s.ket}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strip() {
  const items = [...marqueeImgs, ...marqueeImgs];
  return (
    <section className="overflow-hidden border-y border-border bg-foreground py-6">
      <div className="marquee-track flex w-max gap-4">
        {items.map((src, i) => (
          <div key={i} className="grain h-32 w-24 shrink-0 overflow-hidden sm:h-44 sm:w-32">
            <img src={src} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover grayscale" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Paket() {
  return (
    <section id="paket" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
            (Paket harga)
          </p>
          <h2 className="text-[10vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[6vw] lg:text-[4vw]">
            <TextReveal text="Harga jelas," italicWords={[]} />
            <br />
            <TextReveal text="tanpa kejutan." italicWords={["kejutan"]} delay={0.1} />
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {paket.map((p, i) => (
            <Reveal key={p.nama} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col p-7 transition-colors duration-500 md:p-9 ${
                  p.unggulan
                    ? "bg-foreground text-background"
                    : "bg-background hover:bg-secondary"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">{p.nama}</h3>
                  {p.unggulan && (
                    <span className="rounded-full border border-background/40 px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase">
                      Favorit
                    </span>
                  )}
                </div>
                <p className="mt-8 text-5xl font-black tracking-[-0.05em] md:text-6xl">{p.harga}</p>
                <p
                  className={`mt-2 text-xs tracking-[0.14em] uppercase ${p.unggulan ? "text-background/60" : "text-muted-foreground"}`}
                >
                  {p.orang}
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.fitur.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-3 border-b pb-3 ${p.unggulan ? "border-background/15" : "border-border"}`}
                    >
                      <span className={p.unggulan ? "text-background/40" : "text-muted-foreground"}>
                        —
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-9 inline-flex items-center justify-between gap-2 rounded-full px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] uppercase transition-transform duration-300 hover:scale-[1.02] ${
                    p.unggulan
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  Pilih paket ini
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border border-border p-7">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Masih bingung pilih yang mana? Kabari kami jumlah orang dan momennya, nanti kami
              bantu pilihkan.
            </p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-semibold tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.03]"
            >
              Tanya via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const galeri = [
  { src: wisudaImg, cat: "Wisuda", span: "lg:col-span-5 lg:row-span-2", ratio: "aspect-[4/5]" },
  { src: coupleImg, cat: "Couple", span: "lg:col-span-4", ratio: "aspect-[4/5]" },
  { src: bestieImg, cat: "Sahabat", span: "lg:col-span-3", ratio: "aspect-[3/4]" },
  { src: soloImg, cat: "Solo", span: "lg:col-span-3", ratio: "aspect-[3/4]" },
  { src: brandingImg, cat: "Personal Branding", span: "lg:col-span-4", ratio: "aspect-[4/5]" },
];

function Galeri() {
  return (
    <section id="galeri" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[10vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[6vw] lg:text-[4vw]">
            <TextReveal text="Hasil" />{" "}
            <TextReveal text="sesi" italicWords={["sesi"]} delay={0.1} />
          </h2>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Wisuda · Couple · Solo · Sahabat
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {galeri.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={g.span}>
              <figure className="group relative h-full overflow-hidden">
                <div className={`grain ${g.ratio} h-full overflow-hidden bg-muted`}>
                  <img
                    src={g.src}
                    alt={`Hasil foto kategori ${g.cat}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute bottom-0 left-0 translate-y-2 bg-background px-4 py-2 text-[10px] tracking-[0.2em] uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.cat}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimoni() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Parallax distance={30}>
            <div className="grain aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={soloImg}
                alt="Potret pengunjung studio"
                loading="lazy"
                className="h-[112%] w-full object-cover grayscale"
              />
            </div>
          </Parallax>

          <div>
            <p className="mb-10 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
              (Kata mereka)
            </p>
            <div className="divide-y divide-border border-y border-border">
              {testimoni.map((t, i) => (
                <Reveal key={t.n} delay={i * 0.1}>
                  <blockquote className="py-9">
                    <p className="text-xl leading-[1.35] font-medium tracking-[-0.02em] md:text-[1.7rem]">
                      <span className="font-serif-editorial italic">“</span>
                      {t.q}
                      <span className="font-serif-editorial italic">”</span>
                    </p>
                    <footer className="mt-5 flex items-center gap-3 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      <span className="text-foreground">{t.n}</span>
                      <span className="h-px w-8 bg-border" />
                      <span>{t.d}</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cara() {
  return (
    <section className="bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-6 text-[10px] tracking-[0.24em] text-background/50 uppercase">
            (Cara booking)
          </p>
          <h2 className="text-[9vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[5.5vw] lg:text-[3.6vw]">
            <TextReveal text="Lima langkah," />{" "}
            <TextReveal text="selesai." italicWords={["selesai"]} delay={0.1} />
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-background/60">
            Belum pernah self photo sebelumnya? Tenang, semua orang di sini juga pertama kali.
          </p>
        </div>

        <ol className="grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-5">
          {langkah.map((l, i) => (
            <Reveal key={l.t} delay={i * 0.08}>
              <li className="group h-full bg-foreground p-7">
                <span className="block text-4xl font-black tracking-[-0.05em] text-background/25 transition-colors duration-500 group-hover:text-background">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em]">{l.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/55">{l.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="text-[10vw] leading-[0.9] font-black tracking-[-0.05em] uppercase sm:text-[6vw] lg:text-[3.6vw]">
            <TextReveal text="Sering" />
            <br />
            <TextReveal text="ditanya" italicWords={["ditanya"]} delay={0.1} />
          </h2>

          <div className="divide-y divide-border border-y border-border">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 text-left"
                  >
                    <span className="min-w-0 text-base font-medium tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-1 md:text-xl">
                      {f.q}
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nama = String(data.get("nama") ?? "").trim();
    const wa = String(data.get("wa") ?? "").trim();
    const paketPilih = String(data.get("paket") ?? "");
    const tanggal = String(data.get("tanggal") ?? "");
    const jam = String(data.get("jam") ?? "");
    const pesan = String(data.get("pesan") ?? "").trim();

    if (nama.length < 2 || nama.length > 80) return setError("Nama minimal 2 karakter.");
    if (!/^[0-9+\s-]{8,20}$/.test(wa)) return setError("Nomor WhatsApp belum valid.");
    if (!tanggal) return setError("Pilih tanggal sesi dulu ya.");
    if (pesan.length > 500) return setError("Pesan terlalu panjang.");

    setError("");
    setSent(true);
    const text = `Halo RUANG Studio, saya ${nama} mau booking ${paketPilih} pada ${tanggal} jam ${jam}. ${pesan}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field =
    "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  return (
    <section id="booking" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="text-[11vw] leading-[0.88] font-black tracking-[-0.055em] uppercase sm:text-[7vw] lg:text-[4.6vw]">
              <TextReveal text="Amankan" />
              <br />
              <TextReveal text="jadwal kamu" italicWords={["jadwal"]} delay={0.1} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
                Isi formnya, kami konfirmasi lewat WhatsApp maksimal 1 jam di jam operasional.
                Slot akhir pekan biasanya cepat penuh.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>
                    Jl. Raya Gubeng No. 21, Surabaya, Indonesia
                    <br />
                    <span className="text-muted-foreground">Setiap hari, 10.00 – 21.00 WIB</span>
                  </span>
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
                >
                  Chat WhatsApp langsung
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="grid gap-6 border border-border p-6 md:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    Nama
                  </span>
                  <input name="nama" maxLength={80} required placeholder="Nama kamu" className={field} />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    No. WhatsApp
                  </span>
                  <input name="wa" maxLength={20} required placeholder="08xxxxxxxxxx" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Pilihan paket
                </span>
                <select name="paket" className={field} defaultValue="Paket Solo — Rp99.000">
                  <option>Paket Solo — Rp99.000</option>
                  <option>Paket Couple / Duo — Rp149.000</option>
                  <option>Paket Group — Rp199.000</option>
                </select>
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    Tanggal
                  </span>
                  <input type="date" name="tanggal" required className={field} />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    Jam
                  </span>
                  <input type="time" name="jam" defaultValue="14:00" className={field} />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Pesan tambahan
                </span>
                <textarea
                  name="pesan"
                  rows={3}
                  maxLength={500}
                  placeholder="Momen apa yang mau diabadikan?"
                  className={`${field} resize-none`}
                />
              </label>

              {error && <p className="text-xs text-destructive">{error}</p>}
              {sent && !error && (
                <p className="text-xs text-muted-foreground">
                  Terima kasih! Kami arahkan ke WhatsApp untuk konfirmasi jadwal.
                </p>
              )}

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-between gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-semibold tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.02]"
              >
                Kirim & Booking Sekarang
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-8 text-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 border-b border-background/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-2xl leading-[1.15] font-semibold tracking-[-0.03em] md:text-3xl">
              Ruang kecil di Surabaya, untuk cerita yang{" "}
              <span className="font-serif-editorial italic">tidak kecil.</span>
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-[11px] tracking-[0.18em] uppercase">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-background/60 transition-colors hover:text-background">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="space-y-4 text-sm text-background/60">
            <p>
              Jl. Raya Gubeng No. 21
              <br />
              Surabaya, Indonesia
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram RUANG Studio"
                className="grid h-9 w-9 place-items-center rounded-full border border-background/25 transition-colors hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-background hover:text-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <p className="pt-10 text-[13vw] leading-[0.8] font-black tracking-[-0.06em] uppercase">
          Ruang<span className="font-serif-editorial lowercase italic">studio</span>
        </p>
        <p className="mt-8 text-[10px] tracking-[0.18em] text-background/45 uppercase">
          © {new Date().getFullYear()} RUANG Self Photo Studio · Surabaya, Indonesia
        </p>
      </div>
    </footer>
  );
}
