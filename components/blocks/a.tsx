import Link from "next/link";
import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useTheme } from "../layout";
import { PageBlocksHeroActions, PageBlocksNavActions } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

interface ActionsProps {
  parentColor: string;
  className: string;
  actions: [PageBlocksHeroActions[], PageBlocksNavActions[]];
}

export const Actions = ({ parentColor = "default", className = "", actions }: ActionsProps) => {
  const theme = useTheme();
  // ... (diğer kısım aynı kaldı)
  
  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-6 ${className}`}>
      {actions &&
        actions.flat().map(function (action, index) {
          let element = null;
          if (action.type === "button") {
            // ... (diğer kısım aynı kaldı)
          }
          if (action.type === "link" || action.type === "linkExternal") {
            // ... (diğer kısım aynı kaldı)
          }
          return element;
        })}
    </div>
  );
};
