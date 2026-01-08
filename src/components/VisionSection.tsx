import { 
  Droplets, 
  Trash2, 
  Building2, 
  Footprints, 
  Hammer, 
  Ban, 
  Sparkles, 
  Heart, 
  GraduationCap, 
  FileCheck, 
  Car, 
  MapPin,
  ArrowRight
} from "lucide-react";

const visionItems = [
  {
    icon: Droplets,
    title: "स्वच्छ पिण्याच्या पाण्याची व्यवस्था",
    description: "प्रत्येक घरात शुद्ध पाणी"
  },
  {
    icon: Trash2,
    title: "कचरा व्यवस्थापनाची रीतसर व्यवस्था",
    description: "स्वच्छ परिसर, निरोगी आयुष्य"
  },
  {
    icon: Building2,
    title: "सार्वजनिक स्वच्छतागृह आणि गटार व्यवस्था",
    description: "आरोग्यदायी पायाभूत सुविधा"
  },
  {
    icon: Footprints,
    title: "पदपथ चालण्यासाठी मोकळे करणे",
    description: "सुरक्षित आणि मोकळे रस्ते"
  },
  {
    icon: Hammer,
    title: "विकासाभिमुख योजना अंमलात आणणे",
    description: "प्रभागाचा शाश्वत विकास"
  },
  {
    icon: Ban,
    title: "बेकायदेशीर बांधकामांवर कारवाई",
    description: "नियमांचे काटेकोर पालन"
  },
  {
    icon: Sparkles,
    title: "सार्वजनिक जागांची स्वच्छता",
    description: "सुंदर आणि स्वच्छ परिसर"
  },
  {
    icon: Heart,
    title: "समाज कल्याणाच्या लोकाभिमुख योजना",
    description: "सर्वांसाठी समान संधी"
  },
  {
    icon: GraduationCap,
    title: "महानगरपालिका शाळांचा शैक्षणिक दर्जा",
    description: "गुणवत्तापूर्ण शिक्षण"
  },
  {
    icon: FileCheck,
    title: "बांधकाम परवानगीत नियमानुसार अंमलबजावणी",
    description: "पारदर्शक कारभार"
  },
  {
    icon: Car,
    title: "वाहतूक व्यवस्था सुयोग्य व सुरळीत करणे",
    description: "सहज वाहतूक, कमी वेळ"
  },
  {
    icon: MapPin,
    title: "दर 250 मीटरवर कचराकुंडी व्यवस्था",
    description: "संपूर्ण वार्डात स्वच्छता"
  }
];

const VisionSection = () => {
  return (
    <section id="vision" className="bg-secondary py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[120px] opacity-50"
          style={{ background: 'radial-gradient(circle, hsl(38 85% 55% / 0.15), transparent)' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(220 50% 25% / 0.1), transparent)' }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            विकासाचा आराखडा
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold marathi-text text-center mx-auto text-foreground">
            प्रभाग 192 साठी आमची दृष्टी
          </h2>
          <p className="text-lg text-muted-foreground text-center mx-auto mt-5 max-w-2xl">
            विकासाभिमुख कार्यक्रम जे आपल्या परिसराला बदलतील
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visionItems.map((item, index) => (
            <div 
              key={index} 
              className="vision-card group cursor-default relative overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <div className="icon-container mb-5 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2 marathi-text leading-relaxed pr-8">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground marathi-text leading-relaxed">
                {item.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">जाणून घ्या</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-4 marathi-text">आमच्या विकास योजनेबद्दल अधिक जाणून घ्या</p>
          <a href="#join" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all duration-300 group">
            <span className="marathi-text">सहभागी व्हा</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
