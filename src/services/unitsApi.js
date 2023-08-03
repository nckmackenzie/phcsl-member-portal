import { PAGE_SIZE } from '../utils/constants';
import { supabase } from './supabase';

export async function getProjects() {
  const { data: units, error } = await supabase
    .from('units')
    .select('projectId,projects(projectName)')
    .eq('isReserved', false);

  if (error) throw new Error(error.message);

  return units;
}

export async function getReservedUnits({ filter, page }) {
  let query = supabase
    .from('units')
    .select('id,unitNo, projects(projectName),reservationFee', {
      count: 'exact',
    })
    .eq('isReserved', false);

  if (filter) query = query.eq(filter.field, filter.value);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error(error.message);

  return { data, count };
}

export async function reserveUnit(id) {
  const { data, error } = await supabase
    .from('units')
    .update({ isReserved: true })
    .eq('id', id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
