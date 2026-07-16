import { supabase } from "./supabase";

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { error } = await supabase.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    message: data.message,
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
}
