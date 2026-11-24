import { useState } from "react";
import { ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import {
  backyard,
  bathroom,
  bedroom,
  homeIcon,
  Buttons,
  Carousel,
  familyroom,
  interiors,
  kitchen,
  logo,
  logo18,
  logo19,
  logo21,
  logo22,
  logo24,
  pinHole,
  rooftop,
  stairs,
  workspace,
} from "../imports";
import { carouselItems } from "../data/carousel";
import Facilities from "../components/Facilities";
import SignatureCommunities from "../components/SignatureCarousel";

const galleryItems = [
  { title: "Bathroom", image: bathroom },
  { title: "Kitchen & Dining", image: kitchen },
  { title: "Family Room", image: familyroom },
  { title: "Rooftop", image: rooftop },
  { title: "Workspace", image: workspace },
  { title: "Bedroom", image: bedroom },
  { title: "Stairs", image: stairs },
  { title: "Backyard", image: backyard },
  { title: "Interiors", image: interiors },
];

const frequentlyAskedQuestions = [
  {
    question: "What types of properties does Serenia offer?",
    answer: "We provide a wide range of properties, including:\n• Residential Homes – exclusive housing with modern design.\n• Apartments – vertical living with complete facilities.\n• Commercial Spaces – shop houses and business areas in prime locations.\n• Integrated Townships – complete with malls, green parks, schools, and lifestyle facilities.",
  },
  {
    question: "Where are Serenia's projects located?",
    answer: "Explore the Properties page for the communities currently listed on the website, or contact the Serenia team for location details.",
  },
  {
    question: "What are the benefits of owning a Serenia property?",
    answer: "The communities are designed around comfortable homes, shared facilities, and connected neighborhood spaces. Features vary by property.",
  },
  {
    question: "How can I purchase a Serenia property?",
    answer: "Visit the property listings to compare available homes, then contact the team to discuss the next steps for a specific property.",
  },
  {
    question: "Does Serenia offer financing or mortgage options?",
    answer: "Financing options depend on the property and current terms. Contact the team for the latest information.",
  },
  {
    question: "Is Serenia suitable for both living and investment?",
    answer: "Serenia homes are presented for residential living. Ask the team about property details and suitability for your needs.",
  },
  {
    question: "Does Serenia manage public facilities within its townships?",
    answer: "Community facilities differ by location. The Amenities page lists examples, and the team can confirm details for each community.",
  },
  {
    question: "Are there any promotions or special payment plans?",
    answer: "Promotions and payment plans can change. Contact the team for current offers.",
  },
];

function Home() {
  const navigate = useNavigate();
  // Which FAQ is open (0 = the first one, null = none)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const searchProperties = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    for (const key of ["cluster", "price", "bedroom", "address"]) {
      const value = String(formData.get(key) ?? "").trim();
      if (value) params.set(key, value);
    }

    const query = params.toString();
    navigate(query ? `/properties?${query}` : "/properties");
  };

  return (
    <main>
          <title>Serenia - Real Estate</title>
      <section className="home-hero flex h-110">
        <div className="w-1/2 p-8">
          <div className="flex min-h-11.25 w-fit max-w-full items-center bg-gold-cream p-3 text-gold">
            <img src={pinHole} className="h-5 w-5 mx-2" alt="award icon" />
            <p className="font-medium font-body">Winner of the IPA 2025</p>
          </div>

          <h1 className="home-hero-title mt-3 font-semibold text-gray-800 text-[60px] leading-18 tracking-tight">
            <span>Timeless <br /> living modern <br /> touch.</span>
          </h1>

          <p className="home-hero-description mt-6 text-[20px] text-gray-700 font-normal leading-tight tracking-tight hero-fade delay-2">
            Explore thoughtfully designed residences that combine <br /> comfort, style, and a sense of belonging.
          </p>
        </div>

        <div className="home-hero-panel w-1/2 h-full bg-stone-100 flex">
          <div className="w-full bg-stone-100 p-6">
            <form onSubmit={searchProperties} className="home-hero-search-form h-90 shadow-boxxx bg-white mt-4 p-8">
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <img src={homeIcon} alt="" />
                  <h2 className="text-xl font-medium text-gray-700">Find your house preference</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div className="flex flex-col">
                  <label htmlFor="cluster" className="mb-2 text-lg font-medium text-gray-900">Cluster</label>
                  <div className="relative dropdown-wrap">
                    <select
                      id="cluster"
                      name="cluster"
                      defaultValue=""
                      className="h-15 w-full appearance-none border border-gray-300 bg-white py-2.5 pl-3 pr-8 text-base text-gray-900 focus:border-olive focus:outline-none"
                    >
                      <option value="">All communities</option>
                      <option value="Liora estate">Liora estate</option>
                      <option value="Aruna residence">Aruna residence</option>
                      <option value="Nava heights">Nava heights</option>
                      <option value="Velora park">Velora park</option>
                      <option value="Seraya grove">Seraya grove</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-900">
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col control-field">
                  <label htmlFor="price" className="mb-2 text-xl font-medium text-gray-900">Price range</label>
                  <div className="relative dropdown-wrap">
                    <select
                      id="price"
                      name="price"
                      defaultValue=""
                      className="h-15 w-full appearance-none truncate border border-gray-300 bg-white py-2.5 pl-3 pr-8 text-base text-gray-900 focus:border-olive focus:outline-none"
                    >
                      <option value="">Any price</option>
                      <option value="under-100000">$85,000-120,000</option>
                      <option value="100000-120000">$100,000 – $120,000</option>
                      <option value="over-120000">Over $120,000</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-900">
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bedroom" className="mb-2 text-xl font-medium text-gray-900">Bedroom</label>
                  <div className="relative dropdown-wrap">
                    <select
                      id="bedroom"
                      name="bedroom"
                      defaultValue=""
                      className="h-15 w-full appearance-none border border-gray-300 bg-white py-2.5 pl-3 pr-8 text-base text-gray-900 focus:border-olive focus:outline-none"
                    >
                      <option value="">All bedrooms</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-900">
                      <ChevronDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div className="flex flex-col sm:col-span-2 control-field">
                  <label htmlFor="address" className="text-xl font-medium text-gray-900 mt-3 mb-3">Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-3.5 pointer-events-none">
                      <Search />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter address"
                      className="w-full pl-12 pr-3 h-15 py-2.5 bg-white border text-xl border-gray-300 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-olive"
                    />
                  </div>
                </div>
                <Buttons btnText="Show the result" btnstyle="h-15 w-full primary-button py-2.5 px-4 text-white bg-olive" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <Carousel slides={carouselItems} />

      <section>
        <SignatureCommunities />
      </section>

      <Facilities textContent="Facility & amenties" />

      <section className="bg-slate flex items-center justify-center lg:min-h-250">
        <div className="home-awards mx-auto grid w-full max-w-340 grid-cols-1 gap-8 bg-white p-6 pt-10 shadow-box-lighter sm:pt-15 lg:min-h-220 lg:grid-cols-2 lg:gap-12 lg:p-15">
          <div className="reveal grid grid-cols-1 min-w-0 gap-12 items-end">
            <div className="lg:col-span-5 pt-8 pb-12 px-6 sm:px-10 lg:pl-12 lg:pr-14 flex flex-col justify-start">
              <p className="mb-7 text-4xl font-medium leading-[1.12] text-ink-deep sm:text-5xl lg:text-6xl">
                Our awards &amp; <br /> global<br /> recognition
              </p>
              <p className="text-md leading-tight mb-10">
                Our achievements are recognized not only locally but also on the international stage. From prestigious industry awards to global certifications, each recognition reflects our commitment to excellence, innovation, and quality that meets world-class standards.
              </p>
              <h2 className="text-lg font-bold text-ink-deep mb-5 tracking-tight">
                More than 20 years, we known as:
              </h2>
              <ul className="space-y-3.5">
                <li className="flex items-start sm:items-center gap-3">
                  <img src={pinHole} alt="" />
                  <span className="text-[0.875rem] text-[#333333] font-medium leading-tight">The best housing in Asia</span>
                </li>
                <li className="flex items-start sm:items-center gap-3">
                  <img src={pinHole} alt="" />
                  <span className="text-[0.875rem] text-[#333333] font-medium leading-tight">Housing with the most optimal resource management</span>
                </li>
                <li className="flex items-start sm:items-center gap-3">
                  <img src={pinHole} alt="" />
                  <span className="text-[0.875rem] text-[#333333] font-medium leading-tight">Housing with an eco-friendly concept</span>
                </li>
                <li className="flex items-start sm:items-center gap-3">
                  <img src={pinHole} alt="" />
                  <span className="text-[0.875rem] text-[#333333] font-medium leading-tight">Housing with the most demand in 2023</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="reveal border-l border-slate-200 delay-1 grid min-w-0 grid-cols-2">
            <div className="award-logo-cell award-logo-cell-bordered py-16">
           <Link to="/admin/login">
              <div className="award-logo-mark">
                <img src={logo22} alt="" />
              </div>
           </Link>
            </div>
            <div className="award-logo-cell py-16">
              <div className="award-logo-mark">
                <img src={logo24} alt="" />
              </div>
            </div>
            <div className="award-logo-cell award-logo-cell-bordered py-16">
              <div className="award-logo-mark">
                <img src={logo19} alt="" />
              </div>
            </div>
            <div className="award-logo-cell py-16">
              <div className="award-logo-mark">
                <img src={logo21} alt="" />
              </div>
            </div>
            <div className="award-logo-cell award-logo-cell-bordered award-logo-cell-last py-16">
              <div className="award-logo-mark">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="award-logo-cell award-logo-cell-last py-16">
              <div className="award-logo-mark">
                <img src={logo18} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-center text-white p-5 bg-gallery">
        <p className="reveal p-5 text-5xl sm:p-7 sm:text-6xl lg:text-7xl">Our gallery</p>
        <p className="reveal delay-1 mx-auto max-w-xl px-4">Discover the beauty of Serenia in our <br /> gallery, featuring both its exterior and interior.</p>
        <div className="home-gallery-grid reveal mt-6 grid grid-cols-1 items-stretch gap-4 bg-gallery p-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {galleryItems.map(({ title, image }) => (
            <div key={title} className="h-auto min-w-0 w-full overflow-hidden bg-charcoal text-[clamp(1rem,1.5vw,1.5rem)] leading-8">
              <p className="p-5">{title}</p>
              <img src={image} alt="" className="block aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="w-full bg-gallery px-4 py-10 text-center">
          <p className="mx-auto text-xl max-w-sm">And there are many other gallery <br /> categories and photos, discover <br /> now</p>
          <Link to="/gallery" className="mx-auto mt-8 flex min-h-10 w-fit max-w-full items-center justify-center gap-3 bg-[#434343] p-4 transition-colors duration-300 hover:brightness-200">
            View all galleries
            <ArrowUpRight className="" />
          </Link>
        </div>
      </section>

      {/* FAQ: clicking a question opens its answer */}
      <section className="home-faq-section bg-slate px-4 py-12 sm:px-8 sm:py-20 lg:px-16" aria-labelledby="home-faq-title">
        <h2 id="home-faq-title" className="reveal mb-10 text-center text-4xl font-medium tracking-tight text-stone-900 sm:mb-16 sm:text-5xl lg:text-6xl leading-[1.15]">
          Frequently <br /> asked <br /> questions
        </h2>

        <div className="reveal delay-1 mx-auto max-w-4xl space-y-3">
          {frequentlyAskedQuestions.map(({ question, answer }, index) => (
              <div key={question} className="bg-white transition-all">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left text-base font-semibold text-stone-900 hover:bg-stone sm:text-lg"
                >
                  <span>{question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center bg-stone-100 text-lg font-medium text-stone-700">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index ? (
                  <div className="border-t border-stone-100 p-6 text-sm sm:text-base leading-relaxed text-stone-600 whitespace-pre-line">
                    {answer}
                  </div>
                ) : null}
              </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;