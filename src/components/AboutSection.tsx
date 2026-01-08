import { CheckCircle2, Target, Users, Shield, Quote } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "विकासाभिमुख दृष्टिकोन",
    description: "प्रभागातील प्रत्येक समस्येवर व्यावहारिक उपाय"
  },
  {
    icon: Users,
    title: "लोकाभिमुख कार्य",
    description: "नागरिकांच्या गरजांना प्राधान्य"
  },
  {
    icon: Shield,
    title: "पारदर्शक कारभार",
    description: "जबाबदारीने काम करण्याची वचनबद्धता"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(38 85% 55% / 0.3), transparent)' }} />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              आमच्याबद्दल
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground marathi-text mb-6 leading-tight">
              हा फक्त निवडणुकीचा प्रश्न नाही,<br />
              <span className="gradient-text">हा विकासाचा प्रश्न आहे</span>
            </h2>
            <div className="space-y-5 text-muted-foreground marathi-text">
              <p className="text-lg leading-relaxed">
                प्रभाग 192 मधील नागरिकांसाठी हा निवडणुकीचा कार्यक्रम फक्त मतांसाठी नाही. 
                आपल्या परिसरात राहणाऱ्या प्रत्येक कुटुंबाला चांगल्या सुविधा मिळाव्यात, 
                स्वच्छ आणि सुरक्षित वातावरण मिळावे, हे आमचे ध्येय आहे.
              </p>
              <p className="leading-relaxed">
                आम्ही वचन देतो की निवडून आल्यावर प्रत्येक काम पारदर्शकपणे आणि 
                जबाबदारीने केले जाईल. तुमचा विश्वास हीच आमची शक्ती आहे.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-10 space-y-4">
              {["स्थानिक समस्यांची जाण", "दीर्घकालीन विकासाची दृष्टी", "पारदर्शक कारभाराचे वचन"].map((point, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 border border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium marathi-text">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values Cards */}
          <div className="space-y-5">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="vision-card flex items-start gap-5 group"
              >
                <div className="icon-container flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 marathi-text">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground marathi-text leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Quote Card */}
            <div className="relative bg-primary rounded-3xl p-8 text-primary-foreground overflow-hidden">
              {/* Decorative quote icon */}
              <Quote className="absolute top-4 right-4 w-16 h-16 text-white/10" />
              
              <blockquote className="text-xl font-medium marathi-text leading-relaxed relative z-10">
                "आपला प्रभाग, आपली जबाबदारी. एकत्र मिळून आपण बदल घडवू शकतो."
              </blockquote>
              <div className="mt-6 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg">श्री. दिपक भिकाजी वाघमारे</p>
                  <p className="text-sm text-primary-foreground/70">प्रभाग 192 उमेदवार</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
