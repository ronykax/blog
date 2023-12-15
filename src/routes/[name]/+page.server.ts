import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
  const getBlog = async () => {
    try {
      const blog = await locals.pb.collection("blogs").getFirstListItem(`name="${params.name}"`);
      return blog;
    } catch (error) {
      console.log(error);
      throw redirect(303, "/");
    }
  }

  return getBlog();
}