import { Phone, MessageCircle, Instagram, Facebook, MapPin, ArrowUpRight, Heart } from "lucide-react";

const ContactSection = () => {
  const phoneNumber = "7303332999";
  const instagramUrl = "https://www.instagram.com/deepak_for_people?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==";

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Main Contact Section */}
      <div className="bg-primary text-primary-foreground py-20 md:py-24 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
            style={{ background: 'radial-gradient(circle, hsl(38 85% 55%), transparent)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-10"
            style={{ background: 'radial-gradient(circle, hsl(0 0% 100%), transparent)' }} />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                प्रभाग 192, मुंबई
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 marathi-text">
                संपर्क करा
              </h2>
              <p className="text-lg text-primary-foreground/70 marathi-text">
                आमच्याशी संपर्क साधा आणि विकासात सहभागी व्हा
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Phone */}
              <a 
                href={`tel:+91${phoneNumber}`}
                className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
                  <Phone className="w-7 h-7 group-hover:text-accent-foreground" />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-lg block mb-1">फोन</span>
                  <span className="text-sm text-primary-foreground/60">+91 {phoneNumber}</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/91${phoneNumber}?text=नमस्कार, मला प्रभाग 192 निवडणुकीबद्दल माहिती हवी आहे.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 hover:border-[#25D366]/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-lg block mb-1">WhatsApp</span>
                  <span className="text-sm text-primary-foreground/60">संदेश पाठवा</span>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#833AB4]/40 via-[#FD1D1D]/40 to-[#F77737]/40 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Instagram className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-lg block mb-1">Instagram</span>
                  <span className="text-sm text-primary-foreground/60">@deepak_for_people</span>
                </div>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1877F2]/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Facebook className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <span className="font-semibold text-lg block mb-1">Facebook</span>
                  <span className="text-sm text-primary-foreground/60">Ward 192</span>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-12 text-center">
              <a 
                href={`https://wa.me/91${phoneNumber}?text=नमस्कार, मला प्रभाग 192 निवडणुकीबद्दल माहिती हवी आहे.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex text-lg group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp वर संपर्क साधा</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        {/* Tricolor stripe */}
        <div className="tricolor-stripe" />
        
        <div className="section-container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-accent-foreground">१९२</span>
                </div>
                <span className="font-display font-bold text-lg">प्रभाग 192</span>
              </div>
              <p className="text-sm text-background/50 marathi-text">
                © 2026 प्रभाग 192 निवडणूक अभियान. सर्व हक्क राखीव.
              </p>
            </div>

            {/* Center - Made with love */}
            <div className="flex items-center gap-2 text-sm text-background/50">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for Ward 192</span>
            </div>

            {/* Right - Election info */}
            <div className="text-center md:text-right">
              <p className="font-semibold marathi-text">भृ.मुं.पा. निवडणूक 2026</p>
              <p className="text-sm text-background/50 marathi-text">दीपक भिकाजी वाघमारे</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
