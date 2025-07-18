import { signIn } from "@/app/api/auth/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit">SignIn</button>
    </form>
  )
} 