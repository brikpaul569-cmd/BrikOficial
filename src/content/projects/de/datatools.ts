import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/datatools-team.png";

export default {
  title: "Datatools S.A",
  theme: "dark",
  tags: ["dotnet", "csharp", "java", "postgresql", "azure"],
  description:
    "Backend Developer im Finanzsektor (Jan 2022 – Mär 2024).<br/><br/>Entwicklung und Wartung kritischer Anwendungen für den Finanzsektor mit .NET (C#) und Java, Gewährleistung der Datenintegrität für über 10.000 Benutzer.<br/>Optimierung komplexer SQL Server- und Oracle-Abfragen (Stored Procedures), wodurch die Berichtsverarbeitungszeit um 15% reduziert wurde.<br/>Erstellung automatisierter ETL-Dienste in Azure Data Factory, wodurch die Effizienz der Datensynchronisation um 20% verbessert wurde.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image,
        contain: true,
      },
    },
  ],
  live: "https://www.linkedin.com/company/data-tools-s-a-/?originalSubdomain=co",
} as const satisfies ProjectContent;
