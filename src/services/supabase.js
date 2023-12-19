import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ysdjqtpccklciuygovxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZGpxdHBjY2tsY2l1eWdvdnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NjE1MDQsImV4cCI6MjAxODAzNzUwNH0.RmCg16hBsSSUYxQeK_3Kj9juJsHeNcK_vBLAla3d6lY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
