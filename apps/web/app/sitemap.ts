export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return ["", "/dashboard", "/studio", "/recordings", "/editor", "/pricing"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
