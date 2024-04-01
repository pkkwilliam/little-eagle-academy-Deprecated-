import Link from "next/link";
import React from "react";
// internal
import { useSelector } from "react-redux";

const Menus = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.menu ?? {};
  // Take a look of import menu_data from "@data/menu-data";
  const menu = [
    {
      id: 1,
      hasDropdown: false,
      title: labels.home,
      link: "/",
    },
    {
      id: 2,
      hasDropdown: false,
      title: labels.aboutUs,
      link: "/about",
    },
    {
      id: 3,
      hasDropdown: false,
      title: labels.classes,
      link: "/classes",
    },
    {
      id: 6,
      hasDropdown: false,
      title: labels.newsAndEvents,
      link: "/news",
    },
    {
      id: 7,
      hasDropdown: false,
      title: labels.contact,
      link: "/contact",
    },
  ];
  return (
    <ul>
      {menu.map((menu, i) => (
        <li
          key={i}
          className={` ${menu.megaMenu ? "has-dropdown has-mega-menu" : ""} ${
            menu.megaMenuTwo ? "has-dropdown has-mega-menu" : ""
          } ${menu.hasDropdown ? "has-dropdown" : ""}`}
        >
          <Link href={menu.link}>{menu.title}</Link>
          {menu.hasDropdown && (
            <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menus && (
            <ul className="mega-menu">
              {menu.mega_menus.map((mega, i) => (
                <li key={i}>
                  <Link href={mega.link} className="mega-menu-title">
                    {mega.title}
                  </Link>
                  <ul>
                    {mega.submenus.map((sub_mega, i) => (
                      <li key={i}>
                        <Link href={sub_mega.link}>{sub_mega.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menus_two && (
            <ul className="mega-menu mega-menu-2">
              {menu.mega_menus_two.map((megaTwo, i) => (
                <li key={i}>
                  <ul>
                    {megaTwo.submenus.map((sub_mega_two, i) => (
                      <li key={i}>
                        <Link
                          href={sub_mega_two?.link}
                          className="mega-program"
                        >
                          {!sub_mega_two.programImg && (
                            <>
                              <div className="mega-menu-2-inner-num">
                                <span>{sub_mega_two?.count}</span>
                              </div>
                              <div className="mega-menu-2-inner-title">
                                <h6>{sub_mega_two?.title}</h6>
                                <span>{sub_mega_two?.age}</span>
                              </div>
                            </>
                          )}

                          {sub_mega_two.programImg && (
                            <div className="mega-menu-2-inner-thumb p-relative">
                              <img src={sub_mega_two.img} alt="img not found" />
                              <div className="mega-menu-2-inner-thumb-content">
                                <h4>{sub_mega_two.title}</h4>
                                <div className="mega-menu-2-inner-thumb-btn mb-25">
                                  <button type="button" className="mega-btn">
                                    {sub_mega_two.btn}
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;
