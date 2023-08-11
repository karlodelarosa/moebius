import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qfhhyhqqmufpyhmjgmwy.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmaGh5aHFxbXVmcHlobWpnbXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1Nzc1MjgsImV4cCI6MjAwNzE1MzUyOH0.NcdmJShDuxW3Xnsp1zaxMXF5Q_aFjvjQAW4je517pX8'

export const db = createClient(supabaseUrl, supabaseKey)
