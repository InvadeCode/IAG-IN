import React, { useState, useEffect } from 'react';
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
  Boxes
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeForce, setActiveForce] = useState(null);

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
      .animate-float { animation: float 5s ease-in-out infinite; }

      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
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
      
      {/* Header - Transparent to White with 15px radius and Larger Logo */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 rounded-b-[15px] overflow-hidden border-x border-b ${
        isScrolled 
        ? 'bg-white border-black/5 shadow-lg py-3 text-black' 
        : 'bg-transparent border-transparent py-8 text-white'
      }`}>
        <div className="flex justify-between items-center px-[5%] w-full">
          {/* Logo increased by 25%+ from h-10/12 to h-14/16 */}
          <img src={logoUrl} alt="IAG Logo" className="h-14 md:h-16 w-auto object-contain" />
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-light tracking-ultra uppercase">
            <a href="#how" className="hover:text-emerald-500 transition-colors">Our Work</a>
            <a href="#predict" className="hover:text-emerald-500 transition-colors">Readiness</a>
            <a href="#growth" className="hover:text-emerald-500 transition-colors">Impact</a>
            <a href="#ecosystem" className="hover:text-emerald-500 transition-colors">The Group</a>
          </div>

          <button className={`hidden md:block px-8 py-2.5 text-[10px] font-light tracking-ultra uppercase rounded-full transition-all duration-500 ${
            isScrolled 
            ? 'bg-emerald-500 text-white hover:bg-black shadow-lg shadow-emerald-500/20' 
            : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
          }`}>
            Talk To Us
          </button>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-neutral-100">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.02]">
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-[3%] w-full max-w-5xl pt-12">
          <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_#10b981]"></div>
            <p className="text-[10px] font-light tracking-[0.4em] uppercase text-white">Agriculture Empowered by Tech</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-light leading-[1] tracking-tighter mb-8 text-white uppercase">
            FARMING <br />
            <span className="italic font-extralight text-white drop-shadow-2xl">MADE SMART.</span>
          </h1>
          <p className="text-[15px] font-light text-white/90 max-w-2xl leading-relaxed mb-12">
            A global agricultural leader in India, using the world's best digital tools to help farmers grow more and protect our land.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full">
            <button className="bg-emerald-500 text-white px-14 py-4 text-[11px] font-light tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">
              EXPLORE OUR SYSTEMS
            </button>
            <button className="group flex items-center gap-3 text-[11px] font-light tracking-[0.3em] uppercase text-white hover:text-emerald-400 transition-all">
              OUR REACH
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <ChevronDown size={32} className="absolute bottom-12 text-white animate-bounce opacity-40" />
      </section>

      {/* Main Content - SOLID WHITE */}
      <main className="relative z-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.1)] rounded-t-[21px]">
        
        {/* Technology in the Field */}
        <section id="how" className="px-[3vw] py-32 md:py-56 bg-white text-black w-full rounded-t-[21px] relative">
          <div className="w-full relative z-10 reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
              <div className="max-w-2xl">
                <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-4">Integrated Intelligence</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.1]">
                  Better Results <br />Through Data.
                </h2>
              </div>
              <p className="text-black/60 font-light text-[15px] max-w-sm leading-relaxed">
                Our technology works alongside our farmers, giving them the data they need to make the best decisions for every acre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Tractor, title: 'Field Support', color: 'text-emerald-500', bg: 'bg-emerald-50', text: 'Real-time soil tracking tools that help us monitor plant health in every corner of India.' },
                { icon: Truck, title: 'Supply Chain', color: 'text-blue-500', bg: 'bg-blue-50', text: 'Digital tracking that ensures crops move from the farm to the market safely and quickly.' },
                { icon: Sprout, title: 'Smart Growth', color: 'text-amber-500', bg: 'bg-amber-50', text: 'Software that uses weather data to help farmers know exactly when to plant for the best harvest.' }
              ].map((item, i) => (
                <div key={i} className={`p-12 ${item.bg} rounded-[21px] transition-all duration-700 group cursor-default border border-black/5 hover:shadow-xl`}>
                  <item.icon size={36} strokeWidth={1} className={`${item.color} mb-12 group-hover:scale-110 transition-transform animate-float`} />
                  <h3 className="text-xl font-light mb-5 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-black/50 font-light text-[13px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Predictive Materials & Stock Precision Section */}
        <section id="predict" className="px-[3vw] py-32 bg-indigo-50/30 text-black w-full relative z-10 overflow-hidden">
          <div className="w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-light tracking-ultra text-indigo-600 uppercase mb-8">Supply Precision</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-12 leading-tight">
                  Always Ready, <br />Never Wasted.
                </h2>
                <p className="text-black/60 font-light text-[16px] leading-relaxed mb-16 max-w-lg">
                  We don't wait for farmers to run out of supplies. Our systems analyze historical patterns and local weather to predict exactly what materials a region will need weeks in advance. 
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    { icon: BrainCircuit, title: 'Smart Forecasts', text: 'Knowing exactly which seeds are needed before the season starts.' },
                    { icon: Boxes, title: 'Zero Scarcity', text: 'Our branches stay precisely stocked, so farmers never face a shortage.' }
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <item.icon className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
                      <h4 className="text-[13px] font-light tracking-widest uppercase mb-3">{item.title}</h4>
                      <p className="text-black/50 font-light text-[14px] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full relative">
                 <div className="bg-white rounded-[21px] p-12 shadow-2xl border border-indigo-100 flex flex-col gap-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                       <PackageCheck size={200} strokeWidth={1} />
                    </div>
                    <div className="flex items-center gap-4 text-indigo-600 mb-4">
                       <ShieldCheck size={24} />
                       <span className="text-[10px] font-light tracking-ultra uppercase">Inventory Intelligence Deployed</span>
                    </div>
                    <h3 className="text-2xl font-light leading-snug">
                      Precise material flow keeps our operational costs low and our service reliability high across the subcontinent.
                    </h3>
                    <div className="h-[2px] w-20 bg-indigo-200"></div>
                    <p className="text-[14px] text-black/40 font-light italic">
                      "Because we predict, we prevent waste and ensure every farmer gets what they need, the day they need it."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section id="growth" className="px-[3vw] py-32 md:py-56 bg-white text-black w-full relative z-10">
          <div className="w-full reveal-on-scroll">
            <div className="mb-32">
              <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-6">Enterprise Scale</p>
              <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter uppercase">Our Impact.</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                { label: 'Physical Network', value: '180+', desc: 'Branches Worldwide' },
                { label: 'Market Value', value: '₹4.5K CR+', desc: 'Indian Presence' },
                { label: 'Partnerships', value: '100+', desc: 'Farmer Groups' },
                { label: 'Reliability', value: '1600+', desc: 'Active Licenses' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-8 border-l-2 border-emerald-200 pl-12 py-4 hover:border-emerald-500 transition-all group">
                  <p className="text-[10px] font-light tracking-ultra text-black/40 uppercase group-hover:text-emerald-600 transition-colors">{stat.label}</p>
                  <h3 className="text-5xl md:text-7xl font-light tracking-tighter group-hover:text-emerald-700 transition-colors">{stat.value}</h3>
                  <p className="text-[12px] font-light text-black/50 uppercase tracking-widest">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Science of Farming */}
        <section className="px-[3vw] py-32 bg-neutral-50 relative z-10 rounded-[21px] mx-[3vw] mb-32 shadow-inner">
          <div className="bg-white text-black w-full rounded-[21px] p-12 md:p-24 shadow-sm border border-blue-100 flex flex-col lg:flex-row gap-32 items-center reveal-on-scroll">
            <div className="lg:w-1/2">
              <p className="text-[10px] font-light tracking-ultra text-blue-500 uppercase mb-12">Expertise</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-16 leading-tight">The Science <br />of Farming.</h2>
              <div className="space-y-20">
                {[
                  { title: "Direct Connections", color: "bg-blue-500", text: "We link the farm directly to the world, making sure nothing is lost in the middle." },
                  { title: "Helping Nature", color: "bg-emerald-500", text: "Our tools show us exactly how to keep the soil healthy so it can grow crops for a long time." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[14px] font-light tracking-widest uppercase mb-6 flex items-center gap-6">
                      <span className={`w-12 h-[2px] ${item.color} opacity-20 group-hover:w-24 group-hover:opacity-100 transition-all duration-700`}></span>
                      {item.title}
                    </h4>
                    <p className="text-black/60 font-light text-[16px] leading-relaxed max-w-md">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-square bg-blue-100 rounded-[21px] overflow-hidden group shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" alt="Farmer Tech" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-10 rounded-[21px] border border-blue-200 shadow-xl">
                   <p className="text-[10px] font-light tracking-widest uppercase mb-4 text-blue-600">Smart Mapping</p>
                   <p className="text-[16px] font-light text-black/80 leading-relaxed">Our field maps show exactly where crops need more food or water.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Forces */}
        <section id="ecosystem" className="px-[3vw] pb-32 bg-white relative z-10">
          <div className="w-full reveal-on-scroll">
            <div className="mb-32 text-center">
              <p className="text-[10px] font-light tracking-ultra text-emerald-600 uppercase mb-8">The IAG Group</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase">Three Forces. <br />One Future.</h2>
            </div>

            <div className="flex flex-col lg:flex-row w-full h-auto lg:min-h-[600px] gap-6">
              {[
                { id: 'agro', tag: 'AGRO', color: 'bg-emerald-500', bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100', title: 'Invade Agro', text: 'Our main arm. We build healthy farming systems across the world.' },
                { id: 'mill', tag: 'MILL', color: 'bg-amber-500', bg: 'bg-amber-50', hover: 'hover:bg-amber-100', title: 'Invade Mill', text: 'Our trade arm. Connecting local farms to buyers with fair prices.' },
                { id: 'code', tag: 'CODE', color: 'bg-blue-500', bg: 'bg-blue-50', hover: 'hover:bg-blue-100', title: 'Invade Code', text: 'Our tech arm. The digital engines that make modern farming possible.' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveForce(item.id)}
                  onMouseLeave={() => setActiveForce(null)}
                  className={`relative flex-1 overflow-hidden transition-all duration-700 cursor-pointer rounded-[21px] p-12 md:p-16 flex flex-col justify-between border border-black/5 ${item.bg} ${item.hover} ${activeForce === item.id ? 'lg:flex-[2.2] shadow-2xl' : ''}`}
                >
                  <div className="relative z-10">
                    <span className={`inline-block px-8 py-3 ${item.color} text-white rounded-full text-[11px] font-light tracking-ultra uppercase shadow-lg mb-12`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-light tracking-tighter uppercase mb-10 transition-all ${activeForce === item.id ? 'text-black' : 'text-black/70'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-lg font-light leading-relaxed max-w-sm transition-opacity duration-700 ${activeForce === item.id ? 'opacity-100' : 'opacity-60 lg:opacity-0'}`}>
                      {item.text}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-6 text-[12px] font-light tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors">
                    Explore <ArrowUpRight size={20} className={`${activeForce === item.id ? 'translate-x-1 -translate-y-1' : ''} transition-transform`} />
                  </div>
                  
                  <Zap className={`absolute -right-20 -bottom-20 w-80 h-80 opacity-[0.04] transition-all duration-1000 ${activeForce === item.id ? 'rotate-12 scale-150 opacity-[0.1]' : ''}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with Larger Logo */}
        <footer className="mx-[3vw] bg-white border border-black/5 text-black rounded-[21px] overflow-hidden mb-12 relative z-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-black/5">
            <div className="col-span-1 lg:col-span-2 p-16 lg:p-32 bg-white">
              {/* Footer logo increased to h-24 */}
              <img src={logoUrl} alt="IAG Logo" className="h-24 w-auto object-contain mb-20" />
              <p className="text-black/50 font-light text-[16px] max-w-sm leading-relaxed mb-20">
                Helping India grow a better future through smart farming and reliable partnerships.
              </p>
              <button className="px-14 py-6 bg-emerald-500 hover:bg-black text-white rounded-full text-[12px] font-light tracking-ultra uppercase transition-all duration-500 shadow-2xl shadow-emerald-500/20">
                TALK TO US
              </button>
            </div>

            <div className="p-16 lg:p-32 bg-white lg:border-l border-black/5">
              <h4 className="text-[11px] font-light tracking-ultra uppercase mb-20 text-emerald-600">Global Hub</h4>
              <div className="flex items-start gap-8 font-light text-[15px] text-black/70 leading-[2.5]">
                <MapPin size={24} className="mt-2 text-emerald-500" />
                <p className="tracking-wide">IAG Grow, Kigali, Rwanda</p>
              </div>
            </div>

            <div className="p-16 lg:p-32 bg-white lg:border-l border-black/5">
              <h4 className="text-[11px] font-light tracking-ultra uppercase mb-20 text-blue-500">South Asia</h4>
              <div className="flex items-start gap-8 font-light text-[15px] text-black/70 leading-[2.5]">
                <MapPin size={24} className="mt-2 text-blue-500" />
                <p className="tracking-wide">Corporate Hub, Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 border-t border-black/5 px-16 lg:px-32 py-20 flex flex-col md:flex-row justify-between items-center gap-12 text-[11px] font-light text-black/30 uppercase tracking-[0.5em]">
            <p>© {new Date().getFullYear()} IAG GLOBAL.</p>
            <div className="flex gap-24">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
