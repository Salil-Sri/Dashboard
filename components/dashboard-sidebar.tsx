"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/sidebar-provider"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { open, setOpen, isMobile } = useSidebar()

  const routes = [
    {
      label: "Details",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
  ]

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[240px] p-0">
          <div className="flex flex-col h-full py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
              <div className="space-y-1">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                      route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className={cn("hidden md:flex md:flex-col h-screen w-[240px] border-r bg-background", !open && "md:w-[70px]")}>
      <div className="flex flex-col h-full py-4">
        <div className="px-3 py-2">
          {open && <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>}
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
                  route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  !open && "justify-center",
                )}
              >
                <route.icon className="h-5 w-5" />
                {open && route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

