import { createClient } from "@supabase/supabase-js";

function constructorDB() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
}

export function initArticlesViewsDB() {
  return constructorDB().from("articles_views");
}
