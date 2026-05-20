import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-50">
      <div className="bg-[var(--primary-color)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:items-start md:justify-between gap-10">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/logo.svg"
                alt="GO-GENIE logo"
                className="h-10 w-auto"
                width={160}
                height={39}
              />
            </div>

            <div className="pt-10 border-t border-white/20 grid grid-cols-2 sm:grid-cols-5 gap-8 w-full">
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="#">Last-Mile Delivery</Link>
                  </li>
                  <li>
                    <Link href="#">Warehousing</Link>
                  </li>
                  <li>
                    <Link href="#">Fulfilment</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="#">Merchants</Link>
                  </li>
                  <li>
                    <Link href="#">Service Providers</Link>
                  </li>
                  <li>
                    <Link href="#">Gig Workers</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">About</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="#">GO-GENIE®</Link>
                  </li>
                  <li>
                    <Link href="#">Our Ecosystem</Link>
                  </li>
                  <li>
                    <Link href="#">Sustainability</Link>
                  </li>
                  <li>
                    <Link href="#">Newsroom</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Help & Guides</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="#">Help Center</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="#">Data Retention Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6 grid gap-6 md:grid-cols-3 text-sm text-white/90">
            <div>
              Singapore Address: 1234 Building, Random Rd, Singapore, 17890123
            </div>
            <div>
              Vietnam Address: 1234 Rd, Random District, Ho Chi Minh City,
              Vietnam
            </div>
            <div className="flex flex-col items-center justify-start md:justify-end gap-4">
              <span>Follow us and keep updated</span>
              <div className="flex items-center gap-3 text-white/90">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/tiktok.svg"
                  alt="tiktok"
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/x.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
          <div className="space-y-8">
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">
                Awards and Recognition
              </h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brands For Good 2025 - Honouree
                <br />
                SPBA 2025 - Promising Brands
                <br />
                SPBA 2025 - Transformation Efforts
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-4">
                Business Chambers
              </h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Member of Singapore Chinese Chamber of Commerce & Industry
                (SCCCI)
                <br />
                Member of Singapore Business Federation (SBF)
              </p>
            </div>
          </div>

          <div className="flex lg:flex-nowrap flex-wrap items-center justify-center md:gap-20 gap-10">
            <Image
              src="/images/footer-1.png"
              alt="award logo 1"
              className="h-28 object-contain select-none"
              width={145}
              height={299}
            />
            <Image
              src="/images/footer-2.png"
              alt="award logo 2"
              className="h-20 object-contain select-none"
              width={145}
              height={299}
            />
            <Image
              src="/images/footer-3.png"
              alt="award logo 3"
              className="h-20 object-contain select-none"
              height={299}
              width={145}
            />
            <Image
              src="/images/footer-4.png"
              alt="award logo 4"
              className="h-20 object-contain select-none"
              height={299}
              width={145}
            />
          </div>
        </div>
      </div>

      <div className="bg-[var(--primary-color)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-center">
          © 2026 GO-GENIE® All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
