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
  Boxes,
  Users,
  Store,
  Navigation,
  Droplets,
  CloudSun,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  CloudRain,
  Coins,
  ShieldAlert,
  Factory,
  Building2
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Global Styles & Scroll Listener
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      body { 
        font-family: 'Poppins', sans-serif; 
        font-weight: 300; 
        overflow-x: hidden; 
        width: 100%; 
        -webkit-font-smoothing: antialiased; 
        background-color: #fff; 
      }
      .tracking-ultra { letter-spacing: 0.25em; }
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
  }, [currentPage]);

  const logoUrl = "https://static.wixstatic.com/media/548938_a34a84020ba14e6c8df35c63dddc2b35~mv2.png";
  const heroVideoUrl = "https://video.wixstatic.com/video/548938_4afc2eb1d16e4d8499905f0736c56a9b/1080p/mp4/file.mp4";

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Decision Makers', id: 'decision-makers' },
    { label: 'Offerings', id: 'offerings', dropdown: ['Crop Protection', 'Seed Science', 'Nutrient Management'] },
    { label: 'Business Areas', id: 'business-areas', dropdown: ['Invade Agro', 'Invade Mill', 'Invade Code'] },
    { label: 'Careers', id: 'careers' },
    { label: 'Branch Locator', id: 'branches' },
    { label: 'Investor Relations', id: 'investors' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen w-full selection:bg-emerald-500 selection:text-white relative flex flex-col">
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-emerald-950 z-[200] transition-transform duration-700 flex flex-col justify-center items-center gap-6 text-white overflow-y-auto py-20 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-full">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <button 
              onClick={() => setCurrentPage(item.id)}
              className={`text-xl font-light tracking-ultra uppercase transition-colors ${currentPage === item.id ? 'text-amber-500' : 'hover:text-emerald-400'}`}
            >
              {item.label}
            </button>
            {item.dropdown && (
              <div className="flex flex-col items-center gap-3 mt-3 opacity-60">
                {item.dropdown.map(sub => (
                  <button key={sub} onClick={() => setCurrentPage(item.id)} className="text-[12px] uppercase tracking-widest hover:text-white transition-colors">{sub}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation - Dynamic Rounding, overflow-visible for dropdowns */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-gradient-to-r from-emerald-900 to-emerald-700 border border-white/10 shadow-2xl py-3 text-white mx-[2%] mt-4 rounded-[20px]' 
        : 'bg-transparent border-transparent py-6 text-white rounded-none'
      }`}>
        <div className="flex justify-between items-center px-[3%] w-full">
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer">
            <img src={logoUrl} alt="IAG Logo" className="h-10 md:h-14 w-auto object-contain transition-transform duration-500 hover:scale-105" />
          </button>
          
          <div className="hidden xl:flex items-center justify-center gap-7 text-[12px] font-medium tracking-widest uppercase w-full px-4">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button 
                  onClick={() => setCurrentPage(item.id)} 
                  className={`flex items-center gap-1.5 transition-colors relative py-4 drop-shadow-md ${
                    currentPage === item.id ? (isScrolled ? 'text-amber-400' : 'text-amber-500') : (isScrolled ? 'text-white hover:text-emerald-200' : 'text-white hover:text-emerald-300')
                  }`}
                >
                  {currentPage === item.id && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"></span>}
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className="ml-0.5 opacity-80" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 bg-white border border-black/5 shadow-2xl rounded-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col p-2">
                    {item.dropdown.map(subItem => (
                      <button 
                        key={subItem} 
                        onClick={() => setCurrentPage(item.id)}
                        className="text-left px-4 py-3 text-[11px] text-black/70 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors tracking-widest uppercase font-semibold"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:block px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase rounded-full transition-all duration-500 ${
              isScrolled 
              ? 'bg-white text-emerald-800 hover:bg-black hover:text-white shadow-xl' 
              : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
            }`}>
              Talk To Us
            </button>
            <button className="xl:hidden text-white ml-auto" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Router Switch */}
      <div className="flex-grow">
        {currentPage === 'home' && <HomeContent heroVideoUrl={heroVideoUrl} setPage={setCurrentPage} />}
        {currentPage !== 'home' && <GenericPageContent pageId={currentPage} setPage={setCurrentPage} />}
      </div>

      {/* Global Footer */}
      <footer id="footer" className="bg-white pt-24 pb-12 px-[5%] relative z-10 border-t border-black/5 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-4">
            <img src={logoUrl} alt="IAG Logo" className="h-12 w-auto object-contain mb-8 grayscale opacity-80" />
            <p className="text-black/40 font-light text-[14px] max-w-sm leading-relaxed mb-8">
              Redefining the agricultural stack through predictive intelligence and vertically integrated logistics.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 text-black/30 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
             <div>
                <h4 className="text-[10px] font-bold tracking-ultra uppercase text-emerald-600 mb-6">Platform</h4>
                <ul className="space-y-4 text-[13px] text-black/60 font-light">
                  <li><button onClick={() => setCurrentPage('offerings')} className="hover:text-black transition-colors">Digital Platform</button></li>
                  <li><button onClick={() => setCurrentPage('branches')} className="hover:text-black transition-colors">Physical Impact</button></li>
                  <li><button onClick={() => setCurrentPage('business-areas')} className="hover:text-black transition-colors">The Ecosystem</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold tracking-ultra uppercase text-emerald-600 mb-6">Company</h4>
                <ul className="space-y-4 text-[13px] text-black/60 font-light">
                  <li><button onClick={() => setCurrentPage('about')} className="hover:text-black transition-colors">Our Story</button></li>
                  <li><button onClick={() => setCurrentPage('careers')} className="hover:text-black transition-colors">Careers</button></li>
                  <li><button onClick={() => setCurrentPage('investors')} className="hover:text-black transition-colors">Investors</button></li>
                </ul>
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-[20px] bg-neutral-50 border border-black/5 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-500">
                  <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[9px] font-bold tracking-ultra uppercase text-black/30 mb-1">South Asia HQ</h4>
                      <p className="text-[12px] font-light leading-relaxed uppercase">Mumbai Corporate Hub,<br />Maharashtra, India</p>
                  </div>
              </div>
              <div className="p-6 rounded-[20px] bg-neutral-50 border border-black/5 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-500">
                  <Globe2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[9px] font-bold tracking-ultra uppercase text-black/30 mb-1">Global Operations</h4>
                      <p className="text-[12px] font-light leading-relaxed uppercase">IAG Grow Center,<br />Kigali, Rwanda</p>
                  </div>
              </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-semibold text-black/30 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} IAG GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <button className="hover:text-emerald-600 transition-all">Privacy Policy</button>
            <button className="hover:text-emerald-600 transition-all">Terms of Use</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// HOME PAGE CONTENT
// ---------------------------------------------------------
function HomeContent({ heroVideoUrl, setPage }) {
  return (
    <>
      {/* Hero Section */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-neutral-100">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-[5%] w-full max-w-6xl pt-12">
          <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 reveal-on-scroll visible">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_#10b981] animate-pulse"></div>
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white">Agriculture Empowered by Tech</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tighter mb-6 text-white uppercase reveal-on-scroll visible">
            FARMING <br />
            <span className="font-light text-white drop-shadow-2xl">MADE SMART.</span>
          </h1>
          <p className="text-[14px] md:text-[16px] font-light text-white/80 max-w-2xl leading-relaxed mb-10 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            A global agricultural leader, integrating world-class digital tools into Indian farming cycles to enhance yield, ensure land longevity, and solve real-world grower challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button onClick={() => setPage('offerings')} className="w-full sm:w-auto bg-emerald-500 text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">
              EXPLORE SOLUTIONS
            </button>
            <button onClick={() => setPage('branches')} className="group flex items-center justify-center gap-3 w-full sm:w-auto text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:text-emerald-400 transition-all py-4">
              OUR REACH
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <ChevronDown size={32} className="absolute bottom-8 text-white animate-bounce opacity-40" />
      </section>

      {/* Main Content Wrapper */}
      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Built for India's Complex Agricultural Supply Chain */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center relative z-10 overflow-hidden py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
               <div className="lg:w-[55%]">
                  <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The Intelligence of Growth</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1]">
                    Built for India's Complex Agricultural Supply Chain.
                  </h2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                    India's agricultural ecosystem is large, fragmented, and operationally complex. IAG brings structure to this complexity by integrating agri inputs, distribution networks, and field intelligence into a single operating system built for scale.
                 </p>
                 <button onClick={() => setPage('contact')} className="bg-emerald-700 hover:bg-emerald-900 text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors self-start shadow-md">
                    Talk To Us
                 </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40vh] min-h-[300px]">
               <div className="rounded-[24px] overflow-hidden shadow-sm border border-black/5 relative group">
                 <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Terrace Farming" />
               </div>
               <div className="rounded-[24px] overflow-hidden shadow-sm border border-black/5 relative group">
                 <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Rice Paddy Worker" />
               </div>
               <div className="rounded-[24px] shadow-sm border border-black/5 bg-emerald-50 p-8 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <Sprout size={160} strokeWidth={1} className="text-emerald-900" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2 tracking-tight">175 YEARS</h3>
                   <p className="text-emerald-800 font-medium text-sm md:text-md mb-4">of operating experience</p>
                   <p className="text-emerald-900/70 text-[13px] leading-relaxed max-w-[200px]">
                     Across commodities trade, agri inputs, and distribution networks.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* How IAG Works Across India's Agri Value Chain? */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center bg-neutral-50 relative z-10 overflow-hidden py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">End-To-End Integration</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6">
                How IAG Works Across India's Agri Value Chain?
              </h2>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                IAG connects agri inputs, distribution networks, field intelligence, and decision-making into a single integrated system built to reduce inefficiencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40vh] min-h-[300px]">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="h-[45%] rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tractor in field" />
                </div>
                <h3 className="text-xl font-medium text-emerald-900 mb-3">Agri Inputs & Distribution</h3>
                <p className="text-black/60 font-light text-[13px] leading-relaxed">
                  Manage seeds, fertilizers, and crop protection products across dealer networks with full control over inventory, pricing, and supply across regions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="h-[45%] rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1559863415-1811e58286a1?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Drone over field" />
                </div>
                <h3 className="text-xl font-medium text-emerald-900 mb-3">Field Intelligence & Operations</h3>
                <p className="text-black/60 font-light text-[13px] leading-relaxed">
                  Track on-ground performance across farms and regions using real-time data, enabling better crop decisions, advisory, and execution at scale.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="h-[45%] rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hands holding plant" />
                </div>
                <h3 className="text-xl font-medium text-emerald-900 mb-3">Decision Intelligence & Forecasting</h3>
                <p className="text-black/60 font-light text-[13px] leading-relaxed">
                  Predict demand, optimize supply, and identify risks early using integrated data across distribution, field activity, and market signals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real World Farmer Problems */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center relative overflow-hidden bg-white py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-red-500 uppercase mb-4">Ground Realities</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-black">
                REAL CHALLENGES.<br />REAL SOLUTIONS.
              </h2>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed">
                Indian agriculture is facing unprecedented hurdles. We aren't just building software; we are engineering physical and economic interventions for the most critical problems farmers face today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40vh] min-h-[350px]">
              {[
                { 
                  icon: CloudRain, 
                  color: 'text-blue-500', 
                  title: "Unpredictable Monsoons & Climate Stress",
                  solution: "AI-driven localized weather forecasting combined with climate-resilient seed varieties. We help farmers adapt before the storm hits.",
                  img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80"
                },
                { 
                  icon: ShieldAlert, 
                  color: 'text-amber-500', 
                  title: "Soil Degradation & Pest Epidemics",
                  solution: "Mobile soil-testing labs and drone-based multispectral imaging instantly diagnose soil health and target pest outbreaks precisely.",
                  img: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?auto=format&fit=crop&q=80"
                },
                { 
                  icon: Network, 
                  color: 'text-emerald-500', 
                  title: "Broken Supply Chains & Wastage",
                  solution: "End-to-end logistics ownership. We buy directly from the farm gate, process it locally, and route it globally—eliminating middlemen delays.",
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-[24px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="h-[45%] overflow-hidden relative">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className={`w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center ${item.color} mb-4 border border-black/5`}>
                      <item.icon size={18} />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-3 text-black leading-snug">{item.title}</h3>
                    <p className="text-black/60 font-light text-[13px] leading-relaxed mb-4">{item.solution}</p>
                    <button className="mt-auto flex items-center gap-2 text-[9px] font-bold tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors">
                      Learn How <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Support System - Infrastructure */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center bg-neutral-50 relative overflow-hidden py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Integrated Support</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1]">
                  Digital Power <br />In the Field.
                </h2>
              </div>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] lg:w-1/3 leading-relaxed lg:mt-10">
                We bridge the gap between data and action by providing physical infrastructure powered by digital logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40vh] min-h-[300px]">
              {[
                { img: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80", icon: Tractor, title: 'Smart Fleet', text: 'Real-time machine tracking for precision pathing.' },
                { img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80", icon: Database, title: 'Real-time Labs', text: 'Instant soil health diagnosis at collection centers.' },
                { img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80", icon: Store, title: 'Regional Hubs', text: 'Direct access points for tech deployment.' }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-emerald-50 group-hover:via-white/20 transition-colors duration-500"></div>
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <item.icon className="text-emerald-500 group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-xl font-light uppercase tracking-widest mb-2">{item.title}</h3>
                      <p className="text-black/50 font-light text-[13px]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Predictive Alpha (Inventory Intelligence) */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center bg-white relative overflow-hidden py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-blue-600 uppercase mb-6">Inventory Intelligence</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-[1.1] text-neutral-900 uppercase">
                  Predictive <br />Alpha.
                </h2>
                <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-md">
                  Positioning materials before demand triggers. Modeling regional requirements 45 days in advance reduces inventory costs by 22% and secures the supply chain.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="border border-black/5 shadow-sm rounded-2xl p-6 flex items-center gap-5 bg-white">
                      <BrainCircuit className="text-blue-400 flex-shrink-0" size={28} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[10px] font-bold tracking-ultra uppercase mb-1">Regional Demand Modeling</h4>
                        <p className="text-[12px] text-black/50 font-light">Proprietary AI with 99.2% accuracy.</p>
                      </div>
                   </div>
                   <div className="border border-black/5 shadow-sm rounded-2xl p-6 flex items-center gap-5 bg-white">
                      <PackageCheck className="text-blue-400 flex-shrink-0" size={28} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[10px] font-bold tracking-ultra uppercase mb-1">Asset Preservation</h4>
                        <p className="text-[12px] text-black/50 font-light">Eliminating supply shocks through JIT logistics.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-10 lg:mt-0 relative h-[40vh] min-h-[350px] lg:h-[60vh]">
                 <div className="bg-neutral-100 rounded-[32px] overflow-hidden shadow-sm h-full w-full lg:w-11/12 ml-auto relative border border-black/5">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale-[0.2]" alt="Warehouse" />
                 </div>
                 <div className="absolute -bottom-6 lg:-bottom-10 left-0 md:-left-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-sm border border-black/5">
                    <p className="text-black/40 font-light text-[13px] md:text-[14px] italic leading-relaxed">
                      "Integrated logistics prevent waste and ensure consistent ROI across territorial networks."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soil As Capital (ESG Assets) */}
        <section className="px-[5%] py-16 md:py-0 w-full min-h-screen lg:h-screen flex items-center justify-center relative overflow-hidden bg-emerald-950">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Soil" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/80"></div>
          
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-3/5">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">ESG Assets</p>
                <h2 className="text-5xl md:text-6xl lg:text-[7rem] font-light tracking-tighter uppercase mb-8 leading-[0.9] text-white">
                  SOIL AS <br />CAPITAL.
                </h2>
                <p className="text-emerald-100/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-12 max-w-lg italic">
                  "Soil health is a generational appreciating asset. Our biological restoration programs ensure land longevity and multi-year productivity stability."
                </p>
                <div className="flex flex-wrap items-center gap-8 text-[9px] font-bold tracking-ultra uppercase text-emerald-400">
                   <div className="flex items-center gap-2">
                      <Droplets size={18} strokeWidth={1.5} /> WATER SECURITY
                   </div>
                   <div className="flex items-center gap-2">
                      <CloudSun size={18} strokeWidth={1.5} /> GREEN HUBS
                   </div>
                </div>
              </div>
              <div className="lg:w-2/5 w-full">
                 <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group transition-colors duration-500">
                    <h3 className="text-2xl font-light text-emerald-300 mb-4">Risk Management</h3>
                    <p className="text-emerald-100/60 font-light text-[14px] leading-relaxed mb-10">
                      Standardizing operational SOPs through deep-science field mapping lowers territory risk for group partners.
                    </p>
                    <button className="flex items-center gap-2 text-[9px] font-bold tracking-ultra uppercase text-emerald-400 hover:text-white transition-colors">
                      GOVERNANCE HUB <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Empowerment */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center bg-emerald-900 text-white relative overflow-hidden py-16">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
           <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10 flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-amber-400 uppercase mb-6">Farmer Economics</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase mb-6 leading-[1.1]">
                  Financial <br />Empowerment.
                </h2>
                <p className="text-white/70 font-light text-[14px] md:text-[15px] leading-relaxed mb-10 max-w-md">
                  Farming is a business. We treat our farmers like entrepreneurs. Through the IAG ecosystem, farmers gain access to fair credit, crop insurance, and transparent market pricing.
                </p>
                <ul className="space-y-4">
                  {['Micro-financing for seed and equipment', 'Instant digital payments post-harvest', 'Weather-indexed crop insurance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="w-5 h-5 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                         <ChevronRight size={12} className="text-amber-400" />
                       </div>
                       <span className="text-[14px] font-light text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="grid grid-cols-2 gap-4 lg:gap-6 relative">
                    <div className="aspect-square bg-emerald-950 rounded-[24px] overflow-hidden shadow-lg p-6 lg:p-8 border border-white/10 flex flex-col justify-between">
                       <Coins size={32} className="text-amber-400" />
                       <div>
                         <h4 className="text-2xl lg:text-3xl font-light mb-1">₹120Cr</h4>
                         <p className="text-[9px] tracking-widest uppercase text-white/50">Credit Disbursed</p>
                       </div>
                    </div>
                    <div className="aspect-square bg-emerald-800 rounded-[24px] overflow-hidden shadow-lg p-6 lg:p-8 border border-white/10 flex flex-col justify-between translate-y-8 lg:translate-y-12">
                       <BarChart3 size={32} className="text-emerald-300" />
                       <div>
                         <h4 className="text-2xl lg:text-3xl font-light mb-1">35%</h4>
                         <p className="text-[9px] tracking-widest uppercase text-white/50">Avg Income Increase</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* The Closed-Loop Ecosystem */}
        <section className="px-[5%] w-full min-h-screen lg:h-screen flex items-center justify-center bg-neutral-950 text-white relative overflow-hidden py-16">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-4">End-to-End Control</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6">
                Completing the Ecosystem.
              </h2>
              <p className="text-white/60 font-light text-[14px] md:text-[15px] leading-relaxed">
                By controlling the flow from the very first seed to the final processed product, we create a flawless, highly profitable closed-loop economy.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 z-0"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: '01', title: 'Input Supply', desc: 'Premium seeds & nutrients supplied directly to farmers.', icon: Sprout },
                  { step: '02', title: 'Market Arrival', desc: 'Harvests arrive at local APMCs and FPOs for sale.', icon: Building2 },
                  { step: '03', title: 'Procurement', desc: 'Active procurement directly from APMCs/FPOs.', icon: Truck },
                  { step: '04', title: 'Processing', desc: 'Transforming yield to sell to FMCG titans like ITC.', icon: Factory }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl relative">
                      <div className="absolute -top-2 -right-2 text-[9px] font-bold tracking-widest text-emerald-500 bg-neutral-950 px-2 py-1 rounded-full border border-white/10">
                        {item.step}
                      </div>
                      <item.icon size={24} className="text-white/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-3">{item.title}</h3>
                    <p className="text-white/50 font-light text-[13px] leading-relaxed px-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// GENERIC SUBPAGE CONTENT (Handles all non-home routes elegantly)
// ---------------------------------------------------------
function GenericPageContent({ pageId, setPage }) {
  // Config map for different pages to simulate actual content
  const pageConfigs = {
    'about': {
      title: 'Our Story',
      subtitle: 'Building the infrastructure for the next century of agriculture.',
      img: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80',
      text: "IAG Global started with a single mission: to remove the friction between the farmer and the market. Over the years, we've evolved into a vertically integrated enterprise spanning biological research, heavy machinery logistics, software development, and global trade."
    },
    'decision-makers': {
      title: 'Decision Makers',
      subtitle: 'The minds steering the global agricultural transition.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
      text: "Our leadership team brings together decades of expertise in agronomy, supply chain logistics, and software engineering. We believe that diverse perspectives build stronger systems."
    },
    'offerings': {
      title: 'Our Offerings',
      subtitle: 'Comprehensive solutions across the agricultural value chain.',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      text: "From climate-resilient seed tech to post-harvest processing, IAG provides an end-to-end suite of services designed to maximize yield and farmer profitability."
    },
    'business-areas': {
      title: 'Business Areas',
      subtitle: 'Three specialized forces operating in complete synergy.',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80',
      text: "Invade Agro handles the biologicals and farming operations. Invade Mill processes and trades the harvest globally. Invade Code builds the digital infrastructure connecting it all."
    },
    'careers': {
      title: 'Careers',
      subtitle: 'Join us in reshaping the future of food security.',
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
      text: "We are always looking for driven agronomists, engineers, and supply chain experts to join our hubs across India and Rwanda."
    },
    'branches': {
      title: 'Branch Locator',
      subtitle: '180+ operational hubs physically connecting data to dirt.',
      img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80',
      text: "Find an IAG Global center near you. Our physical hubs provide soil testing, equipment leasing, and continuous education for local farming communities."
    },
    'investors': {
      title: 'Investor Relations',
      subtitle: 'Sustainable growth backed by physical assets and digital IP.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      text: "IAG Global represents a unique investment opportunity at the intersection of critical food security, emerging market growth, and proprietary technology."
    },
    'blogs': {
      title: 'Insights & Blogs',
      subtitle: 'Field notes from our agronomists and engineers.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      text: "Read our latest research on climate-resilient crops, supply chain optimization techniques, and the socioeconomic impact of digital farming in rural India."
    },
    'contact': {
      title: 'Contact Us',
      subtitle: 'Start a conversation with our regional directors.',
      img: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80',
      text: "Whether you are a farming cooperative seeking integration, an investor, or a potential technology partner, our doors are open."
    }
  };

  const config = pageConfigs[pageId] || pageConfigs['about'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
       {/* Minimal Inner Header */}
       <div className="px-[5%] w-full max-w-[1440px] mx-auto py-16 md:py-24">
          <p className="text-[11px] font-bold tracking-ultra text-emerald-600 uppercase mb-6 reveal-on-scroll visible">IAG Global / {pageId.replace('-', ' ')}</p>
          <h1 className="text-4xl md:text-7xl font-light tracking-tighter uppercase mb-8 reveal-on-scroll visible" style={{transitionDelay: '0.1s'}}>{config.title}</h1>
          <p className="text-[16px] md:text-[20px] font-light text-black/60 max-w-2xl leading-relaxed reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            {config.subtitle}
          </p>
       </div>

       {/* Featured Image & Text Layout */}
       <div className="px-[5%] w-full max-w-[1440px] mx-auto mt-8 reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
          <div className="h-[400px] md:h-[600px] rounded-[32px] overflow-hidden relative shadow-2xl mb-16">
             <img src={config.img} alt={config.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
             <div className="md:w-1/3">
                <h3 className="text-2xl font-light uppercase tracking-widest text-emerald-900 mb-6">Overview</h3>
                <div className="w-12 h-1 bg-emerald-500 mb-6"></div>
             </div>
             <div className="md:w-2/3">
                <p className="text-[17px] font-light text-black/70 leading-loose">
                  {config.text}
                </p>
                <p className="text-[17px] font-light text-black/70 leading-loose mt-6">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
                </p>
                
                {pageId === 'contact' && (
                  <form className="mt-12 space-y-6 max-w-lg">
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-2">Name</label>
                       <input type="text" className="w-full border-b border-black/20 pb-2 focus:outline-none focus:border-emerald-500 transition-colors" />
                     </div>
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-2">Email</label>
                       <input type="email" className="w-full border-b border-black/20 pb-2 focus:outline-none focus:border-emerald-500 transition-colors" />
                     </div>
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-2">Message</label>
                       <textarea className="w-full border-b border-black/20 pb-2 focus:outline-none focus:border-emerald-500 transition-colors h-24 resize-none"></textarea>
                     </div>
                     <button type="button" className="bg-emerald-600 text-white px-10 py-4 text-[10px] font-bold tracking-ultra uppercase rounded-full hover:bg-black transition-colors mt-4">
                       Send Message
                     </button>
                  </form>
                )}

                {pageId === 'branches' && (
                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {['Maharashtra Hub', 'Gujarat Center', 'Karnataka Lab', 'Rwanda HQ'].map(branch => (
                       <div key={branch} className="p-6 border border-black/10 rounded-2xl flex items-start gap-4 hover:border-emerald-500 transition-colors cursor-pointer">
                         <MapPin className="text-emerald-500 flex-shrink-0" size={24} />
                         <div>
                           <h4 className="text-[14px] font-medium mb-1">{branch}</h4>
                           <p className="text-[12px] text-black/50 font-light">View contact & details</p>
                         </div>
                       </div>
                     ))}
                  </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
}
