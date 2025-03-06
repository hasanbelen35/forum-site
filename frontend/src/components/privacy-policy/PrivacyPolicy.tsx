"use client";
import React from "react";

const privacyData = [
    {
        title: "1. Toplanan Bilgiler",
        content: [
            {
                subtitle: "1.1. Kişisel Bilgiler",
                details: [
                    "Ad, kullanıcı adı ve e-posta adresi.",
                    "Profil bilgileri (profil resmi, biyografi vb.).",
                    "Forumda paylaştığınız içerikler (gönderiler, yorumlar, mesajlar)."
                ]
            },
            {
                subtitle: "1.2. Otomatik Olarak Toplanan Bilgiler",
                details: [
                    "IP adresi ve tarayıcı bilgileri.",
                    "Çerezler (cookies) ve takip teknolojileri.",
                    "Cihaz ve kullanım verileri (hangi sayfalara girdiğiniz, gezinme alışkanlıklarınız)."
                ]
            }
        ]
    },
    {
        title: "2. Bilgilerin Kullanımı",
        details: [
            "Hesap oluşturma ve yönetme.",
            "Forum içi etkileşimleri sağlama.",
            "İçeriklerin güvenliğini ve moderasyonunu sağlama.",
            "Kullanıcı deneyimini iyileştirme.",
            "Yasal gerekliliklere uyum sağlama."
        ]
    },
    {
        title: "3. Çerezler ve Takip Teknolojileri",
        details: [
            "Zorunlu Çerezler: Siteyi düzgün çalıştırmak için gereklidir.",
            "Analitik Çerezler: Kullanıcı deneyimini geliştirmek için site kullanım verilerini analiz eder.",
            "Reklam Çerezleri: Kişiselleştirilmiş reklamlar gösterebilir (şu an kullanılmıyorsa belirtin).",
            "Çerezleri tarayıcınızdan yönetebilir veya devre dışı bırakabilirsiniz."
        ]
    },
    {
        title: "4. Bilgilerin Paylaşımı",
        details: [
            "Kişisel veriler üçüncü taraflarla paylaşılmaz, ancak şu durumlarda paylaşılabilir:",
            "Yasal zorunluluklar: Yetkili makamların talebiyle.",
            "Güvenlik ve kötüye kullanım önleme: Dolandırıcılık veya yasa dışı faaliyetlerin önlenmesi."
        ]
    },
    {
        title: "5. Verilerin Saklanması ve Güvenliği",
        details: [
            "Verileriniz güvenli sunucularda saklanmaktadır.",
            "Kötüye kullanımı önlemek için endüstri standartlarına uygun güvenlik önlemleri alınmaktadır.",
            "Ancak internet üzerindeki hiçbir veri aktarımının %100 güvenli olmadığını unutmayın."
        ]
    },
    {
        title: "6. Kullanıcı Hakları",
        details: [
            "Kişisel verilerinize erişim talep etme.",
            "Verilerin düzeltilmesini veya silinmesini isteme.",
            "Veri işlemeyi sınırlandırma veya itiraz etme.",
            "Verilerinizin taşınmasını talep etme.",
            "Bu hakları kullanmak için bizimle iletişime geçebilirsiniz: privacy@example.com"
        ]
    },
    {
        title: "7. Gizlilik Politikasındaki Değişiklikler",
        details: [
            "Gizlilik politikamız zaman zaman güncellenebilir.",
            "Güncellemeleri takip etmek için bu sayfayı düzenli olarak kontrol edebilirsiniz."
        ]
    }
];

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">🔒 Gizlilik Politikası</h1>
            
            <div className="space-y-6">
                {privacyData.map((section, index) => (
                    <div key={index} className="bg-white dark:bg-darkerBG p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                            {section.title}
                        </h2>

                        {section.content ? (
                            section.content.map((sub, subIndex) => (
                                <div key={subIndex} className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{sub.subtitle}</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                        {sub.details.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                {section.details.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
