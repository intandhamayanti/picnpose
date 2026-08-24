import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  MapPin,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-react";

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
import gal1Img from "@/assets/gal-1.jpg";
import gal2Img from "@/assets/gal-2.jpg";
import gal3Img from "@/assets/gal-3.jpg";
import gal4Img from "@/assets/gal-4.jpg";
import gal5Img from "@/assets/gal-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pic n Pose Studio — Self Photo Studio Surabaya | Sesi 20 Menit" },
      {
        name: "description",
        content:
          "Self photo studio di Surabaya. Private room, lighting estetik, sesi 20 menit, hasil berwarna & editorial. Booking pilih tanggal dan jam sendiri.",
      },
      { property: "og:title", content: "Pic n Pose Studio — Self Photo Studio Surabaya" },
      {
        property: "og:description",
        content:
          "Foto sendiri di private studio Surabaya. Sesi 20 menit, hasil premium, mulai Rp89.000.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/6281234567890";
const BRAND = "Pic n Pose Studio";

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

type Paket = {
  nama: string;
  hari: string;
  harga: string;
  orang: string;
  durasi: string;
  fitur: string[];
  unggulan?: boolean;
};

const paket: Paket[] = [
  {
    nama: "Basic Self Photo",
    hari: "Weekdays · Senin – Kamis",
    harga: "Rp89.000",
    orang: "Gratis 1 – 5 orang",
    durasi: "20 menit sesi",
    fitur: [
      "20 menit photoshoot",
      "5 menit pemilihan foto",
      "Free 2 cetak 4R",
      "Free semua file (warna asli, tanpa watermark)",
      "Free props & properti studio",
      "Private room, remote di tangan kamu",
    ],
  },
  {
    nama: "Weekend Self Photo",
    hari: "Weekend · Jumat – Minggu",
    harga: "Rp119.000",
    orang: "Gratis 1 – 5 orang",
    durasi: "20 menit sesi",
    fitur: [
      "20 menit photoshoot",
      "5 menit pemilihan foto",
      "Free 3 cetak 4R",
      "Free semua file (warna asli, tanpa watermark)",
      "Free props & 1 kostum",
      "Prioritas slot jam ramai",
    ],
    unggulan: true,
  },
  {
    nama: "Group / Wisuda",
    hari: "Setiap hari",
    harga: "Rp179.000",
    orang: "Gratis 1 – 8 orang",
    durasi: "30 menit sesi",
    fitur: [
      "30 menit photoshoot",
      "10 menit pemilihan foto",
      "Free 5 cetak 4R",
      "Free semua file (warna asli, tanpa watermark)",
      "Background khusus wisuda / adat",
      "Private room lebih luas",
    ],
  },
];

const tambahan = [
  { t: "Tambah orang", d: "Per orang dalam satu sesi", h: "Rp15.000" },
  { t: "Onesie / kostum", d: "Per kostum per sesi", h: "Rp15.000" },
  { t: "Properti studio", d: "Kursi, cermin, bunga, papan", h: "Gratis" },
  { t: "Cetak tambahan", d: "Per 1 lembar cetak 4R", h: "Rp10.000" },
  { t: "Tambah waktu", d: "Perpanjang 10 menit sesi", h: "Rp25.000" },
  { t: "Retouch premium", d: "5 foto edit detail, dikirim H+2", h: "Rp50.000" },
];

const catatan = [
  "Lebih dari 5 orang tetap kena biaya tambahan walau tidak satu frame.",
  "Reschedule maksimal H-1 sebelum jadwal, berlaku 1x.",
  "Datang 10 menit lebih awal supaya durasi sesi tetap utuh.",
  "File mentah dikirim di hari yang sama lewat Google Drive.",
];

const testimoni = [
  { q: "Awalnya deg-degan karena baru pertama kali, ternyata gampang banget. Remote tinggal pencet, 20 menit kerasa cepet tapi hasilnya banyak yang bagus.", n: "Nabila", d: "Bestie session" },
  { q: "Ruangannya private, jadi bebas gaya tanpa malu. Editannya rapi, gak lebay, warnanya bersih.", n: "Rizky & Sasa", d: "Couple session" },
  { q: "Foto wisuda di sini malah lebih bagus daripada di kampus. Cepet dan gak antre lama.", n: "Dimas", d: "Wisuda" },
  { q: "Bawa anak dua tetap aman, staffnya sabar dan ruangannya luas. Hasilnya dipajang di ruang tamu.", n: "Keluarga Wibowo", d: "Family session" },
  { q: "Buat foto profil LinkedIn cuma butuh 20 menit. Lightingnya bagus banget, gak perlu fotografer.", n: "Arya", d: "Personal branding" },
  { q: "Tempatnya bersih, wangi, dan estetik. Sekali ke sini langsung pengen balik lagi bulan depan.", n: "Talitha", d: "Solo portrait" },
];

const faq = [
  { q: "Satu sesi berapa menit?", a: "Sesi reguler 20 menit di dalam ruangan, plus 5 menit untuk memilih foto. Paket Group/Wisuda mendapat 30 menit sesi." },
  { q: "Maksimal berapa orang dalam satu sesi?", a: "Paket Basic dan Weekend gratis untuk 1–5 orang, Group/Wisuda sampai 8 orang. Lebih dari itu ada biaya tambahan Rp15.000 per orang." },
  { q: "Apakah dapat file digitalnya?", a: "Dapat. Semua file kami kirim gratis dengan warna asli, tanpa watermark, di hari yang sama." },
  { q: "Apakah bisa langsung cetak?", a: "Bisa. Cetak 4R tersedia di studio dan bisa langsung dibawa pulang setelah sesi." },
  { q: "Apakah bisa reschedule?", a: "Bisa, maksimal H-1 sebelum jadwal sesi dan berlaku satu kali. Cukup kabari kami lewat WhatsApp." },
  { q: "Boleh bawa properti sendiri?", a: "Boleh banget. Bunga, balon, banner wisuda, boneka, sampai outfit ganti — silakan bawa." },
  { q: "Kapan hasilnya dikirim?", a: "File mentah dikirim di hari yang sama. Retouch premium maksimal 2 hari kerja lewat Google Drive." },
];

const langkah = [
  { t: "Pilih paket", d: "Tentukan paket sesuai jumlah orang dan hari." },
  { t: "Pilih jadwal", d: "Pilih tanggal, lalu slot jam per 20 menit." },
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
        <PaketSection />
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

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`display leading-none ${className}`}>
      Pic <span className="italic">n</span> Pose
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-10">
          <a href="#top" className="min-w-0 truncate">
            <Wordmark className="text-xl md:text-2xl" />
          </a>
          <div className="flex items-center gap-3 md:gap-6">
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
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-[11px] font-medium tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
            >
              Booking
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-border lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-background px-5 pt-5 pb-10 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Wordmark className="text-2xl" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-border"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-12 flex flex-col divide-y divide-border border-y border-border">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="display py-5 text-3xl"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-10 flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-medium tracking-[0.16em] text-background uppercase"
            >
              <span>Booking sekarang</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal delay={0.05}>
              <p className="mb-5 text-[10px] tracking-[0.24em] text-muted-foreground uppercase md:mb-7">
                Self Photo Studio · Surabaya
              </p>
            </Reveal>
            <h1 className="display text-[14vw] leading-[0.95] sm:text-[9.5vw] lg:text-[6.4vw]">
              <TextReveal text="Bebas berekspresi," />
              <br />
              <TextReveal text="tanpa penonton." italicWords={["penonton."]} delay={0.2} />
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-7 md:text-base">
                Ruangan private, lighting siap pakai, remote di tangan kamu. Dua puluh menit penuh
                untuk jadi versi paling kamu — tanpa ada yang mengarahkan.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
                <a
                  href="#booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-medium tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.03]"
                >
                  Booking Sekarang
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/40 px-7 py-4 text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
                >
                  Lihat Paket
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.55}>
              <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  ["20", "menit / sesi"],
                  ["9", "background pilihan"],
                  ["4.9", "rating pengunjung"],
                ].map(([a, b]) => (
                  <div key={b}>
                    <dt className="display text-3xl md:text-4xl">{a}</dt>
                    <dd className="mt-1 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                      {b}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="grain relative order-1 aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[3/2] lg:order-2 lg:aspect-[4/5]"
          >
            <img
              src={heroImg}
              alt="Potret editorial berwarna di self photo studio Surabaya"
              width={1152}
              height={1472}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/45 to-transparent p-5 text-[10px] tracking-[0.18em] text-white/85 uppercase">
              <span>No. 01 / {BRAND}</span>
              <span>Surabaya</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function Statement() {
  return (
    <section className="mt-20 border-y border-border py-20 md:mt-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mb-10 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          (Statement)
        </p>
        <h2 className="display max-w-5xl text-[8.5vw] leading-[1.02] md:text-[4.8vw]">
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
  { t: "Proses cepat", d: "20 menit sesi, file di hari yang sama." },
  { t: "Untuk banyak momen", d: "Wisuda, ulang tahun, anniversary, atau tanpa alasan sama sekali." },
];

function Kenapa() {
  return (
    <section id="kenapa" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
              (Kenapa di sini)
            </p>
            <h2 className="display text-[12vw] leading-[0.98] sm:text-[8vw] lg:text-[4.8vw]">
              <TextReveal text="Sederhana, tapi" />
              <br />
              <TextReveal text="terasa berbeda." italicWords={["berbeda."]} delay={0.1} />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Semua detail kecil sudah kami siapkan, supaya kamu tinggal masuk, menekan remote, dan
              menikmati sesinya.
            </p>
          </Reveal>
        </div>

        <Parallax className="mt-12 hidden overflow-hidden lg:block" distance={40}>
          <div className="grain aspect-[21/8] overflow-hidden bg-muted">
            <img
              src={studioImg}
              alt="Interior private room self photo studio dengan lighting"
              loading="lazy"
              width={1408}
              height={1024}
              className="h-[115%] w-full object-cover"
            />
          </div>
        </Parallax>

        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {alasan.map((a, i) => (
            <Reveal key={a.t} delay={(i % 3) * 0.08} className="h-full">
              <li className="group flex h-full min-h-[15rem] flex-col bg-background p-7 transition-colors duration-500 hover:bg-secondary md:min-h-[16rem] md:p-9">
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <div className="mt-auto pt-10">
                  <h3 className="display text-2xl transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                    {a.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}


function JenisSesi() {
  return (
    <section id="sesi" className="border-t border-border bg-foreground py-20 text-background md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <h2 className="display text-[12vw] leading-[1] sm:text-[7vw] lg:text-[4.4vw]">
            <TextReveal text="Jenis sesi" italicWords={["sesi"]} />
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-background/60">
            Enam cara berbeda untuk masuk ke ruangan yang sama. Semuanya milik kamu sepenuhnya.
          </p>
        </div>

        <div className="grid gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-3">
          {sesi.map((s, i) => (
            <Reveal key={s.nama} delay={(i % 3) * 0.08}>
              <article className="group relative h-full bg-foreground">
                <div className="grain relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={`Contoh hasil ${s.nama} di ${BRAND} Surabaya`}
                    loading="lazy"
                    className="h-full w-full scale-105 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-100"
                  />
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-white/80">
                    {s.no}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 px-4 py-5">
                  <div className="min-w-0">
                    <h3 className="display text-xl">{s.nama}</h3>
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
            <img src={src} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

function PaketSection() {
  return (
    <section id="paket" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
            (Paket harga)
          </p>
          <h2 className="display text-[9vw] leading-[1.05] sm:text-[6vw] lg:text-[3.8vw]">
            <TextReveal text="Harga jelas, tanpa kejutan." italicWords={["kejutan."]} />
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {paket.map((p, i) => (
            <Reveal key={p.nama} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col p-7 transition-colors duration-500 md:p-9 ${
                  p.unggulan ? "bg-foreground text-background" : "bg-background hover:bg-secondary"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="display text-2xl">{p.nama}</h3>
                    <p
                      className={`mt-1 text-[10px] tracking-[0.16em] uppercase ${p.unggulan ? "text-background/60" : "text-muted-foreground"}`}
                    >
                      {p.hari}
                    </p>
                  </div>
                  {p.unggulan && (
                    <span className="shrink-0 rounded-full border border-background/40 px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase">
                      Favorit
                    </span>
                  )}
                </div>
                <p className="display mt-8 text-5xl md:text-6xl">{p.harga}</p>
                <p
                  className={`mt-2 text-xs tracking-[0.14em] uppercase ${p.unggulan ? "text-background/60" : "text-muted-foreground"}`}
                >
                  {p.orang} · {p.durasi}
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
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[11px] font-medium tracking-[0.16em] uppercase transition-transform duration-300 hover:scale-[1.02] ${
                    p.unggulan ? "bg-background text-foreground" : "bg-foreground text-background"
                  }`}
                >
                  Pilih paket ini
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
              (Tambahan)
            </p>
            <ul className="divide-y divide-border border-y border-border">
              {tambahan.map((t, i) => (
                <Reveal key={t.t} delay={i * 0.05}>
                  <li className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5">
                    <div className="min-w-0">
                      <p className="display text-xl">{t.t}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t.d}</p>
                    </div>
                    <span className="shrink-0 text-sm font-medium tabular-nums">{t.h}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
              (Perlu diketahui)
            </p>
            <ul className="space-y-4 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              {catatan.map((c) => (
                <li key={c} className="flex gap-3">
                  <span>—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[11px] font-medium tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.03]"
            >
              Tanya via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const galeri = [
  { src: gal4Img, cat: "Wisuda", span: "lg:col-span-5 lg:row-span-2", ratio: "aspect-[4/5]" },
  { src: gal2Img, cat: "Couple", span: "lg:col-span-4", ratio: "aspect-[4/5]" },
  { src: gal1Img, cat: "Solo", span: "lg:col-span-3", ratio: "aspect-[3/4]" },
  { src: gal5Img, cat: "Family", span: "lg:col-span-3", ratio: "aspect-[3/4]" },
  { src: gal3Img, cat: "Sahabat", span: "lg:col-span-4", ratio: "aspect-[4/5]" },
];

function Galeri() {
  return (
    <section id="galeri" className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[12vw] leading-[1] sm:text-[7vw] lg:text-[4.4vw]">
            <TextReveal text="Hasil" />{" "}
            <TextReveal text="sesi" italicWords={["sesi"]} delay={0.1} />
          </h2>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Wisuda · Couple · Solo · Family · Sahabat
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
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
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

function TestiCard({ t }: { t: (typeof testimoni)[number] }) {
  return (
    <figure className="w-[78vw] shrink-0 border border-border p-6 sm:w-[420px] md:p-8">
      <p className="display text-xl leading-[1.35] md:text-2xl">
        <span className="italic">“</span>
        {t.q}
        <span className="italic">”</span>
      </p>
      <figcaption className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        <span className="text-foreground">{t.n}</span>
        <span className="h-px w-8 bg-border" />
        <span>{t.d}</span>
      </figcaption>
    </figure>
  );
}

function Testimoni() {
  const rowA = [...testimoni, ...testimoni];
  const rowB = [...testimoni.slice().reverse(), ...testimoni.slice().reverse()];
  return (
    <section className="overflow-hidden border-t border-border py-20 md:py-32">
      <div className="mx-auto mb-12 max-w-[1400px] px-5 md:px-10">
        <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          (Kata mereka)
        </p>
        <h2 className="display text-[12vw] leading-[1] sm:text-[7vw] lg:text-[4.4vw]">
          <TextReveal text="Cerita dari" />{" "}
          <TextReveal text="pengunjung" italicWords={["pengunjung"]} delay={0.1} />
        </h2>
      </div>

      <div className="group space-y-4 overflow-hidden">
        <div className="marquee-slow flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {rowA.map((t, i) => (
            <TestiCard key={`a${i}`} t={t} />
          ))}
        </div>
        <div className="marquee-reverse flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {rowB.map((t, i) => (
            <TestiCard key={`b${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Cara() {
  return (
    <section className="bg-foreground py-20 text-background md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 max-w-2xl md:mb-14">
          <p className="mb-6 text-[10px] tracking-[0.24em] text-background/50 uppercase">
            (Cara booking)
          </p>
          <h2 className="display text-[11vw] leading-[1] sm:text-[6vw] lg:text-[4vw]">
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
                <span className="display block text-4xl text-background/30 transition-colors duration-500 group-hover:text-background">
                  0{i + 1}
                </span>
                <h3 className="display mt-6 text-xl">{l.t}</h3>
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
    <section id="faq" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 className="display text-[11vw] leading-[1.05] sm:text-[6vw] lg:text-[3.6vw]">
            <TextReveal text="Sering ditanya" italicWords={["ditanya"]} />
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
                    <span className="display min-w-0 text-lg transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
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

/* ---------- Booking: kalender + slot 20 menit ---------- */

const HARI = ["S", "S", "R", "K", "J", "S", "M"];
const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

function buildSlots() {
  const out: string[] = [];
  for (let h = 10; h <= 20; h++) {
    for (const m of [0, 20, 40]) {
      if (h === 20 && m > 20) break;
      out.push(`${String(h).padStart(2, "0")}.${String(m).padStart(2, "0")}`);
    }
  }
  return out;
}
const SLOTS = buildSlots();

function Booking() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [picked, setPicked] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const days = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const startPad = (first.getDay() + 6) % 7; // Senin = 0
    const total = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
    const cells: (Date | null)[] = Array.from({ length: startPad }, () => null);
    for (let d = 1; d <= total; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    return cells;
  }, [cursor]);

  const fmt = (d: Date) => `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nama = String(data.get("nama") ?? "").trim();
    const wa = String(data.get("wa") ?? "").trim();
    const paketPilih = String(data.get("paket") ?? "");
    const orang = String(data.get("orang") ?? "");
    const pesan = String(data.get("pesan") ?? "").trim();

    if (nama.length < 2 || nama.length > 80) return setError("Nama minimal 2 karakter.");
    if (!/^[0-9+\s-]{8,20}$/.test(wa)) return setError("Nomor WhatsApp belum valid.");
    if (!picked) return setError("Pilih tanggal sesi dulu ya.");
    if (!slot) return setError("Pilih jam sesi dulu ya.");
    if (pesan.length > 500) return setError("Pesan terlalu panjang.");

    setError("");
    setSent(true);
    const text = `Halo ${BRAND}, saya ${nama} mau booking ${paketPilih} untuk ${orang} pada ${fmt(picked)} jam ${slot} WIB. ${pesan}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const field =
    "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";
  const label = "text-[10px] tracking-[0.2em] text-muted-foreground uppercase";

  return (
    <section id="booking" className="border-t border-border py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="mb-6 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
            (Booking)
          </p>
          <h2 className="display text-[13vw] leading-[0.98] sm:text-[7vw] lg:text-[4.6vw]">
            <TextReveal text="Amankan" />{" "}
            <TextReveal text="jadwal kamu" italicWords={["jadwal"]} delay={0.1} />
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Pilih tanggal, lalu slot per 20 menit. Kami konfirmasi lewat WhatsApp maksimal 1 jam di
            jam operasional.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Kalender + slot */}
          <Reveal>
            <div className="border border-border p-5 md:p-7">
              <div className="mb-5 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <button
                  type="button"
                  aria-label="Bulan sebelumnya"
                  onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <p className="display text-center text-xl md:text-2xl">
                  {BULAN[cursor.getMonth()]} {cursor.getFullYear()}
                </p>
                <button
                  type="button"
                  aria-label="Bulan berikutnya"
                  onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                {HARI.map((h, i) => (
                  <span key={i} className="py-2">
                    {h}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => {
                  if (!d) return <span key={i} />;
                  const past = d < today;
                  const active = picked?.toDateString() === d.toDateString();
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={past}
                      onClick={() => {
                        setPicked(d);
                        setSlot(null);
                      }}
                      className={`aspect-square rounded-sm text-sm tabular-nums transition-colors ${
                        past
                          ? "cursor-not-allowed text-muted-foreground/35"
                          : active
                            ? "bg-foreground text-background"
                            : "hover:bg-secondary"
                      }`}
                    >
                      {d.getDate()}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <p className={label}>
                  {picked ? `Slot ${fmt(picked)}` : "Pilih tanggal untuk melihat slot"}
                </p>
                <AnimatePresence mode="wait">
                  {picked && (
                    <motion.div
                      key={picked.toDateString()}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4"
                    >
                      {SLOTS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSlot(s)}
                          className={`rounded-sm border py-2.5 text-xs tabular-nums transition-colors ${
                            slot === s
                              ? "border-foreground bg-foreground text-background"
                              : "border-border hover:bg-secondary"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="mt-4 text-[11px] text-muted-foreground">
                  Setiap slot berdurasi 20 menit. Jam operasional 10.00 – 21.00 WIB.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="grid gap-6 border border-border p-6 md:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className={label}>Nama</span>
                  <input name="nama" maxLength={80} required placeholder="Nama kamu" className={field} />
                </label>
                <label className="block">
                  <span className={label}>No. WhatsApp</span>
                  <input name="wa" maxLength={20} required placeholder="08xxxxxxxxxx" className={field} />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className={label}>Pilihan paket</span>
                  <select
                    name="paket"
                    className={field}
                    defaultValue={`${paket[0]?.nama} — ${paket[0]?.harga}`}
                  >
                    {paket.map((p) => (
                      <option key={p.nama}>{`${p.nama} — ${p.harga}`}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className={label}>Jumlah orang</span>
                  <select name="orang" className={field} defaultValue="2 orang">
                    {["1 orang", "2 orang", "3 orang", "4 orang", "5 orang", "6+ orang"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-border py-4">
                <div>
                  <p className={label}>Tanggal</p>
                  <p className="display mt-1 text-lg">{picked ? fmt(picked) : "—"}</p>
                </div>
                <div>
                  <p className={label}>Jam</p>
                  <p className="display mt-1 text-lg">{slot ? `${slot} WIB` : "—"}</p>
                </div>
              </div>

              <label className="block">
                <span className={label}>Pesan tambahan</span>
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
                className="mt-2 inline-flex items-center justify-between gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-medium tracking-[0.16em] text-background uppercase transition-transform duration-300 hover:scale-[1.02]"
              >
                Kirim & Booking Sekarang
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <div className="space-y-4 border-t border-border pt-6 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>
                    Jl. Raya Gubeng No. 21, Surabaya, Indonesia
                    <br />
                    <span className="text-muted-foreground">Setiap hari, 10.00 – 21.00 WIB</span>
                  </span>
                </p>
              </div>
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
            <p className="display max-w-sm text-3xl leading-[1.15] md:text-4xl">
              Ruang kecil di Surabaya, untuk cerita yang{" "}
              <span className="italic">tidak kecil.</span>
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
                aria-label={`Instagram ${BRAND}`}
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

        <p className="display pt-10 text-[15vw] leading-[0.85]">
          Pic <span className="italic">n</span> Pose
        </p>
        <p className="mt-8 text-[10px] tracking-[0.18em] text-background/45 uppercase">
          © {new Date().getFullYear()} {BRAND} · Self Photo Studio Surabaya
        </p>
      </div>
    </footer>
  );
}
