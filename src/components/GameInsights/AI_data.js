export const data = {
    "_id": {
        "$oid": "67e27922316964759f94fb4f"
    },
    "fixtureId": 1208316,
    "__v": 0,
    "createdAt": {
        "$date": "2025-03-25T09:36:34.725Z"
    },
    "match": {
        "homeTeam": {
            "id": 65,
            "name": "Nottingham Forest"
        },
        "awayTeam": {
            "id": 33,
            "name": "Manchester United"
        },
        "date": {
            "$date": "2025-04-01T19:00:00.000Z"
        },
        "league": {
            "id": 39,
            "name": "Premier League"
        }
    },
    "predictions": {
        "matchOutcome": {
            "win": {
                "home": 50,
                "away": 30,
                "draw": 20
            },
            "correctScore": {
                "home": 2,
                "away": 1
            },
            "halftimeFulltime": {
                "halftime": "Draw",
                "fulltime": "Nottingham Forest"
            },
            "firstToScore": "Nottingham Forest",
            "lastToScore": "Nottingham Forest",
            "marginOfVictory": 1
        },
        "playerPerformance": [
            {
                "player": {
                    "id": 1234,
                    "name": "Chris Wood",
                    "team": "Nottingham Forest"
                },
                "goals": {
                    "anytime": true,
                    "first": true,
                    "last": false
                },
                "assists": 1,
                "shots": {
                    "total": 4,
                    "onTarget": 2
                },
                "cards": {
                    "yellow": false,
                    "red": false
                },
                "manOfTheMatch": true,
                "_id": {
                    "$oid": "67e27922a5beab3c3e503c5a"
                }
            },
            {
                "player": {
                    "id": 5678,
                    "name": "Bruno Fernandes",
                    "team": "Manchester United"
                },
                "goals": {
                    "anytime": true,
                    "first": false,
                    "last": true
                },
                "assists": 0,
                "shots": {
                    "total": 3,
                    "onTarget": 2
                },
                "cards": {
                    "yellow": true,
                    "red": false
                },
                "manOfTheMatch": false,
                "_id": {
                    "$oid": "67e27922a5beab3c3e503c5b"
                }
            }
        ],
        "teamPerformance": {
            "totalGoalsOverUnder": {
                "threshold": 2.5,
                "over": true
            },
            "cleanSheet": {
                "home": false,
                "away": false
            },
            "bothTeamsToScore": true,
            "totalCorners": 11,
            "totalFouls": {
                "home": 12,
                "away": 14
            }
        },
        "bettingOdds": {
            "bestValueBets": [
                "Nottingham Forest to win",
                "Over 2.5 goals"
            ],
            "safeBets": [
                "Both teams to score"
            ],
            "highRiskBets": [
                "Chris Wood to score first"
            ],
            "arbitrageOpportunities": [],
            "liveBettingSuggestions": [
                "Back Nottingham Forest if they go behind early"
            ]
        },
        "gameSpecific": {
            "penaltyAwarded": false,
            "penaltyConverted": false,
            "substitutionImpact": "High",
            "injuryTimeGoalsProbability": 20
        },
        "streakAndForm": {
            "teamWinningStreak": {
                "home": 3,
                "away": 0
            },
            "headToHeadComparison": "Nottingham Forest have won 2 of the last 3 meetings",
            "homeAwayPerformance": {
                "home": "Strong",
                "away": "Poor"
            }
        },
        "weatherInfluence": {
            "temperature": 12,
            "condition": "Light rain",
            "impactOnGame": "Slight advantage to Nottingham Forest"
        }
    },
    "updatedAt": {
        "$date": "2025-03-25T09:36:34.725Z"
    }
}

