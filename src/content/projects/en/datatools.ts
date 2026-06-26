import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/datatools-team.png";

export default {
  title: "Datatools S.A",
  theme: "dark",
  tags: ["dotnet", "csharp", "java", "sqlserver", "oracle", "postgresql", "azure"],
  description:
    "Backend Developer in the Financial Sector (Jan 2022 – Mar 2024).<br/><br/>Developed and maintained critical applications for the financial sector using .NET (C#) and Java, ensuring data integrity for over 10,000 users.<br/>Optimized complex SQL Server and Oracle queries (Stored Procedures), reducing report processing time by 15%.<br/>Created automated ETL services in Azure Data Factory, improving data synchronization efficiency by 20%.<br/>Developed REST APIs for interconnecting internal and external systems supporting over 5,000 daily requests.<br/>Participated in migrating PHP modules to .NET Core and reduced legacy technical debt by 30% through progressive refactoring.",
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
