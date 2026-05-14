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
        <label htmlFor="category" className="block text-sm blue mb-2 text-deep-space-blue">
          Categoria
        </label>
        <select
          id="category"
          value={categoryValue}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full border border-adventure-blue rounded-xl px-4 py-2 blue text-adventure-blue"
        >
          <option value="" className="text-gray-900 bg-white">Todas</option>
          {categories.map((optionCategory) => (
            <option key={optionCategory} value={optionCategory} className="text-gray-900 bg-white">
              {optionCategory}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="destination" className="block text-sm blue mb-2 text-deep-space-blue">
          Destino
        </label>
        <select
          id="destination"
          value={destinationValue}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="w-full border border-adventure-blue rounded-xl px-4 py-2 blue text-adventure-blue"
        >
          <option value="" className="text-gray-900 bg-white">Todos</option>
          {destinations.map((optionDestination) => (
            <option key={optionDestination} value={optionDestination} className="text-gray-900 bg-white">
              {optionDestination}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
