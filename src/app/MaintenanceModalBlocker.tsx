"use client";

import { useEffect } from "react";

function isMaintenanceModal(element: Element) {
  const text = element.textContent ?? "";
  const className = (element as HTMLElement).className;

  return (
    text.includes("WRACAMY 23.06.2026") ||
    text.includes("Trwa przerwa techniczna") ||
    String(className).includes("MaintenanceModal-module__")
  );
}

function removeMaintenanceModal() {
  const nodes = Array.from(document.querySelectorAll('[role="dialog"][aria-modal="true"]'));

  for (const node of nodes) {
    if (!isMaintenanceModal(node)) {
      continue;
    }

    node.remove();
    document.body.style.overflow = "";
  }
}

export function MaintenanceModalBlocker() {
  useEffect(() => {
    removeMaintenanceModal();

    const observer = new MutationObserver(() => {
      removeMaintenanceModal();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const intervalId = window.setInterval(removeMaintenanceModal, 500);

    return () => {
      observer.disconnect();
      window.clearInterval(intervalId);
    };
  }, []);

  return null;
}
