"use client";
import React from "react";

const rulesData = [
    {
        title: "Genel Kurallar",
        rules: [
            "Saygılı olun: Tüm kullanıcılarla nazik ve saygılı iletişim kurun.",
            "Spam ve reklam yasaktır: Başka platformların reklamını yapmak veya spam içerik paylaşmak yasaktır.",
            "Gizliliğe saygı gösterin: Kendi veya başkalarının kişisel bilgilerini paylaşmayın.",
            "Hukuka uygun paylaşım yapın: Yasa dışı içerikler paylaşmak yasaktır."
        ],
    },
    {
        title: "İçerik Paylaşımı",
        rules: [
            "Uygun konu seçimi: Konularınızı ilgili kategorilere açmaya özen gösterin.",
            "Kaynak belirtme: Alıntı veya referans içerik paylaşıyorsanız, kaynak belirtin.",
            "Uygunsuz içerik yasaktır: Küfür, nefret söylemi, ayrımcılık ve yetişkin içerik paylaşımı yasaktır.",
            "Clickbait ve yanıltıcı bilgilere yer yok: Bilgi paylaşırken doğruluk ilkesine dikkat edin."
        ],
    },
    {
        title: "Tartışma ve Yorum Kuralları",
        rules: [
            "Kişisel saldırı yok: Fikir ayrılıkları olabilir, ancak kişisel saldırılara yer yoktur.",
            "Tartışmaları saygı çerçevesinde yapın: Farklı görüşlere açık olun ve medeni tartışmalar yürütün.",
            "Flood yapmayın: Aynı mesajı veya benzer içerikleri tekrar tekrar paylaşmayın."
        ],
    },
    {
        title: "Hesap ve Kullanıcı Güvenliği",
        rules: [
            "Tek hesap kullanımı: Birden fazla hesap açmak yasaktır.",
            "Şifrenizi paylaşmayın: Güvenliğiniz için şifrenizi kimseyle paylaşmayın.",
            "Hesap satışı yasaktır: Hesaplarınızı satmak veya devretmek yasaktır."
        ],
    },
    {
        title: "Moderasyon ve Yaptırımlar",
        rules: [
            "Kurallara uymayan kullanıcılar uyarılacak veya banlanacaktır.",
            "Yetkililerin kararlarına saygı gösterin.",
            "Kuralların güncellenme hakkı saklıdır."
        ],
    },
];

const RulesPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-3  max-w-3xl">
           
            <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">📜 Forum Kuralları</h1>
            
            <div className="space-y-3 ">
                {rulesData.map((section, index) => (
                    <div key={index} className="bg-white dark:bg-darkerBG p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 text-green-600 ">
                            {section.title}
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {section.rules.map((rule, ruleIndex) => (
                                <li key={ruleIndex}>{rule}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RulesPage;
