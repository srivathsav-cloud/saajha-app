import { Card } from '../../../components/ui/Card';
import { ChevronRight } from 'lucide-react';

type AssessmentCardProps = {
  assessment: {
    questions: Array<{
      id: string;
      question: string;
      type: 'radios' | 'select';
      options: string[];
      value: string;
    }>;
    notes: {
      additional: string;
      feedback: string;
    };
  };
};

export function AssessmentCard({ assessment }: AssessmentCardProps) {
  return (
    <Card className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#51617D]">3. Assessment & Feedback Form</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-2xl bg-[#F7FBFF] px-3 py-2 text-sm font-semibold text-[#0F6FEF]">
          In Progress
          <ChevronRight size={18} />
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[24px] border border-[#E7EEF8] bg-[#F7FBFF] p-6">
          {assessment.questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <p className="text-sm font-semibold text-[#071B45]">{question.question}</p>
              {question.type === 'radios' ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {question.options.map((option) => (
                    <label key={option} className="inline-flex items-center gap-2 rounded-2xl border border-[#DCE7F5] bg-white px-4 py-2 text-sm text-[#51617D]">
                      <input type="radio" name={question.id} defaultChecked={option === question.value} className="h-4 w-4 text-[#0F6FEF]" />
                      {option}
                    </label>
                  ))}
                </div>
              ) : (
                <select className="w-full rounded-[16px] border border-[#DCE7F5] bg-white px-4 py-3 text-sm text-[#071B45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F6FEF]">
                  {question.options.map((option) => (
                    <option key={option} value={option} selected={option === question.value}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4 rounded-[24px] border border-[#E7EEF8] bg-white p-6">
          <label className="block text-sm font-semibold text-[#071B45]">Additional Notes (for internal use)</label>
          <textarea className="h-32 w-full rounded-[18px] border border-[#DCE7F5] bg-[#F7FBFF] p-4 text-sm text-[#071B45]" defaultValue={assessment.notes.additional} readOnly />
          <label className="block text-sm font-semibold text-[#071B45]">Your Feedback / Comments</label>
          <textarea className="h-32 w-full rounded-[18px] border border-[#DCE7F5] bg-[#F7FBFF] p-4 text-sm text-[#071B45]" defaultValue={assessment.notes.feedback} readOnly />
        </div>
      </div>
    </Card>
  );
}
