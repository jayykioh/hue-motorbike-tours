import type { ReactNode } from "react";

type Props = {
  locale: string;
};

export default function FaqHome({ locale }: Props) {
  const isVi = locale === "vi";

  const faqs = isVi ? [
    {
      q: "Tour xe máy có an toàn cho người chưa từng đi xe máy không?",
      a: "Hoàn toàn an toàn. Bạn sẽ ngồi sau xe (pillion) của các tay lái Easy Rider dày dặn kinh nghiệm nhất. Xe của chúng tôi được bảo dưỡng định kỳ và bạn luôn được trang bị mũ bảo hiểm đạt chuẩn."
    },
    {
      q: "Hành lý của tôi sẽ được vận chuyển như thế nào?",
      a: "Chúng tôi có thể chở balo lớn hoặc vali (lên đến 20-25kg) buộc an toàn ở phía sau xe máy. Hành lý của bạn sẽ được bọc nilon chống nước để đảm bảo an toàn tuyệt đối dù thời tiết xấu."
    },
    {
      q: "Nếu trời mưa thì sao?",
      a: "Chúng tôi cung cấp áo mưa chất lượng cao trùm kín toàn thân từ đầu đến chân cho bạn, và bọc chống nước cho hành lý. Nếu thời tiết quá khắc nghiệt (bão), chúng tôi sẽ hỗ trợ đổi sang ô tô hoặc hoàn tiền."
    },
    {
      q: "Tour có bao gồm chi phí ăn uống và vé tham quan không?",
      a: "Tour mặc định bao gồm xe máy, tài xế, xăng xe, phí gửi xe và mũ bảo hiểm. Vé tham quan và các bữa ăn không bao gồm để bạn tự do lựa chọn món ăn và điểm đến theo ý thích."
    }
  ] : [
    {
      q: "Is it safe if I've never been on a motorbike before?",
      a: "Absolutely! You will ride pillion (on the back) with our highly experienced Easy Riders. Our drivers prioritize your safety over speed. Helmets are provided and strictly required."
    },
    {
      q: "What happens to my large luggage?",
      a: "Our motorbikes are specially equipped with racks to securely strap your suitcases or large backpacks (up to 20-25kg) on the back. We wrap all luggage in waterproof bags so it arrives dry and safe."
    },
    {
      q: "What happens if it rains?",
      a: "We provide high-quality, full-body ponchos to keep you dry, and we double-wrap your luggage. Riding in light rain is part of the adventure! However, in extreme weather, we can arrange a car transfer or offer a refund."
    },
    {
      q: "Are food and entrance fees included?",
      a: "The tour includes the motorbike, English-speaking driver, gas, parking fees, and helmet. Food, drinks, and entrance tickets are excluded so you have the freedom to choose what you want to eat and visit."
    }
  ];

  // AI Citation Readiness & SEO: FAQPage Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="font-display text-h2 text-[var(--color-ink)]">
            {isVi ? "Câu Hỏi Thường Gặp" : "Frequently Asked Questions"}
          </h2>
          <p className="text-body-lg text-[var(--color-ink)]/70">
            {isVi ? "Mọi thông tin bạn cần biết trước khi khởi hành." : "Everything you need to know before hitting the road."}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[var(--color-sand)]/30 rounded-2xl p-6 md:p-8 border border-[var(--color-sand)]">
              <h3 className="font-bold text-lg md:text-xl text-[var(--color-ink)] mb-3">
                {faq.q}
              </h3>
              <p className="text-body text-[var(--color-ink)]/80 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}