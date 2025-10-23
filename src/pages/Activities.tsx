import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bike, Footprints, TreePine, Waves, Mountain, Leaf } from "lucide-react";
import activityHiking from "@/assets/activity-hiking.jpg";
import activityCycling from "@/assets/activity-cycling.jpg";
import natureForest from "@/assets/nature-forest.jpg";
import natureMeadow from "@/assets/nature-meadow.jpg";

interface Activity {
  title: string;
  description: string;
  image: string;
  distance: string;
  season: string[];
  icon: any;
}

const ActivitiesPage = () => {
  const activities: Activity[] = [
    {
      title: "Pārgājieni",
      description:
        "Apkārtne ir ideāla pārgājienu cienītājiem. Tikai 2 km attālumā sākas Gaujas Nacionālā parka taka, kas ved cauri senām priežu mežiem un piedāvā elpdzeju aizraujošus skatus. Pavasarī ceļu gar taku rotā meža ziedi, bet rudenī tā pārvēršas par zelta un sarkanbrūnu krāsu pasaku.",
      image: activityHiking,
      distance: "2 km no viesu nama",
      season: ["Pavasaris", "Vasara", "Rudens"],
      icon: Footprints,
    },
    {
      title: "Velobraukšana",
      description:
        "Izbaudiet skaistas lauku ainavas un klusās ceļus ar velosipēdu. Piedāvājam vairākus maršrutus dažādiem sagatavotības līmeņiem – no mierīgām pastaigām pa līdzenu apvidu līdz izaicinošākiem kalnainiem maršrutiem.",
      image: activityCycling,
      distance: "Maršruti sākas pie viesu nama",
      season: ["Pavasaris", "Vasara", "Rudens"],
      icon: Bike,
    },
    {
      title: "Meža izziņa",
      description:
        "Iepazīstiet Latvijas mežu daudzpusību – sēņošana, ogošana un putnu vērošana. Mūsu saimnieki ar prieku dalīsies zināšanās par labākajām vietām un pareizajiem laikiem šīm aktivitātēm.",
      image: natureForest,
      distance: "Tieši pie viesu nama",
      season: ["Vasara", "Rudens"],
      icon: TreePine,
    },
    {
      title: "Atpūta pie ūdens",
      description:
        "Tuvumā atrodas vairāki dzidrūdeņi ezeri, kas piemēroti peldēšanai un atpūtai. Vasarā baudiet atsvaidzinošu peldi, bet citās sezonās – mierīgas pastaigas gar krastu.",
      image: natureMeadow,
      distance: "5 km no viesu nama",
      season: ["Vasara"],
      icon: Waves,
    },
  ];

  const nearbyAttractions = [
    {
      name: "Siguldas pilsdrupas",
      distance: "15 km",
      icon: Mountain,
    },
    {
      name: "Gaujas Nacionālais parks",
      distance: "2 km",
      icon: Leaf,
    },
    {
      name: "Turaidas muzejrezervāts",
      distance: "18 km",
      icon: Mountain,
    },
  ];

  const getSeasonColor = (season: string) => {
    const colors: { [key: string]: string } = {
      Pavasaris: "bg-green-100 text-green-800",
      Vasara: "bg-yellow-100 text-yellow-800",
      Rudens: "bg-orange-100 text-orange-800",
      Ziema: "bg-blue-100 text-blue-800",
    };
    return colors[season] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 folk-pattern-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Aktivitātes un Apskates vietas
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in">
            Izbaudiet dažādas aktivitātes skaistajā Latvijas dabā
          </p>
        </div>
      </section>

      <div className="folk-pattern-divider" />

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Dabas aktivitātes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={activity.title} className="overflow-hidden hover-lift animate-scale-in">
                <div className="relative h-64">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <activity.icon size={24} />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{activity.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{activity.distance}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activity.season.map((season) => (
                      <Badge key={season} className={getSeasonColor(season)}>
                        {season}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="folk-pattern-divider" />

      {/* Nearby Attractions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Tuvākās apskates vietas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nearbyAttractions.map((attraction) => (
              <Card key={attraction.name} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <attraction.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{attraction.name}</h3>
                  <p className="text-muted-foreground">{attraction.distance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Lifestyle */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-foreground">
                Vietējā dzīvesveida pieredze
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Lauku saimniecības</h3>
                <p>
                  Apmeklējiet vietējās lauku saimniecības un izbaudiet svaigu piena produkciju,
                  mājas sieru un citus labumus. Uzziniet par tradicionālajām latviešu
                  lauksaimniecības metodēm.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Amatnieku darbnīcas</h3>
                <p>
                  Tuvumā atrodas vairākas amatnieku darbnīcas, kur varat vērot un pat piedalīties
                  keramikas, koka apstrādes vai tekstiliju veidošanā.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Tradicionālā pirts</h3>
                <p>
                  Izbaudiet īstu latviešu pirts pieredzi. Pēc iepriekšēja pieteikuma mēs varam
                  organizēt tradicionālu pirti ar vihtu un atspirdzinošu ūdeni.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
