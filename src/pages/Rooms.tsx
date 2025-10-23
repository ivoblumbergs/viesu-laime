import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Tv, Coffee, Eye, User } from "lucide-react";
import roomPine from "@/assets/room-pine.jpg";
import roomLinden from "@/assets/room-linden.jpg";

interface Room {
  name: string;
  image: string;
  description: string;
  size: string;
  beds: string;
  capacity: string;
  price: string;
  amenities: string[];
}

const RoomsPage = () => {
  const rooms: Room[] = [
    {
      name: "Priežu istaba",
      image: roomPine,
      description:
        "Mūsu mājīgākā telpa ar skatu uz mežu. Istabā atrodas ērta divguļamā gulta, privāta vannas istaba un sēdvieta pie loga, kur baudīt rīta kafiju. Istabas nosaukums nav nejaušs – priedes, kas redzamas no loga, piešķir telpai sevišķu mieru un saikni ar dabu.",
      size: "25 m²",
      beds: "Divguļamā gulta",
      capacity: "2 viesi",
      price: "70",
      amenities: ["Privāta vannas istaba", "WiFi", "TV", "Skats uz mežu", "Kafijas un tējas iekārtas"],
    },
    {
      name: "Liepas istaba",
      image: roomLinden,
      description:
        "Mājīga un silta istaba ar tradicionāliem latviešu tekstiliem un dabīgiem materiāliem. Perfekti piemērota vienam vai diviem viesiem. Liepas koka akcenti un siltas krāsas rada īpaši patīkamu atmosfēru atpūtai.",
      size: "20 m²",
      beds: "Divguļamā gulta",
      capacity: "1-2 viesi",
      price: "60",
      amenities: ["Privāta vannas istaba", "WiFi", "Apkure", "Dabas skati", "Darba zona"],
    },
  ];

  const AmenityIcon = ({ amenity }: { amenity: string }) => {
    if (amenity.includes("WiFi")) return <Wifi className="w-4 h-4" />;
    if (amenity.includes("TV")) return <Tv className="w-4 h-4" />;
    if (amenity.includes("Kafijas")) return <Coffee className="w-4 h-4" />;
    if (amenity.includes("Skats") || amenity.includes("skati")) return <Eye className="w-4 h-4" />;
    return <User className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 folk-pattern-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Istabas un cenas
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in">
            Izvēlieties savu perfekto istabu mierīgai atpūtai dabas vidū
          </p>
        </div>
      </section>

      <div className="folk-pattern-divider" />

      {/* Rooms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {rooms.map((room, index) => (
              <Card
                key={room.name}
                className={`overflow-hidden hover-lift animate-scale-in ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Image */}
                  <div
                    className={`relative h-80 lg:h-auto ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 lg:p-8 flex flex-col justify-between ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-3xl text-foreground">{room.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {room.description}
                        </p>

                        {/* Room Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-muted-foreground">Lielums</p>
                            <p className="font-semibold text-foreground">{room.size}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Gultas</p>
                            <p className="font-semibold text-foreground">{room.beds}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Ietilpība</p>
                            <p className="font-semibold text-foreground">{room.capacity}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Cena</p>
                            <p className="font-semibold text-primary text-xl">
                              No €{room.price}/nakts
                            </p>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-6">
                          <p className="text-sm font-semibold text-foreground mb-3">Ērtības</p>
                          <div className="flex flex-wrap gap-2">
                            {room.amenities.map((amenity) => (
                              <Badge
                                key={amenity}
                                variant="secondary"
                                className="flex items-center gap-1.5 px-3 py-1"
                              >
                                <AmenityIcon amenity={amenity} />
                                <span className="text-xs">{amenity}</span>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                      <Button asChild variant="hero" className="w-full" size="lg">
                        <Link to="/kontakti">Rezervēt šo istabu</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="mt-12 bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Papildu informācija par cenām
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Brokastis iekļautas cenā</li>
                <li>• Minimālais uzturēšanās laiks: 2 naktis nedēļas nogalēs</li>
                <li>• Atlaides ilgstošai uzturēšanai (5+ naktis): 10%</li>
                <li>• Iebraukšana: 15:00 | Izbraukšana: 11:00</li>
                <li>• Maksājums: skaidra nauda, bankas pārskaitījums</li>
                <li>• Rezervācijai nepieciešams avanss 30%</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
