import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/datatools-team.png";

export default {
  title: "Datatools S.A",
  theme: "dark",
  tags: ["dotnet", "csharp", "java", "sqlserver", "oracle", "postgresql", "azure"],
  description:
    "Desarrollador Backend en el Sector Financiero (Ene 2022 – Mar 2024).<br/><br/>Desarrollo y mantenimiento de aplicaciones críticas para el sector financiero usando .NET (C#) y Java, asegurando la integridad de datos para más de 10,000 usuarios.<br/>Optimización de consultas complejas en SQL Server y Oracle (Stored Procedures), reduciendo el tiempo de procesamiento de reportes en un 15%.<br/>Creación de servicios ETL automatizados en Azure Data Factory, mejorando la eficiencia de sincronización de datos en un 20%.<br/>Desarrollo de APIs REST para la interconexión de sistemas internos y externos soportando más de 5,000 peticiones diarias, y participación en la migración de módulos PHP a .NET Core.",
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
