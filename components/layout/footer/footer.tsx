import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { useTheme } from "..";
import { Icon } from "../../util/icon";

export const Footer = ({ data, icon }) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto bg-white rounded-lg";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-gray-1000 dark:text-gray-900 hover:text-gray-800",
    primary: "text-gray-1000 opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "none",
      //"text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-gray-900 bg-gray-50",
    },
  };

  const footerColorCss = data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <footer className={`bg-${footerColorCss}`}>
      <Container className="relative" size="small">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <Link
            href="/"
            className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap"
          >
            <Icon
              parentColor={data.color}
              data={{
                name: icon.name,
                color: data.color === "primary" ? "primary" : icon.color,
                style: icon.style,
              }}
              className="inline-block h-10 w-auto group-hover:text-orange-500"
            />
          </Link>
          <div className="flex gap-4">
            {data.social && data.social.email && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.email}
                target="_blank"
              >
                <MdOutlineAlternateEmail
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.discord && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.discord}
                target="_blank"
              >
                <FaDiscord
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.facebook && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.facebook}
                target="_blank"
              >
                <FaFacebookF
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.twitter && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.twitter}
                target="_blank"
              >
                <FaTwitter
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.instagram && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.instagram}
                target="_blank"
              >
                <AiFillInstagram
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
            {data.social && data.social.github && (
              <a
                className="inline-block opacity-80 hover:opacity-100 transition ease-out duration-150"
                href={data.social.github}
                target="_blank"
              >
                <FaGithub
                  className={`${socialIconClasses} ${
                    socialIconColorClasses[
                      data.color === "primary" ? "primary" : theme.color
                    ]
                  }`}
                />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};
