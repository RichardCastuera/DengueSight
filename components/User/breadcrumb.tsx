"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Map raw segments to nicer labels
const labelMap: Record<string, string> = {
  user: "User Dashboard",
  provinces: "Provinces",
};

function prettifySegment(segment: string) {
  // Use mapping if available
  if (labelMap[segment]) return labelMap[segment];

  // Otherwise decode and capitalize
  const decoded = decodeURIComponent(segment);
  return decoded.charAt(0).toUpperCase() + decoded.slice(1);
}

export function DynamicBreadcrumb() {
  const pathname = usePathname(); // e.g. "/user/provinces/camarines-norte"
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <BreadcrumbItem key={href}>
              {isLast ? (
                <BreadcrumbPage>{prettifySegment(segment)}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink asChild>
                    <Link href={href}>{prettifySegment(segment)}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
