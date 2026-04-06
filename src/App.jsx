import React, { useState, useEffect, useRef } from 'react';
import { 
  Leaf, 
  Database, 
  Cpu, 
  ArrowRight, 
  ArrowUpRight,
  MapPin, 
  Menu, 
  X, 
  Globe2,
  Activity,
  ChevronDown,
  Layers,
  BarChart3,
  Network,
  Sun,
  ShieldCheck,
  Zap,
  Tractor,
  Truck,
  Sprout,
  PackageCheck,
  BrainCircuit,
  Boxes,
  Users,
  Store,
  Navigation,
  Droplets,
  CloudSun
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeForce, setActiveForce] = useState(null);

  // Scroll and Animation Logic
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      body { 
        font-family: 'Poppins', sans-serif; 
        font-weight: 300; 
        overflow-x: hidden; 
        width: 100vw; 
        -webkit-font-smoothing: antialiased; 
        background-color: #fff; 
      }
      .tracking-ultra { letter-spacing: 0.45em; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #fff; }
      ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 9px; }
      html { scroll-behavior: smooth; }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }

      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .parallax-bg {
        transition: transform 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://static.wixstatic.com/media/548938_a34a84020ba14e6c8df35c63dddc2b35~mv2.png";
  const heroVideoUrl = "https://video.wixstatic.com/video/548938_4afc2eb1d16e4d8499905f0736c56a9b/1080p/mp4/file.mp4";

  return (
    <div className="min-h-screen w-screen selection:bg-emerald-500 selection:text-white">
      
      {/* Header - Transparent to Dark Green Gradient Transition */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 rounded-b-[15px] overflow-hidden border-x border-b ${
        isScrolled 
        ? 'bg-gradient-to-r from-emerald-900 to-emerald-700 border-white/10 shadow-2xl py-3 text-white' 
        : 'bg-transparent border-transparent py-8 text-white'
      }`}>
        <div className="flex justify-between items-center px-[5%] w-full">
          <img src={logoUrl} alt="IAG Logo" className="h-14 md:h-16 w-auto object-contain transition-transform duration-500 hover:scale-105" />
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-light tracking-ultra uppercase">
            <a href="#how" className={`${isScrolled ? 'hover:text-emerald-200' : 'hover:text-emerald-500'} transition-colors`}>Our Work</a>
            <a href="#predict" className={`${isScrolled ? 'hover:text-emerald-200' : 'hover:text-emerald-500'} transition-colors`}>Precision</a>
            <a href="#growth" className={`${isScrolled ? 'hover:text-emerald-200' : 'hover:text-emerald-500'} transition-colors`}>Impact</a>
            <a href="#ecosystem" className={`${isScrolled ? 'hover:text-emerald-200' : 'hover:text-emerald-500'} transition-colors`}>Group</a>
          </div>

          <button className={`hidden md:block px-8 py-2.5 text-[10px] font-light tracking-ultra uppercase rounded-full transition-all duration-500 ${
            isScrolled 
            ? 'bg-white text-emerald-800 hover:bg-black hover:text-white shadow-xl' 
            : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
          }`}>
            Talk To Us
          </button>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-neutral-100">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-[3%] w-full max-w-5xl pt-12">
          <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 reveal-on-scroll visible">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_#10b981]"></div>
            <p className="text-[10px] font-light tracking-[0.4em] uppercase text-white">Agriculture Empowered by Tech</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tighter mb-8 text-white uppercase reveal-on-scroll visible" style={{transitionDelay: '0.1s'}}>
            FARMING <br />
            <span className="italic font-extralight text-white drop-shadow-2xl">MADE SMART.</span>
          </h1>
          <p className="text-[15px] font-light text-white/90 max-w-2xl leading-relaxed mb-12 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            A global agricultural leader in India, using the world's best digital tools to help farmers grow more and protect our land.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button className="bg-emerald-500 text-white px-14 py-4 text-[11px] font-light tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">
              EXPLORE OUR SYSTEMS
            </button>
            <button className="group flex items-center gap-3 text-[11px] font-light tracking-[0.3em] uppercase text-white hover:text-emerald-400 transition-all">
              OUR REACH
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <ChevronDown size={40} className="absolute bottom-12 text-white animate-bounce opacity-40" />
      </section>

      {/* Main Content */}
      <main className="relative z-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.1)] rounded-t-[32px]">
        
        {/* Visual Support System */}
        <section id="how" className="px-[5vw] py-32 md:py-56 bg-white text-black w-full rounded-t-[32px] relative overflow-hidden">
          <div className="w-full relative z-10 reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
              <div className="max-w-2xl">
                <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-4">Integrated Support</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.1]">
                  Digital Power <br />In the Field.
                </h2>
              </div>
              <p className="text-black/60 font-light text-[15px] max-w-sm leading-relaxed">
                We don't just provide data; we provide the physical means to act on it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80", icon: Tractor, title: 'Smart Fleet', text: 'Machine tracking for perfect efficiency.' },
                { img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80", icon: Database, title: 'Real-time Labs', text: 'Instant soil health checking centers.' },
                { img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80", icon: Store, title: 'Regional Hubs', text: 'Physical centers in every territory.' }
              ].map((item, i) => (
                <div key={i} className="group relative h-[500px] rounded-[21px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-emerald-50 group-hover:via-white/20 transition-colors duration-700"></div>
                  <div className="relative h-full p-12 flex flex-col justify-between">
                    <item.icon className="text-emerald-500 group-hover:scale-125 transition-transform animate-float" size={32} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-xl font-light uppercase tracking-widest mb-4">{item.title}</h3>
                      <p className="text-black/50 font-light text-[14px]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Predictive Precision Section - Visual Focus */}
        <section id="predict" className="px-[5vw] py-32 bg-indigo-50/20 text-black w-full relative z-10 overflow-hidden">
          <div className="w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-light tracking-ultra text-indigo-600 uppercase mb-8">Inventory AI</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-12 leading-tight">
                  Always One <br />Step Ahead.
                </h2>
                <p className="text-black/60 font-light text-[16px] leading-relaxed mb-16 max-w-lg">
                  Using local weather data and historical growth patterns, our systems predict what fertilizers and seeds a region will need weeks before the season hits. This keeps our branches precisely stocked and eliminates supply waste.
                </p>
                <div className="grid grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <BrainCircuit className="text-indigo-500" size={32} />
                      <p className="text-[11px] font-light tracking-ultra uppercase">Demand Prediction</p>
                   </div>
                   <div className="space-y-4">
                      <PackageCheck className="text-emerald-500" size={32} />
                      <p className="text-[11px] font-light tracking-ultra uppercase">Zero Shortage</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-indigo-100 flex flex-col group">
                    <div className="h-80 bg-neutral-100 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-12 relative">
                        <div className="flex items-center gap-4 text-indigo-600 mb-6">
                            <ShieldCheck size={24} />
                            <span className="text-[10px] font-light tracking-ultra uppercase">99.2% Prediction Accuracy</span>
                        </div>
                        <h3 className="text-2xl font-light leading-snug mb-8">
                          We move materials before they are required.
                        </h3>
                        <div className="flex items-center gap-4 text-black/40 text-[13px] font-light italic">
                           "A perfectly balanced supply chain powers a faster harvest."
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: From Field to Table - Direct Access */}
        <section className="px-[5vw] py-40 bg-white relative z-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-32 reveal-on-scroll">
            <div className="lg:w-1/2">
              <p className="text-[10px] font-light tracking-ultra text-amber-600 uppercase mb-8">The Harvest Chain</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-12 leading-tight text-black">From Field <br />to Table.</h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-12">
                We remove the layers that separate the farmer from the market. By controlling the logistics and the platform, we ensure higher earnings for the growers and fresher quality for global buyers.
              </p>
              <div className="flex flex-col gap-10">
                {[
                  { icon: Truck, title: "Direct Logistics", desc: "Our own fleet collects from the field hubs." },
                  { icon: Globe2, title: "Global Access", desc: "Instant connection to premium export markets." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100 group-hover:bg-amber-400 group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-light tracking-widest uppercase mb-1">{item.title}</h4>
                      <p className="text-black/40 text-[14px] font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="grid grid-cols-2 gap-6 relative">
                  <div className="aspect-[3/4] bg-neutral-100 rounded-[21px] overflow-hidden shadow-xl transform translate-y-12 reveal-on-scroll">
                    <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] bg-neutral-100 rounded-[21px] overflow-hidden shadow-xl reveal-on-scroll">
                    <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Impact Section - Large & Visual */}
        <section id="growth" className="px-[5vw] py-32 md:py-56 bg-neutral-50 text-black w-full relative z-10 rounded-[48px] mx-[3vw] mb-32 border border-black/5">
          <div className="w-full reveal-on-scroll">
            <div className="mb-40 text-center">
              <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-8">Our Indian Footprint</p>
              <h2 className="text-5xl md:text-[8rem] font-light tracking-tighter uppercase leading-none">Scale. Impact.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {[
                  { label: 'Branches', value: '180+', desc: 'Operational Hubs' },
                  { label: 'Annual Scale', value: '₹4.5K CR+', desc: 'Total Managed Value' },
                  { label: 'Partners', value: '100+', desc: 'Farmer Organizations' },
                  { label: 'Trusted', value: '1600+', desc: 'Active Unit Licenses' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-6 group">
                    <p className="text-[11px] font-light tracking-ultra text-black/40 uppercase group-hover:text-emerald-600 transition-colors">{stat.label}</p>
                    <h3 className="text-6xl md:text-7xl font-light tracking-tighter group-hover:scale-110 transition-transform duration-700">{stat.value}</h3>
                    <div className="w-12 h-[1px] bg-emerald-200"></div>
                    <p className="text-[13px] font-light text-black/50 uppercase tracking-widest">{stat.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* The Science of Soil - Editorial Layout */}
        <section className="px-[5vw] py-40 bg-white relative z-10">
          <div className="flex flex-col lg:flex-row gap-32 items-center reveal-on-scroll">
            <div className="lg:w-2/5">
              <p className="text-[10px] font-light tracking-ultra text-blue-500 uppercase mb-12">The Future</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-16 leading-[1]">Modern <br />Crop Science.</h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-16">
                We believe that the land is a legacy. Our integrated science teams use digital field mapping to restore soil health, ensuring sustainable productivity for decades to come.
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 text-blue-600">
                    <Droplets size={32} strokeWidth={1} />
                    <span className="text-[12px] tracking-ultra uppercase font-light">Water Management Systems</span>
                </div>
                <div className="flex items-center gap-6 text-amber-500">
                    <CloudSun size={32} strokeWidth={1} />
                    <span className="text-[12px] tracking-ultra uppercase font-light">Solar-Integrated Hubs</span>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 w-full">
               <div className="aspect-video bg-neutral-200 rounded-[32px] overflow-hidden shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-xl p-10 rounded-[21px] max-w-sm shadow-2xl border border-blue-50">
                     <p className="text-[10px] font-light tracking-ultra uppercase text-blue-600 mb-4">Field Insight</p>
                     <p className="text-[15px] font-light text-black/80 leading-relaxed">Integrated multispectral imaging detects early-stage pathogen stress across Maharashtra regions.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Education Hubs */}
        <section className="px-[5vw] py-40 bg-emerald-50/30 relative z-10 overflow-hidden">
          <div className="w-full reveal-on-scroll flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 h-[600px] bg-neutral-100 rounded-[32px] overflow-hidden shadow-2xl relative group">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute top-10 left-10 text-white z-10">
                 <p className="text-[11px] font-light tracking-ultra uppercase">Physical Centers</p>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors"></div>
            </div>
            <div className="lg:w-1/2">
              <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-8">Empowerment</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-10">Education <br />at the Root.</h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed mb-12">
                Our success depends on the success of our farmers. We operate 24/7 physical training hubs where farming communities learn how to use our digital interfaces and adopt modern crop science.
              </p>
              <div className="flex items-center gap-6 cursor-pointer group">
                <div className="w-14 h-14 rounded-full border border-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <Navigation size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[12px] font-light tracking-ultra uppercase text-emerald-600">Find an education hub</span>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section - Rich Media Panels */}
        <section id="ecosystem" className="px-[5vw] py-40 bg-white relative z-10">
          <div className="w-full reveal-on-scroll">
            <div className="mb-40 text-center">
              <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-8">The Group</p>
              <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase leading-none">Forces.</h2>
            </div>

            <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px] gap-8">
              {[
                { id: 'agro', img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80", tag: 'AGRO', color: 'bg-emerald-500', title: 'Invade Agro', text: 'Our core farming enterprise. Building smart systems for high-yield harvests.' },
                { id: 'mill', img: "https://images.unsplash.com/photo-1495107336281-19d4f7a7d0aa?auto=format&fit=crop&q=80", tag: 'MILL', color: 'bg-amber-500', title: 'Invade Mill', text: 'Our trade force. Connecting Indian farms to premium global buyers.' },
                { id: 'code', img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80", tag: 'CODE', color: 'bg-blue-500', title: 'Invade Code', text: 'Our digital laboratory. Creating the apps that power the modern farm.' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveForce(item.id)}
                  onMouseLeave={() => setActiveForce(null)}
                  className={`relative flex-1 overflow-hidden transition-all duration-700 cursor-pointer rounded-[32px] p-16 flex flex-col justify-between border border-black/5 bg-neutral-50 ${activeForce === item.id ? 'lg:flex-[2.5] shadow-2xl' : ''}`}
                >
                  <img src={item.img} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${activeForce === item.id ? 'scale-105 opacity-40 grayscale-0' : 'opacity-0 grayscale'}`} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent ${activeForce === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <span className={`inline-block px-10 py-3 ${item.color} text-white rounded-full text-[11px] font-light tracking-ultra uppercase shadow-xl mb-12`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-4xl md:text-5xl font-light tracking-tighter uppercase mb-10 transition-all ${activeForce === item.id ? 'text-black' : 'text-black/60'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-lg font-light leading-relaxed max-w-sm transition-all duration-700 ${activeForce === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      {item.text}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-6 text-[12px] font-light tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors">
                    Explore <ArrowUpRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Footer Section - Parallax style */}
        <section className="px-[3vw] pb-10">
             <div className="bg-emerald-900 rounded-[48px] p-24 md:p-48 text-center text-white relative overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 group-hover:scale-100 transition-transform duration-[5s]" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-[8rem] font-light tracking-tighter uppercase mb-12 leading-[0.9]">Ready to <br />Partner?</h2>
                    <p className="text-emerald-100/60 font-light text-[18px] mb-16 max-w-2xl mx-auto">Join India's most advanced agricultural network and start farming with intent.</p>
                    <button className="px-16 py-7 bg-white text-black rounded-full text-[13px] font-light tracking-ultra uppercase hover:bg-emerald-400 hover:text-white transition-all shadow-2xl">Connect with the Group</button>
                </div>
             </div>
        </section>

        {/* Integrated Wide Footer */}
        <footer id="footer" className="bg-white pt-40 pb-20 px-[5vw] relative z-10 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <img src={logoUrl} alt="IAG Logo" className="h-24 w-auto object-contain mb-16" />
              <p className="text-black/40 font-light text-[16px] max-w-sm leading-relaxed mb-16">
                A globally integrated agricultural enterprise building the next generation of smart and sustainable crops across India and Sub-Saharan Africa.
              </p>
              <div className="flex gap-10">
                <a href="#" className="text-black/30 hover:text-emerald-500 transition-all"><Zap size={22} /></a>
                <a href="#" className="text-black/30 hover:text-emerald-500 transition-all"><Globe2 size={22} /></a>
                <a href="#" className="text-black/30 hover:text-emerald-500 transition-all"><Users size={22} /></a>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-12">
               <div>
                  <h4 className="text-[12px] font-light tracking-ultra uppercase text-emerald-600 mb-10">Explore</h4>
                  <ul className="space-y-6 text-[15px] text-black/60 font-light">
                    <li><a href="#" className="hover:text-black transition-colors">Digital Platform</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Physical Impact</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">The Ecosystem</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Investor Relations</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[12px] font-light tracking-ultra uppercase text-emerald-600 mb-10">Corporate</h4>
                  <ul className="space-y-6 text-[15px] text-black/60 font-light">
                    <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Newsroom</a></li>
                    <li><a href="#" className="hover:text-black transition-colors">Compliance</a></li>
                  </ul>
               </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-16">
                <div className="p-10 rounded-[32px] bg-neutral-50 border border-black/5 flex items-start gap-8 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <MapPin className="text-emerald-500 mt-1" size={28} />
                    <div>
                        <h4 className="text-[11px] font-light tracking-ultra uppercase text-black/30 mb-3">South Asia HQ</h4>
                        <p className="text-[15px] font-light leading-relaxed uppercase tracking-wider">Mumbai Corporate Hub,<br />Maharashtra, India</p>
                    </div>
                </div>
                <div className="p-10 rounded-[32px] bg-neutral-50 border border-black/5 flex items-start gap-8 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <MapPin className="text-blue-500 mt-1" size={28} />
                    <div>
                        <h4 className="text-[11px] font-light tracking-ultra uppercase text-black/30 mb-3">Global Operations</h4>
                        <p className="text-[15px] font-light leading-relaxed uppercase tracking-wider">IAG Grow, KN7 Road,<br />Kigali, Rwanda</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-40 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[11px] font-light text-black/30 uppercase tracking-[0.5em]">
            <p>© {new Date().getFullYear()} IAG GLOBAL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-24">
              <a href="#" className="hover:text-emerald-600 transition-all">Privacy</a>
              <a href="#" className="hover:text-emerald-600 transition-all">Terms</a>
              <a href="#" className="hover:text-emerald-600 transition-all">Sitemap</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
