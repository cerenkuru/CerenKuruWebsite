export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#2C3E7F] to-[#1F2A5C] text-white">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Benimle İletişime Geçin</h2>
                <p className="text-lg mb-12 opacity-90">
                    Bir projede çalışmak istiyorsanız veya sadece merhaba demek istiyorsanız, aşağıdan bana ulaşabilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="mailto:your-email@example.com"
                        className="px-8 py-3 bg-[#D4A5D4] text-[#2C3E7F] rounded-full font-bold hover:bg-white transition-colors"
                    >
                        E-mail Gönder
                    </a>
                    <a
                        href="#"
                        className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#2C3E7F] transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>

                <p className="text-sm opacity-75">
                    © 2024 Ceren. Tüm hakları saklıdır.
                </p>
            </div>
        </section>
    );
}