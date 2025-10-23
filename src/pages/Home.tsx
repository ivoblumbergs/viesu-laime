import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, TreePine, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-guesthouse.jpg";
import roomPine from "@/assets/room-pine.jpg";
import roomLinden from "@/assets/room-linden.jpg";
import commonArea from "@/assets/common-area.jpg";

const HomePage = () => {
  const features = [
    {
      icon: Home,
      title: "Mājīgas istabas",
      description:
        "Komfortabli aprīkotas istabas ar tradicionālu latviešu atmosfēru",
    },
    {
      icon: TreePine,
      title: "Dabas tuvums",
      description: "Atrodamies skaistas dabas ielokā, priežu mežu vidū",
    },
    {
      icon: Heart,
      title: "Tradicionālā viesmīlība",
      description: "Sirsnīga latviešu lauku viesmīlība un ērtības",
    },
    {
      icon: Sparkles,
      title: "Aktivitātes apkārtnē",
      description: "Pārgājieni, velobraukšana un dabas baudīšana",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Meža Māja
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-medium drop-shadow-md">
            Jūsu mājīgais stūrītis Latvijas dabā
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md opacity-90">
            Baudiet mieru, komfortu un autentisku latviešu viesmīlību
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/istabas">Apskatīt istabas</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/kontakti">Rezervēt tagad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Laipni lūgti mūsu viesu namā!
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Esam priecīgi uzņemt jūs mūsu mājīgajā stūrītī, kas atrodas
              skaistā Latvijas lauku ainavā. Mūsu viesu nams piedāvā mierīgu
              atpūtu dabas klēpī, vienlaikus saglabājot visas mūsdienu ērtības.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Baudiet Latvijas viesmīlību, tradicionālo atmosfēru un
              neaizmirstamus piedzīvojumus dabā. Meža Māja ir perfekta vieta,
              kur atslēgties no ikdienas steigas un atjaunoties.
            </p>
          </div>
        </div>
      </section>

      <div className="folk-pattern-divider" />

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Kāpēc izvēlēties mūs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift bg-card">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Mūsu piedāvājums
        </h2>
        <p className="text-lg text-muted-foreground">
          Atpūta, relaksācija un piedzīvojumi gaida jūs Meža Mājas viesu namā.
        </p>
      </div>

      <div className="folk-pattern-divider" />

      {/* Gallery Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Apskatiet mūsu viesu namu
            </h2>
            <p className="text-lg text-muted-foreground">
              Mājīgas istabas un skaista apkārtne jūsu atpūtai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative h-80 rounded-lg overflow-hidden hover-lift group">
              <img
                src={roomPine}
                alt="Priežu istaba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-xl font-bold p-4">
                  Priežu istaba
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden hover-lift group">
              <img
                src={roomLinden}
                alt="Liepas istaba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-xl font-bold p-4">
                  Liepas istaba
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden hover-lift group">
              <img
                src={commonArea}
                alt="Kopīgā telpa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-xl font-bold p-4">Kopīgā telpa</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/galerija">Skatīt vairāk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gatavi pieredzēt īsto latviešu viesmīlību?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Rezervējiet savu uzturēšanos jau šodien un izbaudiet neaizmirstamu
            atpūtu dabā!
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/kontakti">Sazināties ar mums</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
