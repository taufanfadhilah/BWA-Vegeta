// components
import { Input } from "@/components/ui/input";

const FilterPrice = () => {
  return (
    <>
      <div className="text-base">Harga Minimum</div>
      <div className="my-4 relative">
        <Input
          className="w-full"
          type="text"
          placeholder=""
          prefix="text-Rp"
        />
      </div>
      <div className="text-base">Harga Maksimum</div>
      <div className="my-4 relative">
        <Input
          className="w-full"
          type="text"
          placeholder=""
          prefix="text-Rp"
        />
      </div>
    </>
  );
};

export default FilterPrice;
