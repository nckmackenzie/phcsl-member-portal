import { supabase } from './supabase';

export async function createPayment(details) {
  const { data, error } = await supabase
    .from('payments')
    .insert([details])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
