import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { SITE } from "../config/siteConfig";

const MENU = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/admissions", label: "Admissions" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/notices", label: "Notices" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Close with ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Focus close button when opened
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* FIXED HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,.08)",
        }}
      >
        {/* TOP BAR */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "6px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* LOGO (public image path, no import needed) */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "#111",
              minWidth: 0,
            }}
          >
            <div className="logoWrap">
              <img
                src="/images/logo.png"
                alt={`${SITE.name} logo`}
                className="logoImg"
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {SITE.name}
              </div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{SITE.location}</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktopNav" aria-label="Primary navigation">
            {MENU.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  padding: "9px 14px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 650,
                  fontSize: 14,
                  color: isActive ? "#ff8c00" : "#111",
                  background: isActive ? "rgba(255,140,0,.10)" : "transparent",
                  border: isActive
                    ? "1px solid rgba(255,140,0,.25)"
                    : "1px solid transparent",
                  transition: "all .18s ease",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MENU BUTTON (hidden on desktop via CSS) */}
          <button
            className="menuBtn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`overlay ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <aside
            className={`drawer ${open ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            {/* Drawer header */}
            <div className="drawerHeader">
              <div className="drawerBrand">
                <div className="drawerLogoWrap">
                  <img
                    src="/images/logo.png"
                    alt={`${SITE.name} logo`}
                    className="drawerLogoImg"
                  />
                </div>
                <div className="drawerTitleWrap">
                  <div className="drawerTitle">{SITE.name}</div>
                  <div className="drawerSubtitle">{SITE.location}</div>
                </div>
              </div>

              <button
                ref={closeBtnRef}
                className="iconBtn"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu items */}
            <nav className="drawerNav" aria-label="Mobile navigation">
              {MENU.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `drawerItem ${isActive ? "active" : ""}`
                  }
                >
                  <span className="drawerItemLabel">{item.label}</span>
                  <span className="chev" aria-hidden="true">
                    ›
                  </span>
                </NavLink>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="drawerFooter">
              <Link
                className="ctaPrimary"
                to="/admissions"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </Link>
              <a
                className="ctaGhost"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </aside>
        </div>

        {/* STYLES */}
        <style>{`
          .desktopNav { display: flex; gap: 8px; }

          /* Logo image containers */
          .logoWrap {
            width: 85px;
            height: 75px;
            // border-radius: 12px;
            background: #fff;
            // border: 1px solid rgba(0,0,0,.08);
            // box-shadow: 0 10px 22px rgba(0,0,0,.06);
            display: grid;
            place-items: center;
            overflow: hidden;
            flex: 0 0 auto;
          }
          .logoImg {
            width: 100%;
            height: 100%;
            object-fit: cover; /* use contain if you want full logo visible */
          }

          /* Menu button: hidden by default (desktop) */
          .menuBtn {
            display: none;
            width: 44px;
            height: 44px;
            border-radius: 5px;
            border: 1px solid rgba(0,0,0,.10);
            background: #fff;
            cursor: pointer;
            align-items: center;
            justify-content: center;
          }

          /* SHOW hamburger ONLY on tablet + mobile */
          @media (max-width: 1024px) {
            .desktopNav { display: none; }
            .menuBtn { display: inline-flex; }
          }

          .hamburger { width: 18px; display: grid; gap: 4px; }
          .hamburger span {
            height: 2px;
            background: #111;
            border-radius: 999px;
            display: block;
          }

          .overlay {
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, .45);
            opacity: 0;
            pointer-events: none;
            transition: opacity .18s ease;
            z-index: 999;
          }
          .overlay.show {
            opacity: 1;
            pointer-events: auto;
          }

          /* Full-height drawer */
          .drawer {
            position: absolute;
            top: 0;
            right: 0;
            height: 100vh;
            width: min(360px, 92vw);
            background: #fff;
            box-shadow: -18px 0 50px rgba(0,0,0,.18);
            transform: translateX(14px);
            opacity: 0;
            transition: transform .2s ease, opacity .2s ease;
            display: flex;
            flex-direction: column;
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
          }
          .drawer.open {
            transform: translateX(0);
            opacity: 1;
          }

          .drawerHeader {
            padding: 16px 16px 12px 16px;
            border-bottom: 1px solid rgba(0,0,0,.07);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .drawerBrand {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
          }

          .drawerLogoWrap {
            width: 50px;
            height: 50px;
            // border-radius: px;
            background: #fff;
            // border: 1px solid rgba(0,0,0,.08);
            // box-shadow: 0 10px 22px rgba(0,0,0,.06);
            display: grid;
            place-items: center;
            overflow: hidden;
            flex: 0 0 auto;
          }
          .drawerLogoImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .drawerTitleWrap { min-width: 0; }
          .drawerTitle {
            font-weight: 700;
            line-height: 1.15;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #0f172a;
          }
          .drawerSubtitle {
            font-size: 12px;
            color: rgba(15, 23, 42, .65);
          }

          .iconBtn {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid rgba(0,0,0,.10);
            background: #fff;
            cursor: pointer;
            font-size: 16px;
            line-height: 1;
            display: grid;
            place-items: center;
            transition: transform .15s ease, background .15s ease;
          }
          .iconBtn:active { transform: scale(.98); }
          .iconBtn:hover { background: rgba(0,0,0,.04); }

          .drawerNav {
            padding: 12px 12px 0 12px;
            overflow: auto;
            flex: 1 1 auto;
          }

          .drawerItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 14px 14px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 550;
            color: #0f172a;
            border: 1px solid rgba(15, 23, 42, .08);
            background: #fff;
            margin-bottom: 10px;
            transition: transform .15s ease, background .15s ease, border-color .15s ease;
          }

          .drawerItem:hover {
            background: rgba(15, 23, 42, .03);
            transform: translateY(-1px);
          }

          .drawerItem.active {
            color: #ff8c00;
            background: rgba(255,140,0,.10);
            border-color: rgba(255,140,0,.28);
          }

          .drawerItemLabel { font-size: 15px; }
          .chev { opacity: .55; font-size: 18px; }

          .drawerFooter {
            padding: 14px 16px 16px 16px;
            border-top: 1px solid rgba(0,0,0,.07);
            display: grid;
            gap: 10px;
          }

          .ctaPrimary, .ctaGhost {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 44px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 650;
            letter-spacing: .2px;
          }
          .ctaPrimary {
            background: linear-gradient(135deg,#ff8c00,#ffb347);
            color: #fff;
            box-shadow: 0 12px 26px rgba(255,140,0,.22);
          }
          .ctaGhost {
            background: #fff;
            color: #0f172a;
            border: 1px solid rgba(15, 23, 42, .12);
          }
        `}</style>
      </header>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div style={{ height: 72 }} />
    </>
  );
}
