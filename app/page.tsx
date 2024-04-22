"use client";

export default function Home() {
  return (
    <button
      onClick={() => {
        fetch("/make-req");
      }}
    >
      click me to test (see server logs for errors)
    </button>
  );
}
