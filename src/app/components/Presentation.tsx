"use client";

import { useCallback, useMemo, useState } from "react";
import {
  BackwardIcon,
  ForwardIcon,
  PlusIcon,
  SparklesIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { SlideModel, Slide } from "./Slide";

export const ActionButton = ({
  disabled,
  onClick,
  className,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}
        ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

