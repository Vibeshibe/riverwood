const MASTODON_DISCOVERY_PATHS = new Set([
  "/.well-known/webfinger",
  "/.well-known/host-meta",
  "/.well-known/nodeinfo",
]);

function mastodonRedirect(request) {
  const target = new URL(request.url);
  target.protocol = "https:";
  target.hostname = "social.riverwood.town";
  target.port = "";

  return new Response(null, {
    status: 301,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
      Location: target.toString(),
    },
  });
}

export default {
  fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (MASTODON_DISCOVERY_PATHS.has(pathname)) {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      if (request.method === "GET" || request.method === "HEAD") {
        return mastodonRedirect(request);
      }

      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD, OPTIONS" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
