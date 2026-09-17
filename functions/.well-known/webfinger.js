export function onRequestGet({ request }) {
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

export function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
