import React from "react";
import {
  FaTrash,
  FaHardHat,
  FaTools,
  FaRoad,
} from "react-icons/fa";
import IssueCard from "./IssueCard";

const AllIssues = ({ issues }) => {
  return (
    <div>
      {issues?.length === 0 ? (
        <div className="flex min-h-100 justify-center items-center">
          <div className="text-center text-5xl text-warning font-semibold">
            Issue Not Found
          </div>
        </div>
      ) : (
        <div className="bg-linear-to-br">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {issues.map((issue, index) => {
              const Icon =
                issue.category === "Garbage"
                  ? FaTrash
                  : issue.category === "Illegal Construction"
                  ? FaHardHat
                  : issue.category === "Broken Public Property"
                  ? FaTools
                  : issue.category === "Road Damage"
                  ? FaRoad
                  : FaTools;

              const colorScheme =
                issue.category === "Garbage"
                  ? {
                      gradient: "from-green-400 to-emerald-600",
                      bg: "bg-green-500",
                      text: "text-green-600",
                    }
                  : issue.category === "Illegal Construction"
                  ? {
                      gradient: "from-orange-400 to-red-600",
                      bg: "bg-orange-500",
                      text: "text-orange-600",
                    }
                  : issue.category === "Broken Public Property"
                  ? {
                      gradient: "from-amber-400 to-yellow-600",
                      bg: "bg-amber-500",
                      text: "text-amber-600",
                    }
                  : issue.category === "Road Damage"
                  ? {
                      gradient: "from-red-400 to-rose-600",
                      bg: "bg-red-500",
                      text: "text-red-600",
                    }
                  : {
                      gradient: "from-gray-400 to-slate-600",
                      bg: "bg-gray-500",
                      text: "text-gray-600",
                    };

              return (
                // issue card
                <IssueCard
                  issue={issue}
                  index={index}
                  colorScheme={colorScheme}
                  Icon={Icon}
                ></IssueCard>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllIssues;
