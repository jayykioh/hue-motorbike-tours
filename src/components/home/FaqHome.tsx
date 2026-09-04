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
    <section className="py-20 md:py-32 bg-white border-t border-[var(--color-sand)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[var(--container-max)] mx-auto px-5 sm:px-6 w-full flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)]" />
            <p className="text-[0.8rem] font-bold tracking-[0.25em] uppercase text-[var(--color-terracotta)]">
              {isVi ? "GIẢI ĐÁP THẮC MẮC" : "FREQUENTLY ASKED QUESTIONS"}
            </p>
          </div>
          <h2 className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-[var(--color-ink)] leading-[1.05] tracking-tight">
            {isVi ? "Những điều bạn cần biết" : "Everything you need to know"}
          </h2>
          <p className="text-base sm:text-body-lg text-[var(--color-ink)]/70 font-body leading-relaxed">
            {isVi 
              ? "Minh bạch và rõ ràng. Mọi giải đáp trước khi bạn bước lên xe cùng chúng tôi." 
              : "Clear answers before hitting the road. No surprises, no hidden catches."}
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--color-limestone)] rounded-[var(--radius-lg)] p-6 sm:p-8 border border-[var(--color-sand)] flex flex-col gap-3.5 hover:border-[var(--color-ink)]/20 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[var(--color-terracotta)] tracking-wider">
                  0{index + 1}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-sand)]" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-[var(--color-ink)] leading-snug font-semibold">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-ink)]/75 leading-relaxed font-body">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer help note */}
        <div className="text-center pt-2">
          <p className="text-sm text-[var(--color-ink)]/65 font-body">
            {isVi ? "Còn câu hỏi chưa được giải đáp? " : "Still have a question? "}
            <a
              href="https://wa.me/84862391918?text=Hi!%20I%20have%20a%20question%20about%20your%20tours"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-terracotta)] hover:underline ml-1"
            >
              {isVi ? "Nhắn tin hỏi chúng tôi qua WhatsApp →" : "Chat with us directly on WhatsApp →"}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}