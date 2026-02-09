"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent no-print"
    >
      Print / Save PDF
    </button>
  );
}
