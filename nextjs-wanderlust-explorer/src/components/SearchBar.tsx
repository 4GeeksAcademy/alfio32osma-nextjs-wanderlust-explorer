type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="md:col-span-2">
      <label htmlFor="search" className="block text-sm font-semibold mb-2 text-deep-space-blue">
        Busqueda por titulo
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ejemplo: Market-to-Table"
        className="w-full border border-adventure-blue rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-golden-horizon"
      />
    </div>
  );
}
