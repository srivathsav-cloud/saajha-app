import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function FormInput({
  label,
  type = 'text',
  placeholder,
  icon,
  rightIcon,
  value,
  onChange,
  error,
  ...props
}: FormInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-semibold text-[#071B45]">
        {label}
      </label>
      <div className={cn('flex items-center gap-3 rounded-[16px] border border-[#DCE7F5] bg-white px-4 py-3 shadow-sm focus-within:border-[#0F6FEF] focus-within:ring-2 focus-within:ring-[#d7e8ff]', error && 'border-[#EF4444]')}>
        {icon ? <span className="text-[#7B8AA5]">{icon}</span> : null}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="min-w-0 flex-1 bg-transparent text-sm text-[#071B45] outline-none"
          {...props}
        />
        {rightIcon ? <span className="text-[#7B8AA5]">{rightIcon}</span> : null}
      </div>
      {error ? <p className="text-sm text-[#EF4444]">{error}</p> : null}
    </div>
  );
}
