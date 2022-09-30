/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question: "Jasa pembuatan landing page ini pakai CMS apa ya ?",
    answer:
      "Pakai CMS WordPress.org ( bukan WordPress.com ) dan page builder Elementor PRO. Lebih lengkap fiturnya. SatuLisan tidak menerima diluar WordPress.",
  },
  {
    question: "Apa bedanya sih paket landing page Basic dan Pro ?",
    answer:
      "Paket Basic cocok kalau Anda sudah beli domain dan hosting. Jadi saya tinggal buat landing page. Paket Pro sudah termasuk domain hosting, alias terima beres.",
  },
  {
    question: "Bagaimana cara order jasa landing page murah ini ?",
    answer:
      "Diskusi kebutuhan => pembayaran => isi data => pengerjaan max 5 hari kerja => revisi ( jika ada ) => pelunasan ( jika belum ) => serah terima akses login.",
  },
  {
    question: "Data-data apa saja yang harus saya siapkan di awal ?",
    answer:
      "Informasi dasar produk ( nanti ada Google Docs yang saya kasih, tinggal isi ), foto produk, video produk ( jika ada ) dan testimoni ( jika sudah ada ). Dari semua data awal ini, saya yang akan mengembangkan jadi sebuah sales letter yang persuasif.",
  },
  {
    question: "Terima jasa pembuatan landing page bahasa Inggris ?",
    answer:
      "Ya, saya menerima. Tinggal disesuaikan aja harganya dari paket diatas.",
  },
  {
    question: "Apakah bisa mengerjakan editing gambar dan video ?",
    answer:
      "Editing gambar : sebatas resize ukuran dan hapus background ( optional jika perlu ). Jadi tidak melayani editing apapun, karena saya tidak menyediakan jasa desain grafis. Editing video : saya tidak melayani editing dalam bentuk apapun.",
  },
  {
    question: "Apakah bisa buat LP seperti SatuLisan tampilannya ?",
    answer:
      "Mohon maaf tidak bisa. Ada 99+ template Premium yang bisa bebas Anda pilih.",
  },
  {
    question: "Boleh bayar lunas setelah LP beres ?",
    answer:
      "Jadi tidak perlu DP Tidak boleh. Anda komitmen bayar 50% sebagai tanda jadi, saya komitmen selesaikan LP baru dilunasi. FAIR kan ? Sudah banyak testimoni puas client & ratusan bukti transaksi. Kalau masih ragu, berarti belum jodoh pakai jasa saya.",
  },
  {
    question: "Kalau sudah transfer lalu saya cancel apakah boleh ?",
    answer: "Boleh saja, namun tidak ada pengembalian pembayaran.",
  },
  {
    question: "Pelunasan biaya paling lambat harus dibayar kapan ?",
    answer:
      "Maksimal 1 hari setelah LP selesai / revisi selesai ( jika ada revisi ).",
  },
  {
    question: "Setelah landing page saya beres ada support tidak ?",
    answer:
      "Ada. Anda bebas diskusi dengan tim SatuLisan di jam kerja via Whatsapp. Selain itu, kalau ada kendala di LP, ada error, down / sejenisnya, tanggung jawab saya.",
  },
  {
    question: "Setelah landingpage beres saya bisa edit konten sendiri ?",
    answer:
      "Bisa dong. Semua akses yang terkait dengan LP akan dikasih, termasuk dashboard admin. Kalaupun kesulitan saat editing, tinggal chat saya untuk dipandu. Anda juga akan mendapatkan video tutorial cara edit konten di Elementor.",
  },
  {
    question: "Kalau sewaktu-waktu mau update konten, bisa dibantu ?",
    answer:
      "Minor editing SESEKALI saya bantu, tapi tidak selalu. Karena saya tidak sediakan jasa maintain konten, baik free / berbayar. Jadi bisa Anda lakukan sendiri seperti client saya lainnya. Kalau ada kendala, saya pandu langkah-langkahnya.",
  },
  {
    question: "Setelah bikin landing page produk saya langsung laris ?",
    answer:
      "Ya jelas tidak. Landing page ibarat toko / etalase produk. Supaya ada order, ya perlu dipromosiin kan ? Caranya banyak, bisa posting di medsos, bisa lewat group-group Whatsapp, pakai SEO, atau pakai iklan FB / IG / Google, dll.",
  },
  {
    question: "Kok copyright gambar testimoninya punya NgetikID ?",
    answer:
      "SatuLisan, SalesLetter, JagoLP dan NgetikID adalah satu group. Awalnya saya & tim jualan di NgetikID. Fasilitas dan harga buat landing page nya sama aja.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SectionFaq() {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-dark-50 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-10">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400 bg-transparent">
                  <span className="font-medium text-white text-2xl">
                    {faq.question}
                  </span>
                  <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-6 w-6 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-gray-50">{faq.answer}</p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
