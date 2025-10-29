import { sql } from "@vercel/postgres";

export async function insertSubscription(email: string) {
    try {
        const result = await sql`
      INSERT INTO subscriptions (email, createAt)
      VALUES (${email}, NOW())
      RETURNING *;
    `;
        return result.rows[0];
    } catch (err) {
        console.error("Error inserting subscription:", err);
        throw new Error("Failed to insert subscription");
    }
}

export async function checkEmailExists(email: string) {
    const result = await sql`
    SELECT 1 FROM subscriptions WHERE email = ${email};
  `;
    return result.rowCount && result.rowCount > 0;
}
