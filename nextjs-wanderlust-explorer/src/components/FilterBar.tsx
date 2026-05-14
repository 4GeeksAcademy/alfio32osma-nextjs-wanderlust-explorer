type FilterBarProps = {
  categories: string[];
  destinations: string[];
  categoryValue: string;
  destinationValue: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
};

export default function FilterBar({
  categories,
  destinations,
  categoryValue,
  destinationValue,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <>
      <div>
        <label htmlFor="category" className="block text-sm font-semibold mb-2 text-deep-space-blue">
          Categoria
        </label>
        <select
          id="category"
          value={categoryValue}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full border border-adventure-blue rounded-xl px-4 py-2 bg-white text-adventure-blue"
        >
          <option value="" className="text-adventure-blue">Todas</option>
          {categories.map((optionCategory) => (
            <option key={optionCategory} value={optionCategory} className="text-adventure-blue">
              {optionCategory}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="destination" className="block text-sm font-semibold mb-2 text-deep-space-blue">
          Destino
        </label>
        <select
          id="destination"
          value={destinationValue}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="w-full border border-adventure-blue rounded-xl px-4 py-2 bg-white text-adventure-blue"
        >
          <option value="" className="text-adventure-blue">Todos</option>
          {destinations.map((optionDestination) => (
            <option key={optionDestination} value={optionDestination} className="text-adventure-blue">
              {optionDestination}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
