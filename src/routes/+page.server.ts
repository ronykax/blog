export const load = ({ locals }) => {
  const getBlogs = async (amount: number) => {
    try {      
      const blogs = await locals.pb.collection("blogs").getList(1, amount);
      return blogs;
    } catch (error) {
      console.log(error);
    }
  }

  return getBlogs(15);
}