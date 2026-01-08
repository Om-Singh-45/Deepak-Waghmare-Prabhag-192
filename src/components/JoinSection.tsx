import { useState } from "react";
import { Send, Users, Heart, Megaphone, Sparkles } from "lucide-react";

const helpOptions = [
  { id: "volunteer", label: "स्वयंसेवक म्हणून", icon: Users },
  { id: "promote", label: "प्रचारात मदत", icon: Megaphone },
  { id: "support", label: "सामान्य पाठिंबा", icon: Heart },
];

const JoinSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    area: "",
    helpType: "support"
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    // Reset success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="join" className="relative py-20 md:py-28 overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(38 85% 55% / 0.2), transparent)' }} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              सहभागी व्हा
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold marathi-text text-foreground">
              बदलाचा भाग व्हा
            </h2>
            <p className="text-lg text-muted-foreground mx-auto mt-5 marathi-text max-w-lg">
              प्रभाग 192 च्या विकासात तुमचा सहभाग महत्त्वाचा आहे
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 marathi-text">नाव *</label>
                <input type="text" required className="form-input" placeholder="तुमचे पूर्ण नाव"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 marathi-text">मोबाईल क्रमांक *</label>
                <input type="tel" required className="form-input" placeholder="10 अंकी मोबाईल क्रमांक" pattern="[0-9]{10}"
                  value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2 marathi-text">परिसर *</label>
                <input type="text" required className="form-input" placeholder="तुमचा परिसर / सोसायटी"
                  value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 marathi-text">कशा प्रकारे मदत करू इच्छिता?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {helpOptions.map((option) => (
                    <label key={option.id}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.helpType === option.id
                          ? "border-accent bg-accent/10 shadow-md"
                          : "border-border hover:border-accent/50"
                      }`}>
                      <input type="radio" name="helpType" value={option.id} checked={formData.helpType === option.id}
                        onChange={(e) => setFormData({ ...formData, helpType: e.target.value })} className="sr-only" />
                      <option.icon className={`w-5 h-5 ${formData.helpType === option.id ? "text-accent" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-medium marathi-text ${formData.helpType === option.id ? "text-accent" : "text-foreground"}`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary-campaign w-full mt-4">
                <Send className="w-5 h-5" />
                माहिती पाठवा
              </button>
            </form>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded-xl text-green-800 text-center marathi-text font-medium animate-fade-in">
                धन्यवाद! आम्ही तुमच्याशी लवकरच संपर्क साधू.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
