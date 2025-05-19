export interface HttpRequestConfig {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  headers?: HeadersInit;
}

export async function httpRequest<T>({
  url,
  method = "GET",
  body,
  headers,
}: HttpRequestConfig): Promise<T> {
  const response = await globalThis.fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}
