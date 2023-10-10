// components
import { Input } from "@/components/ui/input";

const FilterPrice = () => {
  return (
    <>
      <div className="text-base">Harga Minimum</div>
      <div className="flex flex-col gap-2 my-4 relative">
        <Input
          className="w-full p-4"
          type="text"
          placeholder=""
          prefix="text-Rp"
        />
      </div>
      <div className="text-base">Harga Maksimum</div>
      <div className="flex flex-col gap-2 my-4 relative">
        <Input
          className="w-full p-4"
          type="text"
          placeholder=""
          prefix="text-Rp"
        />
      </div>
    </>
  );
};

export default FilterPrice;
