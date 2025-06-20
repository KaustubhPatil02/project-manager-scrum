import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { PenBoxIcon } from "lucide-react"


const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl text-white font-extrabold">Workflow Manager⚙️🛠️</h1>
                </Link>

            <div className="flex items-center gap-4">
                <Link href="/project/create">
                    <Button variant="destructive" className="flex items-center gap-2">
                    <PenBoxIcon size={19} />
                        <span>Create Project</span>
                    </Button>
                </Link>               

                <SignedOut>
                    <SignInButton forceRedirectUrl="/onboarding">
                    <Button>Login</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            </nav>
            
        </header>
    )
}

export default Header