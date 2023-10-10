// components
import { Checkbox } from "@/components/ui/checkbox";
import { IconStar } from "@/components/icons";

const FilterRating = () => {
  return (
    <>
      <div className="text-base">Rating</div>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex gap-2 items-center">
          <Checkbox
            className="w-6 h-6 border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground"
            id={"rate-all"}
          />
          <label
            htmlFor={"all"}
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2 cursor-pointer"
          >
            Semua Bintang
          </label>
        </div>

        {[5, 4, 3, 2, 1].map((rate, index) => (
          <div key={`rating_${index}`} className="flex gap-2 items-center">
            <Checkbox
              className="w-6 h-6 border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground"
              id={`rate-${rate}`}
            />
            <label
              htmlFor={`rate-${rate}`}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2 cursor-pointer"
            >
              {Array(rate)
                .fill(null)
                .map((_, index) => {
                  return (
                    <IconStar
                      key={`stars_${rate}_${index}`}
                      className="w-5 h-5"
                      fill="carrot"
                      stroke="carrot"
                    />
                  );
                })}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterRating;
