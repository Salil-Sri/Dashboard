import AuthForm from "@/components/auth-form"

export default function Home() {
 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
}

