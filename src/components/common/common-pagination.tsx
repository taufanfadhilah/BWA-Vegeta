"use client";

import { useState } from "react";

// components
import IconChevronLeft from "@/components/icons/common-icon/icon-chevron-left";
import IconChevronRight from "@/components/icons/common-icon/icon-chevron-right";

interface IconProps {
  page: number;
  total?: number;
  onChange: (activePage: number) => void;
}

const CommonPagination: React.FC<IconProps> = ({
  page,
  total,
  onChange,
}: IconProps) => {
  const [activePage, setActivePage] = useState(page);

  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            if (activePage <= 1) return;
            setActivePage(activePage - 1);
            onChange(activePage - 1);
          }}
        >
          <IconChevronLeft
            className="w-6 h-6"
            stroke={activePage <= 1 ? "gloves" : "pesto"}
          />
        </div>
        <div className="px-4">
          Halaman {activePage} {total && <span>/ {total}</span>}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            if (activePage >= (total || 1)) return;
            setActivePage(activePage + 1);
            onChange(activePage + 1);
          }}
        >
          <IconChevronRight
            className="w-6 h-6"
            stroke={activePage >= (total || 1) ? "gloves" : "pesto"}
          />
        </div>
      </div>
    </>
  );
};

export default CommonPagination;
