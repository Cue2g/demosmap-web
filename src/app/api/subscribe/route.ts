import { insertSubscription, checkEmailExists } from "@/app/lib/db";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return new Response("Invalid email", { status: 400 });
        }

        if (await checkEmailExists(email)) {
            return new Response("Email already exists", { status: 409 });
        }

        const result = await insertSubscription(email);

        return new Response(JSON.stringify(result), { status: 201 });
    } catch (err) {
        console.error(err);
        return new Response("Server error", { status: 500 });
    }
}
