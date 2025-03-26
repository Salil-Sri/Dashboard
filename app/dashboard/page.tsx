import { DashboardShell } from "@/components/dashboard-shell"
import { DataTable } from "@/components/data-table"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Details</h1>
          <p className="text-muted-foreground">View and manage your data with advanced filtering and sorting.</p>
        </div>
        <DataTable />
      </div>
    </DashboardShell>
  )
}

