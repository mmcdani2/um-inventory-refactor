import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const { userId } = await auth()

    if (!userId) {
        redirect("/sign-in")
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p>You are signed in.</p>
        </div>
    )
}
