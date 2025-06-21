import { SignedIn, SignedOut, SignInButton,  } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { PenBoxIcon } from "lucide-react"
import UserMenu from "./user-menu"


const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl text-white font-extrabold cursor-pointer">WorkFlowX Manager⚙️🛠️</h1>
                </Link>

            <div className="flex items-center gap-4">
                <Link href="/project/create">
                    <Button variant="destructive" className="flex items-center gap-2 cursor-pointer">
                    <PenBoxIcon size={19} />
                        <span>Create Project</span>
                    </Button>
                </Link>               

                <SignedOut>
                    <SignInButton forceRedirectUrl="/onboarding">
                    <Button className="cursor-pointer">Login</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                   <UserMenu/>
                </SignedIn>
            </div>
            </nav>
            
        </header>
    )
}

export default Header