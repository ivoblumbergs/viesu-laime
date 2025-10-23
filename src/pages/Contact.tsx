import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    arrival: "",
    departure: "",
    guests: "",
    room: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.arrival || !formData.departure) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus!");
      return;
    }

    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    toast.success("Jūsu pieprasījums ir nosūtīts! Mēs ar Jums sazināsimies 24 stundu laikā.");
    
    // Reset form
    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      arrival: "",
      departure: "",
      guests: "",
      room: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 folk-pattern-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Rezervācija un Kontakti
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90 animate-fade-in">
            Sazinaties ar mums, lai rezervētu savu uzturēšanos
          </p>
        </div>
      </section>

      <div className="folk-pattern-divider" />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Rezervējiet savu uzturēšanos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Vārds <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jānis"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="surname">
                          Uzvārds <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="surname"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          required
                          placeholder="Bērziņš"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          E-pasts <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="janis@piemers.lv"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Tālrunis</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+371 20123456"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="arrival">
                          Ierašanās datums <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="arrival"
                          name="arrival"
                          type="date"
                          value={formData.arrival}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="departure">
                          Izbraukšanas datums <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="departure"
                          name="departure"
                          type="date"
                          value={formData.departure}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guests">Viesu skaits</Label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Izvēlieties...</option>
                          <option value="1">1 viesis</option>
                          <option value="2">2 viesi</option>
                          <option value="3">3 viesi</option>
                          <option value="4">4 viesi</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="room">Istabas tips</Label>
                        <select
                          id="room"
                          name="room"
                          value={formData.room}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Izvēlieties...</option>
                          <option value="pine">Priežu istaba</option>
                          <option value="linden">Liepas istaba</option>
                          <option value="any">Jebkura pieejama</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Ziņojums</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Vai jums ir kādi īpaši pieprasījumi?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Nosūtīt pieprasījumu
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Kontaktinformācija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Tālrunis</p>
                      <a
                        href="tel:+37120123456"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +371 20 123 456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">E-pasts</p>
                      <a
                        href="mailto:info@mezamaja.lv"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@mezamaja.lv
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Adrese</p>
                      <p className="text-muted-foreground">
                        Meža iela 1<br />
                        LV-1234 Sigulda<br />
                        Latvija
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Darba laiks</p>
                      <p className="text-muted-foreground">
                        Katru dienu: 9:00 - 20:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Iebraukšana</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Iebraukšanas laiks</p>
                    <p>15:00 - 20:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Izbraukšanas laiks</p>
                    <p>Līdz 11:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rezervācija</p>
                    <p>Nepieciešams avanss 30%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Kā mūs atrast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">
                    [Šeit būtu Google Maps karte ar viesu nama atrašanās vietu]
                  </p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Braukšanas norādījumi</p>
                  <p className="text-sm text-muted-foreground">
                    No Rīgas: Brauciet pa A2 šoseju virzienā uz Siguldu. Pēc Siguldas pagriezieties
                    pa ceļu uz Gaujas Nacionālo parku. Sekojiet norādēm uz "Meža Māja" (aptuveni
                    50 km, 45 minūtes no Rīgas).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
