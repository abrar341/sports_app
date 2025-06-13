import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Shared/Loading";
import { FaRegSadTear } from "react-icons/fa";
import { EmptyState } from "../Shared/EmptyState";

const LeagueStatsWidget = ({ gameType }) => {
  const { favoriteTeamsHighlightsLoading } = useSelector(
    (state) => state.loading
  );
  const { favoriteLeaguessHighlights } = useSelector(
    (state) => state.favorites
  );
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered && favoriteLeaguessHighlights.length > 1) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setIndex(
            (prevIndex) => (prevIndex + 1) % favoriteLeaguessHighlights.length
          );
          setFade(true);
        }, 500);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [favoriteLeaguessHighlights.length, hovered]);

  if (!favoriteLeaguessHighlights.length && !favoriteTeamsHighlightsLoading) {
    return (
      <div className="rounded-xl bg-secondary h-full">
        <EmptyState icon={FaRegSadTear} message="No league to show for now." />;
      </div>
    );
  }

  const league = favoriteLeaguessHighlights[index];

  // Determine if the league is Soccer or American-Football
  const isSoccer = gameType === "soccer";
  const topTeam = isSoccer ? league?.standings?.[0] : league?.standings?.[0];

  return favoriteTeamsHighlightsLoading ? (
    <Loading />
  ) : (
    <section
      className="flex overflow-hidden flex-col h-full justify-center self-stretch px-4 py-5 my-auto rounded-[11.667px] bg-secondary min-w-60 text-neutral-50 max-md:max-w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* League Name */}
        <div className="flex flex-col justify-center w-full text-sm font-bold tracking-tight">
          {/* <p>League Name:</p> */}
          <h3 className="self-stretch text-lg text-center text-white my-auto">
            {league?.leagueName}
          </h3>
          <hr className="mt-2 w-full border border-gray-400" />
        </div>

        {/* Team Standings */}
        <div className="max-w-full text-xl tracking-tight">
          <div className="flex flex-col justify-center w-full">
            <div className="flex gap-4 items-center justify-center w-full text-sm font-bold tracking-tight text-neutral-50">
              <img
                loading="lazy"
                src={topTeam?.team?.logo || "default-team-logo.png"}
                className="object-contain shrink-0 self-stretch my-auto w-14 border-2 aspect-square rounded-full"
                alt={`${topTeam?.team?.name} logo`}
              />
              <div className="flex flex-col mt-4">
                <h3 className="text-lg font-bold tracking-tight text-neutral-50">
                  {topTeam?.team?.name || "-"}
                </h3>

                {/* Soccer Stats */}
                {isSoccer ? (
                  <div className="pb-3 text-sm flex w-full justify-between">
                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-green-500">
                        Rank
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.rank || "-"}
                      </p>
                    </div>
                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-green-500">
                        Points
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.points || "-"}
                      </p>
                    </div>
                    <div className="font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-yellow-500">
                        Goals Diff
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.goalsDiff || "-"}
                      </p>
                    </div>
                  </div>
                ) : (
                  // American-Football Stats
                  <div className="pb-3 text-sm flex w-full justify-between">
                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-red-500">
                        Wins
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.won || "-"}
                      </p>
                    </div>
                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-green-500">
                        Losses
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.lost || "-"}
                      </p>
                    </div>
                    <div className="mr-5 font-semibold tracking-normal text-gray-400">
                      <p className="text-sm text-center font-semibold text-yellow-500">
                        Points.Diff
                      </p>
                      <p className="text-sm text-center">
                        {topTeam?.points?.difference || "-"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Form Representation */}
        {/* {isSoccer && topTeam?.form && (
                    <div className="flex mb-2 mt-4 min-h-[30px] flex-col w-full rounded max-w-[406px]">
                        <div className="w-full rounded bg-stone-50">
                            <div className="flex bg-sky-400 rounded overflow-hidden">
                                {(() => {
                                    const form = topTeam.form || "";
                                    const total = form.length || 1;
                                    const wCount = form.match(/W/g)?.length || 0;
                                    const dCount = form.match(/D/g)?.length || 0;
                                    const lCount = form.match(/L/g)?.length || 0;

                                    return (
                                        <>
                                            <div className="h-2.5 bg-green-400" style={{ flex: wCount / total }} />
                                            <div className="h-2.5 bg-amber-200" style={{ flex: dCount / total }} />
                                            <div className="h-2.5 bg-red-400" style={{ flex: lCount / total }} />
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                )} */}

        <hr className="w-full border border-gray-400" />

        {/* Top Scorer (Soccer only) */}
        {isSoccer && (
          <p className="mt-3 gap-2 flex justify-center items-center">
            <span className="text-base font-semibold text-center text-white">
              Top Scorer:{" "}
            </span>
            <span className="text-base font-semibold text-center text-[#0147B9]">
              {league?.topScorers?.players?.[0]?.player?.name || ""}.
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default LeagueStatsWidget;