export const AF_Data = [{
    "_id": {
        "$oid": "67eeb6614c1d667ca0c2baff"
    },
    "gameId": 13469,
    "__v": 0,
    "createdAt": {
        "$date": "2025-04-03T16:25:05.141Z"
    },
    "match": {
        "homeTeam": {
            "name": "Nevada"
        },
        "awayTeam": {
            "name": "SMU"
        },
        "date": {
            "$date": "2024-08-24T00:00:00.000Z"
        },
        "league": {
            "name": "NCAA"
        }
    },
    "predictions": {
        "matchOutcome": {
            "win": {
                "home": 0,
                "away": 1
            },
            "correctScore": {
                "home": 24,
                "away": 29
            },
            "halftimeFulltime": {
                "halftime": "Nevada",
                "fulltime": "SMU"
            },
            "firstToScore": "Home",
            "marginOfVictory": 5,
            "spreadBetting": {
                "line": -24.5,
                "homeOdds": 1300,
                "awayOdds": -3000
            },
            "overUnderTotalPoints": {
                "threshold": 56.5,
                "over": false
            }
        },
        "playerPerformance": [
            {
                "player": {
                    "id": 201,
                    "name": "Preston Stone",
                    "team": "SMU",
                    "position": "QB"
                },
                "stats": {
                    "passing": {
                        "yards": 254,
                        "touchdowns": 1,
                        "interceptions": 1,
                        "completionPercentage": 56.7
                    },
                    "rushing": {
                        "yards": 0,
                        "touchdowns": 0,
                        "yardsPerCarry": null
                    },
                    "receiving": {
                        "receptions": 0,
                        "yards": 0,
                        "touchdowns": 0
                    },
                    "defense": {
                        "sacks": 0,
                        "interceptions": 0,
                        "forcedFumbles": 0,
                        "tackles": 0
                    },
                    "specialTeams": {
                        "fieldGoalsMade": 0,
                        "fieldGoalPercentage": null,
                        "kickoffReturns": 0
                    }
                },
                "_id": {
                    "$oid": "67eeb89835531d8c3c986ab5"
                }
            },
            {
                "player": {
                    "id": 202,
                    "name": "RJ Maryland",
                    "team": "SMU",
                    "position": "TE"
                },
                "stats": {
                    "passing": {
                        "yards": 0,
                        "touchdowns": 0,
                        "interceptions": 0,
                        "completionPercentage": null
                    },
                    "rushing": {
                        "yards": 0,
                        "touchdowns": 0,
                        "yardsPerCarry": null
                    },
                    "receiving": {
                        "receptions": 8,
                        "yards": 162,
                        "touchdowns": 1
                    },
                    "defense": {
                        "sacks": 0,
                        "interceptions": 0,
                        "forcedFumbles": 0,
                        "tackles": 0
                    },
                    "specialTeams": {
                        "fieldGoalsMade": 0,
                        "fieldGoalPercentage": null,
                        "kickoffReturns": 0
                    }
                },
                "_id": {
                    "$oid": "67eeb89835531d8c3c986ab6"
                }
            }
        ],
        "teamPerformance": {
            "totalPoints": 29,
            "turnoversForced": 1,
            "totalYardsGained": 408,
            "timeOfPossession": 30.5,
            "thirdDownConversions": 8,
            "redZoneEfficiency": 75,
            "defensiveTouchdowns": 0,
            "specialTeamsPerformance": {
                "returnYards": 55,
                "fieldGoals": 1
            }
        },
        "bettingOdds": {
            "bestValueBets": [
                "SMU to win",
                "Under 56.5 total points"
            ],
            "safeBets": [
                "SMU moneyline",
                "SMU spread -24.5"
            ],
            "highRiskBets": [
                "Nevada to cover",
                "Exact score 29-24"
            ],
            "arbitrageOpportunities": [],
            "liveBettingSuggestions": [
                "Bet on SMU comeback if trailing at halftime"
            ]
        },
        "gameSpecific": {
            "penalties": 11,
            "challenges": {
                "total": 0,
                "successful": 0
            },
            "fourthDownConversions": 1,
            "successfulOnsideKicks": 0,
            "injuryImpact": "No significant injuries reported"
        },
        "streakAndForm": {
            "teamWinningStreak": {
                "home": 0,
                "away": 6
            },
            "headToHeadComparison": "SMU leads 4-3 in all-time matchups",
            "homeAwayPerformance": {
                "home": "Struggled in 2023 season (2-10 record)",
                "away": "Strong road performance, 6 consecutive road wins"
            }
        },
        "weatherInfluence": {
            "temperature": 75,
            "condition": "Clear",
            "impactOnGame": "Minimal"
        }
    },
    "updatedAt": {
        "$date": "2025-04-03T16:34:32.449Z"
    }
}]