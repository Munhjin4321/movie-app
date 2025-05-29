import { Film, Mail, Phone } from "lucide-react";
 
export const Footer = () => {
  return (
    <div className="w-full bg-[#4338CA] text-white px-6 py-10 ">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Film />
            <h1 className="text-xl font-bold">Movie Z</h1>
          </div>
          <p className="text-sm">2025 Movie Z. All rights reserved.</p>
        </div>
 
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:w-full md:items-sta">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="flex items-start gap-3">
              <Mail />
              <div>
                <p className="text-sm">Email:</p>
                <p className="text-sm">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone />
              <div>
                <p className="text-sm">Phone:</p>
                <p className="text-sm">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
 
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};