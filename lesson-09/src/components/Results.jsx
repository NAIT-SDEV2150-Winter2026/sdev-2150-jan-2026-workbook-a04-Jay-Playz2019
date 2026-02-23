// src/components/Results.jsx
import ResultsItem from './ResultsItem';
import { resources } from '../data/resources';
import Card from './ui/Card';

export default function Results() {
  return (
    <Card title="Results">
      <span className="rounded-full bg-gray-200 px-2.5 ms- py-0.5 text-xs font-semibold text-gray-700"> 
        4
      </span>
      <ul className="divide-y divide-gray-200">
        {resources.map((r) => (
          <ResultsItem
            key={r.id}
            title={r.title}
            category={r.category}
            summary={r.summary}
            location={r.location}
          >
            {/* children: optional badge content */}
            {r.openNow && (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                Open now
              </span>
            )}
          </ResultsItem>
        ))}
      </ul>
    </Card>
  );
}