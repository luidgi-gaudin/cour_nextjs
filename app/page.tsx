import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <div className="p-8 font-sans">
        <h1 className="text-4xl font-bold mb-4">Luidgi Gaudin</h1>
        <p className="text-lg mb-2">Age: 19 ans</p>
        <p className="text-lg mb-6">Formation: BTS SIO</p>
          <Button variant="outline" size="lg" className="mb-4">Contactez-moi</Button>
      </div>
  );
}
