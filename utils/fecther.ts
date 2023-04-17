import ky from 'ky';

const fetcher = async <T>(url: string) => {
  const res: T = await ky.get(`/api/${url}`).json();
  return res;
};

export default fetcher;
