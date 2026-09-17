import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedPath, pathToMetaKey, routeMeta } from "../../utils/siteRoutes";

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function RouteSeo() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.language === "en" ? "en" : "tr";
    const metaKey = pathToMetaKey[location.pathname] || "home";
    const meta = routeMeta[metaKey]?.[language] || routeMeta.home[language];
    const origin = window.location.origin;
    const canonicalPath = getLocalizedPath(metaKey, language);
    const canonicalUrl = `${origin}${canonicalPath}`;
    const alternateTr = `${origin}${getLocalizedPath(metaKey, "tr")}`;
    const alternateEn = `${origin}${getLocalizedPath(metaKey, "en")}`;

    document.title = meta.title;
    document.documentElement.lang = language;

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });

    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });

    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });

    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    ensureLink('link[hreflang="tr"]', {
      rel: "alternate",
      hreflang: "tr",
      href: alternateTr,
    });

    ensureLink('link[hreflang="en"]', {
      rel: "alternate",
      hreflang: "en",
      href: alternateEn,
    });

    ensureLink('link[hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: alternateTr,
    });
  }, [i18n.language, location.pathname]);

  return null;
}

export default RouteSeo;

