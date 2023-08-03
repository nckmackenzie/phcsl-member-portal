import { PAGE_SIZE } from '../utils/constants';
import { supabase } from './supabase';

export async function getPayments({ filter, page }) {
  let query = supabase
    .from('payments')
    .select(
      `
id,
receiptDate,
amount,
payMethod,
reference,
purposes(purpose)
`,
      { count: 'exact' }
    )
    .order('receiptDate', { ascending: false });

  if (filter) query = query.eq(filter.field, filter.value);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, count, error } = await query;

  if (error) throw new Error(error.message);

  return { data, count };
}

export async function createPayment(details) {
  const { data, error } = await supabase
    .from('payments')
    .insert([details])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
