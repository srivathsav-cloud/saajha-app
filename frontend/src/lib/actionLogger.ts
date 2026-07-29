import { env } from '../config/env';

type FrontendActionPayload = {
  eventType: string;
  element: string;
  route: string;
  metadata?: Record<string, unknown>;
};

const telemetryEnabled = import.meta.env.VITE_ENABLE_FRONTEND_LOGGING !== 'false';

export async function logFrontendAction(payload: FrontendActionPayload): Promise<void> {
  if (!telemetryEnabled) {
    return;
  }

  try {
    await fetch(`${env.apiBaseUrl}/telemetry/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        metadata: {
          source: 'frontend',
          ...(payload.metadata ?? {}),
        },
      }),
    });
  } catch (error) {
    console.warn('Frontend telemetry send failed:', error);
  }
}

export function attachFrontendClickLogging(): () => void {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const interactiveElement = target?.closest('button, a, input, select, textarea, [role="button"]') as HTMLElement | null;

    if (!interactiveElement) {
      return;
    }

    const elementLabel =
      interactiveElement.getAttribute('aria-label') ||
      interactiveElement.textContent?.trim() ||
      interactiveElement.getAttribute('name') ||
      interactiveElement.tagName;

    void logFrontendAction({
      eventType: 'ui_click',
      element: elementLabel.slice(0, 120),
      route: window.location.pathname,
      metadata: {
        tagName: interactiveElement.tagName,
        className: interactiveElement.className,
        type: interactiveElement.getAttribute('type') ?? 'button',
      },
    });
  };

  window.addEventListener('click', handleClick);

  return () => window.removeEventListener('click', handleClick);
}
