import React from 'react';
import { ArrowRight, FileText, Users, Star, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30" 
          style={{ background: 'radial-gradient(circle, hsl(38 85% 55% / 0.4), transparent)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(220 50% 40% / 0.5), transparent)' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
      </div>

      <div className="hero-overlay" />

      <div className="relative z-10 section-container text-center pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Election Badge */}
          <div className="animate-fade-in-up mb-10">
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect text-white/95 text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-accent" fill="currentColor" />
                <span className="text-accent font-semibold">भृ.मुं.पा.</span>
              </span>
              <span className="w-px h-4 bg-white/30" />
              <span>निवडणूक 2026</span>
              <span className="w-px h-4 bg-white/30" />
              <span>प्रभाग 192</span>
            </span>
          </div>

          {/* Candidate Image Placeholder */}
          <div className="animate-fade-in-up-delay-1 mb-10 flex justify-center">
            <div className="relative">
              <div className="candidate-image-placeholder w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-accent/50 animate-float">
                <img 
                  src="/deepak.jpeg" 
                  alt="श्री. दिपक भिकाजी वाघमारे - उमेदवार प्रभाग 192" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-accent/20 animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-white/10" />
              
              {/* Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                <Award className="w-4 h-4" />
                उमेदवार
              </div>
            </div>
          </div>

          {/* Candidate Name */}
          <h1 className="animate-fade-in-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-5 marathi-text tracking-tight">
            श्री. दिपक भिकाजी वाघमारे
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up-delay-2 text-lg md:text-xl text-white/70 mb-3 font-medium tracking-wide">
            आपला उमेदवार | भृ.मुं.पा. निवडणूक 2026 | प्रभाग 192
          </p>

          {/* Development Slogan */}
          <p className="animate-fade-in-up-delay-2 text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-14 marathi-text">
            <span className="gradient-text">विकासाचा विचार,</span>
            <span className="text-white"> जबाबदारीचे काम</span>
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#vision" className="btn-primary-campaign group">
              <FileText className="w-5 h-5" />
              <span>विकासाचा आराखडा</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#join" className="btn-secondary-campaign group">
              <Users className="w-5 h-5" />
              <span>संपर्क / सहभागी व्हा</span>
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up-delay-3 mt-16 pt-10 border-t border-white/10">
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">12</p>
                <p className="text-sm text-white/60 marathi-text">विकास मुद्दे</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">192</p>
                <p className="text-sm text-white/60 marathi-text">प्रभाग क्रमांक</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">2026</p>
                <p className="text-sm text-white/60 marathi-text">निवडणूक वर्ष</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-accent animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
