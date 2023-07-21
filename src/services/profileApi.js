import { supabase } from './supabase';
export async function getMemberDetails() {
  let { data: member, error } = await supabase
    .from('members')
    .select('*')
    .single();

  if (error) throw new Error('Could not fetch member details');

  return member;
}

export async function updateMemberDetails(details) {
  const { data: updatedDetails, error } = await supabase
    .from('members')
    .update(details)
    .eq('id', 1)
    .select();

  if (error) throw new Error('Could not updated your profile');

  const { error: profileError } = await supabase.auth.updateUser({
    data: { fullName: details.fullName },
  });

  if (profileError) throw new Error('Error while updating user profile');

  return { updatedDetails };
}
