import { createClient } from '@supabase/supabase-js';

const projectURL = process.env.SUPABASE_PROJECT_URL;
const projectKey = process.env.SUPABASE_PROJECT_KEY;

export const supabase = createClient(projectURL, projectKey);
