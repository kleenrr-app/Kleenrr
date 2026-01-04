import { supabase } from "@/lib/supabase";

await supabase.from("cleaners").insert({
  name,
  phone,
  plow_type: plowType,
  has_plow: plowType !== "none",
  available: false
});
