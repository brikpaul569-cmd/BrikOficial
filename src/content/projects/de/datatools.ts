import type { ProjectContent } from "../../types";
import image from "../../../assets/images/projects/datatools-team.png";

export default {
  title: "Datatools S.A",
  theme: "dark",
  tags: ["dotnet", "csharp", "java", "postgresql", "azure"],
  description:
    "Backend Developer in the Financial Sector (Jan 2022 – Mar 2024).<br/><br/>Developed and maintained critical applications for the financial sector using .NET (C#) and Java, ensuring data integrity for over 10,000 users.<br/>Optimized complex SQL Server and Oracle queries (Stored Procedures), reducing report processing time by 15%.<br/>Created automated ETL services in Azure Data Factory, improving data synchronization efficiency by 20%.",
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
