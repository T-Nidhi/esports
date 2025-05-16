'use client';

export default function FeaturesSection() {
  return (
    <section className="p-10 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Team Matchmaking</li>
        <li>Tournament Creation</li>
        <li>Live Match Tracking</li>
      </ul>
    </section>
  );
}
