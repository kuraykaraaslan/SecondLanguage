import NextAuth from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/libs/firestore"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
})