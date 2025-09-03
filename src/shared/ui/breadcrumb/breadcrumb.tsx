import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItem {
  label: string
  href?: string
  isCurrent?: boolean
}

interface BreadcrumbWithCustomSeparatorProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

export default function BreadcrumbWithCustomSeparator({ 
  items, 
  separator, 
  className = "" 
}: BreadcrumbWithCustomSeparatorProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            
            {/*  разделитель если это не последний */}
            {index < items.length - 1 && (
              <BreadcrumbSeparator>
                {separator || <>/</>}
              </BreadcrumbSeparator>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}