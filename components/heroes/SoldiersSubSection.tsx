import { Class } from "../../types/hero";
import { useSoldierTranslateContext } from "../context/SoldierTranslateContext";

export function SoldiersSubSection({
  heroClass,
  isStarting = false,
  isSpClass = false,
}: {
  heroClass: Class;
  isStarting?: boolean;
  isSpClass?: boolean;
}) {
  let flagUrl = "/unitTypeFlag/" + heroClass.heroType + ".png";
  if (isStarting) flagUrl = "/unitTypeFlag/Aniki.png";
  if (isSpClass) flagUrl = "/unitTypeFlag/" + heroClass.heroType + " SP.png";

  const { getSoldierInfo } = useSoldierTranslateContext();

  return (
    <>
      {heroClass.soldiers.length > 0 && (
        <div className="grid grid-cols-12 items-center mt-2 mb-2">
          <div className="col-span-12 text-center sm:col-span-1">
            <div className="mb-3">
              <img
                src={flagUrl}
                width={67}
                height={72}
                className="inline"
              ></img>
            </div>
          </div>
          <div className="col-span-12 text-center sm:col-span-11 sm:text-left">
            <p className="text-2xl">
              {isStarting && "Training Ground "}
              {!isStarting && heroClass.name}
            </p>
            <p>
              Soldiers:{" "}
              {heroClass.soldiers.map(function (soldier, index) {
                const { name } = getSoldierInfo(soldier);
                return (
                  <span key={soldier}>
                    {name}
                    {index < heroClass.soldiers.length - 1 && ", "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      )}
      {!isStarting && heroClass.children[0] && (
        <SoldiersSubSection
          heroClass={heroClass.children[0]}
        ></SoldiersSubSection>
      )}
    </>
  );
}
