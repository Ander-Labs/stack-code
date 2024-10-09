import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardSponsors() {
  return (
    <>
      <Card
        className="py-4 md:py-1 px-4 md:px-2"
        x-chunk="dashboard-02-chunk-0"
      >
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>Patrocinar Stack Code</CardTitle>
          <CardDescription>
            Unete a nuetras comunidad de patrocinadores y brindanos tu apoyo
            para seguir creado y desarrollando proyectos open source.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <iframe
            src="https://github.com/sponsors/Ander-Labs/button"
            title="Sponsor Ander-Labs"
            height="32"
            width="114"
            className="border: 0; border-radius: 6px;"
          ></iframe>
        </CardContent>
      </Card>
    </>
  );
}
