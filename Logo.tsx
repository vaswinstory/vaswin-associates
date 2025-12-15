import { HardHat } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <HardHat className="w-10 h-10 text-orange-500" strokeWidth={2} />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal-500 rounded-sm"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800 leading-none">VASWIN</span>
        <span className="text-sm font-light text-gray-600 tracking-wider">ASSOCIATES</span>
      </div>
    </div>
  );
}
