import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function SocialLinks() {
  const socialLinks = [
    {
      label: "FaceBook",
      icon: <FaFacebookF className="text-xl text-textSecondary" />,
    },
    {
      label: "Twitter",
      icon: <CiTwitter className="text-2xl text-textSecondary" />,
    },
    {
      label: "Instagram",
      icon: <FaInstagram className="text-2xl text-textSecondary" />,
    },
  ];
  return (
    <>
      <div className="proTips-container p-4 bg-backgroundPrimary rounded-md mt-3">
        <div className="mb-4">
          <h2 className="text-textPrimary text-2xl font-bold">
            <span className="bg-[#afe6fd] w-3 h-7 rounded inline-flex items-center align-middle me-4"></span>
            Get more customers!
          </h2>
        </div>
        <p className="text-textSecondary mt-5">
          50% of new customers explore products because the author sharing the
          work on the social media networks. Gain your earning right now! 🎁
        </p>
        <div className="flex justify-center items-center gap-5 md:mt-5 mt-2">
          {socialLinks &&
            socialLinks?.map((links) => (
              <>
                <button
                  type="button"
                  className="w-full text-center border border-textSecondary p-3 rounded-xl flex justify-center items-center gap-3"
                >
                  <span>{links.icon}</span>
                  {links.label}
                </button>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default SocialLinks;
