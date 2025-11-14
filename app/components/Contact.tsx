export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-transparent">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Benimle İletişime Geçin</h2>
                <p className="text-lg mb-12 text-gray-600">
                    Bir projede çalışmak istiyorsanız veya sadece merhaba demek istiyorsanız, aşağıdan bana ulaşabilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="mailto:your-email@example.com"
                        className="px-8 py-3 bg-[#87B3C8] text-white rounded-full font-bold hover:bg-[#1F2A5C] transition-colors"
                    >
                        E-mail Gönder
                    </a>
                    <a
                        href="#"
                        className="px-8 py-3 border-2 border-[#87B3C8] text-[#87B3C8] rounded-full font-medium hover:bg-[#F5E6F0] transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="text-sm text-gray-600">
                    © 2024 Ceren. Tüm hakları saklıdır.
                </p>
            </div>
        </section>
    );
}