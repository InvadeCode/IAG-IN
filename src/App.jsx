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
      .tracking-ultra { letter-spacing: 0.25em; } /* Slightly reduced to fit more menu items */
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
          
          <div className="hidden xl:flex items-center justify-center gap-6 text-[9px] font-medium tracking-ultra uppercase w-full px-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button 
                  onClick={() => setCurrentPage(item.id)} 
                  className={`flex items-center gap-1 transition-colors relative py-4 ${
                    currentPage === item.id ? (isScrolled ? 'text-amber-400' : 'text-amber-500') : (isScrolled ? 'hover:text-emerald-200' : 'hover:text-emerald-400')
                  }`}
                >
                  {currentPage === item.id && <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full"></span>}
                  {item.label}
                  {item.dropdown && <ChevronDown size={10} className="ml-0.5" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 bg-white border border-black/5 shadow-2xl rounded-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col p-2">
                    {item.dropdown.map(subItem => (
                      <button 
                        key={subItem} 
                        onClick={() => setCurrentPage(item.id)}
                        className="text-left px-4 py-3 text-[10px] text-black/70 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors tracking-widest uppercase"
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
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:block px-6 py-2.5 text-[9px] font-semibold tracking-ultra uppercase rounded-full transition-all duration-500 ${
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
      <footer id="footer" className="bg-white pt-32 pb-20 px-[5%] relative z-10 border-t border-black/5 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 w-full">
          <div className="lg:col-span-4">
            <img src={logoUrl} alt="IAG Logo" className="h-16 w-auto object-contain mb-12 grayscale opacity-80" />
            <p className="text-black/40 font-light text-[15px] max-w-sm leading-relaxed mb-12">
              Redefining the agricultural stack through predictive intelligence and vertically integrated logistics.
            </p>
            <div className="flex gap-8">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 text-black/30 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
             <div>
                <h4 className="text-[11px] font-bold tracking-ultra uppercase text-emerald-600 mb-8">Platform</h4>
                <ul className="space-y-4 text-[14px] text-black/60 font-light">
                  <li><button onClick={() => setCurrentPage('offerings')} className="hover:text-black transition-colors">Digital Platform</button></li>
                  <li><button onClick={() => setCurrentPage('branches')} className="hover:text-black transition-colors">Physical Impact</button></li>
                  <li><button onClick={() => setCurrentPage('business-areas')} className="hover:text-black transition-colors">The Ecosystem</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[11px] font-bold tracking-ultra uppercase text-emerald-600 mb-8">Company</h4>
                <ul className="space-y-4 text-[14px] text-black/60 font-light">
                  <li><button onClick={() => setCurrentPage('about')} className="hover:text-black transition-colors">Our Story</button></li>
                  <li><button onClick={() => setCurrentPage('careers')} className="hover:text-black transition-colors">Careers</button></li>
                  <li><button onClick={() => setCurrentPage('investors')} className="hover:text-black transition-colors">Investors</button></li>
                </ul>
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="p-8 rounded-[24px] bg-neutral-50 border border-black/5 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                      <h4 className="text-[10px] font-bold tracking-ultra uppercase text-black/30 mb-2">South Asia HQ</h4>
                      <p className="text-[13px] font-light leading-relaxed uppercase">Mumbai Corporate Hub,<br />Maharashtra, India</p>
                  </div>
              </div>
              <div className="p-8 rounded-[24px] bg-neutral-50 border border-black/5 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <Globe2 className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                      <h4 className="text-[10px] font-bold tracking-ultra uppercase text-black/30 mb-2">Global Operations</h4>
                      <p className="text-[13px] font-light leading-relaxed uppercase">IAG Grow Center,<br />Kigali, Rwanda</p>
                  </div>
              </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-semibold text-black/30 uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} IAG GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-16">
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
  const [activeForce, setActiveForce] = useState(null);

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
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tighter mb-8 text-white uppercase reveal-on-scroll visible">
            FARMING <br />
            <span className="font-light text-white drop-shadow-2xl">MADE SMART.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] font-light text-white/80 max-w-3xl leading-relaxed mb-12 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            A global agricultural leader, integrating world-class digital tools into Indian farming cycles to enhance yield, ensure land longevity, and solve real-world grower challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button onClick={() => setPage('offerings')} className="w-full sm:w-auto bg-emerald-500 text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">
              EXPLORE SOLUTIONS
            </button>
            <button onClick={() => setPage('branches')} className="group flex items-center justify-center gap-3 w-full sm:w-auto text-[11px] font-bold tracking-[0.3em] uppercase text-white hover:text-emerald-400 transition-all py-5">
              OUR REACH
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <ChevronDown size={40} className="absolute bottom-12 text-white animate-bounce opacity-40" />
      </section>

      {/* Main Content Wrapper */}
      <main className="relative z-10 bg-neutral-50 rounded-t-[32px]">
        
        {/* NEW SECTION: Built for India's Complex Agricultural Supply Chain */}
        <section className="px-[5%] py-24 md:py-32 bg-white w-full relative z-10 overflow-hidden rounded-t-[32px]">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
               <div className="lg:w-1/2">
                  <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-[#d32f2f] leading-[1.1]">
                    Built for India's Complex Agricultural Supply Chain.
                  </h2>
               </div>
               <div className="lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
                 <div className="flex items-center gap-4 mb-6 w-full justify-start lg:justify-end">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase">The Intelligence of Growth</span>
                    <div className="w-24 h-[1px] bg-emerald-300"></div>
                 </div>
                 <p className="text-black/70 font-light text-[15px] md:text-[16px] leading-relaxed mb-6 text-left lg:text-right max-w-xl">
                    India's agricultural ecosystem is large, fragmented, and operationally complex — from input supply and dealer networks to field execution and market access. IAG brings structure to this complexity by integrating agri inputs, distribution networks, and field intelligence into a single operating system built for scale.
                 </p>
                 <p className="text-black font-medium text-[15px] md:text-[16px] leading-relaxed mb-8 text-left lg:text-right max-w-xl">
                    We enable agri businesses to improve visibility, reduce losses, and scale operations across states with full control over supply and demand.
                 </p>
                 <button className="bg-[#007b5e] hover:bg-emerald-900 text-white px-8 py-3 rounded-lg text-[13px] font-medium transition-colors shadow-lg shadow-emerald-900/20">
                    Talk To Us
                 </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-md">
                 <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Terrace Farming" />
               </div>
               <div className="h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-md">
                 <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Rice Paddy Worker" />
               </div>
               <div className="h-[300px] md:h-[400px] rounded-[24px] shadow-md bg-gradient-to-br from-[#eaff7b] to-[#d4ed3e] p-10 flex flex-col justify-center">
                 <div className="mb-6 opacity-80">
                   <Sprout size={56} className="text-emerald-800" strokeWidth={1.5} />
                 </div>
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-2 tracking-tight">175 YEARS</h3>
                 <p className="text-emerald-800 font-medium text-lg lg:text-xl mb-8">of operating experience</p>
                 <p className="text-emerald-900/70 text-[14px] leading-relaxed mt-auto">
                   Across commodities trade, agri inputs, and distribution networks.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: How IAG Works Across India's Agri Value Chain? */}
        <section className="px-[5%] py-24 md:py-32 bg-white w-full relative z-10 overflow-hidden">
          {/* Subtle background decoration (yellowish circle on left) */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f9fce6] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/4 opacity-70 z-0"></div>
          
          <div className="max-w-[1440px] mx-auto reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-[#007b5e] leading-[1.1] lg:w-[60%]">
                How IAG Works Across India's Agri Value Chain?
              </h2>
              <div className="lg:w-[40%] flex flex-col items-start lg:items-end text-left lg:text-right">
                <p className="text-black/70 font-light text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-md">
                  IAG connects agri inputs, distribution networks, field intelligence, and decision-making into a single integrated system — built to reduce inefficiencies, improve visibility, and enable scalable operations across India's agricultural ecosystem.
                </p>
                <button className="bg-[#d36427] hover:bg-[#b0521e] text-white px-8 py-3 rounded-lg text-[13px] font-medium transition-colors shadow-lg shadow-[#d36427]/20">
                  Explore Our Journey
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div className="group">
                <div className="h-64 rounded-[24px] overflow-hidden shadow-sm mb-6 border border-black/5">
                  <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tractor in field" />
                </div>
                <h3 className="text-[22px] font-medium text-[#d32f2f] mb-3 leading-snug">Agri Inputs & Distribution</h3>
                <p className="text-black/60 font-light text-[15px] leading-relaxed">
                  Manage seeds, fertilizers, and crop protection products across dealer networks with full control over inventory, pricing, and supply across regions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group">
                <div className="h-64 rounded-[24px] overflow-hidden shadow-sm mb-6 border border-black/5">
                  <img src="https://images.unsplash.com/photo-1559863415-1811e58286a1?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Drone over field" />
                </div>
                <h3 className="text-[22px] font-medium text-[#d32f2f] mb-3 leading-snug">Field Intelligence & Operations</h3>
                <p className="text-black/60 font-light text-[15px] leading-relaxed">
                  Track on-ground performance across farms and regions using real-time data, enabling better crop decisions, advisory, and execution at scale.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group">
                <div className="h-64 rounded-[24px] overflow-hidden shadow-sm mb-6 border border-black/5">
                  <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hands holding plant" />
                </div>
                <h3 className="text-[22px] font-medium text-[#d32f2f] mb-3 leading-snug">Decision Intelligence & Forecasting</h3>
                <p className="text-black/60 font-light text-[15px] leading-relaxed">
                  Predict demand, optimize supply, and identify risks early using integrated data across distribution, field activity, and market signals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real World Farmer Problems */}
        <section className="px-[5%] py-32 md:py-48 w-full relative overflow-hidden bg-neutral-50">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="text-center mb-24 max-w-4xl mx-auto">
              <p className="text-[11px] font-bold tracking-ultra text-red-600 uppercase mb-6">Ground Realities</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-black">
                Real Challenges.<br />Real Solutions.
              </h2>
              <p className="text-black/60 font-light text-[17px] leading-relaxed">
                Indian agriculture is facing unprecedented hurdles. We aren't just building software; we are engineering physical and economic interventions for the most critical problems farmers face today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { 
                  icon: CloudRain, 
                  color: 'text-blue-500', 
                  bg: 'bg-blue-50',
                  problem: "Unpredictable Monsoons & Climate Stress",
                  solution: "AI-driven localized weather forecasting combined with climate-resilient seed varieties. We help farmers adapt before the storm hits.",
                  img: "https://images.unsplash.com/photo-1534073133331-c4f6fb890ac3?auto=format&fit=crop&q=80"
                },
                { 
                  icon: ShieldAlert, 
                  color: 'text-amber-500', 
                  bg: 'bg-amber-50',
                  problem: "Soil Degradation & Pest Epidemics",
                  solution: "Mobile soil-testing labs and drone-based multispectral imaging instantly diagnose soil health and target pest outbreaks precisely.",
                  img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80"
                },
                { 
                  icon: Network, 
                  color: 'text-emerald-500', 
                  bg: 'bg-emerald-50',
                  problem: "Broken Supply Chains & Wastage",
                  solution: "End-to-end logistics ownership. We buy directly from the farm gate, process it locally, and route it globally—eliminating middlemen delays.",
                  img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-[24px] overflow-hidden shadow-lg border border-black/5 hover:shadow-2xl transition-all duration-500 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center ${item.color} mb-8`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight mb-4 text-black">{item.problem}</h3>
                    <p className="text-black/60 font-light text-[15px] leading-relaxed mb-6">{item.solution}</p>
                    <button className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors">
                      Learn How <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Support System - Infrastructure */}
        <section className="px-[5%] py-32 md:py-48 bg-white text-black w-full relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
              <div className="max-w-2xl">
                <p className="text-[11px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Integrated Support</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.1]">
                  Digital Power <br />In the Field.
                </h2>
              </div>
              <p className="text-black/60 font-light text-[17px] max-w-sm leading-relaxed">
                We bridge the gap between data and action by providing physical infrastructure powered by digital logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80", icon: Tractor, title: 'Smart Fleet', text: 'Real-time machine tracking for precision pathing and efficiency.' },
                { img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80", icon: Database, title: 'Real-time Labs', text: 'Instant soil health diagnosis at regional collection centers.' },
                { img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80", icon: Store, title: 'Regional Hubs', text: 'Direct access points for tech deployment and crop collection.' }
              ].map((item, i) => (
                <div key={i} className="group relative h-[500px] rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-emerald-50 group-hover:via-white/20 transition-colors duration-700"></div>
                  <div className="relative h-full p-10 flex flex-col justify-between">
                    <item.icon className="text-emerald-500 group-hover:scale-125 transition-transform animate-float" size={32} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-2xl font-light uppercase tracking-widest mb-4">{item.title}</h3>
                      <p className="text-black/50 font-light text-[15px] max-w-[280px]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION: Predictive Alpha (Inventory Intelligence) */}
        <section className="px-[5%] py-32 md:py-48 bg-white text-black w-full relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-blue-600 uppercase mb-8">Inventory Intelligence</p>
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8 leading-[1.1] text-neutral-900">
                  PREDICTIVE <br />ALPHA.
                </h2>
                <p className="text-black/60 font-light text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-lg">
                  Positioning materials before demand triggers. Modeling regional requirements 45 days in advance reduces inventory costs by 22% and secures the supply chain.
                </p>
                <div className="flex flex-col gap-5">
                   <div className="border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex items-center gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white group">
                      <BrainCircuit className="text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[11px] font-bold tracking-ultra uppercase mb-2">Regional Demand Modeling</h4>
                        <p className="text-[13px] text-black/50 font-light">Proprietary AI with 99.2% accuracy.</p>
                      </div>
                   </div>
                   <div className="border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex items-center gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white group">
                      <PackageCheck className="text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[11px] font-bold tracking-ultra uppercase mb-2">Asset Preservation</h4>
                        <p className="text-[13px] text-black/50 font-light">Eliminating supply shocks through JIT logistics.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-16 lg:mt-0 relative">
                 <div className="bg-neutral-100 rounded-[32px] overflow-hidden shadow-xl h-[400px] md:h-[500px] w-full lg:w-11/12 ml-auto relative">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale-[0.2]" />
                 </div>
                 <div className="absolute -bottom-10 left-0 md:-left-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 max-w-md border border-black/5">
                    <p className="text-black/40 font-light text-[15px] italic leading-relaxed">
                      "Integrated logistics prevent waste and ensure consistent ROI across territorial networks."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Soil As Capital (ESG Assets) */}
        <section className="px-[5%] py-32 md:py-48 w-full relative overflow-hidden rounded-[40px] md:mx-[2%] md:w-[96%] shadow-2xl">
          <div className="absolute inset-0 bg-emerald-950">
             <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/80"></div>
          </div>
          <div className="max-w-[1440px] mx-auto reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="lg:w-3/5">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-8">ESG Assets</p>
                <h2 className="text-6xl md:text-[8rem] font-light tracking-tighter uppercase mb-10 leading-[0.9] text-white">
                  SOIL AS <br />CAPITAL.
                </h2>
                <p className="text-emerald-100/60 font-light text-[18px] md:text-[20px] leading-relaxed mb-16 max-w-2xl italic">
                  "Soil health is a generational appreciating asset. Our biological restoration programs ensure land longevity and multi-year productivity stability."
                </p>
                <div className="flex flex-wrap items-center gap-12 text-[10px] font-bold tracking-ultra uppercase text-emerald-400">
                   <div className="flex items-center gap-3">
                      <Droplets size={22} strokeWidth={1.5} /> WATER SECURITY
                   </div>
                   <div className="flex items-center gap-3">
                      <CloudSun size={22} strokeWidth={1.5} /> GREEN HUBS
                   </div>
                </div>
              </div>
              <div className="lg:w-2/5 w-full">
                 <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-400/30 transition-colors"></div>
                    <h3 className="text-3xl font-light text-emerald-300 mb-6">Risk Management</h3>
                    <p className="text-emerald-100/60 font-light text-[16px] leading-relaxed mb-16">
                      Standardizing operational SOPs through deep-science field mapping lowers territory risk for group partners.
                    </p>
                    <button className="flex items-center gap-3 text-[10px] font-bold tracking-ultra uppercase text-emerald-400 hover:text-white transition-colors">
                      GOVERNANCE HUB <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Financial Empowerment */}
        <section className="px-[5%] py-32 md:py-48 bg-emerald-900 text-white w-full relative overflow-hidden mt-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-800 rounded-full blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
           <div className="max-w-[1440px] mx-auto reveal-on-scroll relative z-10 flex flex-col lg:flex-row-reverse gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[11px] font-bold tracking-ultra text-amber-400 uppercase mb-8">Farmer Economics</p>
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-10 leading-tight">
                  Financial <br />Empowerment.
                </h2>
                <p className="text-white/70 font-light text-[17px] leading-relaxed mb-12">
                  Farming is a business. We treat our farmers like entrepreneurs. Through the IAG ecosystem, farmers gain access to fair credit, crop insurance, and transparent market pricing—breaking the cycle of predatory lending.
                </p>
                <ul className="space-y-6">
                  {['Micro-financing for seed and equipment', 'Instant digital payments post-harvest', 'Weather-indexed crop insurance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                         <ChevronRight size={14} className="text-amber-400" />
                       </div>
                       <span className="text-[15px] font-light text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="grid grid-cols-2 gap-6 relative">
                    <div className="aspect-square bg-emerald-950 rounded-[24px] overflow-hidden shadow-2xl p-8 border border-white/10 flex flex-col justify-between hover:-translate-y-2 transition-transform">
                       <Coins size={40} className="text-amber-400" />
                       <div>
                         <h4 className="text-3xl font-light mb-2">₹120Cr</h4>
                         <p className="text-[10px] tracking-widest uppercase text-white/50">Credit Disbursed</p>
                       </div>
                    </div>
                    <div className="aspect-square bg-emerald-800 rounded-[24px] overflow-hidden shadow-2xl p-8 border border-white/10 flex flex-col justify-between hover:-translate-y-2 transition-transform translate-y-12">
                       <BarChart3 size={40} className="text-emerald-300" />
                       <div>
                         <h4 className="text-3xl font-light mb-2">35%</h4>
                         <p className="text-[10px] tracking-widest uppercase text-white/50">Average Income Increase</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* NEW SECTION: The Closed-Loop Ecosystem (Input -> APMC -> Procure -> Process) */}
        <section className="px-[5%] py-32 md:py-48 bg-neutral-950 text-white w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="max-w-[1440px] mx-auto reveal-on-scroll relative z-10">
            <div className="text-center mb-24 max-w-4xl mx-auto">
              <p className="text-[11px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">End-to-End Control</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8">
                Completing the <br />Ecosystem.
              </h2>
              <p className="text-white/60 font-light text-[17px] leading-relaxed">
                We are present at every node of the agricultural value chain. By controlling the flow from the very first seed to the final processed product, we create a flawless, highly profitable closed-loop economy.
              </p>
            </div>

            <div className="relative mt-20">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { 
                    step: '01', 
                    title: 'Input Supply', 
                    desc: 'IAG begins the cycle by supplying premium seeds, nutrients, and machinery directly to the farmers.', 
                    icon: Sprout 
                  },
                  { 
                    step: '02', 
                    title: 'Market Arrival', 
                    desc: 'Farmers cultivate and harvest high-quality produce, bringing it to local APMCs and FPOs for sale.', 
                    icon: Building2 
                  },
                  { 
                    step: '03', 
                    title: 'Procurement', 
                    desc: 'We step back in, actively procuring this premium, verified produce directly from the APMCs and FPOs.', 
                    icon: Truck 
                  },
                  { 
                    step: '04', 
                    title: 'Food Processing', 
                    desc: 'Invade Mill enters the food processing space, transforming raw yield to sell to FMCG titans like ITC and Britannia.', 
                    icon: Factory 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 group-hover:border-emerald-500 group-hover:bg-emerald-900/30 transition-all duration-500 shadow-2xl relative">
                      <div className="absolute -top-3 -right-3 text-[10px] font-bold tracking-widest text-emerald-500 bg-neutral-950 px-2 py-1 rounded-full border border-white/10">
                        {item.step}
                      </div>
                      <item.icon size={32} className="text-white/70 group-hover:text-emerald-400 transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight mb-4">{item.title}</h3>
                    <p className="text-white/50 font-light text-[14px] leading-relaxed px-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="px-[5%] py-32 md:py-48 bg-white text-black w-full relative z-10 border-b border-black/5">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="mb-32 text-center">
              <p className="text-[11px] font-bold tracking-ultra text-emerald-600 uppercase mb-8">Current Footprint</p>
              <h2 className="text-5xl md:text-[7rem] font-light tracking-tighter uppercase leading-none">The Scale.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {[
                  { label: 'Active Hubs', value: '180+', desc: 'Across 4 States' },
                  { label: 'Asset Management', value: '₹4.5K CR+', desc: 'Managed Harvest Value' },
                  { label: 'Farmer Network', value: '100k+', desc: 'Digital Active Users' },
                  { label: 'Regional Units', value: '1600+', desc: 'Licensed Partners' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-6 group">
                    <p className="text-[10px] font-bold tracking-ultra text-black/40 uppercase group-hover:text-emerald-600 transition-colors">{stat.label}</p>
                    <h3 className="text-6xl md:text-7xl font-light tracking-tighter group-hover:scale-110 transition-transform duration-700 text-neutral-800">{stat.value}</h3>
                    <div className="w-12 h-[1px] bg-emerald-200"></div>
                    <p className="text-[12px] font-light text-black/50 uppercase tracking-widest">{stat.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* The Group Forces */}
        <section className="px-[5%] py-32 md:py-48 bg-neutral-50 relative z-10">
          <div className="max-w-[1440px] mx-auto reveal-on-scroll">
            <div className="mb-24 text-center">
              <p className="text-[11px] font-bold tracking-ultra text-emerald-600 uppercase mb-6">The IAG Ecosystem</p>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase leading-none text-neutral-800">Synergy.</h2>
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-6 h-auto lg:h-[600px]">
              {[
                { id: 'agro', img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80", tag: 'AGRO', color: 'bg-emerald-500', title: 'Invade Agro', text: 'Large-scale high-tech farming and biological R&D.' },
                { id: 'mill', img: "https://images.unsplash.com/photo-1495107336281-19d4f7a7d0aa?auto=format&fit=crop&q=80", tag: 'MILL', color: 'bg-amber-500', title: 'Invade Mill', text: 'Processing, milling, and global market integration.' },
                { id: 'code', img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80", tag: 'CODE', color: 'bg-blue-600', title: 'Invade Code', text: 'Developing the software backbone of Indian agriculture.' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveForce(item.id)}
                  onMouseLeave={() => setActiveForce(null)}
                  className={`relative flex-1 overflow-hidden transition-all duration-700 cursor-pointer rounded-[24px] p-10 flex flex-col justify-between border border-black/5 bg-white ${activeForce === item.id ? 'lg:flex-[2] shadow-2xl' : ''}`}
                >
                  <img src={item.img} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${activeForce === item.id ? 'scale-105 opacity-30 grayscale-0' : 'opacity-0 grayscale'}`} />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent ${activeForce === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <span className={`inline-block px-6 py-2 ${item.color} text-white rounded-full text-[10px] font-bold tracking-ultra uppercase shadow-sm mb-10`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-3xl md:text-4xl font-light tracking-tighter uppercase mb-6 transition-all ${activeForce === item.id ? 'text-black' : 'text-black/70'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-[15px] font-light leading-relaxed max-w-sm transition-all duration-700 ${activeForce === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden lg:block'}`}>
                      {item.text}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 text-[11px] font-bold tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors">
                    Explore Branch <ArrowUpRight size={16} />
                  </div>
                </div>
              ))}
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
