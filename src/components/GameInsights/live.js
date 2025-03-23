//soccer
export const liveFixtures = {
    "success": true,
    "message": "Live fixtures processed successfully",
    "data": [
        {
            "fixture": {
                "id": 1326268,
                "referee": "Marcos de Oliveira, USA",
                "timezone": "UTC",
                "date": "2025-03-09T01:30:00+00:00",
                "timestamp": 1741483800,
                "periods": {
                    "first": 1741483800,
                    "second": 1741487400
                },
                "venue": {
                    "id": 11535,
                    "name": "Q2 Stadium",
                    "city": "Austin, Texas"
                },
                "status": {
                    "long": "Second Half",
                    "short": "2H",
                    "elapsed": 90,
                    "extra": 10
                }
            },
            "league": {
                "id": 253,
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg",
                "season": 2025,
                "round": "Regular Season - 4",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 16489,
                    "name": "Austin",
                    "logo": "https://media.api-sports.io/football/teams/16489.png",
                    "winner": false
                },
                "away": {
                    "id": 1610,
                    "name": "Colorado Rapids",
                    "logo": "https://media.api-sports.io/football/teams/1610.png",
                    "winner": true
                }
            },
            "goals": {
                "home": 0,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 0,
                    "away": 1
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [
                {
                    "time": {
                        "elapsed": 18,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 68057,
                        "name": "Rafael Navarro"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Goal",
                    "detail": "Normal Goal",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 60,
                        "extra": null
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 50890,
                        "name": "J. Gallagher"
                    },
                    "assist": {
                        "id": 39229,
                        "name": "M. Desler"
                    },
                    "type": "subst",
                    "detail": "Substitution 1",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 71,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 50959,
                        "name": "O. Fernandez"
                    },
                    "assist": {
                        "id": 20898,
                        "name": "K. Cabral"
                    },
                    "type": "subst",
                    "detail": "Substitution 1",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 71,
                        "extra": null
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 47845,
                        "name": "B. Sabovic"
                    },
                    "assist": {
                        "id": 51263,
                        "name": "I. Sanchez"
                    },
                    "type": "subst",
                    "detail": "Substitution 2",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 71,
                        "extra": null
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 13755,
                        "name": "J. Obrian"
                    },
                    "assist": {
                        "id": 267866,
                        "name": "O. Wolff"
                    },
                    "type": "subst",
                    "detail": "Substitution 3",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 71,
                        "extra": null
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 2566,
                        "name": "D. Rubio"
                    },
                    "assist": {
                        "id": 14405,
                        "name": "M. Uzuni"
                    },
                    "type": "subst",
                    "detail": "Substitution 4",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 75,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 509722,
                        "name": "A. Rosa"
                    },
                    "assist": {
                        "id": 351572,
                        "name": "I. Murphy"
                    },
                    "type": "subst",
                    "detail": "Substitution 2",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 76,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 61178,
                        "name": "C. Ronan"
                    },
                    "assist": {
                        "id": 51312,
                        "name": "C. Bassett"
                    },
                    "type": "subst",
                    "detail": "Substitution 3",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 80,
                        "extra": null
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 105632,
                        "name": "Z. Kolmanic"
                    },
                    "assist": {
                        "id": 197449,
                        "name": "Guilherme Biro"
                    },
                    "type": "subst",
                    "detail": "Substitution 5",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 83,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 50828,
                        "name": "Z. Steffen"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 83,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 458378,
                        "name": "W. Frederick"
                    },
                    "assist": {
                        "id": 203206,
                        "name": "O. Larraz"
                    },
                    "type": "subst",
                    "detail": "Substitution 4",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 89,
                        "extra": null
                    },
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "player": {
                        "id": 50913,
                        "name": "D. Mihailovic"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 90,
                        "extra": 1
                    },
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "player": {
                        "id": 310975,
                        "name": "D. Pereira"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                }
            ],
            "lineups": [
                {
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png",
                        "colors": {
                            "player": {
                                "primary": "15bc55",
                                "number": "000000",
                                "border": "15bc55"
                            },
                            "goalkeeper": {
                                "primary": "201f24",
                                "number": "ffffff",
                                "border": "201f24"
                            }
                        }
                    },
                    "formation": "4-4-2",
                    "startXI": [
                        {
                            "player": {
                                "id": 50849,
                                "name": "Brad Stuver",
                                "number": 1,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 39229,
                                "name": "Mikkel Desler",
                                "number": 3,
                                "pos": "D",
                                "grid": "2:4"
                            }
                        },
                        {
                            "player": {
                                "id": 14333,
                                "name": "Oleksandr Svatok",
                                "number": 5,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 8527,
                                "name": "Brendan Hines-Ike",
                                "number": 4,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 197449,
                                "name": "Guilherme Biro",
                                "number": 29,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 61418,
                                "name": "Osman Bukari",
                                "number": 11,
                                "pos": "M",
                                "grid": "3:4"
                            }
                        },
                        {
                            "player": {
                                "id": 310975,
                                "name": "Daniel Pereira",
                                "number": 8,
                                "pos": "M",
                                "grid": "3:3"
                            }
                        },
                        {
                            "player": {
                                "id": 51263,
                                "name": "Ilie Sánchez",
                                "number": 6,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 267866,
                                "name": "Owen Wolff",
                                "number": 33,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 14405,
                                "name": "Myrto Uzuni",
                                "number": 10,
                                "pos": "F",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 50893,
                                "name": "Brandon Vázquez",
                                "number": 9,
                                "pos": "F",
                                "grid": "4:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 50890,
                                "name": "Jon Gallagher",
                                "number": 17,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 50896,
                                "name": "Stefan Cleveland",
                                "number": 30,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 105632,
                                "name": "Žan Kolmanič",
                                "number": 23,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 37456,
                                "name": "Leo Väisänen",
                                "number": 15,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 13755,
                                "name": "Jader Obrian",
                                "number": 7,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 313360,
                                "name": "Calvin Fodrey",
                                "number": 19,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 451017,
                                "name": "Nicolas Dubersarsky",
                                "number": 20,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 47845,
                                "name": "Besard Sabović",
                                "number": 14,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 2566,
                                "name": "Diego Rubio",
                                "number": 21,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 16737,
                        "name": "Nico Estévez",
                        "photo": "https://media.api-sports.io/football/coachs/16737.png"
                    }
                },
                {
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png",
                        "colors": {
                            "player": {
                                "primary": "622330",
                                "number": "ffffff",
                                "border": "622330"
                            },
                            "goalkeeper": {
                                "primary": "0d5933",
                                "number": "ffffff",
                                "border": "0d5933"
                            }
                        }
                    },
                    "formation": "4-3-3",
                    "startXI": [
                        {
                            "player": {
                                "id": 50828,
                                "name": "Zack Steffen",
                                "number": 1,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 51305,
                                "name": "Keegan Rosenberry",
                                "number": 2,
                                "pos": "D",
                                "grid": "2:4"
                            }
                        },
                        {
                            "player": {
                                "id": 997,
                                "name": "Andreas Maxsø",
                                "number": 5,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 50026,
                                "name": "Chidozie Awaziem",
                                "number": 6,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 351572,
                                "name": "Ian Murphy",
                                "number": 19,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 51312,
                                "name": "Cole Bassett",
                                "number": 23,
                                "pos": "M",
                                "grid": "3:3"
                            }
                        },
                        {
                            "player": {
                                "id": 73863,
                                "name": "Josh Atencio",
                                "number": 12,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 203206,
                                "name": "Oliver Larraz",
                                "number": 8,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 20898,
                                "name": "Kevin Cabral",
                                "number": 91,
                                "pos": "F",
                                "grid": "4:3"
                            }
                        },
                        {
                            "player": {
                                "id": 68057,
                                "name": "Rafael Navarro",
                                "number": 9,
                                "pos": "F",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 50913,
                                "name": "Đorđe Mihailović",
                                "number": 10,
                                "pos": "F",
                                "grid": "4:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 362448,
                                "name": "Adam Beaudry",
                                "number": 31,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 177820,
                                "name": "Michael Joseph Edwards",
                                "number": 34,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 509722,
                                "name": "Anderson Rosa",
                                "number": 36,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 458378,
                                "name": "Wayne Frederick",
                                "number": 13,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 94341,
                                "name": "Calvin Harris",
                                "number": 14,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 506558,
                                "name": "Samuel Bassett",
                                "number": 18,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 50959,
                                "name": "Omir Fernandez",
                                "number": 11,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 61178,
                                "name": "Connor Ronan",
                                "number": 20,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 510679,
                                "name": "Alex Harris",
                                "number": 16,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 1965,
                        "name": "C. Armas",
                        "photo": "https://media.api-sports.io/football/coachs/1965.png"
                    }
                }
            ],
            "statistics": [
                {
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 5
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 8
                        },
                        {
                            "type": "Total Shots",
                            "value": 19
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 6
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 12
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 7
                        },
                        {
                            "type": "Fouls",
                            "value": 12
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 7
                        },
                        {
                            "type": "Offsides",
                            "value": 1
                        },
                        {
                            "type": "Ball Possession",
                            "value": "59%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": 1
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 2
                        },
                        {
                            "type": "Total passes",
                            "value": 463
                        },
                        {
                            "type": "Passes accurate",
                            "value": 389
                        },
                        {
                            "type": "Passes %",
                            "value": "84%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "1.46"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                },
                {
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 3
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 3
                        },
                        {
                            "type": "Total Shots",
                            "value": 6
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 0
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 3
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 3
                        },
                        {
                            "type": "Fouls",
                            "value": 7
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 3
                        },
                        {
                            "type": "Offsides",
                            "value": 0
                        },
                        {
                            "type": "Ball Possession",
                            "value": "41%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": 2
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 4
                        },
                        {
                            "type": "Total passes",
                            "value": 335
                        },
                        {
                            "type": "Passes accurate",
                            "value": 237
                        },
                        {
                            "type": "Passes %",
                            "value": "71%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "0.81"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                }
            ],
            "players": [
                {
                    "team": {
                        "id": 16489,
                        "name": "Austin",
                        "logo": "https://media.api-sports.io/football/teams/16489.png",
                        "update": "2025-03-09T03:37:07+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 50849,
                                "name": "Brad Stuver",
                                "photo": "https://media.api-sports.io/football/players/50849.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 1,
                                        "position": "G",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 1,
                                        "assists": null,
                                        "saves": 2
                                    },
                                    "passes": {
                                        "total": 26,
                                        "key": null,
                                        "accuracy": "18"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 39229,
                                "name": "Mikkel Desler",
                                "photo": "https://media.api-sports.io/football/players/39229.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 60,
                                        "number": 3,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 22,
                                        "key": 1,
                                        "accuracy": "19"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 14333,
                                "name": "Oleksandr Svatok",
                                "photo": "https://media.api-sports.io/football/players/14333.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 5,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 59,
                                        "key": null,
                                        "accuracy": "52"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 5
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 8527,
                                "name": "Brendan Hines-Ike",
                                "photo": "https://media.api-sports.io/football/players/8527.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 4,
                                        "position": "D",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 60,
                                        "key": null,
                                        "accuracy": "55"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 197449,
                                "name": "Guilherme Biro",
                                "photo": "https://media.api-sports.io/football/players/197449.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 80,
                                        "number": 29,
                                        "position": "D",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 35,
                                        "key": 1,
                                        "accuracy": "29"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 9,
                                        "won": 7
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 61418,
                                "name": "Osman Bukari",
                                "photo": "https://media.api-sports.io/football/players/61418.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 11,
                                        "position": "M",
                                        "rating": "7.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 22,
                                        "key": 2,
                                        "accuracy": "20"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 7,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": 3,
                                        "success": 3,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 310975,
                                "name": "Daniel Pereira",
                                "photo": "https://media.api-sports.io/football/players/310975.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 8,
                                        "position": "M",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 56,
                                        "key": null,
                                        "accuracy": "50"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 10,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 3
                                    },
                                    "cards": {
                                        "yellow": 1,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51263,
                                "name": "Ilie Sánchez",
                                "photo": "https://media.api-sports.io/football/players/51263.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 71,
                                        "number": 6,
                                        "position": "M",
                                        "rating": "7.2",
                                        "captain": true,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 42,
                                        "key": 1,
                                        "accuracy": "33"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 5
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 2,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 267866,
                                "name": "Owen Wolff",
                                "photo": "https://media.api-sports.io/football/players/267866.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 71,
                                        "number": 33,
                                        "position": "M",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 30,
                                        "key": 3,
                                        "accuracy": "24"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 14405,
                                "name": "Myrto Uzuni",
                                "photo": "https://media.api-sports.io/football/players/14405.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 71,
                                        "number": 10,
                                        "position": "F",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": 1,
                                    "shots": {
                                        "total": 2,
                                        "on": 2
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 10,
                                        "key": 1,
                                        "accuracy": "9"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 8,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": 3,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50893,
                                "name": "Brandon Vázquez",
                                "photo": "https://media.api-sports.io/football/players/50893.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 9,
                                        "position": "F",
                                        "rating": "7.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 5,
                                        "on": 2
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 25,
                                        "key": 1,
                                        "accuracy": "15"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 14,
                                        "won": 9
                                    },
                                    "dribbles": {
                                        "attempts": 4,
                                        "success": 2,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50890,
                                "name": "Jon Gallagher",
                                "photo": "https://media.api-sports.io/football/players/50890.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 35,
                                        "number": 17,
                                        "position": "D",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 17,
                                        "key": 1,
                                        "accuracy": "15"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 13755,
                                "name": "Jader Obrian",
                                "photo": "https://media.api-sports.io/football/players/13755.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 24,
                                        "number": 7,
                                        "position": "F",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 6,
                                        "key": null,
                                        "accuracy": "4"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 47845,
                                "name": "Besard Sabović",
                                "photo": "https://media.api-sports.io/football/players/47845.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 24,
                                        "number": 14,
                                        "position": "M",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 15,
                                        "key": 1,
                                        "accuracy": "13"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 2566,
                                "name": "Diego Rubio",
                                "photo": "https://media.api-sports.io/football/players/2566.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 24,
                                        "number": 21,
                                        "position": "F",
                                        "rating": "7.3",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 8,
                                        "key": 2,
                                        "accuracy": "7"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 2,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": 1,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 105632,
                                "name": "Žan Kolmanič",
                                "photo": "https://media.api-sports.io/football/players/105632.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 15,
                                        "number": 23,
                                        "position": "D",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 8,
                                        "key": null,
                                        "accuracy": "7"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50896,
                                "name": "Stefan Cleveland",
                                "photo": "https://media.api-sports.io/football/players/50896.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 30,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 37456,
                                "name": "Leo Väisänen",
                                "photo": "https://media.api-sports.io/football/players/37456.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 15,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 313360,
                                "name": "Calvin Fodrey",
                                "photo": "https://media.api-sports.io/football/players/313360.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 19,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 451017,
                                "name": "Nicolas Dubersarsky",
                                "photo": "https://media.api-sports.io/football/players/451017.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 20,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "team": {
                        "id": 1610,
                        "name": "Colorado Rapids",
                        "logo": "https://media.api-sports.io/football/teams/1610.png",
                        "update": "2025-03-09T03:37:07+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 50828,
                                "name": "Zack Steffen",
                                "photo": "https://media.api-sports.io/football/players/50828.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 1,
                                        "position": "G",
                                        "rating": "7.5",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": 4
                                    },
                                    "passes": {
                                        "total": 24,
                                        "key": null,
                                        "accuracy": "10"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 1,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51305,
                                "name": "Keegan Rosenberry",
                                "photo": "https://media.api-sports.io/football/players/51305.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 2,
                                        "position": "D",
                                        "rating": "6.9",
                                        "captain": true,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 37,
                                        "key": null,
                                        "accuracy": "29"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": 1,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 997,
                                "name": "Andreas Maxsø",
                                "photo": "https://media.api-sports.io/football/players/997.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 5,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 27,
                                        "key": null,
                                        "accuracy": "21"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": 1,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 9,
                                        "won": 6
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50026,
                                "name": "Chidozie Awaziem",
                                "photo": "https://media.api-sports.io/football/players/50026.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 6,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 26,
                                        "key": null,
                                        "accuracy": "16"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": 1,
                                        "interceptions": 3
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 351572,
                                "name": "Ian Murphy",
                                "photo": "https://media.api-sports.io/football/players/351572.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 76,
                                        "number": 19,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 24,
                                        "key": null,
                                        "accuracy": "17"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": 1,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": 3
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51312,
                                "name": "Cole Bassett",
                                "photo": "https://media.api-sports.io/football/players/51312.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 76,
                                        "number": 23,
                                        "position": "M",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 37,
                                        "key": null,
                                        "accuracy": "29"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 73863,
                                "name": "Josh Atencio",
                                "photo": "https://media.api-sports.io/football/players/73863.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 12,
                                        "position": "M",
                                        "rating": "7.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 34,
                                        "key": 1,
                                        "accuracy": "29"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 8,
                                        "won": 5
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 203206,
                                "name": "Oliver Larraz",
                                "photo": "https://media.api-sports.io/football/players/203206.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 84,
                                        "number": 8,
                                        "position": "M",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 26,
                                        "key": null,
                                        "accuracy": "19"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 20898,
                                "name": "Kevin Cabral",
                                "photo": "https://media.api-sports.io/football/players/20898.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 71,
                                        "number": 91,
                                        "position": "F",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 14,
                                        "key": null,
                                        "accuracy": "9"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": 1,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 9,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 4
                                    },
                                    "fouls": {
                                        "drawn": 3,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 68057,
                                "name": "Rafael Navarro",
                                "photo": "https://media.api-sports.io/football/players/68057.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 9,
                                        "position": "F",
                                        "rating": "7.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": 1,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 29,
                                        "key": null,
                                        "accuracy": "18"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 18,
                                        "won": 7
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 3,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50913,
                                "name": "Đorđe Mihailović",
                                "photo": "https://media.api-sports.io/football/players/50913.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 95,
                                        "number": 10,
                                        "position": "F",
                                        "rating": "7.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": 1,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 32,
                                        "key": 2,
                                        "accuracy": "24"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 10,
                                        "won": 5
                                    },
                                    "dribbles": {
                                        "attempts": 4,
                                        "success": 1,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 2,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 1,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50959,
                                "name": "Omir Fernandez",
                                "photo": "https://media.api-sports.io/football/players/50959.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 24,
                                        "number": 11,
                                        "position": "F",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 4,
                                        "key": null,
                                        "accuracy": "4"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 2,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 509722,
                                "name": "Anderson Rosa",
                                "photo": "https://media.api-sports.io/football/players/509722.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 19,
                                        "number": 36,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 4,
                                        "key": null,
                                        "accuracy": "3"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 61178,
                                "name": "Connor Ronan",
                                "photo": "https://media.api-sports.io/football/players/61178.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 19,
                                        "number": 20,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 8,
                                        "key": null,
                                        "accuracy": "6"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": 1,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 458378,
                                "name": "Wayne Frederick",
                                "photo": "https://media.api-sports.io/football/players/458378.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 11,
                                        "number": 13,
                                        "position": "F",
                                        "rating": "5.6",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 2,
                                        "key": null,
                                        "accuracy": "1"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": 1,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 362448,
                                "name": "Adam Beaudry",
                                "photo": "https://media.api-sports.io/football/players/362448.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 31,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 177820,
                                "name": "Michael Joseph Edwards",
                                "photo": "https://media.api-sports.io/football/players/177820.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 34,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 94341,
                                "name": "Calvin Harris",
                                "photo": "https://media.api-sports.io/football/players/94341.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 14,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 506558,
                                "name": "Samuel Bassett",
                                "photo": "https://media.api-sports.io/football/players/506558.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 18,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 510679,
                                "name": "Alex Harris",
                                "photo": "https://media.api-sports.io/football/players/510679.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 16,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "inPlayOdds": [
                {
                    "fixture": {
                        "id": 1326268,
                        "status": {
                            "long": "Second Half",
                            "elapsed": 100,
                            "seconds": "99:52"
                        }
                    },
                    "league": {
                        "id": 253,
                        "season": 2025
                    },
                    "teams": {
                        "home": {
                            "id": 16489,
                            "goals": 0
                        },
                        "away": {
                            "id": 1610,
                            "goals": 1
                        }
                    },
                    "status": {
                        "stopped": false,
                        "blocked": true,
                        "finished": false
                    },
                    "update": "2025-03-09T03:37:44+00:00",
                    "odds": [
                        {
                            "id": 85,
                            "name": "Which team will score the 2nd goal?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "No goal",
                                    "odd": "1.004",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "2",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "fixture": {
                "id": 1326271,
                "referee": "Joe Dickerson, USA",
                "timezone": "UTC",
                "date": "2025-03-09T02:30:00+00:00",
                "timestamp": 1741487400,
                "periods": {
                    "first": 1741487400,
                    "second": null
                },
                "venue": {
                    "id": 19445,
                    "name": "BC Place",
                    "city": "Vancouver, British Columbia"
                },
                "status": {
                    "long": "Halftime",
                    "short": "HT",
                    "elapsed": 45,
                    "extra": 6
                }
            },
            "league": {
                "id": 253,
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg",
                "season": 2025,
                "round": "Regular Season - 4",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 1603,
                    "name": "Vancouver Whitecaps",
                    "logo": "https://media.api-sports.io/football/teams/1603.png",
                    "winner": true
                },
                "away": {
                    "id": 1614,
                    "name": "CF Montreal",
                    "logo": "https://media.api-sports.io/football/teams/1614.png",
                    "winner": false
                }
            },
            "goals": {
                "home": 1,
                "away": 0
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 0
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [
                {
                    "time": {
                        "elapsed": 24,
                        "extra": null
                    },
                    "team": {
                        "id": 1603,
                        "name": "Vancouver Whitecaps",
                        "logo": "https://media.api-sports.io/football/teams/1603.png"
                    },
                    "player": {
                        "id": 191369,
                        "name": "J. Ngando"
                    },
                    "assist": {
                        "id": 44844,
                        "name": "R. Gauld"
                    },
                    "type": "subst",
                    "detail": "Substitution 1",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 32,
                        "extra": null
                    },
                    "team": {
                        "id": 1603,
                        "name": "Vancouver Whitecaps",
                        "logo": "https://media.api-sports.io/football/teams/1603.png"
                    },
                    "player": {
                        "id": 51569,
                        "name": "M. Laborda"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Goal",
                    "detail": "Normal Goal",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 39,
                        "extra": null
                    },
                    "team": {
                        "id": 1614,
                        "name": "CF Montreal",
                        "logo": "https://media.api-sports.io/football/teams/1614.png"
                    },
                    "player": {
                        "id": 102856,
                        "name": "L. Petrasso"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 41,
                        "extra": null
                    },
                    "team": {
                        "id": 1614,
                        "name": "CF Montreal",
                        "logo": "https://media.api-sports.io/football/teams/1614.png"
                    },
                    "player": {
                        "id": 265880,
                        "name": "B. Craig"
                    },
                    "assist": {
                        "id": null,
                        "name": null
                    },
                    "type": "Card",
                    "detail": "Yellow Card",
                    "comments": null
                }
            ],
            "lineups": [
                {
                    "team": {
                        "id": 1603,
                        "name": "Vancouver Whitecaps",
                        "logo": "https://media.api-sports.io/football/teams/1603.png",
                        "colors": {
                            "player": {
                                "primary": "ffffff",
                                "number": "042244",
                                "border": "ffffff"
                            },
                            "goalkeeper": {
                                "primary": "117e68",
                                "number": "ffffff",
                                "border": "117e68"
                            }
                        }
                    },
                    "formation": "4-3-3",
                    "startXI": [
                        {
                            "player": {
                                "id": 33385,
                                "name": "Yohei Takaoka",
                                "number": 1,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 51569,
                                "name": "Mathías Laborda",
                                "number": 2,
                                "pos": "D",
                                "grid": "2:4"
                            }
                        },
                        {
                            "player": {
                                "id": 45938,
                                "name": "Ranko Veselinović",
                                "number": 4,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 51027,
                                "name": "Tristan Blackmon",
                                "number": 33,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 363155,
                                "name": "Tate Johnson",
                                "number": 28,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 237078,
                                "name": "Pedro Vite",
                                "number": 45,
                                "pos": "M",
                                "grid": "3:3"
                            }
                        },
                        {
                            "player": {
                                "id": 6236,
                                "name": "Andrés Cubas",
                                "number": 20,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 201713,
                                "name": "Sebastian Berhalter",
                                "number": 16,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 362145,
                                "name": "Ali Ahmed",
                                "number": 22,
                                "pos": "F",
                                "grid": "4:3"
                            }
                        },
                        {
                            "player": {
                                "id": 50969,
                                "name": "Brian White",
                                "number": 24,
                                "pos": "F",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 44844,
                                "name": "Ryan Gauld",
                                "number": 25,
                                "pos": "F",
                                "grid": "4:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 191369,
                                "name": "Jean-Claude Ngando",
                                "number": 26,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 276531,
                                "name": "Isaac Boehmer",
                                "number": 32,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 201346,
                                "name": "Belal Halbouni",
                                "number": 12,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 350510,
                                "name": "Giuseppe Bovalina",
                                "number": 27,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 2017,
                                "name": "Bjorn Utvik",
                                "number": 15,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 203436,
                                "name": "Ralph Priso",
                                "number": 13,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 51208,
                                "name": "Damir Kreilach",
                                "number": 19,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 461422,
                                "name": "Nicolas Fleuriau Chateau",
                                "number": 52,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 92590,
                                "name": "Daniel Rios",
                                "number": 14,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 9349,
                        "name": "J. Sørensen",
                        "photo": "https://media.api-sports.io/football/coachs/9349.png"
                    }
                },
                {
                    "team": {
                        "id": 1614,
                        "name": "CF Montreal",
                        "logo": "https://media.api-sports.io/football/teams/1614.png",
                        "colors": {
                            "player": {
                                "primary": "09b3ec",
                                "number": "ffffff",
                                "border": "09b3ec"
                            },
                            "goalkeeper": {
                                "primary": "e2f202",
                                "number": "15140b",
                                "border": "e2f202"
                            }
                        }
                    },
                    "formation": "3-4-3",
                    "startXI": [
                        {
                            "player": {
                                "id": 262600,
                                "name": "Jonathan Sirois",
                                "number": 40,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 265880,
                                "name": "Brandan Craig",
                                "number": 5,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 78494,
                                "name": "Joel Waterman",
                                "number": 16,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 102856,
                                "name": "Luca Petrasso",
                                "number": 13,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 407463,
                                "name": "Yuri Aleksandr Guboglo",
                                "number": 39,
                                "pos": "M",
                                "grid": "3:4"
                            }
                        },
                        {
                            "player": {
                                "id": 50909,
                                "name": "Fabian Herbers",
                                "number": 21,
                                "pos": "M",
                                "grid": "3:3"
                            }
                        },
                        {
                            "player": {
                                "id": 294824,
                                "name": "Nathan-Dylan Saliba",
                                "number": 19,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 20463,
                                "name": "Tom Pearce",
                                "number": 3,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 283673,
                                "name": "Kwadwo Opoku",
                                "number": 7,
                                "pos": "F",
                                "grid": "4:3"
                            }
                        },
                        {
                            "player": {
                                "id": 26140,
                                "name": "Prince-Osei Owusu",
                                "number": 9,
                                "pos": "F",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 199409,
                                "name": "Bryce Duke",
                                "number": 10,
                                "pos": "F",
                                "grid": "4:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 56807,
                                "name": "Sebastian Breza",
                                "number": 1,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 350103,
                                "name": "Dawid Bugaj",
                                "number": 27,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 323586,
                                "name": "Fernando Álvarez",
                                "number": 4,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 201707,
                                "name": "Jahkeele Marshall-Rutty",
                                "number": 11,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 207781,
                                "name": "Caden Clark",
                                "number": 23,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 78589,
                                "name": "Victor Loturi",
                                "number": 22,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 1071,
                                "name": "Dominik Yankov",
                                "number": 8,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 322861,
                                "name": "Jules-Anthony Vilsaint",
                                "number": 28,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 310968,
                                "name": "Ibrahim Sunusi",
                                "number": 14,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 22973,
                        "name": "L. Courtois",
                        "photo": "https://media.api-sports.io/football/coachs/22973.png"
                    }
                }
            ],
            "statistics": [
                {
                    "team": {
                        "id": 1603,
                        "name": "Vancouver Whitecaps",
                        "logo": "https://media.api-sports.io/football/teams/1603.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 3
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 3
                        },
                        {
                            "type": "Total Shots",
                            "value": 6
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 0
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 4
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 2
                        },
                        {
                            "type": "Fouls",
                            "value": 4
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 3
                        },
                        {
                            "type": "Offsides",
                            "value": null
                        },
                        {
                            "type": "Ball Possession",
                            "value": "57%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": 0
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 1
                        },
                        {
                            "type": "Total passes",
                            "value": 218
                        },
                        {
                            "type": "Passes accurate",
                            "value": 187
                        },
                        {
                            "type": "Passes %",
                            "value": "86%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "0.94"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                },
                {
                    "team": {
                        "id": 1614,
                        "name": "CF Montreal",
                        "logo": "https://media.api-sports.io/football/teams/1614.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 2
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 0
                        },
                        {
                            "type": "Total Shots",
                            "value": 4
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 2
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 3
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 1
                        },
                        {
                            "type": "Fouls",
                            "value": 7
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 3
                        },
                        {
                            "type": "Offsides",
                            "value": null
                        },
                        {
                            "type": "Ball Possession",
                            "value": "43%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": 2
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 2
                        },
                        {
                            "type": "Total passes",
                            "value": 155
                        },
                        {
                            "type": "Passes accurate",
                            "value": 127
                        },
                        {
                            "type": "Passes %",
                            "value": "82%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "0.17"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                }
            ],
            "players": [
                {
                    "team": {
                        "id": 1603,
                        "name": "Vancouver Whitecaps",
                        "logo": "https://media.api-sports.io/football/teams/1603.png",
                        "update": "2025-03-09T03:30:16+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 33385,
                                "name": "Yohei Takaoka",
                                "photo": "https://media.api-sports.io/football/players/33385.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 1,
                                        "position": "G",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": 1
                                    },
                                    "passes": {
                                        "total": 9,
                                        "key": null,
                                        "accuracy": "9"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51569,
                                "name": "Mathías Laborda",
                                "photo": "https://media.api-sports.io/football/players/51569.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 2,
                                        "position": "D",
                                        "rating": "7.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 2
                                    },
                                    "goals": {
                                        "total": 1,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 21,
                                        "key": null,
                                        "accuracy": "20"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 45938,
                                "name": "Ranko Veselinović",
                                "photo": "https://media.api-sports.io/football/players/45938.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 4,
                                        "position": "D",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 28,
                                        "key": null,
                                        "accuracy": "26"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51027,
                                "name": "Tristan Blackmon",
                                "photo": "https://media.api-sports.io/football/players/51027.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 33,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 32,
                                        "key": 1,
                                        "accuracy": "30"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 363155,
                                "name": "Tate Johnson",
                                "photo": "https://media.api-sports.io/football/players/363155.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 28,
                                        "position": "D",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 11,
                                        "key": null,
                                        "accuracy": "10"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": 1,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 237078,
                                "name": "Pedro Vite",
                                "photo": "https://media.api-sports.io/football/players/237078.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 45,
                                        "position": "M",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 22,
                                        "key": 1,
                                        "accuracy": "15"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 2,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 6236,
                                "name": "Andrés Cubas",
                                "photo": "https://media.api-sports.io/football/players/6236.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 20,
                                        "position": "M",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 15,
                                        "key": null,
                                        "accuracy": "12"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 201713,
                                "name": "Sebastian Berhalter",
                                "photo": "https://media.api-sports.io/football/players/201713.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 16,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 29,
                                        "key": 2,
                                        "accuracy": "25"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 362145,
                                "name": "Ali Ahmed",
                                "photo": "https://media.api-sports.io/football/players/362145.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 22,
                                        "position": "F",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 22,
                                        "key": null,
                                        "accuracy": "18"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50969,
                                "name": "Brian White",
                                "photo": "https://media.api-sports.io/football/players/50969.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 24,
                                        "position": "F",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 8,
                                        "key": null,
                                        "accuracy": "5"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 5
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 44844,
                                "name": "Ryan Gauld",
                                "photo": "https://media.api-sports.io/football/players/44844.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 24,
                                        "number": 25,
                                        "position": "F",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 10,
                                        "key": null,
                                        "accuracy": "8"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 191369,
                                "name": "Jean-Claude Ngando",
                                "photo": "https://media.api-sports.io/football/players/191369.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 23,
                                        "number": 26,
                                        "position": "M",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 6,
                                        "key": null,
                                        "accuracy": "5"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 276531,
                                "name": "Isaac Boehmer",
                                "photo": "https://media.api-sports.io/football/players/276531.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 32,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 201346,
                                "name": "Belal Halbouni",
                                "photo": "https://media.api-sports.io/football/players/201346.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 12,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 350510,
                                "name": "Giuseppe Bovalina",
                                "photo": "https://media.api-sports.io/football/players/350510.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 27,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 2017,
                                "name": "Bjorn Utvik",
                                "photo": "https://media.api-sports.io/football/players/2017.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 15,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 203436,
                                "name": "Ralph Priso",
                                "photo": "https://media.api-sports.io/football/players/203436.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 13,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51208,
                                "name": "Damir Kreilach",
                                "photo": "https://media.api-sports.io/football/players/51208.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 19,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 461422,
                                "name": "Nicolas Fleuriau Chateau",
                                "photo": "https://media.api-sports.io/football/players/461422.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 52,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 92590,
                                "name": "Daniel Rios",
                                "photo": "https://media.api-sports.io/football/players/92590.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 14,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "team": {
                        "id": 1614,
                        "name": "CF Montreal",
                        "logo": "https://media.api-sports.io/football/teams/1614.png",
                        "update": "2025-03-09T03:30:16+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 262600,
                                "name": "Jonathan Sirois",
                                "photo": "https://media.api-sports.io/football/players/262600.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 40,
                                        "position": "G",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 1,
                                        "assists": null,
                                        "saves": 2
                                    },
                                    "passes": {
                                        "total": 9,
                                        "key": null,
                                        "accuracy": "8"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 265880,
                                "name": "Brandan Craig",
                                "photo": "https://media.api-sports.io/football/players/265880.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 5,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 12,
                                        "key": null,
                                        "accuracy": "12"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 7,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 1,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 78494,
                                "name": "Joel Waterman",
                                "photo": "https://media.api-sports.io/football/players/78494.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 16,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": true,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 20,
                                        "key": null,
                                        "accuracy": "17"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 102856,
                                "name": "Luca Petrasso",
                                "photo": "https://media.api-sports.io/football/players/102856.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 13,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 21,
                                        "key": null,
                                        "accuracy": "17"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 1,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 407463,
                                "name": "Yuri Aleksandr Guboglo",
                                "photo": "https://media.api-sports.io/football/players/407463.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 39,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 2
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 12,
                                        "key": null,
                                        "accuracy": "11"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 50909,
                                "name": "Fabian Herbers",
                                "photo": "https://media.api-sports.io/football/players/50909.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 21,
                                        "position": "M",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 14,
                                        "key": null,
                                        "accuracy": "13"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 294824,
                                "name": "Nathan-Dylan Saliba",
                                "photo": "https://media.api-sports.io/football/players/294824.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 19,
                                        "position": "M",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 22,
                                        "key": null,
                                        "accuracy": "14"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 20463,
                                "name": "Tom Pearce",
                                "photo": "https://media.api-sports.io/football/players/20463.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 3,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 9,
                                        "key": 1,
                                        "accuracy": "6"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 283673,
                                "name": "Kwadwo Opoku",
                                "photo": "https://media.api-sports.io/football/players/283673.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 7,
                                        "position": "F",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 5,
                                        "key": null,
                                        "accuracy": "4"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 26140,
                                "name": "Prince-Osei Owusu",
                                "photo": "https://media.api-sports.io/football/players/26140.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 9,
                                        "position": "F",
                                        "rating": "6.5",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 5,
                                        "key": 1,
                                        "accuracy": "4"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 6,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 199409,
                                "name": "Bryce Duke",
                                "photo": "https://media.api-sports.io/football/players/199409.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 47,
                                        "number": 10,
                                        "position": "F",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 5,
                                        "key": null,
                                        "accuracy": "4"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 2,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 56807,
                                "name": "Sebastian Breza",
                                "photo": "https://media.api-sports.io/football/players/56807.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 1,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 350103,
                                "name": "Dawid Bugaj",
                                "photo": "https://media.api-sports.io/football/players/350103.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 27,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 323586,
                                "name": "Fernando Álvarez",
                                "photo": "https://media.api-sports.io/football/players/323586.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 4,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 201707,
                                "name": "Jahkeele Marshall-Rutty",
                                "photo": "https://media.api-sports.io/football/players/201707.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 11,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 207781,
                                "name": "Caden Clark",
                                "photo": "https://media.api-sports.io/football/players/207781.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 23,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 78589,
                                "name": "Victor Loturi",
                                "photo": "https://media.api-sports.io/football/players/78589.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 22,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 1071,
                                "name": "Dominik Yankov",
                                "photo": "https://media.api-sports.io/football/players/1071.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 8,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 322861,
                                "name": "Jules-Anthony Vilsaint",
                                "photo": "https://media.api-sports.io/football/players/322861.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 28,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 310968,
                                "name": "Ibrahim Sunusi",
                                "photo": "https://media.api-sports.io/football/players/310968.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 14,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "inPlayOdds": [
                {
                    "fixture": {
                        "id": 1326271,
                        "status": {
                            "long": "Halftime",
                            "elapsed": 45,
                            "seconds": "45:00"
                        }
                    },
                    "league": {
                        "id": 253,
                        "season": 2025
                    },
                    "teams": {
                        "home": {
                            "id": 1603,
                            "goals": 1
                        },
                        "away": {
                            "id": 1614,
                            "goals": 0
                        }
                    },
                    "status": {
                        "stopped": true,
                        "blocked": false,
                        "finished": false
                    },
                    "update": "2025-03-09T03:37:22+00:00",
                    "odds": [
                        {
                            "id": 33,
                            "name": "Asian Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "2.5",
                                    "handicap": "-2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.5",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.725",
                                    "handicap": "-1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.075",
                                    "handicap": "1.5",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.45",
                                    "handicap": "-1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.675",
                                    "handicap": "1.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "2.025",
                                    "handicap": "-1.75",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.825",
                                    "handicap": "1.75",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "3",
                                    "handicap": "-2.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.375",
                                    "handicap": "2.25",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 41,
                            "name": "1x2 - 50 minutes",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.02",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "501",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 85,
                            "name": "Which team will score the 2nd goal?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "1.571",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 115,
                            "name": "Player to be Booked",
                            "values": [
                                {
                                    "value": "Joel Waterman",
                                    "odd": "3.6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "7",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brian White",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "9.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jonathan Sirois",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yohei Takaoka",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 37,
                            "name": "Total Corners",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "2.2",
                                    "handicap": "11.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.615",
                                    "handicap": "11.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 119,
                            "name": "Total Cards",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "2.25",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.571",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 61,
                            "name": "Race to the 5th corner?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "1.8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "2.2",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Neither",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 20,
                            "name": "Match Corners",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "3.25",
                                    "handicap": "12",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Exactly",
                                    "odd": "6",
                                    "handicap": "12",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.615",
                                    "handicap": "12",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.571",
                                    "handicap": "10",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Exactly",
                                    "odd": "5",
                                    "handicap": "10",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "3.75",
                                    "handicap": "10",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.2",
                                    "handicap": "11",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Exactly",
                                    "odd": "5.5",
                                    "handicap": "11",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.25",
                                    "handicap": "11",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "5",
                                    "handicap": "13",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Exactly",
                                    "odd": "7",
                                    "handicap": "13",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.333",
                                    "handicap": "13",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.25",
                                    "handicap": "9",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Exactly",
                                    "odd": "6",
                                    "handicap": "9",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "7",
                                    "handicap": "9",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 58,
                            "name": "Home Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "19",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.02",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.333",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "3.25",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "7",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.1",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.625",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.444",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 60,
                            "name": "To Score 3 or More",
                            "values": [
                                {
                                    "value": "Brian White",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "151",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "151",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "501",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Joel Waterman",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "501",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 90,
                            "name": "2nd Goal in Interval",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "6",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.111",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "1.727",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "2",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "2.5",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.5",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "1.4",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "2.75",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 36,
                            "name": "Over/Under Line",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "1.325",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "3.3",
                                    "handicap": "2",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.6",
                                    "handicap": "2.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "2.3",
                                    "handicap": "2.25",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.85",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.4",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.925",
                                    "handicap": "2.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.925",
                                    "handicap": "2.5",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "2.2",
                                    "handicap": "2.75",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.65",
                                    "handicap": "2.75",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 23,
                            "name": "Final Score",
                            "values": [
                                {
                                    "value": "1-0",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-0",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-1",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-0",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-1",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-2",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-0",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-1",
                                    "odd": "23",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-2",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-3",
                                    "odd": "201",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-0",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-1",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-2",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "5-3",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "6-0",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "6-1",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "6-2",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "6-3",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "7-0",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "7-1",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "7-2",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "8-0",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "8-1",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-0",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-1",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-2",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "4-4",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-1",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "0-2",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-2",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-3",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2-3",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "0-4",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1-4",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "2-4",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "3-4",
                                    "odd": "351",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "name": "Result / Both Teams To Score",
                            "values": [
                                {
                                    "value": "Home/Yes",
                                    "odd": "3.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/Yes",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw/Yes",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home/No",
                                    "odd": "1.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away/No",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Draw/No",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 27,
                            "name": "Home Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "3.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 46,
                            "name": "Goal Scorer",
                            "values": [
                                {
                                    "value": "Brian White",
                                    "odd": "4.5",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "10",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "10",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "12",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "13",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "13",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "17",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "21",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "21",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "23",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "23",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "23",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "26",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "26",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "26",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "41",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "51",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "51",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "67",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Joel Waterman",
                                    "odd": "81",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No 2nd Goal",
                                    "odd": "4.5",
                                    "handicap": "2",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "name": "3-Way Handicap",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.01",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "29",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "67",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "23",
                                    "handicap": "-4",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "12",
                                    "handicap": "4",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.055",
                                    "handicap": "4",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "8.5",
                                    "handicap": "-3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "5",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "1.25",
                                    "handicap": "3",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "3.4",
                                    "handicap": "-2",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "3",
                                    "handicap": "2",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "2.05",
                                    "handicap": "2",
                                    "main": true,
                                    "suspended": false
                                },
                                {
                                    "value": "Home",
                                    "odd": "1.666",
                                    "handicap": "-1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.875",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "6.5",
                                    "handicap": "1",
                                    "main": false,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 25,
                            "name": "Match Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "23",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.012",
                                    "handicap": "5.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "3.75",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.25",
                                    "handicap": "3.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.181",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "4.5",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "9",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.071",
                                    "handicap": "4.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Over",
                                    "odd": "1.833",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.833",
                                    "handicap": "2.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 35,
                            "name": "To Win 2nd Half",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.666",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "2.875",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 45,
                            "name": "Race to the 7th corner?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "3",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "4.333",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Neither",
                                    "odd": "1.833",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "name": "How many goals will Away Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "1.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "1",
                                    "odd": "2.75",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 44,
                            "name": "Race to the 9th corner?",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Neither",
                                    "odd": "1.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 59,
                            "name": "Fulltime Result",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.111",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 72,
                            "name": "Double Chance",
                            "values": [
                                {
                                    "value": "Home or Draw",
                                    "odd": "1.01",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away or Draw",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Home or Away",
                                    "odd": "1.083",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 66,
                            "name": "Home Team Clean Sheet",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "1.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 68,
                            "name": "Goals Odd/Even",
                            "values": [
                                {
                                    "value": "Odd",
                                    "odd": "1.8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Even",
                                    "odd": "1.909",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 39,
                            "name": "Away Team Goals",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "11",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.05",
                                    "handicap": "1.5",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 48,
                            "name": "Draw No Bet",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.015",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 50,
                            "name": "1x2 - 60 minutes",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.055",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 65,
                            "name": "Next 10 Minutes Total",
                            "values": [
                                {
                                    "value": "Goals/Over  0.5",
                                    "odd": "3.5",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Goals/Under  0.5",
                                    "odd": "1.285",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Corners/Over  0.5",
                                    "odd": "1.533",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Corners/Under  0.5",
                                    "odd": "2.375",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Cards/Over  0.5",
                                    "odd": "2.2",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Cards/Under  0.5",
                                    "odd": "1.615",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 52,
                            "name": "1x2 - 80 minutes",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.09",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 69,
                            "name": "Both Teams to Score",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 43,
                            "name": "Both Teams To Score (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.285",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 56,
                            "name": "1x2 - 70 minutes",
                            "values": [
                                {
                                    "value": "Home",
                                    "odd": "1.071",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Draw",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Away",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 32,
                            "name": "Asian Corners",
                            "values": [
                                {
                                    "value": "Over",
                                    "odd": "1.85",
                                    "handicap": "11",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Under",
                                    "odd": "1.95",
                                    "handicap": "11",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 53,
                            "name": "To Score 2 or More",
                            "values": [
                                {
                                    "value": "Brian White",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "126",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "201",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "251",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "401",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Joel Waterman",
                                    "odd": "501",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "101",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 62,
                            "name": "Last Team to Score (3 way)",
                            "values": [
                                {
                                    "value": "1",
                                    "odd": "1.222",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No goal",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "2",
                                    "odd": "4",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 155,
                            "name": "Player Assists",
                            "values": [
                                {
                                    "value": "Ali Ahmed/Over 0.5",
                                    "odd": "6",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter/Over 0.5",
                                    "odd": "5.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon/Over 0.5",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig/Over 0.5",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas/Over 0.5",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke/Over 0.5",
                                    "odd": "10.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld/Over 0.5",
                                    "odd": "3.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Fabian Herbers/Over 0.5",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson/Over 0.5",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda/Over 0.5",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku/Over 0.5",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu/Over 0.5",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tom Pearce/Over 0.5",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso/Over 0.5",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Nathan-Dylan Saliba/Over 0.5",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ranko Veselinovic/Over 0.5",
                                    "odd": "21",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite/Over 0.5",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Joel Waterman/Over 0.5",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brian White/Over 0.5",
                                    "odd": "9",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jean-Claude Ngando/Over 0.5",
                                    "odd": "12",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 47,
                            "name": "Away 1st Goal in Interval",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "7",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.083",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "4.333",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.2",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "11",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.02",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "3.4",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.3",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 118,
                            "name": "Player to be Sent Off",
                            "values": [
                                {
                                    "value": "Joel Waterman",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "26",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brian White",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "67",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jonathan Sirois",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yohei Takaoka",
                                    "odd": "81",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "51",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 70,
                            "name": "Away Team Score a Goal (2nd Half)",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 95,
                            "name": "Home 2nd Goal in Interval",
                            "values": [
                                {
                                    "value": "Yes",
                                    "odd": "3.4",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.3",
                                    "handicap": "60",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "2.1",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.666",
                                    "handicap": "70",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "7.5",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "1.071",
                                    "handicap": "50",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yes",
                                    "odd": "1.666",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No",
                                    "odd": "2.1",
                                    "handicap": "80",
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        },
                        {
                            "id": 63,
                            "name": "Anytime Goal Scorer",
                            "values": [
                                {
                                    "value": "Brian White",
                                    "odd": "3.1",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ryan Gauld",
                                    "odd": "2.875",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Ali Ahmed",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Pedro Vite",
                                    "odd": "6.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Sebastian Berhalter",
                                    "odd": "7.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Prince Osei Owusu",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Kwadwo Opoku",
                                    "odd": "8",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Mathias Laborda",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Fabian Herbers",
                                    "odd": "13",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tate Johnson",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Adrian Cubas",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tristan Blackmon",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Ranko Veselinovic",
                                    "odd": "17",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Yuri Guboglo",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Bryce Duke",
                                    "odd": "15",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Nathan-Dylan Saliba",
                                    "odd": "23",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Luca Petrasso",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Brandan Craig",
                                    "odd": "29",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Tom Pearce",
                                    "odd": "34",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "Joel Waterman",
                                    "odd": "41",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No 1st Goal",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "Jean-Claude Ngando",
                                    "odd": "11",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "No 2nd Goal",
                                    "odd": "0",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                }
                            ]
                        },
                        {
                            "id": 67,
                            "name": "How many goals will Home Team score?",
                            "values": [
                                {
                                    "value": "No goal",
                                    "odd": "4.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": true
                                },
                                {
                                    "value": "1",
                                    "odd": "3.25",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "2",
                                    "odd": "2.5",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                },
                                {
                                    "value": "3 or more",
                                    "odd": "2.625",
                                    "handicap": null,
                                    "main": null,
                                    "suspended": false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "fixture": {
                "id": 1326711,
                "referee": "Alexis Da Silva, USA",
                "timezone": "UTC",
                "date": "2025-03-09T02:30:00+00:00",
                "timestamp": 1741487400,
                "periods": {
                    "first": 1741487400,
                    "second": null
                },
                "venue": {
                    "id": 19223,
                    "name": "America First Field",
                    "city": "Sandy, Utah"
                },
                "status": {
                    "long": "Halftime",
                    "short": "HT",
                    "elapsed": 45,
                    "extra": 5
                }
            },
            "league": {
                "id": 253,
                "name": "Major League Soccer",
                "country": "USA",
                "logo": "https://media.api-sports.io/football/leagues/253.png",
                "flag": "https://media.api-sports.io/flags/us.svg",
                "season": 2025,
                "round": "Regular Season - 4",
                "standings": true
            },
            "teams": {
                "home": {
                    "id": 1606,
                    "name": "Real Salt Lake",
                    "logo": "https://media.api-sports.io/football/teams/1606.png",
                    "winner": null
                },
                "away": {
                    "id": 25484,
                    "name": "San Diego",
                    "logo": "https://media.api-sports.io/football/teams/25484.png",
                    "winner": null
                }
            },
            "goals": {
                "home": 1,
                "away": 1
            },
            "score": {
                "halftime": {
                    "home": 1,
                    "away": 1
                },
                "fulltime": {
                    "home": null,
                    "away": null
                },
                "extratime": {
                    "home": null,
                    "away": null
                },
                "penalty": {
                    "home": null,
                    "away": null
                }
            },
            "events": [
                {
                    "time": {
                        "elapsed": 18,
                        "extra": null
                    },
                    "team": {
                        "id": 1606,
                        "name": "Real Salt Lake",
                        "logo": "https://media.api-sports.io/football/teams/1606.png"
                    },
                    "player": {
                        "id": 406713,
                        "name": "A. Piol"
                    },
                    "assist": {
                        "id": 271983,
                        "name": "D. Marczuk"
                    },
                    "type": "Goal",
                    "detail": "Normal Goal",
                    "comments": null
                },
                {
                    "time": {
                        "elapsed": 43,
                        "extra": null
                    },
                    "team": {
                        "id": 25484,
                        "name": "San Diego",
                        "logo": "https://media.api-sports.io/football/teams/25484.png"
                    },
                    "player": {
                        "id": 5385,
                        "name": "F. Negri"
                    },
                    "assist": {
                        "id": 297577,
                        "name": "T. Angel"
                    },
                    "type": "Goal",
                    "detail": "Normal Goal",
                    "comments": null
                }
            ],
            "lineups": [
                {
                    "team": {
                        "id": 1606,
                        "name": "Real Salt Lake",
                        "logo": "https://media.api-sports.io/football/teams/1606.png",
                        "colors": {
                            "player": {
                                "primary": "ad0810",
                                "number": "f8e167",
                                "border": "ad0810"
                            },
                            "goalkeeper": {
                                "primary": "73f777",
                                "number": "ffffff",
                                "border": "73f777"
                            }
                        }
                    },
                    "formation": "4-2-3-1",
                    "startXI": [
                        {
                            "player": {
                                "id": 30443,
                                "name": "Rafael Cabral",
                                "number": 1,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 32641,
                                "name": "Javain Brown",
                                "number": 91,
                                "pos": "D",
                                "grid": "2:4"
                            }
                        },
                        {
                            "player": {
                                "id": 51195,
                                "name": "Justen Glad",
                                "number": 15,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 351575,
                                "name": "Philip Quinton",
                                "number": 26,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 26649,
                                "name": "Alexandros Katranis",
                                "number": 98,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 413169,
                                "name": "Emeka Eneli",
                                "number": 14,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 70767,
                                "name": "Braian Ojeda",
                                "number": 6,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 271983,
                                "name": "Dominik Marczuk",
                                "number": 11,
                                "pos": "M",
                                "grid": "4:3"
                            }
                        },
                        {
                            "player": {
                                "id": 312896,
                                "name": "Diego Luna",
                                "number": 8,
                                "pos": "M",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 19300,
                                "name": "Diogo Gonçalves",
                                "number": 10,
                                "pos": "M",
                                "grid": "4:1"
                            }
                        },
                        {
                            "player": {
                                "id": 406713,
                                "name": "Ariath Piol",
                                "number": 23,
                                "pos": "F",
                                "grid": "5:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 102674,
                                "name": "Mason Stajduhar",
                                "number": 31,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 212252,
                                "name": "Bode Hidalgo",
                                "number": 19,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 79167,
                                "name": "Brayan Vera",
                                "number": 4,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 265865,
                                "name": "Kobi Henry",
                                "number": 3,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 51090,
                                "name": "Sam Junqua",
                                "number": 29,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 197557,
                                "name": "Nelson Palacio",
                                "number": 13,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 207771,
                                "name": "Tyler Wolff",
                                "number": 16,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 77183,
                                "name": "Lachlan Brook",
                                "number": 17,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 459162,
                                "name": "Forster Ajago",
                                "number": 27,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 6081,
                        "name": "P. Mastroeni",
                        "photo": "https://media.api-sports.io/football/coachs/6081.png"
                    }
                },
                {
                    "team": {
                        "id": 25484,
                        "name": "San Diego",
                        "logo": "https://media.api-sports.io/football/teams/25484.png",
                        "colors": {
                            "player": {
                                "primary": "03183a",
                                "number": "ffffff",
                                "border": "03183a"
                            },
                            "goalkeeper": {
                                "primary": "00ff04",
                                "number": "ffffff",
                                "border": "00ff04"
                            }
                        }
                    },
                    "formation": "4-3-3",
                    "startXI": [
                        {
                            "player": {
                                "id": 163200,
                                "name": "CJ dos Santos",
                                "number": 1,
                                "pos": "G",
                                "grid": "1:1"
                            }
                        },
                        {
                            "player": {
                                "id": 108594,
                                "name": "Jasper Loffelsend",
                                "number": 19,
                                "pos": "D",
                                "grid": "2:4"
                            }
                        },
                        {
                            "player": {
                                "id": 47835,
                                "name": "Christopher McVey",
                                "number": 97,
                                "pos": "D",
                                "grid": "2:3"
                            }
                        },
                        {
                            "player": {
                                "id": 19242,
                                "name": "Paddy McNair",
                                "number": 17,
                                "pos": "D",
                                "grid": "2:2"
                            }
                        },
                        {
                            "player": {
                                "id": 5385,
                                "name": "Franco Negri",
                                "number": 22,
                                "pos": "D",
                                "grid": "2:1"
                            }
                        },
                        {
                            "player": {
                                "id": 2977,
                                "name": "Aníbal Godoy",
                                "number": 20,
                                "pos": "M",
                                "grid": "3:3"
                            }
                        },
                        {
                            "player": {
                                "id": 15855,
                                "name": "Jeppe Tverskov",
                                "number": 6,
                                "pos": "M",
                                "grid": "3:2"
                            }
                        },
                        {
                            "player": {
                                "id": 19026,
                                "name": "Luca De La Torre",
                                "number": 14,
                                "pos": "M",
                                "grid": "3:1"
                            }
                        },
                        {
                            "player": {
                                "id": 45017,
                                "name": "Anders Dreyer",
                                "number": 10,
                                "pos": "F",
                                "grid": "4:3"
                            }
                        },
                        {
                            "player": {
                                "id": 297577,
                                "name": "Tomás Ángel",
                                "number": 9,
                                "pos": "F",
                                "grid": "4:2"
                            }
                        },
                        {
                            "player": {
                                "id": 1941,
                                "name": "Marcus Ingvartsen",
                                "number": 7,
                                "pos": "F",
                                "grid": "4:1"
                            }
                        }
                    ],
                    "substitutes": [
                        {
                            "player": {
                                "id": 51023,
                                "name": "Pablo Sisniega",
                                "number": 13,
                                "pos": "G",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 406707,
                                "name": "Hamady Diop",
                                "number": 5,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 418851,
                                "name": "Luca Bombino",
                                "number": 27,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 508420,
                                "name": "Ian Pilcher",
                                "number": 25,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 51060,
                                "name": "Emmanuel Boateng",
                                "number": 24,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 39365,
                                "name": "Onni Valakari",
                                "number": 8,
                                "pos": "M",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 265898,
                                "name": "Alejandro Alvarado Jr",
                                "number": 70,
                                "pos": "F",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 341123,
                                "name": "Willy Kumado",
                                "number": 2,
                                "pos": "D",
                                "grid": null
                            }
                        },
                        {
                            "player": {
                                "id": 129712,
                                "name": "Alex Mighten",
                                "number": 77,
                                "pos": "F",
                                "grid": null
                            }
                        }
                    ],
                    "coach": {
                        "id": 17466,
                        "name": "M. Varas",
                        "photo": "https://media.api-sports.io/football/coachs/17466.png"
                    }
                }
            ],
            "statistics": [
                {
                    "team": {
                        "id": 1606,
                        "name": "Real Salt Lake",
                        "logo": "https://media.api-sports.io/football/teams/1606.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 3
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 3
                        },
                        {
                            "type": "Total Shots",
                            "value": 6
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 0
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 3
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 3
                        },
                        {
                            "type": "Fouls",
                            "value": 3
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 2
                        },
                        {
                            "type": "Offsides",
                            "value": 1
                        },
                        {
                            "type": "Ball Possession",
                            "value": "50%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": null
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 2
                        },
                        {
                            "type": "Total passes",
                            "value": 214
                        },
                        {
                            "type": "Passes accurate",
                            "value": 183
                        },
                        {
                            "type": "Passes %",
                            "value": "86%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "1.01"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                },
                {
                    "team": {
                        "id": 25484,
                        "name": "San Diego",
                        "logo": "https://media.api-sports.io/football/teams/25484.png"
                    },
                    "statistics": [
                        {
                            "type": "Shots on Goal",
                            "value": 3
                        },
                        {
                            "type": "Shots off Goal",
                            "value": 2
                        },
                        {
                            "type": "Total Shots",
                            "value": 7
                        },
                        {
                            "type": "Blocked Shots",
                            "value": 2
                        },
                        {
                            "type": "Shots insidebox",
                            "value": 6
                        },
                        {
                            "type": "Shots outsidebox",
                            "value": 1
                        },
                        {
                            "type": "Fouls",
                            "value": 5
                        },
                        {
                            "type": "Corner Kicks",
                            "value": 3
                        },
                        {
                            "type": "Offsides",
                            "value": 0
                        },
                        {
                            "type": "Ball Possession",
                            "value": "50%"
                        },
                        {
                            "type": "Yellow Cards",
                            "value": null
                        },
                        {
                            "type": "Red Cards",
                            "value": null
                        },
                        {
                            "type": "Goalkeeper Saves",
                            "value": 2
                        },
                        {
                            "type": "Total passes",
                            "value": 205
                        },
                        {
                            "type": "Passes accurate",
                            "value": 176
                        },
                        {
                            "type": "Passes %",
                            "value": "86%"
                        },
                        {
                            "type": "expected_goals",
                            "value": "0.56"
                        },
                        {
                            "type": "goals_prevented",
                            "value": 0
                        }
                    ]
                }
            ],
            "players": [
                {
                    "team": {
                        "id": 1606,
                        "name": "Real Salt Lake",
                        "logo": "https://media.api-sports.io/football/teams/1606.png",
                        "update": "2025-03-09T03:38:32+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 30443,
                                "name": "Rafael Cabral",
                                "photo": "https://media.api-sports.io/football/players/30443.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 1,
                                        "position": "G",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 1,
                                        "assists": null,
                                        "saves": 2
                                    },
                                    "passes": {
                                        "total": 25,
                                        "key": null,
                                        "accuracy": "20"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 32641,
                                "name": "Javain Brown",
                                "photo": "https://media.api-sports.io/football/players/32641.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 91,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 35,
                                        "key": null,
                                        "accuracy": "30"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51195,
                                "name": "Justen Glad",
                                "photo": "https://media.api-sports.io/football/players/51195.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 15,
                                        "position": "D",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 44,
                                        "key": null,
                                        "accuracy": "40"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": 1,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 351575,
                                "name": "Philip Quinton",
                                "photo": "https://media.api-sports.io/football/players/351575.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 26,
                                        "position": "D",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 28,
                                        "key": null,
                                        "accuracy": "26"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": 1,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 26649,
                                "name": "Alexandros Katranis",
                                "photo": "https://media.api-sports.io/football/players/26649.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 98,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 11,
                                        "key": 2,
                                        "accuracy": "9"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 413169,
                                "name": "Emeka Eneli",
                                "photo": "https://media.api-sports.io/football/players/413169.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 14,
                                        "position": "M",
                                        "rating": "6.3",
                                        "captain": true,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 12,
                                        "key": null,
                                        "accuracy": "12"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 70767,
                                "name": "Braian Ojeda",
                                "photo": "https://media.api-sports.io/football/players/70767.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 6,
                                        "position": "M",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 17,
                                        "key": null,
                                        "accuracy": "16"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 271983,
                                "name": "Dominik Marczuk",
                                "photo": "https://media.api-sports.io/football/players/271983.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 11,
                                        "position": "M",
                                        "rating": "7.2",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": 1,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 12,
                                        "key": 1,
                                        "accuracy": "8"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 312896,
                                "name": "Diego Luna",
                                "photo": "https://media.api-sports.io/football/players/312896.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 8,
                                        "position": "M",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 14,
                                        "key": 1,
                                        "accuracy": "10"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 19300,
                                "name": "Diogo Gonçalves",
                                "photo": "https://media.api-sports.io/football/players/19300.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 10,
                                        "position": "M",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 9,
                                        "key": 1,
                                        "accuracy": "7"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 406713,
                                "name": "Ariath Piol",
                                "photo": "https://media.api-sports.io/football/players/406713.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 23,
                                        "position": "F",
                                        "rating": "7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": 1,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": 1,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 7,
                                        "key": null,
                                        "accuracy": "5"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 102674,
                                "name": "Mason Stajduhar",
                                "photo": "https://media.api-sports.io/football/players/102674.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 31,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 212252,
                                "name": "Bode Hidalgo",
                                "photo": "https://media.api-sports.io/football/players/212252.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 19,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 79167,
                                "name": "Brayan Vera",
                                "photo": "https://media.api-sports.io/football/players/79167.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 4,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 265865,
                                "name": "Kobi Henry",
                                "photo": "https://media.api-sports.io/football/players/265865.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 3,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51090,
                                "name": "Sam Junqua",
                                "photo": "https://media.api-sports.io/football/players/51090.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 29,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 197557,
                                "name": "Nelson Palacio",
                                "photo": "https://media.api-sports.io/football/players/197557.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 13,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 207771,
                                "name": "Tyler Wolff",
                                "photo": "https://media.api-sports.io/football/players/207771.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 16,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 77183,
                                "name": "Lachlan Brook",
                                "photo": "https://media.api-sports.io/football/players/77183.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 17,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 459162,
                                "name": "Forster Ajago",
                                "photo": "https://media.api-sports.io/football/players/459162.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 27,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "team": {
                        "id": 25484,
                        "name": "San Diego",
                        "logo": "https://media.api-sports.io/football/teams/25484.png",
                        "update": "2025-03-09T03:38:32+00:00"
                    },
                    "players": [
                        {
                            "player": {
                                "id": 163200,
                                "name": "CJ dos Santos",
                                "photo": "https://media.api-sports.io/football/players/163200.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 1,
                                        "position": "G",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 1,
                                        "assists": null,
                                        "saves": 2
                                    },
                                    "passes": {
                                        "total": 16,
                                        "key": null,
                                        "accuracy": "16"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": 0
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 108594,
                                "name": "Jasper Loffelsend",
                                "photo": "https://media.api-sports.io/football/players/108594.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 19,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 17,
                                        "key": null,
                                        "accuracy": "10"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 7,
                                        "won": 4
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 1,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 47835,
                                "name": "Christopher McVey",
                                "photo": "https://media.api-sports.io/football/players/47835.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 97,
                                        "position": "D",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 26,
                                        "key": null,
                                        "accuracy": "21"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 19242,
                                "name": "Paddy McNair",
                                "photo": "https://media.api-sports.io/football/players/19242.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 17,
                                        "position": "D",
                                        "rating": "6.3",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 18,
                                        "key": null,
                                        "accuracy": "17"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 5385,
                                "name": "Franco Negri",
                                "photo": "https://media.api-sports.io/football/players/5385.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 22,
                                        "position": "D",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": 1,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 18,
                                        "key": null,
                                        "accuracy": "13"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 1,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 2977,
                                "name": "Aníbal Godoy",
                                "photo": "https://media.api-sports.io/football/players/2977.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 20,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 29,
                                        "key": null,
                                        "accuracy": "26"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": 1
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": 1
                                    },
                                    "fouls": {
                                        "drawn": 2,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 15855,
                                "name": "Jeppe Tverskov",
                                "photo": "https://media.api-sports.io/football/players/15855.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 6,
                                        "position": "M",
                                        "rating": "6.6",
                                        "captain": true,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 26,
                                        "key": null,
                                        "accuracy": "24"
                                    },
                                    "tackles": {
                                        "total": 3,
                                        "blocks": null,
                                        "interceptions": 2
                                    },
                                    "duels": {
                                        "total": 5,
                                        "won": 3
                                    },
                                    "dribbles": {
                                        "attempts": 1,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 19026,
                                "name": "Luca De La Torre",
                                "photo": "https://media.api-sports.io/football/players/19026.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 14,
                                        "position": "M",
                                        "rating": "6.9",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 15,
                                        "key": null,
                                        "accuracy": "13"
                                    },
                                    "tackles": {
                                        "total": 2,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 2,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 45017,
                                "name": "Anders Dreyer",
                                "photo": "https://media.api-sports.io/football/players/45017.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 10,
                                        "position": "F",
                                        "rating": "7.5",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 2,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 14,
                                        "key": 3,
                                        "accuracy": "14"
                                    },
                                    "tackles": {
                                        "total": 1,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 2
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 297577,
                                "name": "Tomás Ángel",
                                "photo": "https://media.api-sports.io/football/players/297577.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 9,
                                        "position": "F",
                                        "rating": "6.6",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": 1,
                                        "on": 1
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": 1,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 13,
                                        "key": 2,
                                        "accuracy": "12"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 4,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 1
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 1941,
                                "name": "Marcus Ingvartsen",
                                "photo": "https://media.api-sports.io/football/players/1941.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": 49,
                                        "number": 7,
                                        "position": "F",
                                        "rating": "6.7",
                                        "captain": false,
                                        "substitute": false
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": 13,
                                        "key": 1,
                                        "accuracy": "10"
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": 3,
                                        "won": 1
                                    },
                                    "dribbles": {
                                        "attempts": 2,
                                        "success": 1,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": 2
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51023,
                                "name": "Pablo Sisniega",
                                "photo": "https://media.api-sports.io/football/players/51023.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 13,
                                        "position": "G",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 406707,
                                "name": "Hamady Diop",
                                "photo": "https://media.api-sports.io/football/players/406707.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 5,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 418851,
                                "name": "Luca Bombino",
                                "photo": "https://media.api-sports.io/football/players/418851.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 27,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 508420,
                                "name": "Ian Pilcher",
                                "photo": "https://media.api-sports.io/football/players/508420.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 25,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 51060,
                                "name": "Emmanuel Boateng",
                                "photo": "https://media.api-sports.io/football/players/51060.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 24,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 39365,
                                "name": "Onni Valakari",
                                "photo": "https://media.api-sports.io/football/players/39365.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 8,
                                        "position": "M",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 265898,
                                "name": "Alejandro Alvarado Jr",
                                "photo": "https://media.api-sports.io/football/players/265898.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 70,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 341123,
                                "name": "Willy Kumado",
                                "photo": "https://media.api-sports.io/football/players/341123.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 2,
                                        "position": "D",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        },
                        {
                            "player": {
                                "id": 129712,
                                "name": "Alex Mighten",
                                "photo": "https://media.api-sports.io/football/players/129712.png"
                            },
                            "statistics": [
                                {
                                    "games": {
                                        "minutes": null,
                                        "number": 77,
                                        "position": "F",
                                        "rating": null,
                                        "captain": false,
                                        "substitute": true
                                    },
                                    "offsides": null,
                                    "shots": {
                                        "total": null,
                                        "on": null
                                    },
                                    "goals": {
                                        "total": null,
                                        "conceded": 0,
                                        "assists": null,
                                        "saves": null
                                    },
                                    "passes": {
                                        "total": null,
                                        "key": null,
                                        "accuracy": null
                                    },
                                    "tackles": {
                                        "total": null,
                                        "blocks": null,
                                        "interceptions": null
                                    },
                                    "duels": {
                                        "total": null,
                                        "won": null
                                    },
                                    "dribbles": {
                                        "attempts": null,
                                        "success": null,
                                        "past": null
                                    },
                                    "fouls": {
                                        "drawn": null,
                                        "committed": null
                                    },
                                    "cards": {
                                        "yellow": 0,
                                        "red": 0
                                    },
                                    "penalty": {
                                        "won": null,
                                        "commited": null,
                                        "scored": 0,
                                        "missed": 0,
                                        "saved": null
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "inPlayOdds": []
        }
    ]
}

//american-football
export const AFliveFixtures = {
    "success": true,
    "message": "live games retrieved successfully",
    "data": [
        {
            "leagueName": "NCAA",
            "season": 2024,
            "liveGames": [
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-21T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1737419400
                    },
                    "venue": {
                        "name": null,
                        "city": null
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        },
                        "away": {
                            "name": "Ohio State",
                            "logo": "https://media.api-sports.io/american-football/teams/107.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 0,
                            "quarter_3": 8,
                            "quarter_4": 8,
                            "overtime": null,
                            "total": 23
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 21,
                            "quarter_3": 10,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 34
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3135",
                    "gameId": 14353,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-11T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1736555400
                    },
                    "venue": {
                        "name": "AT&T Stadium",
                        "city": "Arlington"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Texas",
                            "logo": "https://media.api-sports.io/american-football/teams/195.png"
                        },
                        "away": {
                            "name": "Ohio State",
                            "logo": "https://media.api-sports.io/american-football/teams/107.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 14
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 28
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3134",
                    "gameId": 14352,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-10T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1736469000
                    },
                    "venue": {
                        "name": "Hard Rock Stadium",
                        "city": "Miami Gardens"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Penn State",
                            "logo": "https://media.api-sports.io/american-football/teams/78.png"
                        },
                        "away": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 10,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 24
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 17,
                            "overtime": null,
                            "total": 27
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3133",
                    "gameId": 14351,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-07T00:00:00.000Z",
                        "time": "00:00",
                        "timestamp": 1736208000
                    },
                    "venue": {
                        "name": "Toyota Stadium",
                        "city": "Frisco"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Montana State",
                            "logo": "https://media.api-sports.io/american-football/teams/253.png"
                        },
                        "away": {
                            "name": "North Dakota State",
                            "logo": "https://media.api-sports.io/american-football/teams/254.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 15,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 32
                        },
                        "away": {
                            "quarter_1": 14,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 35
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3132",
                    "gameId": 15081,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FCS (Division I-AA)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-06T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736125200
                    },
                    "venue": {
                        "name": "Shell Energy Stadium",
                        "city": "Houston"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "North Central College",
                            "logo": "https://media.api-sports.io/american-football/teams/860.png"
                        },
                        "away": {
                            "name": "Mount Union",
                            "logo": "https://media.api-sports.io/american-football/teams/520.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 20,
                            "overtime": null,
                            "total": 41
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 8,
                            "overtime": null,
                            "total": 25
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc3131",
                    "gameId": 17274,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "All Division II/III",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-04T00:00:00.000Z",
                        "time": "00:30",
                        "timestamp": 1735950600
                    },
                    "venue": {
                        "name": "Bank of America Stadium",
                        "city": "Charlotte"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Virginia Tech",
                            "logo": "https://media.api-sports.io/american-football/teams/97.png"
                        },
                        "away": {
                            "name": "Minnesota",
                            "logo": "https://media.api-sports.io/american-football/teams/85.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 0,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 10
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 21,
                            "quarter_3": 0,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 24
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312e",
                    "gameId": 14349,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-04T00:00:00.000Z",
                        "time": "16:00",
                        "timestamp": 1736006400
                    },
                    "venue": {
                        "name": "Thomas A. Robinson National Stadium",
                        "city": "Nassau"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Liberty",
                            "logo": "https://media.api-sports.io/american-football/teams/179.png"
                        },
                        "away": {
                            "name": "Buffalo State",
                            "logo": "https://media.api-sports.io/american-football/teams/141.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 0,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 7
                        },
                        "away": {
                            "quarter_1": 6,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 26
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312f",
                    "gameId": 14350,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-03T00:00:00.000Z",
                        "time": "21:00",
                        "timestamp": 1735938000
                    },
                    "venue": {
                        "name": "Gerald J. Ford Stadium",
                        "city": "Dallas"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Texas State",
                            "logo": "https://media.api-sports.io/american-football/teams/165.png"
                        },
                        "away": {
                            "name": "North Texas",
                            "logo": "https://media.api-sports.io/american-football/teams/58.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 6,
                            "quarter_2": 10,
                            "quarter_3": 7,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 30
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 28
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312d",
                    "gameId": 17269,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-03T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1735866000
                    },
                    "venue": {
                        "name": "EverBank Stadium",
                        "city": "Jacksonville"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Ole Miss",
                            "logo": "https://media.api-sports.io/american-football/teams/131.png"
                        },
                        "away": {
                            "name": "Duke",
                            "logo": "https://media.api-sports.io/american-football/teams/99.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 14,
                            "quarter_2": 10,
                            "quarter_3": 14,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 52
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 13,
                            "overtime": null,
                            "total": 20
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312c",
                    "gameId": 14348,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-02T00:00:00.000Z",
                        "time": "21:00",
                        "timestamp": 1735851600
                    },
                    "venue": {
                        "name": "Caesars Superdome",
                        "city": "New Orleans"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 2,
                        "name": "NCAA",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/2.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Georgia",
                            "logo": "https://media.api-sports.io/american-football/teams/109.png"
                        },
                        "away": {
                            "name": "Notre Dame",
                            "logo": "https://media.api-sports.io/american-football/teams/108.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 7,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 10
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 13,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc051e554c46ce8fc312b",
                    "gameId": 14347,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:18.843Z",
                    "stage": "FBS (Division I-A)",
                    "updatedAt": "2025-02-25T13:45:16.206Z",
                    "week": "Bowls"
                }
            ]
        },
        {
            "leagueName": "NFL",
            "season": 2024,
            "liveGames": [
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-02-09T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1739143800
                    },
                    "venue": {
                        "name": "Caesars Superdome",
                        "city": "New Orleans"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 17,
                            "quarter_3": 10,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 40
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 6,
                            "quarter_4": 16,
                            "overtime": null,
                            "total": 22
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3284",
                    "gameId": 13466,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Super Bowl"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-26T00:00:00.000Z",
                        "time": "20:00",
                        "timestamp": 1737921600
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 14,
                            "quarter_2": 13,
                            "quarter_3": 7,
                            "quarter_4": 21,
                            "overtime": null,
                            "total": 55
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 12,
                            "quarter_3": 8,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3281",
                    "gameId": 13465,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Conference Championships"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-26T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1737934200
                    },
                    "venue": {
                        "name": "GEHA Field at Arrowhead Stadium",
                        "city": "Kansas City"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        },
                        "away": {
                            "name": "Buffalo Bills",
                            "logo": "https://media.api-sports.io/american-football/teams/20.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 0,
                            "quarter_4": 11,
                            "overtime": null,
                            "total": 32
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 13,
                            "quarter_3": 6,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 29
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3282",
                    "gameId": 13464,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Conference Championships"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "23:30",
                        "timestamp": 1737329400
                    },
                    "venue": {
                        "name": "Highmark Stadium",
                        "city": "Orchard Park"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Buffalo Bills",
                            "logo": "https://media.api-sports.io/american-football/teams/20.png"
                        },
                        "away": {
                            "name": "Baltimore Ravens",
                            "logo": "https://media.api-sports.io/american-football/teams/5.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 0,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 27
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 9,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 25
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc3280",
                    "gameId": 13462,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1737248400
                    },
                    "venue": {
                        "name": "Ford Field",
                        "city": "Detroit"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Detroit Lions",
                            "logo": "https://media.api-sports.io/american-football/teams/7.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 7,
                            "quarter_2": 14,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 31
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 28,
                            "quarter_3": 0,
                            "quarter_4": 14,
                            "overtime": null,
                            "total": 45
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327e",
                    "gameId": 13461,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-19T00:00:00.000Z",
                        "time": "20:00",
                        "timestamp": 1737316800
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Los Angeles Rams",
                            "logo": "https://media.api-sports.io/american-football/teams/31.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 13,
                            "quarter_2": 0,
                            "quarter_3": 3,
                            "quarter_4": 12,
                            "overtime": null,
                            "total": 28
                        },
                        "away": {
                            "quarter_1": 7,
                            "quarter_2": 3,
                            "quarter_3": 5,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 22
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327f",
                    "gameId": 13463,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-18T00:00:00.000Z",
                        "time": "21:30",
                        "timestamp": 1737235800
                    },
                    "venue": {
                        "name": "GEHA Field at Arrowhead Stadium",
                        "city": "Kansas City"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Kansas City Chiefs",
                            "logo": "https://media.api-sports.io/american-football/teams/17.png"
                        },
                        "away": {
                            "name": "Houston Texans",
                            "logo": "https://media.api-sports.io/american-football/teams/26.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 6,
                            "quarter_2": 7,
                            "quarter_3": 0,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 23
                        },
                        "away": {
                            "quarter_1": 3,
                            "quarter_2": 3,
                            "quarter_3": 6,
                            "quarter_4": 2,
                            "overtime": null,
                            "total": 14
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327d",
                    "gameId": 13460,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Divisional Round"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-14T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736816400
                    },
                    "venue": {
                        "name": "State Farm Stadium",
                        "city": "Glendale"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Los Angeles Rams",
                            "logo": "https://media.api-sports.io/american-football/teams/31.png"
                        },
                        "away": {
                            "name": "Minnesota Vikings",
                            "logo": "https://media.api-sports.io/american-football/teams/32.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 10,
                            "quarter_2": 14,
                            "quarter_3": 3,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 27
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 3,
                            "quarter_3": 6,
                            "quarter_4": 0,
                            "overtime": null,
                            "total": 9
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327c",
                    "gameId": 17278,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-13T00:00:00.000Z",
                        "time": "01:00",
                        "timestamp": 1736730000
                    },
                    "venue": {
                        "name": "Raymond James Stadium",
                        "city": "Tampa"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Tampa Bay Buccaneers",
                            "logo": "https://media.api-sports.io/american-football/teams/24.png"
                        },
                        "away": {
                            "name": "Washington Commanders",
                            "logo": "https://media.api-sports.io/american-football/teams/18.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 3,
                            "quarter_2": 7,
                            "quarter_3": 7,
                            "quarter_4": 3,
                            "overtime": null,
                            "total": 20
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 10,
                            "quarter_3": 3,
                            "quarter_4": 10,
                            "overtime": null,
                            "total": 23
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327b",
                    "gameId": 13459,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                },
                {
                    "date": {
                        "timezone": "UTC",
                        "date": "2025-01-12T00:00:00.000Z",
                        "time": "21:30",
                        "timestamp": 1736717400
                    },
                    "venue": {
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia"
                    },
                    "status": {
                        "short": "FT",
                        "long": "Finished",
                        "timer": null
                    },
                    "league": {
                        "country": {
                            "name": "USA",
                            "code": "US",
                            "flag": "https://media.api-sports.io/flags/us.svg"
                        },
                        "leagueId": 1,
                        "name": "NFL",
                        "season": 2024,
                        "logo": "https://media.api-sports.io/american-football/leagues/1.png"
                    },
                    "teams": {
                        "home": {
                            "name": "Philadelphia Eagles",
                            "logo": "https://media.api-sports.io/american-football/teams/12.png"
                        },
                        "away": {
                            "name": "Green Bay Packers",
                            "logo": "https://media.api-sports.io/american-football/teams/15.png"
                        }
                    },
                    "scores": {
                        "home": {
                            "quarter_1": 10,
                            "quarter_2": 0,
                            "quarter_3": 6,
                            "quarter_4": 6,
                            "overtime": null,
                            "total": 22
                        },
                        "away": {
                            "quarter_1": 0,
                            "quarter_2": 0,
                            "quarter_3": 3,
                            "quarter_4": 7,
                            "overtime": null,
                            "total": 10
                        }
                    },
                    "_id": "67bdc065e554c46ce8fc327a",
                    "gameId": 17277,
                    "__v": 0,
                    "createdAt": "2025-02-25T13:06:44.043Z",
                    "stage": "Post Season",
                    "updatedAt": "2025-02-25T13:47:16.731Z",
                    "week": "Wild Card"
                }
            ]
        }
    ]
}