import { env } from '../config/env';

const RETRY_ATTEMPTS = 2;
const RETRY_DELAY_MS = 400;

function getApiUrl(path: string) {
  return `${env.apiBaseUrl}${path}`;
}

async function waitForRetry(delayMs: number) {
  await new Promise((resolve) => window.setTimeout(resolve, delayMs));
}

function isRetryableError(error: unknown) {
  return error instanceof TypeError || error instanceof Error && /fetch|network|timeout/i.test(error.message);
}

async function requestWithRetry<T>(path: string, init?: RequestInit, attempt = 1): Promise<T> {
  try {
    const response = await fetch(getApiUrl(path), {
      ...init,
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    const shouldRetry = attempt < RETRY_ATTEMPTS && isRetryableError(error);
    if (shouldRetry) {
      console.warn(`[apiClient] Retry ${attempt}/${RETRY_ATTEMPTS} for ${path}`, error);
      await waitForRetry(RETRY_DELAY_MS * attempt);
      return requestWithRetry<T>(path, init, attempt + 1);
    }

    console.error(`[apiClient] Request failed for ${path}`, error);
    throw error;
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  return requestWithRetry<T>(path, { method: 'GET' });
}

export async function apiPost<TResponse, TPayload>(path: string, payload: TPayload): Promise<TResponse> {
  return requestWithRetry<TResponse>(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
